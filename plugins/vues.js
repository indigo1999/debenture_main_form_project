import { createStore } from "vuex"

const store = createStore({
    state() {
        return {
            count : 0,
            name : "",
        }
    },
    mutations : {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
        set_debenture_name(state,name){
            state.name = name
            alert("debenture name : "+state.name)
        }
    },
    actions : {
        set_debenture_name({ commit }, debenture_name) {
            commit("set_debenture_name",debenture_name)
        }
    },
    computed : {
        
    }
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store)
});


