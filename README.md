# Kitob Daftari

O‘z asaringizni muqovali kitoblar va sahifalar ko‘rinishida yozish uchun yengil web ilova. Tashqi kutubxona talab qilmaydi.

## Imkoniyatlar

- Javonda bir nechta kitob yaratish, muqovasiga nom, taglavha, muallif, rang va rasm qo‘shish
- Kitoblarni javonda nomi, taglavhasi yoki muallifi bo‘yicha qidirish
- Matn, kursor joyi va oxirgi ochilgan sahifani avtomatik saqlash
- Har bir sahifaga ixtiyoriy sarlavha qo‘shish; sarlavha sahifani ko‘chirganda saqlanadi va TXT/PDF eksportiga kiradi
- Sahifa va kitobdagi so‘zlar sonini ko‘rish
- Sahifalarni qo‘shish, tartiblash, o‘chirish va o‘chirilganini qaytarish
- Kitob ichidan matn qidirish
- Butun javonni JSON fayliga zaxiralash yoki zaxiradan tiklash
- Kitobni TXT fayl qilib yuklab olish yoki chop etish oynasidan PDF qilib saqlash
- Sahifa ovoz effektlarini yoqish yoki o‘chirish

## Ishga tushirish

Loyiha papkasida terminal ochib, statik serverni ishga tushiring:

```sh
python3 -m http.server 8000 --directory dist
```

Brauzerda `http://localhost:8000` manzilini oching.

## Yozuvlar qayerda saqlanadi?

Kitoblar va muqova rasmlari ishlatilayotgan brauzerning `localStorage` xotirasida saqlanadi. Ular boshqa brauzer yoki qurilmaga avtomatik ko‘chmaydi. Brauzer ma’lumotlarini tozalashdan oldin javonning **JSON zaxira nusxasi**ni yuklab, xavfsiz joyda saqlang. Zaxirani boshqa qurilmada **Zaxiradan tiklash** orqali ochish mumkin.

Xotira to‘lsa, yuqoridagi saqlash holati xato haqida xabar beradi. Yozuvlaringizni yo‘qotmaslik uchun javonning JSON zaxirasini yuklab oling.

## Klaviatura yorliqlari

- `Ctrl/Cmd + S` — qo‘lyozmani saqlash
- `Ctrl/Cmd + F` — ochiq kitob ichidan qidirish
- `Ctrl/Cmd + ←/→` — oldingi yoki keyingi sahifaga o‘tish (matn maydonidan tashqarida)

Saytning barcha interfeysi `dist/index.html` faylida joylashgan.
