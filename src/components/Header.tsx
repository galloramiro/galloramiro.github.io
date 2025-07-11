import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { generatePDF } from '../utils/pdfGenerator';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'talks', label: 'Talks' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-800/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-green-500">
            Ramiro Gallo
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-200 hover:text-green-500 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              </li>
            ))}
            </ul>
            <button
              onClick={generatePDF}
              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              <Download size={16} className="mr-2" />
              Download CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-200 hover:text-green-500 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-700">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 text-gray-200 hover:text-green-500 hover:bg-gray-700 rounded-md transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-600">
                <button
                  onClick={generatePDF}
                  className="flex items-center w-full px-4 py-2 text-green-400 hover:text-green-300 hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  <Download size={16} className="mr-2" />
                  Download CV
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
