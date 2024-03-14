import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import Banner from "@/components/Banner";
import AboutSection from "@/components/About";
import Courses from "@/components/courses";
import AboutCompany from "@/components/AboutCompany";
import Programmer from "@/components/Programmer";
import SayStudentSection from "@/components/SayStudent";

export default function IndexPage() {
	return (
		<DefaultLayout>

				<Banner/>
				<AboutSection/>
				<Courses/>
				<AboutCompany />
				<Programmer />
				<SayStudentSection/>
		</DefaultLayout>
	);
}
