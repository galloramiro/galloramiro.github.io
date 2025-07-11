import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Talks from './components/Talks';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="pt-16">
        <AboutMe />
        <Talks />
        <WorkExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;