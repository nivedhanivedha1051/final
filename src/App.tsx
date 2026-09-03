import TopNavbar from '@/components/TopNavbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Courses from '@/components/Courses';
import WhyTevexxo from '@/components/WhyTevexxo';
import Blog from '@/components/Blog';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="tevexxo-grid-bg min-h-screen text-white">
      <TopNavbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Products />
        <Courses />
        <WhyTevexxo />
        <Blog />
        <About />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
