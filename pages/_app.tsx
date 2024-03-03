import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import {useEffect , useState} from "react";
import {Router, useRouter} from 'next/router';
import Loader from "@/components/Global/Loader/Loader";
import "/public/kalame/stylesheet.scss";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading , setIsLoading ] = useState(false);

	useEffect(() => {
		Router.events.on("routeChangeStart", (url)=>{
			setIsLoading(true)
		});

		Router.events.on("routeChangeComplete", (url)=>{
			setIsLoading(false)
		});

		Router.events.on("routeChangeError", (url) =>{
			setIsLoading(false)
		});

	}, [Router])

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider>
				{isLoading && <Loader/>}
				<Component {...pageProps} />
			</NextThemesProvider>
		</NextUIProvider>
	);
}

export const fonts = {
	sans: fontSans.style.fontFamily,
	mono: fontMono.style.fontFamily,
};
