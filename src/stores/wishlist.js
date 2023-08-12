import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    /** @type {{ name: string, price: string, id: string, currency: string, src: string}[]} */
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
        currency: product.currency,
        src: product.src
      });
    },
    setProducts(products){
      this.products = products
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

  },
});
