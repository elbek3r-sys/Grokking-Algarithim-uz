# Kitob Daftari

O‘z asaringizni muqovali kitoblar va sahifalar ko‘rinishida yozish uchun yengil web ilova. Tashqi kutubxona talab qilmaydi.

## Imkoniyatlar

- Javonda bir nechta kitob yaratish, muqovasiga nom, taglavha, muallif, rang va rasm qo‘shish
- Muqova tahririda saqlanmagan o‘zgarishlar bo‘lsa, muharrirni yopishdan oldin ogohlantirish olish
- Kitoblarni javonda nomi, taglavhasi yoki muallifi bo‘yicha qidirish
- Kitoblarni javon tartibi, yaqinda ochilgani, yaqinda tahrirlangani, nomi yoki so‘zlar soni bo‘yicha saralash; tanlov va ochilgan vaqt shu brauzerda saqlanadi
- Javondagi kitobdan sahifalari, muqovasi va yozilgan joyi bilan nusxa yaratish
- Matn, kursor joyi va oxirgi ochilgan sahifani avtomatik saqlash
- Bir kitob bir nechta tabda bir vaqtda tahrirlanganida, yozuvlar to‘qnashuvini alohida nusxa qilib saqlashga urinish; saqlash xatosida zaxira yo‘lini ko‘rsatish
- Ochiq kitob nomi va sahifa raqamini brauzer tabida ko‘rish
- Yuqori panelda oxirgi muvaffaqiyatli saqlangan vaqtni, sahifa yangilangandan keyin ham, ko‘rish
- Har bir sahifaga ixtiyoriy sarlavha qo‘shish; sarlavha sahifani ko‘chirganda saqlanadi va TXT/PDF eksportiga kiradi
- Sahifa va kitobdagi so‘zlar sonini, jumladan sarlavhalarni, ko‘rish
- Har bir kitob uchun ixtiyoriy so‘z maqsadini belgilab, bajarilishini kuzatish
- Javonda har bir kitobning so‘z maqsadiga erishish darajasini ko‘rish
- Yozish paytida kitobning so‘z maqsadiga ilk bor yetilganda xabar olish
- Yozuv matnini kattalashtirish yoki kichraytirish; o‘lcham shu brauzerda eslab qolinadi
- Qorong‘ida yozish uchun tungi sahifa rangini yoqish; tanlov shu brauzerda eslab qolinadi
- Sahifalarni qo‘shish, nusxalash, tartiblash, o‘chirish va o‘chirilganini qaytarish
- O‘chirilgan kitoblarni alohida bo‘limdan tiklash yoki tasdiqlab butunlay o‘chirish; bu kitoblar javonning JSON zaxira nusxasiga ham kiradi
- O‘chirilganlar ro‘yxatidagi amallarning ekranni o‘qib beruvchi dasturlar uchun kitob nomi bilan aniq aytilishi
- Kitob ichidan matn qidirish
- Butun javonni JSON fayliga zaxiralash yoki zaxiradan tiklash; tiklash yakunida qo‘shilgan o‘chirilgan kitoblar sonini ham ko‘rish
- Zaxira faylidagi sahifalar yoki o‘chirilgan kitoblar qismi buzilgan bo‘lsa, tiklashni to‘xtatish va joriy javonni saqlab qolish
- Ochiq kitobni alohida JSON fayl qilib zaxiralash va uni javonga qayta qo‘shish
- Zaxira tiklash oynasida almashtirish tugmasi zaxiradagi kitoblar soniga mos ravishda nomlanadi
- Kitobni TXT fayl qilib yuklab olish yoki chop etish oynasidan PDF qilib saqlash
- Kitobni sahifa sarlavhalari bilan Markdown (`.md`) fayl qilib yuklab olish yoki buferga nusxalash
- Sahifa ovoz effektlarini yoqish yoki o‘chirish
- Tizimdagi harakatni kamaytirish sozlamasi yoqilganda animatsiyalarni kamaytirish
- Chalg‘imasdan yozish uchun diqqat rejimi; `Esc` bilan undan chiqish
- Telefonda yozish oynasida klaviatura yorliqlarini ko‘rish
- Birinchi internetli ochilishdan so‘ng ilovani oflayn ochish va yozishni davom ettirish
- Brauzerdan ilovani qurilmaga o‘rnatish yoki o‘rnatish bo‘yicha yo‘riqnomani ko‘rish
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

Xotira to‘lsa yoki saqlash xatosi yuz bersa, ogohlantirish ichidagi **JSON zaxiralash** tugmasi bilan javoningizni faylga yuklab oling.

## Klaviatura yorliqlari

- `Ctrl/Cmd + S` — qo‘lyozmani saqlash
- `Ctrl/Cmd + F` — ochiq kitob ichidan qidirish
- `Ctrl/Cmd + ←/→` — oldingi yoki keyingi sahifaga o‘tish (matn maydonidan tashqarida)
- `Ctrl/Cmd + Home/End` — birinchi yoki oxirgi sahifaga o‘tish (matn maydonidan tashqarida)
- `Ctrl/Cmd + Shift + F` — diqqat rejimini yoqish yoki o‘chirish
- `Esc` — diqqat rejimidan chiqish (qidiruv ochiq bo‘lsa, avval qidiruv yopiladi)

Sayt `dist/index.html` va oflayn ishlash uchun `dist/sw.js`, `dist/manifest.webmanifest`, `dist/icon.svg`, `dist/icon-192.png`, `dist/icon-512.png` hamda `dist/apple-touch-icon.png` fayllaridan foydalanadi.
