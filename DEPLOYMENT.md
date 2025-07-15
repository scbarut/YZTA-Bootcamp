# Deployment Rehberi

## Netlify Deployment

Proje şu anda Netlify'da deploy edilmiştir: https://mellow-alfajores-efb1c5.netlify.app

### Otomatik Deployment (Önerilen)

1. GitHub repository'nizi Netlify'a bağlayın
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Environment variables'ları Netlify dashboard'dan ekleyin

### Manuel Deployment

```bash
# Build alın
npm run build

# Netlify CLI ile deploy edin (opsiyonel)
npx netlify deploy --prod --dir=dist
```

## Diğer Hosting Seçenekleri

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase init hosting
npm run build
firebase deploy
```

## Environment Variables

Production'da kullanılacak environment variables:

```
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_API_BASE_URL=your_api_base_url
VITE_APP_ENV=production
```

## Build Optimizasyonu

Production build için optimizasyonlar:

1. **Bundle Analyzer**: Bundle boyutunu analiz etmek için
```bash
npm install --save-dev rollup-plugin-visualizer
```

2. **Compression**: Gzip sıkıştırma için
```bash
npm install --save-dev vite-plugin-compression
```

3. **PWA**: Progressive Web App özellikleri için
```bash
npm install --save-dev vite-plugin-pwa
```