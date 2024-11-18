// Global wrapper
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <Component {...pageProps}>
            <html class="h-full bg-white">
                <body class="h-full">
                </body>
            </html>
        </Component>
    );
}

export default MyApp;
