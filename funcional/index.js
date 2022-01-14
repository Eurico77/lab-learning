const orders = [
  { id: 1, name: 'Coffee', status: 'peding', price: 2.5 },
  { id: 3, name: 'Cupcake', status: 'complete', price: 1.5 },
  { id: 4, name: 'Cup', status: 'shipped', price: 0.5 },
  { id: 5, name: 'Coffee', status: 'peding', price: 2.5 },
  { id: 6, name: 'Cup', status: 'ok', price: 0.5 },
  { id: 7, name: 'Cup', status: 'abort', price: 0.5 },
]

const getStatusOrder = orders => orders.reduce((acc, { status }) => ({
  ...acc,
  [status]: (acc[status] || 0) + 1
}),
  {})

console.log(getStatusOrder(orders))

