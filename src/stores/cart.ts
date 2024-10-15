import {defineStore} from "pinia";
import {fetchCartData} from "@/services/cart/getCartData";
import Product from "@/types/product.types";
import { addProductToCart } from '@/services/cart/addProductToCart'
import { updateQuantity } from '@/services/cart/updateQuantity'
import { removeProduct } from '@/services/cart/removeProduct'
import {updateSelection} from "@/services/cart/updateSelection";


interface CartProduct extends Product{
    selected : boolean;
    quantity : number;

}

interface CartState{
    products : Partial<CartProduct>[]
}

export const useCartStore = defineStore("cart", {
    state: () : CartState => ({
        products : [],
    }),

    getters: {
        getProducts(state): Partial<CartProduct>[] {
            return state.products;
        },
        getProductById(state): (productID: number) => Partial<CartProduct> | undefined {
            return (productID: number) => state.products.find((product) => product.id === productID);
        },
        getTotalPrice(state): string {
            let price = 0;
            state.products.forEach((product) => {
                if (product.selected && product.price && product.quantity) {
                    price += product.price * product.quantity;
                }
            });
            return price.toFixed(2);
        },
        getListLength(state): number {
            return state.products.length;
        }
    },

    actions: {
        async loadCartItems(){
            const res = await fetchCartData()
            if(res){
                this.products = res.map((e)=>{return {isSelected : true, ...e, id: e.cart_product_id}})
            }

            // send a request
        },
        async addProduct(productId: number) {
            // Send a request
            const ind = this.products.findIndex((item) => item.id === productId);
            if (ind !== -1) return;


            await addProductToCart(productId)
            this.products.push({
                selected: true,
                quantity: 1,
                id : productId
            });
        },

        async setProductQuantity(productId: number, quantity: number) {
            for (const element of this.products) {
                if (element.id === productId) {
                    element.quantity = quantity;
                }
                await updateQuantity(productId, quantity)
            }
        },
        async removeProduct(productId : number) {
            const ind = this.products.findIndex((item) => item.id === productId);
            if (ind !== -1) {
                this.products.splice(ind, 1);
                await removeProduct(productId)
            }
        },
        async switchSelection(productId : number) {
            const ind = this.products.findIndex((item) => item.id === productId);
            if (ind !== -1) {
                this.products[ind].selected = !this.products[ind].selected;
                await updateSelection(productId, this.products[ind].selected!)
            }
        },


        async increaseQuantity(productID : number){
            let ind = this.products.findIndex((item) => {
                return item.id == productID;

            });
            this.products[ind].quantity! += 1

            await updateQuantity(productID, this.products[ind].quantity!)
        },
        async decreaseQuantity(productID : number){
            let ind = this.products.findIndex((item) => {
                return item.id == productID;

            });
            if(this.products[ind].quantity! > 1){
                this.products[ind].quantity! -= 1
            }
            await updateQuantity(productID, this.products[ind].quantity!)

        }
    },


})