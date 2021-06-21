import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootRedecur from "./rootReducer";

export function configureStore() {
    //devToolsEnhancer bu araç chrome eklentisi olarak kurulan redux-devtools eklentisini kullanmaya yarayacak. Middleware
    //uygulamayı yayına almadan önce devToolsEnhancer silebiliriz.
    return createStore(rootRedecur,devToolsEnhancer())
}