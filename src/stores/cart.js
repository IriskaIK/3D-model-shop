import { ref, computed } from "vue";
import { defineStore } from "pinia";
import {updateQunatityOfCartItem} from "@/services/cart/updateQunatityOfCartItem";

export const useCartStore = defineStore("cart", {
  state: () => ({
    /** @type {{ name: string, price: string, id: string, isSelected: boolean, currency: string, src: string, quantity: number}[]} */
    products: [],
  }),
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProductById(state){
      return (productID) => state.products.find((product)=> {
        if(product.id == productID){
          return true
        }
        return false
      })
    },
    getTotalPrice(state){
      let price = 0
      state.products.forEach((product)=>{
        if (product.isSelected){
          price += parseFloat(product.price) * product.quantity
        }
      })
      return price.toFixed(2)
    },
    getListLenght(state){
      let len = (state.products.length)
      return len
    }
  },
  actions: {
    addProduct(product) {
      let ind = this.products.findIndex((item) => {
        if (item.id == product.id) {
          return true;
        }
        return false;
      });
      if (ind != -1){
        return
      };
      this.products.push({
        name: product.name,
        price: product.price,
        id: product.id,
        isSelected: true,
        currency: product.currency,
        src: product.src,
        quantity : 1
      });
    },
    setProducts(products){
      this.products = products
    },
    setProductQuantity(productId, quantity){
      this.products.forEach(element=>{
        if(element.id === productId){
          element.quantity = quantity
        }
      })
    },
    removeProduct(product) {
      let ind = this.products.findIndex((item) => {
        if (item.id == product.id) {
          return true;
        }
        return false;
      });
      this.products.splice(ind, 1);
    },

    switchSelection(product) {
      let ind = this.products.findIndex((item) => {
        if (item.id == product.id) {
          return true;
        }
        return false;
      });
      this.products[ind].isSelected = !this.products[ind].isSelected
    },
    async increaseQuantity(product){
      let ind = this.products.findIndex((item) => {
        if (item.id == product.id) {
          return true;
        }
        return false;
      });
      this.products[ind].quantity += 1

      await updateQunatityOfCartItem(product.id, this.products[ind].quantity)
    },
    async decreaseQuantity(product){
      let ind = this.products.findIndex((item) => {
        if (item.id == product.id) {
          return true;
        }
        return false;
      });
      if(this.products[ind].quantity > 1){
        this.products[ind].quantity -= 1
      }
      await updateQunatityOfCartItem(product.id, this.products[ind].quantity)
      
    }
  },
});
