import React from 'react';
import { ChevronDown, Shield, Search, AlertTriangle, Brain } from 'lucide-react';

const HomePage = () => {
  const scrollToInfo = () => {
    const infoSection = document.getElementById('info-section');
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pills Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-8 h-8 bg-blue-500 rounded-full"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-green-500 rounded-full"></div>
          <div className="absolute top-60 left-1/4 w-10 h-10 bg-red-500 rounded-full"></div>
          <div className="absolute bottom-40 right-1/4 w-12 h-12 bg-yellow-500 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-7 h-7 bg-purple-500 rounded-full"></div>
          <div className="absolute top-32 right-1/3 w-5 h-5 bg-pink-500 rounded-full"></div>
          <div className="absolute bottom-60 left-1/3 w-9 h-9 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              İlaç<span className="text-blue-600">Asistanı</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
              Yan Etkileri Bil, Sağlıklı Kal
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
              İlaçlar arasındaki etkileşimleri ve yan etkileri yapay zeka ile analiz edin.
            </p>
            <button
              onClick={scrollToInfo}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Kullanmaya Başla
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-600" />
        </div>
      </div>

      {/* Info Section */}
      <div id="info-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* İlaç Etkileşim Kartı */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">İlaç Etkileşim</h3>
                  <p className="text-blue-600 font-semibold">Etkileşim Kontrolü</p>
                </div>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Kullanıcıların girdiği birden fazla ilaç arasındaki olası tehlikeli etkileşimler, 
                yapay zeka destekli sistemimiz tarafından anında analiz edilir. Böylece ilaçların 
                yan etkileri veya olumsuz kombinasyonları önceden tespit edilip, kullanıcıya 
                uyarılar gönderilir.
              </p>
              <a
                href="/etkilesim-kontrolu"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
              >
                <AlertTriangle className="h-5 w-5 mr-2" />
                Kontrol Et
              </a>
            </div>

            {/* Semptom Analizi Kartı */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-full mr-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Semptom Analizi</h3>
                  <p className="text-green-600 font-semibold">Semptom Analizi</p>
                </div>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Kullanıcılar mevcut sağlık şikayetlerini yazdığında, aldıkları ilaçlarla bu 
                şikayetler arasındaki olası bağlantılar yapay zeka tarafından kapsamlı şekilde 
                değerlendirilir. Böylece, yan etkiler veya ilaç kaynaklı sorunlar erken fark edilir.
              </p>
              <a
                href="/semptom-analizi"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
              >
                <Search className="h-5 w-5 mr-2" />
                Analiz Et
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;