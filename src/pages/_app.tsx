import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Podcastr</title>
                <link rel="shortcut icon" href="/favicon.png" />
                <link rel="apple-touch-icon" href="/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="description"
                    content="A simple project starter to work with TypeScript, React, NextJs
                and Style Components"
                />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}

export default App;
