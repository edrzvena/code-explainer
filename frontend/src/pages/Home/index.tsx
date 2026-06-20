import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ExplainerSection from './ExplainerSection';

const Home = () => {
  return (
    <main style={{ background: '#0F0F0F', minHeight: '100vh' }}>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExplainerSection />

      <footer style={{ textAlign: 'center', padding: '3rem 2rem', borderTop: '1px solid #1A1A1A' }}>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#444' }}>
          Built by Pedro Widyadharta · powered by Claude AI
        </p>
      </footer>
    </main>
  );
};

export default Home;
