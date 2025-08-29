import { createStore } from "vuex"

const store = createStore({
    state() {
        return {
            count : 0
        }
    },
    mutations : {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
    },
    computed : {
        
    }
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store)
});


