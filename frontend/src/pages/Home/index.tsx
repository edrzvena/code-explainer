import ExplainerSection from './ExplainerSection';
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';

const Home = () => {
  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <Navbar />
      <ExplainerSection />
      <Footer />
    </main>
  );
};

export default Home;
