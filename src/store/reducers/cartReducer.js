import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems
}

//spread operatörler önemli.

//Reducer sepetin son halini tuttuğumuz yer
//type,payload actions dosyasında tanımladığımız değerler
//state = initialState spread operatörü ile referans değiştireceğiz.
//default olmayanlar braceler içinde kullanılarak import edilebilir.
export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            //daha önce sepete eklenmişse miktarı 1 artıralım.
            let product = state.cartItems.find(c => c.product.id === payload.id)
            if (product) {

                product.quantity++;

                //yeni değerin güncellenmesi için referansın değiştirilmesi gerekiyor. Sadece ++ yaparsak arayüze yansımaz.
                //spread operatörü, newlemek gibi
                //push kullanmak yasak, push kullanılırsa referans değişmez.
                return {
                    ...state  // bu satırda state i geri döndürerek initialState içindeki carItemsları güncelliyoruz. 
                }
            } else {
                //yoksa yeni bir obje oluşturuyoruz.
                return {
                    ...state, //InitialValues'de cartItemsde birden fazla veri olabilir diye kullanıyoruz. Varolanları kullanmak için.
                    //cartItems'ı spread operatörü ile ayırdık ve onları yeni bir dizinin içine koyduk
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }]
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                //filter yeni bir array oluşturur
                cartItems: state.cartItems.filter(c => c.product.id !== payload.id)
            }

        default:
            return state;
    }

}