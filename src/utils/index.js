//this function calculate de precio total de order
//el parametro {array} = producs array de objetos 
//return {namber} total de precio
export const totalPrice = (cartProducts) => {
    let  sum = 0
    const sumados = cartProducts.reduce((sum, suma2) => sum + suma2.price,sum,)
    return sumados
}