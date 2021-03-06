import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { usePlayer } from '../../contexts/PlayerContext';
import { api } from '../../services/api';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

import styles from './episode.module.scss';

type Episode = {
    id: string;
    title: string;
    members: string;
    thumbnail: string;
    published_at: string;
    description: string;
    durationAsString: string;
    duration: number;
    url: string;
    publishedAt: string;
};

type EpisodeProps = {
    episode: Episode;
};

export default function Episode({ episode }: EpisodeProps) {
    const { play } = usePlayer();
    return (
        <div className={styles.episodeWrapper}>
            <div className={styles.episode}>
                <Head>
                    <title>{episode.title}</title>
                </Head>
                <div className={styles.thumbnailContainer}>
                    <Link href="/">
                        <button type="button">
                            <img src="/arrow-left.svg" alt="left" />
                        </button>
                    </Link>
                    <Image width={700} height={160} src={episode.thumbnail} objectFit="cover" />
                    <button type="button" onClick={() => play(episode)}>
                        <img src="/play.svg" alt="play" />
                    </button>
                </div>

                <header>
                    <h1>{episode.title}</h1>
                    <span>{episode.members}</span>
                    <span>{episode.publishedAt}</span>
                    <span>{episode.durationAsString}</span>
                </header>
                <div className={styles.description} dangerouslySetInnerHTML={{ __html: episode.description }} />
            </div>
        </div>
    );
}

interface Params extends ParsedUrlQuery {
    slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await api.get('episodes', {
        params: {
            _limit: 2,
            _sort: 'published_at',
            _order: 'desc'
        }
    });

    const paths = data.map((episode: Episode) => {
        return {
            params: {
                slug: episode.id
            }
        };
    });

    return {
        paths,
        fallback: 'blocking'
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params as Params;
    const { data } = await api.get(`/episodes/${slug}`);

    const episode = {
        id: data.id,
        title: data.title,
        thumbnail: data.thumbnail,
        members: data.members,
        publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
        duration: data.file.duration,
        durationAsString: convertDurationToTimeString(data.file.duration),
        description: data.description,
        url: data.file.url
    };

    return {
        props: {
            episode
        },
        revalidate: 60 * 60 * 24 * 7 // 7 days
    };
};
