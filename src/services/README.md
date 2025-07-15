# Services Klasörü

Bu klasör, API çağrıları ve dış servis entegrasyonları için hazırlanmıştır.

## LLM Entegrasyonu İçin Önerilen Dosyalar

### 1. drugInteractionAPI.ts
İlaç etkileşim kontrolü için API çağrıları:

```typescript
// Örnek yapı:
export const checkDrugInteraction = async (drug1: string, drug2: string) => {
  // LLM API çağrısı
  // Etkileşim analizi
  // Sonuç döndürme
};
```

### 2. symptomAnalysisAPI.ts
Semptom analizi için API çağrıları:

```typescript
// Örnek yapı:
export const analyzeSymptoms = async (medications: string[], symptoms: string[]) => {
  // LLM API çağrısı
  // Semptom-ilaç ilişki analizi
  // Sonuç döndürme
};
```

### 3. types.ts
API response tiplerini tanımlamak için:

```typescript
// Örnek tipler:
export interface DrugInteractionResult {
  hasInteraction: boolean;
  severity: 'low' | 'medium' | 'high';
  description: string;
  recommendation: string;
}

export interface SymptomAnalysisResult {
  isRelated: boolean;
  confidence: number;
  possibleCauses: string[];
  recommendations: string[];
}
```

## Kullanım

Bu dosyalar oluşturulduktan sonra, sayfa bileşenlerinde import edilerek kullanılabilir:

```typescript
import { checkDrugInteraction } from '../services/drugInteractionAPI';
import { analyzeSymptoms } from '../services/symptomAnalysisAPI';
```