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


| ID   | Görev / User Story                                | Öncelik | Durum           | Notlar                                                 |
| ---- | ------------------------------------------------- |-------- | ----------------|--------------------------------------------------------|
| US01 | Giriş ekranı ve proje tanıtımı arayüzü            | Yüksek  | ✅ Tamamlandı   |                                                        |
| US02 | İlaç girişi alanı ve dinamik form yapısı          | Yüksek  | ✅ Tamamlandı   |                                                        |
| US03 | Semptom girişi alanı ve veri işleme hazırlığı     | Orta    | ✅ Tamamlandı   |                                                        |
| US04 | UI renk paleti, yazı tipi ve tasarım dili rehberi | Orta    | ✅ Tamamlandı   |                                                        |
| US05 | Gemini API mock veri sistemi kurulumu             | Yüksek  | 🟡 Devam Ediyor | Mock veri denendi, gerçek API entegrasyonu planlanıyor |
| US06 | Kullanıcı veri girişinin backend’e gönderilmesi   | Yüksek  | 🟠 Planlandı    | Backend geliştirme sonrası                             |
| US07 | Yapay zeka sonuçlarının frontend’de gösterilmesi  | Yüksek  | 🟠 Planlandı    | API entegrasyonu sonrası                               |
| US08 | Testlerin yazılması ve QA                         | Orta    | 🟠 Planlandı    | Sprint 2’ye bırakıldı                                  |


---

### ✅ Tamamlanan Görevler

- **Giriş Sayfası**: Açıklayıcı metin ve yönlendirici bir başlıkla sade ve profesyonel tasarım oluşturuldu.
- **İlaç Giriş Formu**: Kullanıcılar, dilediği kadar ilaç ekleyebiliyor; her alan dinamik ve silinebilir yapıdadır.
- **Semptom Alanı**: Serbest metin girişine olanak tanıyan kullanıcı dostu input alanı hazırlandı.
- **Stil Rehberi**: Renk paleti (mavi tonları), yazı tipleri, buton stilleri ve boşluk kuralları netleştirildi.
- **Mock API**: Yapay zekadan dönecek veriler örnek olarak JSON formatında simüle edildi.
- **Ana Sayfa Tasarımı**: Hero bölümü, etkileşim kontrolü ve semptom analizi tanıtım blokları eklendi.
- **Navigasyon**: Navbar ve ilgili sayfalara yönlendirmeler tamamlandı.
- **Buton Yönlendirmeleri**: Ana sayfadaki "Kontrol Et" ve "Analiz Et" butonları ilgili sayfalara düzgün yönlendirildi.

---

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

### 📌 Notlar

- Projede Tailwind CSS kullanılmamış, sadece React ve modüler CSS ile sade ve profesyonel bir ön yüz tasarımı yapılmıştır.
- Backend API ve gerçek yapay zeka entegrasyonu ilerleyen sprintlerde tamamlanacaktır.
- Kullanıcı deneyimi ve erişilebilirlik sürekli geliştirilmektedir.
