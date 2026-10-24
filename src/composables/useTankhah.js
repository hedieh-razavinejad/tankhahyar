import { ref, reactive, computed } from 'vue'

// ---------- داده‌ها ----------
const initial = ref(10000000)
const invoices = ref([
  { id: 1, title: 'خرید کاغذ و خودکار', amount: 450000, note: 'لوازم اداری', paid: true },
  { id: 2, title: 'پذیرایی جلسه', amount: 1250000, note: 'پذیرایی', paid: false }
])

// ---------- تبدیل عدد و نمایش ----------
// اعداد فارسی و عربی را به عدد انگلیسی تبدیل می‌کند
const faToEn = s => String(s)
  .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
  .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
  .replace(/[^\d]/g, '')

export const toNum = s => Number(faToEn(s)) || 0
export const fa = n => n.toLocaleString('fa-IR')
export const fmt = n => fa(n) + ' تومان'

// ---------- مقدارهای محاسبه‌شده ----------
const paidCount = computed(() => invoices.value.filter(i => i.paid).length)
const pendingCount = computed(() => invoices.value.length - paidCount.value)
const total = computed(() => invoices.value.reduce((s, i) => s + i.amount, 0))
const balance = computed(() => initial.value - total.value)
const pct = computed(() => initial.value > 0 ? (total.value / initial.value) * 100 : 0)

// ---------- کارها ----------
const setInitial = v => { initial.value = toNum(v) }

const addInvoice = data => {
  invoices.value.unshift({
    id: Date.now(),
    title: data.title,
    amount: toNum(data.amount),
    note: data.note,
    paid: false
  })
}

export function useTankhah() {
  return { initial, invoices, paidCount, pendingCount, total, balance, pct, setInitial, addInvoice }
}

// ---------- فرم ثبت فاکتور ----------
export function useForm() {
  const form = reactive({ title: '', amount: '', note: '' })
  const reset = () => {
    form.title = ''
    form.amount = ''
    form.note = ''
  }
  return { form, reset }
}
