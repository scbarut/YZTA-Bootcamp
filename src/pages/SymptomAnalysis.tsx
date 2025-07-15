import React, { useState } from 'react';
import { Brain, Search, Loader2, AlertCircle } from 'lucide-react';

const SymptomAnalysis = () => {
  const [medications, setMedications] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!medications.trim() || !symptoms.trim()) {
      alert('Lütfen hem ilaçlarınızı hem de semptomlarınızı giriniz.');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResult({
        isRelated: Math.random() > 0.3,
        confidence: Math.floor(Math.random() * 40) + 60,
        possibleCauses: [
          'Aspirin - Mide irritasyonu',
          'Paracetamol - Baş ağrısı (nadir)',
        ],
        recommendations: [
          'Doktorunuza danışın',
          'İlaç alım saatlerini gözden geçirin',
          'Yan etkileri takip edin'
        ]
      });
      setIsLoading(false);
    }, 2000);
  };

  const resetForm = () => {
    setMedications('');
    setSymptoms('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Brain className="h-12 w-12 text-green-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Semptom Analizi</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kullandığınız ilaçlar ile yaşadığınız semptomlar arasındaki olası bağlantıları analiz edin.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Kullandığınız İlaçlar
              </label>
              <textarea
                value={medications}
                onChange={(e) => setMedications(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                placeholder="Kullandığınız ilaçları virgülle ayırarak yazınız... (Örn: Aspirin, Paracetamol, Vitamin D)"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Yaşadığınız Semptomlar
              </label>
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                placeholder="Yaşadığınız semptomları detaylı bir şekilde yazınız... (Örn: Baş ağrısı, mide bulantısı, baş dönmesi)"
              />
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={handleAnalyze}
              disabled={isLoading}
              className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Analiz Ediliyor...
                </>
              ) : (
                <>
                  <Search className="h-5 w-5 mr-2" />
                  Analiz Et
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
            <div className="mt-8 space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Analiz Sonucu
                  </h3>
                  <span className="ml-auto text-sm text-gray-600">
                    Güvenilirlik: %{result.confidence}
                  </span>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-700">
                    {result.isRelated 
                      ? 'Semptomlarınız ile kullandığınız ilaçlar arasında olası bir bağlantı tespit edildi.'
                      : 'Semptomlarınız ile kullandığınız ilaçlar arasında belirgin bir bağlantı tespit edilmedi.'
                    }
                  </p>
                </div>

                {result.possibleCauses && result.possibleCauses.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Olası Nedenler:</h4>
                    <ul className="space-y-2">
                      {result.possibleCauses.map((cause: string, index: number) => (
                        <li key={index} className="text-gray-700 pl-4 border-l-2 border-orange-300">
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Öneriler:</h4>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="text-blue-800 text-sm">
                        • {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Önemli:</strong> Bu analiz yalnızca bilgilendirme amaçlıdır. 
                  Kesin teşhis ve tedavi için mutlaka bir sağlık uzmanına danışınız.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SymptomAnalysis;