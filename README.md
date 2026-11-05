# Kitob Daftari

Yozuvlaringizni kitob ko‘rinishidagi sahifalarda yozish uchun bitta faylli, statik web ilova.

## Imkoniyatlar

- Bir nechta kitob yaratish, muqovalarini nom, taglavha, muallif, rang va rasm bilan tahrirlash
- Kitob va sahifalarni tasdiqlash orqali o‘chirish
- Matn, kursor joyi va joriy sahifani avtomatik saqlash
- Javonni JSON fayliga zaxiralash va shu fayldan tiklash
- Varaqlash ovozini yoqish yoki o‘chirish
- Qo‘lyozmani TXT fayl qilib yuklab olish

Kitoblar va muqova rasmlari brauzerning localStorage xotirasida saqlanadi. Boshqa brauzer yoki qurilmaga avtomatik sinxronlanmaydi. JSON zaxira nusxasini vaqti-vaqti bilan yuklab olish tavsiya etiladi.

## Ishga tushirish

```sh
python3 -m http.server 8000
```

So‘ng `http://localhost:8000` manzilini brauzerda oching. Ilova tashqi kutubxona talab qilmaydi.
