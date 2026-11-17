import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Faq from "@/components/Faq";
import ProjectsList from "@/components/ProjectsList";
import { Hero } from "@/components/Sections";
export const metadata = { title: "Projects | leaflife" };
export default function Projects() {
  return (<><div className="relative"><Navbar /><Hero title="Our projects" crumb="Projects" /></div><ProjectsList /><Faq /><Footer /></>);
}
