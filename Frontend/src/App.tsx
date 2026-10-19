
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';

import { HeroSection } from './features/hero/HeroSection';
import { AboutSection } from './features/about/AboutSection';
import { ServicesSection } from './features/services/ServicesSection';
import { ProjectsSection } from './features/projects/ProjectsSection';
import { PartnersSection } from './features/partners/PartnersSection';
import { MetricsSection } from './features/metrics/MetricsSection';
import { ContactSection } from './features/contact/ContactSection';
import { TeamPreview } from './features/team/TeamPreview';
import { ScrollToTop } from './components/common/ScrollToTop';
import { ProjectsPage } from './pages/Projects/ProjectsPage';

// Full Team page
import { TeamSection } from './features/team/TeamSection';

// Homepage
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <PartnersSection />
      <MetricsSection />
      <TeamPreview />
      <ContactSection />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/team" element={<TeamSection />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
