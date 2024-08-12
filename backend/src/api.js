import { Router } from "express"
import products from "./data/products.js"
import stockPrice from "./data/stock-price.js"

const router = Router()

router.get('/products', (req, res) => {
  const result = products.map(p=> ({
    ...p,
    price: stockPrice[p.skus[0].code].price
  }))
  res.send(result)
})

router.get('/stock-price/:id', (req, res) => {
  const {id} = req.params;
  res.send(stockPrice[id])
})

export default router