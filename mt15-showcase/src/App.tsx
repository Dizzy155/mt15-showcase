import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { VariantProvider } from './context/VariantContext';
import { bikeVariants } from './data/variants';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PerformanceSection from './components/PerformanceSection';
import VVASection from './components/VVASection';
import EngineSection from './components/EngineSection';
import ChassisSection from './components/ChassisSection';
import DesignSection from './components/DesignSection';
import HeadlightSection from './components/HeadlightSection';
import GallerySection from './components/GallerySection';
import SpecificationSection from './components/SpecificationSection';
import Footer from './components/Footer';

export default function App() {
  // Real asset-driven loading — the screen lasts only as long as the
  // hero renders take to fetch, no artificial delay.
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const urls = bikeVariants.map((v) => v.images.hero);
    let loaded = 0;
    if (urls.length === 0) {
      setReady(true);
      return;
    }
    urls.forEach((u) => {
      const img = new Image();
      const done = () => {
        loaded += 1;
        setProgress((loaded / urls.length) * 100);
        if (loaded === urls.length) setReady(true);
      };
      img.onload = done;
      img.onerror = done;
      img.src = u;
    });
  }, []);

  return (
    <VariantProvider>
      <CustomCursor />
      <AnimatePresence>{!ready && <LoadingScreen progress={progress} />}</AnimatePresence>
      <Navbar />
      <main>
        <HeroSection />
        <PerformanceSection />
        <VVASection />
        <EngineSection />
        <ChassisSection />
        <DesignSection />
        <HeadlightSection />
        <GallerySection />
        <SpecificationSection />
      </main>
      <Footer />
      {/*
        Sound section intentionally omitted: no properly licensed engine audio
        asset is bundled. Per the brief, the player is hidden rather than
        shipping fake or unlicensed audio. Drop a licensed file into
        /public/assets/audio/ and wire it into a SoundSection here.
      */}
    </VariantProvider>
  );
}
