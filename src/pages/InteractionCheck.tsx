import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';

const InteractionCheck = () => {
  const [drug1, setDrug1] = useState('');
  const [drug2, setDrug2] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleCheck = async () => {
    if (!drug1.trim() || !drug2.trim()) {
      alert('Lütfen her iki ilaç adını da giriniz.');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResult({
        hasInteraction: Math.random() > 0.5,
        severity: Math.random() > 0.5 ? 'high' : 'low',
        description: 'Bu ilaçlar arasında orta düzeyde bir etkileşim tespit edilmiştir.',
        recommendation: 'Doktorunuza danışmanız önerilir.'
      });
      setIsLoading(false);
    }, 2000);
  };

  const resetForm = () => {
    setDrug1('');
    setDrug2('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Etkileşim Kontrolü</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            İki farklı ilaç arasındaki olası etkileşimleri kontrol edin ve güvenli kullanım için öneriler alın.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Birinci İlaç
              </label>
              <input
                type="text"
                value={drug1}
                onChange={(e) => setDrug1(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="İlaç adını giriniz..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                İkinci İlaç
              </label>
              <input
                type="text"
                value={drug2}
                onChange={(e) => setDrug2(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="İlaç adını giriniz..."
              />
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={handleCheck}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Kontrol Ediliyor...
                </>
              ) : (
                <>
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Kontrol Et
                </>
              )}
            </button>
            <button
              onClick={resetForm}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Temizle
            </button>
          </div>

          {result && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-4">
                {result.hasInteraction ? (
                  <AlertTriangle className="h-6 w-6 text-red-500 mr-3" />
                ) : (
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                )}
                <h3 className="text-lg font-semibold text-gray-900">
                  {result.hasInteraction ? 'Etkileşim Tespit Edildi' : 'Etkileşim Bulunamadı'}
                </h3>
              </div>
              <p className="text-gray-700 mb-4">{result.description}</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">
                  <strong>Öneri:</strong> {result.recommendation}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractionCheck;