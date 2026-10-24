# تنخواه‌یار

Vue 3 + Vite + Tailwind CSS

## اجرا

```
npm install
npm run dev
```

## ساخت نسخه نهایی

```
npm run build
npm run preview
```

## ساختار

- `src/App.vue` صفحه داشبورد و چیدمان اصلی
- `src/composables/useTankhah.js` وضعیت مشترک: مبلغ اولیه، فاکتورها، موجودی و درصد مصرف
- `src/data/categories.js` گزینه‌های سلکتور توضیحات (پذیرایی، لوازم اداری و ...)
- `src/style.css` کلاس‌های تکراری (card, btn-primary, chip, ...) یک‌جا
- `src/components/AppSidebar.vue` سایدبار و دکمه همبرگری
- `src/components/DisabledLink.vue` آیتم غیرفعال منو
- `src/components/StatCards.vue` کارت‌های آمار بالای داشبورد
- `src/components/BankCard.vue` کارت بانکی با موجودی، مبلغ اولیه و نوار مصرف
- `src/components/ReceiptForm.vue` فرم ثبت فاکتور به شکل رسید
- `src/components/InvoiceList.vue` لیست فاکتورها با تاگل وضعیت
- `src/components/SvgSprite.vue` و `Icon.vue` آیکون‌ها
