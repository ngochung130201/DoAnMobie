export type TyOrder = {
  orderID: string,
  orderDate: Date,
  isStatus: boolean,
  delivered: boolean,
  deliveryDate: Date,
  customerID: string,
  productID: string,
  productName: string,
  isFreeShip: true,
  priceSum: number,
  quantity: number,
  discount: number
}
