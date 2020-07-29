/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Custom App para cargar SASS
*/

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress     from 'nprogress';
import * as ga       from '../helpers/ga';
import '../sass/style.scss';    

const App = ({ Component, pageProps }) => {

    const router = useRouter();

    /**
     * @description Escuchar los eventos del Router para controlar el Loader
    */
    useEffect(() => {
  
        router.events.on('routeChangeStart', () => {
            NProgress.start();
        });

        router.events.on('routeChangeComplete', (url) => {
            NProgress.done();
            ga.pageview(url);
        });
          
        return () => {
            router.events.off('routeChangeStart', () => {
                NProgress.done();
            });
        }

    }, []);

    return <Component { ...pageProps } />

};
    
export default App;