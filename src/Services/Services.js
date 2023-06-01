export const calculateTotal = (cartData, couponDiscount = 1) => {
  const itemPriceTotal = cartData?.reduce(
    (acc, cur) => acc + Number(cur.price * cur.qty),
    0
  );

  const itemDiscount = cartData?.reduce(
    (acc, cur) => acc + Number(cur.amountSaved * cur.qty),
    0
  );

  const deliveryTotal = cartData?.reduce(
    (acc, cur) => acc + Number(cur.deliveryCharges * cur.qty),
    0
  );

  const grandTotal =
    (itemPriceTotal - itemDiscount + deliveryTotal) * couponDiscount;

  const moneySavedTotal = itemPriceTotal - itemDiscount + deliveryTotal;

  const totalItems = cartData?.reduce((acc, cur) => acc + cur.qty, 0);

  const cartTotal = {
    itemPriceTotal,
    itemDiscount,
    deliveryTotal,
    grandTotal,
    totalItems,
    moneySavedTotal,
  };

  return cartTotal;
};
