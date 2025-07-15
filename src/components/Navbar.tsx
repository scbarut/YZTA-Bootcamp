import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stethoscope, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Teşhis</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/etkilesim-kontrolu"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/etkilesim-kontrolu')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Etkileşim Kontrolü
            </Link>
            <Link
              to="/semptom-analizi"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/semptom-analizi')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Semptom Analizi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              aria-label="Menüyü aç/kapat"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold text-gray-900">Teşhis</span>
            </div>
            <button
              onClick={closeMenu}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 py-6">
            <div className="space-y-2 px-4">
              <Link
                to="/"
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive('/')
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Ana Sayfa
              </Link>
              <Link
                to="/etkilesim-kontrolu"
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive('/etkilesim-kontrolu')
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Etkileşim Kontrolü
              </Link>
              <Link
                to="/semptom-analizi"
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive('/semptom-analizi')
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Semptom Analizi
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              İlaç Yan Etki ve Etkileşim Teşhisi
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;