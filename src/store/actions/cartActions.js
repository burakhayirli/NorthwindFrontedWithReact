export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

//CCRS pattern, Command Patters
export function addToCart(product) {
    //redux aksiyon yaparken bana bir obje gönder diyor.
    return {
        type: ADD_TO_CART, //aksiyon tipi
        payload: product // veri
    }
}

export function removeFromCart(product) {
    //redux aksiyon yaparken bana bir obje gönder diyor.
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}