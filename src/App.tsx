import Header from './components/Header';
import Hero from './components/Hero';
import FeatureStrip from './components/FeatureStrip';
import FeatureGrid from './components/FeatureGrid';
import ScreenshotShowcase from './components/ScreenshotShowcase';
import TechnologyGrid from './components/TechnologyGrid';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureStrip />
        <FeatureGrid />
        <ScreenshotShowcase />
        <TechnologyGrid />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
