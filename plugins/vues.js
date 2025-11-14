import { createStore } from "vuex"
import axios from "axios"

const store = createStore({
    state() {
        return {
            debenture_name : "",
            duration_config : "",
            debenture_code : "",
            start_date : "",
            end_date : "",
            interest_freq : "",
            interest_percent : "",
            detail_note : "",
            investment : {
                total : 0,
                mom : 0,
                goi : 0,
                gam : 0,
                game : 0
            },
            agency_name : "",
            registrar_name : "",
            debenture_paper_image : {
                front_base64 : "",
                back_base64 : ""
            },
            interest_out_date : []
        }
    },
    mutations : {
        set_debenture_name(state,debenture_name){
            state.debenture_name = debenture_name
            console.log("debenture name : "+state.debenture_name)
            // alert("debenture name : "+state.debenture_name)
        },
        set_duration_config(state,duration_config){
            state.duration_config = duration_config
            console.log("duration config :"+state.duration_config)
        },
        set_debenture_code(state,debenture_code) {
            state.debenture_code = debenture_code
            console.log("debenture code : "+state.debenture_code)
        },
        set_start_date(state,start_date){
            state.start_date = start_date
            console.log("start date : "+state.start_date)
        },
        set_end_date(state,end_date){
            state.end_date = end_date
            console.log("end date : "+state.end_date)
        },
        set_interest_freq(state,interest_freq){
            state.interest_freq = interest_freq
            console.log("interest freq : " + state.interest_freq)
        },
        set_interest_percent(state, interest_percent){
            state.interest_percent = interest_percent
            console.log("interest percent : " + state.interest_percent)
        },
        set_detail_note(state, detail_note){
            state.detail_note = detail_note
            console.log("detail note : "+state.detail_note)
        },
        set_total_investment(state , total){
            state.investment.total = total
            console.log("Total invest : "+state.investment.total)
        },
        set_total_invest_mom(state, mom){
            state.investment.mom = mom
            console.log("Invest mom : "+state.investment.mom)
        },
        set_total_invest_goi(state, goi){
            state.investment.goi = goi
            console.log("Invest goi : "+state.investment.goi)
        },
        set_total_invest_gam(state , gam){
            state.investment.gam = gam
            console.log("Invest gam : "+state.investment.gam)
        },
        set_total_invest_game(state, game){
            state.investment.game = game
            console.log("Invest game : "+state.investment.game)
        },
        set_agency_name(state , agency_name) {
            state.agency_name = agency_name
            console.log("agency_name : "+state.agency_name)
        },
        set_registrar_name(state , registrar_name) {
            state.registrar_name = registrar_name
            console.log("registrar_name : "+state.registrar_name)
        },
        set_debenture_paper_image_front(state, image_front_base64){
            state.debenture_paper_image.front_base64 = image_front_base64
            console.log("image front base64 : " + state.debenture_paper_image.front_base64)
        },
        set_debenture_paper_image_back(state, image_back_base64){
            state.debenture_paper_image.back_base64 = image_back_base64
            console.log("image back base64 : " + state.debenture_paper_image.back_base64)
        },
        reset_interest_out_date(state){
            state.interest_out_date.splice(0)
            console.log(state.interest_out_date)
        },
        push_interest_out_date(state, interest_out_date){
            state.interest_out_date.push(interest_out_date)
            console.log(state.interest_out_date)
        },
        remove_interest_out_date(state,interest_out_date_index){
            state.interest_out_date.splice(interest_out_date_index,1)
            console.log(state.interest_out_date)
        }

    },
    actions : {
        set_debenture_name({ commit }, debenture_name) {
            commit("set_debenture_name",debenture_name)
        },
        set_duration_config({ commit}, duration_config) {
            commit("set_duration_config",duration_config)
        },
        set_debenture_code({ commit }, debenture_code) {
            commit("set_debenture_code",debenture_code)
        },
        set_start_date({ commit }, start_date){
            commit("set_start_date",start_date)
        },
        set_end_date({ commit }, end_date) {
            commit("set_end_date",end_date)
        },
        set_interest_freq({ commit }, interest_freq) {
            commit("set_interest_freq", interest_freq)
        },
        set_interest_percent({ commit }, interest_percent){
            commit("set_interest_percent",interest_percent)
        },
        set_detail_note({ commit }, detail_note) {
            commit("set_detail_note",detail_note)
        },
        set_total_investment({ commit } , total){
            commit("set_total_investment",total)
        },
        set_total_invest_mom({ commit }, mom){
            commit("set_total_invest_mom",mom)
        },
        set_total_invest_goi({ commit }, goi){
            commit("set_total_invest_goi",goi)
        },
        set_total_invest_gam({ commit } , gam){
            commit("set_total_invest_gam",gam)
        },
        set_total_invest_game({ commit }, game){
            commit("set_total_invest_game",game)
        },
        set_agency_name({ commit }, agency_name){
            commit("set_agency_name",agency_name)
        },
        set_registrar_name({ commit }, registrar_name){
            commit("set_registrar_name",registrar_name)
        },
        set_debenture_paper_image_front({ commit }, front_base64) {
            commit("set_debenture_paper_image_front",front_base64)
        },
        set_debenture_paper_image_back({ commit }, back_base64) {
            commit("set_debenture_paper_image_back",back_base64)
        },
        reset_interest_out_date_array({ commit }) {
            commit("reset_interest_out_date")
        },
        push_interest_out_date_array({ commit } , interest_out_date_array){
            commit("push_interest_out_date",interest_out_date_array)
        },
        remove_interest_out_date_array({ commit }, interest_out_date_array_index){
            commit("remove_interest_out_date",interest_out_date_array_index)
        },
        send_data : async ({ commit },data) => {
             try {
                const HOST = '127.0.0.1'//config.private.API_HOST
                const PORT = 3142
                const PATH = 'api'
                const END_POINT = 'append_sheet'
                const URL = `http://${HOST}:${PORT}/${PATH}/${END_POINT}`
                // const header = { "Content-Type": "multipart/form-data" }

                const response = await axios.post(URL,data);
                console.log(response.status+" "+response.statusText+" "+response.data)
                
            } catch (error) {
                console.log(error)
            }
        }

    },
    computed : {
        
    }
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store)
});


