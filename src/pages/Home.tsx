import Navbar from 'components/portfolio/Navbar';
import HeroSection from 'components/portfolio/HeroSection';
import AboutSection from 'components/portfolio/AboutSection';
import ProjectsSection from 'components/portfolio/ProjectsSection';
import Footer from 'components/portfolio/Footer';
import { projects } from 'data/projects';

export default function Home() {

  return (
    <div className="bg-brand-bg min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection projects={projects} githubUser="Rafaela-Quinzel" />
      <Footer />
    </div>
  );
}