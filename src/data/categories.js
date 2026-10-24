// گزینه‌های سلکتور «توضیحات»
export const categories = [
  { label: 'پذیرایی', icon: 'coffee' },
  { label: 'لوازم اداری', icon: 'briefcase' },
  { label: 'حمل‌ونقل', icon: 'truck' },
  { label: 'تعمیرات', icon: 'wrench' },
  { label: 'سایر', icon: 'dots' }
]

// آیکون هر گزینه را از روی نامش پیدا می‌کند
export const iconOf = label => {
  const found = categories.find(c => c.label === label)
  return found ? found.icon : 'pencil'
}
