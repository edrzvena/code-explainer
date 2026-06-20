import ExplainerSection from './ExplainerSection';
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';

const Home = () => {
  return (
    <main style={{ background: '#0F0F0F', minHeight: '100vh' }}>
      <Navbar />
      <ExplainerSection />
      <Footer />
    </main>
  );
};

export default Home;
