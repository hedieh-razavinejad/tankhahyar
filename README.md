# تنخواه‌یار

برنامه‌ای ساده برای ثبت فاکتورها و مدیریت تنخواه، ساخته‌شده با Vue 3 و Tailwind CSS. رابط کاربری فارسی و راست‌به‌چپ است.

![Tankhahyar screenshot](screenshot.png)

## امکانات

- داشبورد با کارت‌های آمار
- کارت بانکی با موجودی، مبلغ اولیه و درصد مصرف
- فرم ثبت فاکتور با نمایش به شکل رسید
- لیست فاکتورها با نمایش وضعیت هر فاکتور
- سایدبار با دکمه باز و بسته کردن
- انتخاب دسته‌بندی هزینه (پذیرایی، لوازم اداری و ...)

## ساخته‌شده با

Vue 3 · Vite · Tailwind CSS

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
