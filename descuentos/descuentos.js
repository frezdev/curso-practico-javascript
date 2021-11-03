// const precioOriginal = 120;
// const descuento = 18;




function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const PrecioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
  return PrecioConDescuento;
}


function onClickButtonPriceDiscount(){
  
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;
  
  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;
  
  const precioDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  
  const resultP = document.getElementById("ResultP");
  
  return resultP.innerText = `El precio con descuento es: $${precioDescuento}`
} 



// COUPONS //
const coupons = [
  {
    code: "CARLOS",
    discount: 15
  },
  {
    code: "SOYCARLOSELMEJOR",
    discount: 30
  },
  {
    code: "SOYCARLOS",
    discount: 25
  }
];

function onClickButtonCouponDiscount(){
  
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;
  
  const inputCoupons = document.getElementById("inputCoupons");
  const inputCouponValue = inputCoupons.value;
  
  const buscarCoupon = coupons.find((element)=> {
      return element.code === inputCouponValue;
  });
  
  const buscarBoolean = coupons.some((element) => {
    return element.code === inputCouponValue
  });

  const resultP = document.getElementById("ResultP");
  
  if(buscarBoolean)
  {  
     const cupon = buscarCoupon.discount

     const precioDescuento = calcularPrecioConDescuento(priceValue, cupon);
     
    return resultP.innerText = `El descuento es del ${buscarCoupon.discount}
    El precio con descuento son $${precioDescuento}`

  }
  else if(buscarBoolean == false) 
  {
     return resultP.innerText = "El cupón es invalido";
  }

  
}

/*
console.log({
  precioOriginal,
  descuento,
  porcentajePrecioConDescuento,
  PrecioConDescuento
});
*/
