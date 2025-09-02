import { createStore } from "vuex"
import { validateDateFormat } from "../services/MainForm1/DurationConfig_service"

const store = createStore({
    state() {
        return {
            count : 0,
            debenture_name : "",
            duration_config : {
                year : "",
                month : "",
                day : ""
            },
            debenture_code : "",
            start_date : "",
            end_date : "",
            interest_freq : "",
            interest_percent : ""
        }
    },
    mutations : {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
        set_debenture_name(state,debenture_name){
            state.debenture_name = debenture_name
            console.log("debenture name : "+state.debenture_name)
            // alert("debenture name : "+state.debenture_name)
        },
        set_duration_config_year(state,duration_config_year){
            state.duration_config.year = duration_config_year
            console.log("duration config year: "+state.duration_config.year)
        },
        set_duration_config_month(state,duration_config_month){
            state.duration_config.month = duration_config_month
            console.log("duration config month: "+state.duration_config.month)
        },
        set_duration_config_day(state,duration_config_day){
            state.duration_config.day = duration_config_day
            console.log("duration config day: "+state.duration_config.day)
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
        //validate later
        validate_date_format(state){
            let val_result = validateDateFormat(state.duration_config)
            val_result = JSON.stringify(val_result)
            val_result = JSON.parse(val_result)
            alert(val_result)
            return val_result.valid
        }
    },
    actions : {
        set_debenture_name({ commit }, debenture_name) {
            commit("set_debenture_name",debenture_name)
        },
        set_duration_config_year({ commit}, duration_config_year) {
            commit("set_duration_config_year",duration_config_year)
        },
        set_duration_config_month({ commit}, duration_config_month) {
            commit("set_duration_config_month",duration_config_month)
        },
        set_duration_config_day({ commit}, duration_config_day) {
            commit("set_duration_config_day",duration_config_day)
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
        }

    },
    computed : {
        
    }
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store)
});


