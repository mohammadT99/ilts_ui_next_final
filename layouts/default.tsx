import NavbarSite from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import Footer from "@/components/Global/Header/Footer";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {



	return (
		<div className="">
			<Head />
			<NavbarSite />
			<ToastContainer
				position="bottom-right"
				autoClose={6000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={true}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				// className={'bg-red'}
				theme="light"
			/>
			<main className={''}>
				{children}
			</main>
			{/*<Footer />*/}
		</div>
	);
}
