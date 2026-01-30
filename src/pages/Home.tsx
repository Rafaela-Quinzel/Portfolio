import Navbar from 'components/portfolio/Navbar';
import HeroSection from 'components/portfolio/HeroSection';
import AboutSection from 'components/portfolio/AboutSection';
import ProjectsSection from 'components/portfolio/ProjectsSection';
import Footer from 'components/portfolio/Footer';
// Removido fallback estático dos projetos

export default function Home() {

  return (
    <div className="bg-brand-bg min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}