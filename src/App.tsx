import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TopNavbar from '@/components/TopNavbar';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Products from '@/components/Products';
import WhyTevexxo from '@/components/WhyTevexxo';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorEffect from '@/components/CursorEffect';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNavbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}

function Home() {
  return (
    <PageShell>
      <Hero />
      <Courses />
      <About />
      <Programs />
    </PageShell>
  );
}

function App() {
  return (
    <div className="tevexxo-grid-bg min-h-screen text-white">
      <CursorEffect />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects"
          element={
            <PageShell>
              <Projects />
            </PageShell>
          }
        />
        <Route
          path="/services"
          element={
            <PageShell>
              <Services />
            </PageShell>
          }
        />
        <Route
          path="/products"
          element={
            <PageShell>
              <Products />
            </PageShell>
          }
        />
        <Route
          path="/why-tevexxo"
          element={
            <PageShell>
              <WhyTevexxo />
            </PageShell>
          }
        />
        <Route
          path="/blog"
          element={
            <PageShell>
              <Blog />
            </PageShell>
          }
        />
        <Route
          path="/contact"
          element={
            <PageShell>
              <Contact />
            </PageShell>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
