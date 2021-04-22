export type EpisodeProps = {
    id: string;
    title: string;
    members: string;
    thumbnail: string;
    published_at: string;
    file: {
        duration: number;
        url: string;
    };
};
export type Episodes = {
    id: string;
    title: string;
    members: string;
    thumbnail: string;
    published_at: string;
    durationAsString: string;
    duration: number;
    url: string;
    publishedAt: string;
};

export type HomeProps = {
    latestEpisodes: Episodes[];
    allEpisodes: Episodes[];
};
