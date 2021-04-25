import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PlayerContextProvider } from '../contexts/PlayerContext';
import styles from '../styles/app.module.scss';
import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
    return (
        <PlayerContextProvider>
            <div className={styles.wrapper}>
                <main>
                    <Header />
                    <Component {...pageProps} />
                </main>
                <Player />
            </div>
        </PlayerContextProvider>
    );
}

export default App;
