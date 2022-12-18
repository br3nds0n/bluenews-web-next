import type {AppProps} from "next/app";
import {SessionProvider as NextAuthprovicer} from "next-auth/react";
import {Header} from "../components/Header";

import '../styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <NextAuthprovicer session={pageProps.session}>
            <Header />
            <Component {...pageProps} />
        </NextAuthprovicer>
    )
}
