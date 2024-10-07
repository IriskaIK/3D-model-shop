import { defineStore } from "pinia";



export const useProductsStore = defineStore("shop", {
    state: () => ({

        /** @type {{ title: string, subtitle : string, content: string, category: string, price: string, id: string, currency: string, src: string, inStock: boolean}[]} */
        products: [],
        /** @type {{ price, category, tags, inStock: boolean, orderBy : string}} */
        searchOptions:{
            price : {
                min : 0,
                max : 3000
            },
            orderBy : 'High price'
        },

        /** @type {{ title: string, pId: string}[]} */
        availableCategories: [],

        /** @type {{ title: string, pId: string}[]} */
        availableTags : [],

        currentProduct : []

    }),
    getters: {
        getProducts(state){
            return {
                offset : state.products.offset,
                products : state.products.products
            }
        },
        getSelectedCategories(state){
            return state.searchOptions.category
        },
        getSelectedTags(state){
            return state.searchOptions.tags
        },
        getRange(state){
            let range = []
            if(state.searchOptions.price){
                range[0] = state.searchOptions.price.min
                range[1] = state.searchOptions.price.max
                return range
            }

            return [0, 3000]
        },
        getStockState(state){
          if(state.searchOptions.inStock){
              return true
          }
          return false
        },
        getAvailableCategories(state){
            return state.availableCategories

        },
        getAvailableTags(state){
            return state.availableTags
        },
        getOrderByState(state){
            if(state.searchOptions.orderBy){
                return state.searchOptions.orderBy
            }
            return 'High price'
        },
        getOptionsData(state){
            return state.searchOptions
        },

        getCurrentProduct(state){
            return state.currentProduct
        },

    },
    actions: {
        setShopData(payload){
            this.products = payload
        },
        setCurrentProduct(payload){
            this.currentProduct = payload
        },
        clearOptionsData(){
          this.searchOptions = {}
        },

        setCategory(payload){
            console.log(typeof payload)
            if(Object.keys(payload).length === 0){
                delete this.searchOptions.category
                return
            }
          this.searchOptions.category = payload
        },
        setTags(payload){

            if(Object.keys(payload).length === 0){
                delete this.searchOptions.tags
                return
            }
            this.searchOptions.tags = payload
        },
        setMinPrice(payload){
            this.searchOptions.price['min'] = payload
        },
        setMaxPrice(payload){
            this.searchOptions.price['max'] = payload
        },
        setStockState(payload){
            this.searchOptions.inStock = !payload
        },
        setOrderOption(payload){
            this.searchOptions.orderBy = payload
        },

        setAvailableCategories(payload){
            console.log(payload)
            this.availableCategories = payload
        },
        setAvailableTags(payload){
            console.log(payload)
            this.availableTags = payload
        }


    },
});
