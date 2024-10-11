import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type Product from '@/types/product.types'
import { addProductToWishlist } from '@/services/wishlist/addProductToWishlist'
import { fetchWishlistData } from '@/services/wishlist/getWishlistData'
import { removeProduct } from '@/services/wishlist/removeProduct'


interface WishlistState {
  products: Partial<Product>[];
}

export const useWishlistStore = defineStore("wishlist", {
  state: () : WishlistState => ({
    products: [],
  }),
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProductById(state) {
      return (productID: number) =>
        state.products.find((product) => product.id === productID);
    },
  },
  actions: {
    async addProduct(productId: number): Promise<void> {
      const ind = this.products.findIndex((item) => item.id === productId);
      if (ind !== -1) {
        return;
      }
      await addProductToWishlist(productId)
      this.products.push({ id : productId });
    },

    async loadWishlist(){
      const res = await fetchWishlistData()
      if(res){
        this.products = res.map((e)=>{return { ...e, id: e.product_id}})
      }

    },
    async removeProduct(productId: number) {

      const ind = this.products.findIndex((item) => item.id === productId);
      if (ind !== -1) {
        await removeProduct(productId);
        this.products.splice(ind, 1);
      }
    },
  },
});
