export const dateFormatter = new Intl.DateTimeFormat('en-IE')

export const priceFormatter = new Intl.NumberFormat('en-IE', {
  style: 'currency',
  currency: 'EUR'
})
