# 🧠 İlaçAsistanı – Yapay Zeka Destekli İlaç Etkileşim ve Semptom Analizi Uygulaması

## 🚀 Sprint 1 – Temel Arayüz ve API Mock Entegrasyonu

---

### 📅 Sprint Bilgileri

- **Sprint Tarihi**: 20 Haziran 2025 – 7 Temmuz 2025  
- **Sprint Adı**: Temel Arayüz ve Gemini API Mock Entegrasyonu  
- **Sprint Hedefi**:  
  Kullanıcının ilaç ve semptom bilgilerini girebildiği, yönlendirici ve kullanıcı dostu bir ön yüzün tasarlanması. Yapay zeka sistemine gönderilecek veri formatının oluşturulması ve Gemini API ile entegrasyon için mock altyapının hazırlanması.

---

### 🎯 Vizyon & Strateji

Bu proje, ilaç kullanıcılarının potansiyel etkileşim ve yan etkileri önceden fark etmelerini sağlamak amacıyla geliştirilmektedir. Kullanıcının semptomunu ve kullandığı ilaçları analiz eden bir yapay zeka ile sağlık güvenliğini artırmak hedeflenmektedir.

- **Stratejik Hedefler**:  
  - Doğal dil işleme tabanlı geri bildirim sağlayan bir sistem  
  - Günlük kullanıcıların kolayca erişebileceği sade ve işlevsel bir arayüz  
  - AI destekli semptom analiziyle olası ilaç kaynaklı riskleri azaltmak  

---

### 👥 Takım ve Roller

| İsim                | Rol                |
|---------------------|--------------------|
| Zeynep Sena Koç      | Scrum Master       |
| Umut Tuna            | FrontEnd Developer |
| Sadık Can Barut      | Developer          |
| Şevval Savrunlu      | Developer          |
| Fatıma Zeyneb Kotan  | Developer          |

> Tüm takım Scrum metodolojisine uygun şekilde çalışmış, haftalık stand-up'lar, sprint planlama etkinlikleri gerçekleştirmiştir.

---

### 📦 Sprint 1 Backlog (User Story'ler)


| ID   | Görev / User Story                                | Öncelik | Tahmini Puan (Story Point) | Durum           | Notlar                                                 |
|------|---------------------------------------------------|---------|-----------------------------|------------------|--------------------------------------------------------|
| US01 | Giriş ekranı ve proje tanıtımı arayüzü            | Yüksek  | 3 SP                        | ✅ Tamamlandı    |                                                        |
| US02 | İlaç girişi alanı ve dinamik form yapısı          | Yüksek  | 5 SP                        | ✅ Tamamlandı    |                                                        |
| US03 | Semptom girişi alanı ve veri işleme hazırlığı     | Orta    | 3 SP                        | ✅ Tamamlandı    |                                                        |
| US04 | UI renk paleti, yazı tipi ve tasarım dili rehberi | Orta    | 2 SP                        | ✅ Tamamlandı    |                                                        |
| US05 | Gemini API mock veri sistemi kurulumu             | Yüksek  | 5 SP                        | 🟡 Devam Ediyor | Mock veri denendi, gerçek API entegrasyonu planlanıyor |
| US06 | Kullanıcı veri girişinin backend’e gönderilmesi   | Yüksek  | 5 SP                        | 🟠 Planlandı     | Backend geliştirme sonrası                             |
| US07 | Yapay zeka sonuçlarının frontend’de gösterilmesi  | Yüksek  | 5 SP                        | 🟠 Planlandı     | API entegrasyonu sonrası                               |
| US08 | Testlerin yazılması ve QA                         | Orta    | 3 SP                        | 🟠 Planlandı     | Sprint 2’ye bırakıldı                                  |

---

## 🔄 Sprint Retrospective

- **İyi Gidenler**:
  - Ekip içi iletişim güçlüydü, tüm görevler zamanında tamamlandı.
  - Tasarım uyumluluğu ve renk bütünlüğü başarılı oldu.
- **Geliştirilecekler**:
  - Backend tarafında gerçek API entegrasyonu eksik kaldı.
  - UI testleri için otomasyon eklenmesi sonraki sprintte planlanmalı.
 
