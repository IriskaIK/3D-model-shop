import { defineStore } from "pinia";
import type Product from '@/types/product.types'
import { type Category, type Tag } from '@/types/product.types'
import { getShopProducts } from '@/services/shop/getShopProducts'
import { getAvailableCategories } from '@/services/shop/getAvailableCategories'
import { getAvailableTags } from '@/services/shop/getAvailableTags'
// Define the types for the product and search options


export interface SearchOptions {
  price: {
    min: number;
    max: number;
  };
  category?: number[];
  tags?: number[];
  inStock?: boolean;
  orderBy: string;
  offset?: number;
}

// Define the store
export const useProductsStore = defineStore("shop", {
  state: () => ({
    products: [] as Product[],
    searchOptions: {
      price: {
        min: 0,
        max: 3000,
      },
      orderBy: 'High price',
    } as SearchOptions,
    availableCategories: [] as Category[],
    availableTags: [] as Tag[],
    currentOffset : 0,
    range : [0, 3000],
    min : 0,
    max : 3000
  }),
  getters: {
    getProducts(state) {
      return {
        offset: state.currentOffset, // Assuming you might want to return the length as offset
        products: state.products,
      };
    },
    getSelectedCategories(state) {
      return state.searchOptions.category || [];
    },
    getSelectedTags(state) {
      return state.searchOptions.tags || [];
    },
    getRange(state) {
      return [
        state.searchOptions.price?.min || 0,
        state.searchOptions.price?.max || 3000,
      ];
    },
    getStockState(state) {
      return state.searchOptions.inStock || false;
    },
    getAvailableCategories(state) {
      return state.availableCategories;
    },
    getAvailableTags(state) {
      return state.availableTags;
    },
    getOrderByState(state) {
      return state.searchOptions.orderBy || 'High price';
    },
    getOptionsData(state) {
      return state.searchOptions;
    },
  },
  actions: {
    setShopData(payload: Product[]) {
      this.products = payload;
    },
    clearOptionsData() {
      this.searchOptions = {
        price: { min: 0, max: 3000 },
        orderBy: 'High price',
      } as SearchOptions;
    },
    setCategory(payload: number[]) {
      if (payload.length === 0) {
        delete this.searchOptions.category;
        return;
      }
      this.searchOptions.category = payload;
    },
    setTags(payload: number[]) {
      if (payload.length === 0) {
        delete this.searchOptions.tags;
        return;
      }
      this.searchOptions.tags = payload;
    },
    setMinPrice() {
      this.searchOptions.price.min = this.range[0];
    },
    setMaxPrice() {
      this.searchOptions.price.max = this.range[1];
    },
    setStockState(payload: boolean) {
      this.searchOptions.inStock = !payload;
    },
    setOrderOption(payload: string) {
      this.searchOptions.orderBy = payload;
    },
    setAvailableCategories(payload: Category[]) {
      this.availableCategories = payload;
    },
    setAvailableTags(payload: Tag[]) {
      this.availableTags = payload;
    },


    async fetchProducts(){
      const res = await getShopProducts(this.searchOptions)

      if(res){
        this.products = res.products
        this.currentOffset = res.offset
      }

    },
    async fetchCategories(){
      const res = await getAvailableCategories()
      if(res){
        this.availableCategories = res
      }

    },
    async fetchTags(){
      const res = await getAvailableTags()
      if(res){
        this.availableTags = res
      }
    }
  },
});
