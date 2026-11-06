# Kitob Daftari

O‘z asaringizni muqovali kitoblar va sahifalar ko‘rinishida yozish uchun yengil web ilova. Tashqi kutubxona talab qilmaydi.

## Imkoniyatlar

- Javonda bir nechta kitob yaratish, muqovasiga nom, taglavha, muallif, rang va rasm qo‘shish
- Kitoblarni javonda nomi, taglavhasi yoki muallifi bo‘yicha qidirish
- Kitoblarni javon tartibi, yaqinda ochilgani, nomi yoki so‘zlar soni bo‘yicha saralash; tanlov va ochilgan vaqt shu brauzerda saqlanadi
- Javondagi kitobdan sahifalari, muqovasi va yozilgan joyi bilan nusxa yaratish
- Matn, kursor joyi va oxirgi ochilgan sahifani avtomatik saqlash
- Yuqori panelda oxirgi muvaffaqiyatli saqlangan vaqtni ko‘rish
- Har bir sahifaga ixtiyoriy sarlavha qo‘shish; sarlavha sahifani ko‘chirganda saqlanadi va TXT/PDF eksportiga kiradi
- Sahifa va kitobdagi so‘zlar sonini, jumladan sarlavhalarni, ko‘rish
- Har bir kitob uchun ixtiyoriy so‘z maqsadini belgilab, bajarilishini kuzatish
- Javonda har bir kitobning so‘z maqsadiga erishish darajasini ko‘rish
- Yozuv matnini kattalashtirish yoki kichraytirish; o‘lcham shu brauzerda eslab qolinadi
- Qorong‘ida yozish uchun tungi sahifa rangini yoqish; tanlov shu brauzerda eslab qolinadi
- Sahifalarni qo‘shish, nusxalash, tartiblash, o‘chirish va o‘chirilganini qaytarish
- Kitob ichidan matn qidirish
- Butun javonni JSON fayliga zaxiralash yoki zaxiradan tiklash
- Ochiq kitobni alohida JSON fayl qilib zaxiralash va uni javonga qayta qo‘shish
- Kitobni TXT fayl qilib yuklab olish yoki chop etish oynasidan PDF qilib saqlash
- Kitobni sahifa sarlavhalari bilan Markdown (`.md`) fayl qilib yuklab olish yoki buferga nusxalash
- Sahifa ovoz effektlarini yoqish yoki o‘chirish
- Chalg‘imasdan yozish uchun diqqat rejimi; `Esc` bilan undan chiqish
- Birinchi internetli ochilishdan so‘ng ilovani oflayn ochish va yozishni davom ettirish
- Qo‘llab-quvvatlaydigan brauzerlarda avtomatik tozalanishdan himoya so‘rash

## Ishga tushirish

Loyiha papkasida terminal ochib, statik serverni ishga tushiring:

```sh
python3 -m http.server 8000 --directory dist
```

Brauzerda `http://localhost:8000` manzilini oching.

## Yozuvlar qayerda saqlanadi?

Kitoblar va muqova rasmlari ishlatilayotgan brauzerning `localStorage` xotirasida saqlanadi. Ular boshqa brauzer yoki qurilmaga avtomatik ko‘chmaydi. Brauzer ma’lumotlarini tozalashdan oldin javonning **JSON zaxira nusxasi**ni yuklab, xavfsiz joyda saqlang. Zaxirani boshqa qurilmada **Zaxiradan tiklash** orqali ochish mumkin. Kitob yozish oynasida brauzeringiz qo‘llasa, **Brauzer xotirasini himoyalash** tugmasi bilan avtomatik tozalanishdan saqlashni so‘rashingiz mumkin; bu zaxira nusxasini almashtirmaydi.

Ilovani oflayn ochish uchun saytni avval internet bor paytda oching. Yangi versiya internetli ochilganda oflayn nusxa ham yangilanadi. Oflayn yozuvlar shu brauzerda qoladi va boshqa qurilmaga avtomatik yuborilmaydi.

Xotira to‘lsa, yuqoridagi saqlash holati xato haqida xabar beradi. Yozuvlaringizni yo‘qotmaslik uchun javonning JSON zaxirasini yuklab oling.

## Klaviatura yorliqlari

- `Ctrl/Cmd + S` — qo‘lyozmani saqlash
- `Ctrl/Cmd + F` — ochiq kitob ichidan qidirish
- `Ctrl/Cmd + ←/→` — oldingi yoki keyingi sahifaga o‘tish (matn maydonidan tashqarida)
- `Ctrl/Cmd + Shift + F` — diqqat rejimini yoqish yoki o‘chirish
- `Esc` — diqqat rejimidan chiqish (qidiruv ochiq bo‘lsa, avval qidiruv yopiladi)

Sayt `dist/index.html` va oflayn ishlash uchun `dist/sw.js`, `dist/manifest.webmanifest`, `dist/icon.svg` fayllaridan foydalanadi.