---

### 🔁 Sprint Review

- ✅ **Tamamlanan Görevler**:
  - Giriş Sayfası: Açıklayıcı metin ve yönlendirici bir başlıkla sade ve profesyonel tasarım oluşturuldu.
  - İlaç Giriş Formu: Kullanıcılar, dilediği kadar ilaç ekleyebiliyor; her alan dinamik ve silinebilir yapıdadır.
  - Semptom Alanı: Serbest metin girişine olanak tanıyan kullanıcı dostu input alanı hazırlandı.
  - Stil Rehberi: Renk paleti (mavi tonları), yazı tipleri, buton stilleri ve boşluk kuralları netleştirildi.
  - Mock API: Yapay zekadan dönecek veriler örnek olarak JSON formatında simüle edildi.
  - Ana Sayfa Tasarımı: Hero bölümü, etkileşim kontrolü ve semptom analizi tanıtım blokları eklendi.
  - Navigasyon: Navbar ve ilgili sayfalara yönlendirmeler tamamlandı.
  - Buton Yönlendirmeleri: Ana sayfadaki "Kontrol Et" ve "Analiz Et" butonları ilgili sayfalara düzgün yönlendirildi.

- 🔍 **Eğitmen Geri Bildirimi**:  
  - Sprint board'da user story'lere puanlama yapılması gerektiği belirtildi.  
  - Daily Scrum toplantılarının ekran görüntüleri ve düzenli takibi eksikti.  
  - Sprint Review ve Retrospective bölümlerinin yazılı olarak belirtilmesi istendi.

- ✅ **Yapılan Güncellemeler**:  
  - Tüm user story'lere puanlama eklendi.  
  - Günlük Scrum toplantısına ait ekran görüntüsü eklendi.
  - Diğer görseller henüz paylaşılmadığı için raporda sadece 1 adet görsel kullanılmıştır.
  - Review ve Retrospective bölümleri detaylı şekilde rapora eklendi.

- 📌 **Sonuç**:  
  -Sprint hedefleri büyük ölçüde gerçekleştirildi. Eğitmen geri bildirimi doğrultusunda eksikler tamamlanarak sprint raporu güncellendi ve değerlendirme kriterlerine uygun hale getirildi.


### 🖥️ Arayüz Görselleri

![Ekran görüntüsü 2025-07-04 213026](https://github.com/user-attachments/assets/9176f8f7-781a-4db2-a271-37d9b41f55fa)
![Ekran görüntüsü 2025-07-05 150903](https://github.com/user-attachments/assets/440b376f-4862-4127-9c0b-2352b0114ce2)
![Ekran görüntüsü 2025-07-05 152055](https://github.com/user-attachments/assets/0b3317ea-aa81-487a-afa4-5190e09745bb)
![Ekran görüntüsü 2025-07-05 152101](https://github.com/user-attachments/assets/c03eb4c0-9b71-4405-a6f4-cc49d381e9c7)

---

### 📋 Trello Board

Aşağıda proje yönetiminde kullandığımız Trello board ekran görüntüsünü görebilirsiniz:

![Ekran görüntüsü 2025-07-06 212006](https://github.com/user-attachments/assets/d69861e7-76d0-4e43-afdd-868ee5aa13f8)

---

## 📸 Daily Scrum Ekran Görüntüleri

### Google Meet Daily (05 Temmuz 2025)

![aa](https://github.com/user-attachments/assets/38894400-4778-465b-b951-3490e627499f)

---

## 💬 Fikir Geliştirme Süreci

İlk fikirlerin paylaşıldığı ve proje kararının alındığı WhatsApp ekran görüntüsü:

![bb](https://github.com/user-attachments/assets/c760117f-0555-4828-98d9-2bb309c6a4f9)

---

### 📌 Notlar

- Projede Tailwind CSS kullanılmamış, sadece React ve modüler CSS ile sade ve profesyonel bir ön yüz tasarımı yapılmıştır.
- Backend API ve gerçek yapay zeka entegrasyonu ilerleyen sprintlerde tamamlanacaktır.
- Kullanıcı deneyimi ve erişilebilirlik sürekli geliştirilmektedir.
