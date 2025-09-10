<template>
    <div>
        <div>
            <v-row>
                <v-col class="bg-red d-flex justify-center" cols="3">
                    <v-btn rounded="lg" size="x-large" @click="clear" >CLEAR</v-btn>
                </v-col>
                <v-col class="bg-green" cols="6">

                </v-col>
                <v-col class="bg-red d-flex justify-center" cols="3">
                    <v-btn rounded="lg" size="x-large" @click="submit" >SUBMIT</v-btn>
                </v-col>
            </v-row>  
        </div>

        <v-overlay
        class="d-flex justify-center align-center"
        v-model="overlay_status">
            <div>
                <v-card color="#EF5350" title="แจ้งเตือน">
                    <v-card-text>
                        <div class="pa-6" v-if="EMPTY_VALUE_EXIST">
                            <Empty_value_exist/>
                        </div>
                        <div class="pa-6" v-if="INT_FREQ_UNEQUAL_LENGTH_INT_OUT_DATE">
                            <Int_freq_Int_out_date/>
                        </div>
                        <div class="pa-6" v-if="START_AND_END_DATE_SAME">
                            <Start_End_date_same/>
                        </div>
                        <div class="pa-6" v-if="START_AND_END_DATE_SAME == false && INT_FREQ_UNEQUAL_LENGTH_INT_OUT_DATE == false && EMPTY_VALUE_EXIST == false">
                            เรียบร้อย
                        </div>
                    </v-card-text>
                </v-card>
            </div>
            <div class="d-flex justify-end">
                <v-btn @click="close_overlay">ปิดหน้าต่างนี้</v-btn>
            </div>
        </v-overlay>

    </div>
</template>

<script setup>
import { ref , computed } from "vue"
import { useStore } from "vuex"
import Empty_value_exist from "./MainForm1/Submit_alert/Empty_value_exist.vue"
import Int_freq_Int_out_date from "./MainForm1/Submit_alert/Int_freq_Int_out_date.vue"
import Start_End_date_same from "./MainForm1/Submit_alert/Start_End_date_same.vue"

const store = useStore()

const state = store.state
const debenture_name = ref("") // string
const duration_config = ref("") //
const debenture_code = ref("") //
const start_date = ref("") //
const end_date = ref("") //
const interest_freq = ref("") //
const interest_percent = ref("") //
const detail_note = ref("") //
///JSON.stringify()
const investment = ref("") // [object Object]
///
const agency_name = ref("") //
const registrar_name = ref("") //
///JSON.stringify()
const debenture_paper_image = ref("") // [object Object]
///
const interest_out_date = ref("") // object

const overlay_status = ref(false)
const EMPTY_VALUE_EXIST = ref(false)
const INT_FREQ_UNEQUAL_LENGTH_INT_OUT_DATE = ref(false)
const START_AND_END_DATE_SAME = ref(false)

watchEffect(() => {
    debenture_name.value = computed( () => state.debenture_name ).value // string
    console.log(debenture_name.value)
    duration_config.value = computed( () => state.duration_config ).value //
    debenture_code.value = computed( () => state.debenture_code ).value //
    start_date.value = computed( () => state.start_date ).value //
    end_date.value = computed( () => state.end_date).value //
    interest_freq.value = computed( () => state.interest_freq ).value //
    interest_percent.value = computed( () => state.interest_percent ).value //
    detail_note.value = computed( () => state.detail_note ).value //
    ///JSON.stringify()
    investment.value = computed( () => state.investment ).value // [object Object] -P
    ///
    agency_name.value = computed( () => state.agency_name ).value //
    registrar_name.value = computed( () => state.registrar_name ).value //
    ///JSON.stringify()
    debenture_paper_image.value = computed( () => state.debenture_paper_image ).value // [object Object] -P
    ///
    interest_out_date.value = computed( () => state.interest_out_date ).value // object -P
})

function submit (){
    overlay_status.value = true
    //WORK --
    if (IS_THERE_ANY_EMPTY_VALUE_EXIST()) {
        // alert("YOU ARE MISSING SOMETHING") 
        EMPTY_VALUE_EXIST.value = true
    } else {
        alert("Form Filled Complete")
    }

    // WORK --
    if (IS_INT_FREQ_EQUAL_LENGTH_INT_OUT_DATE() == false) {
        INT_FREQ_UNEQUAL_LENGTH_INT_OUT_DATE.value = true
    } 

    // //WORK --
    if(IS_START_AND_END_DATE_SAME()){
        // alert("START & END DATE CANNOT BE THE SAME")
        START_AND_END_DATE_SAME.value = true
    }

}

function close_overlay () {
    overlay_status.value = false
    EMPTY_VALUE_EXIST.value = false
    INT_FREQ_UNEQUAL_LENGTH_INT_OUT_DATE.value = false
    START_AND_END_DATE_SAME.value = false
}

const clear = () => {
    store.dispatch("set_debenture_name","")
    store.dispatch("set_duration_config","")
    store.dispatch("set_debenture_code","")
    store.dispatch("set_start_date","")
    store.dispatch("set_end_date","")
    store.dispatch("set_interest_freq","")
    store.dispatch("set_interest_percent","")
    store.dispatch("set_detail_note","")
    store.dispatch("set_total_investment",0)
    store.dispatch("set_total_invest_mom",0)
    store.dispatch("set_total_invest_goi",0)
    store.dispatch("set_total_invest_gam",0)
    store.dispatch("set_total_invest_game",0)
    store.dispatch("set_agency_name","")
    store.dispatch("set_registrar_name","")
    store.dispatch("set_debenture_paper_image_front","")
    store.dispatch("set_debenture_paper_image_back","")
    store.dispatch("set_interest_out_date_array",[])
    window.location.reload();
}

const IS_THERE_ANY_EMPTY_VALUE_EXIST = () => {

    let debenture_image_front = JSON.stringify(debenture_paper_image.value)
    debenture_image_front = JSON.parse(debenture_image_front).front_base64

    let debenture_image_back = JSON.stringify(debenture_paper_image.value)
    debenture_image_back = JSON.parse(debenture_image_back).back_base64

    let interest_out_date_json_arr = JSON.stringify(interest_out_date.value)
    interest_out_date_json_arr = JSON.parse(interest_out_date_json_arr)


    const investment_group = JSON.stringify(investment.value)

    if ( 
        (debenture_name.value && duration_config.value && debenture_code.value)
        && ( start_date.value && end_date.value )
        && ( interest_freq.value && interest_percent.value) 
        && ( agency_name.value && registrar_name.value )
        && ( debenture_image_front && debenture_image_back )
        && interest_out_date_json_arr
    ) {
        return false
    } else {
        return true
    }
} 

const IS_VALID_INVESTMENT_RATIO = () => {
    let inv_val = JSON.stringify(investment.value)
    return ( (Number(inv_val.total)) == (Number(inv_val.mom) + Number(inv_val.goi) + Number(inv_val.gam) + Number(inv_val.game)) )
}

const IS_INT_FREQ_EQUAL_LENGTH_INT_OUT_DATE = () => {
    const month_or_year = parseInt(interest_freq.value.split(" ")[0])
    const int_out_length  = parseInt(interest_out_date.value.length)

    if ( month_or_year == 1) {
        return ( int_out_length == 1 )
    } else {
        return ( ( 12 / month_or_year ) == int_out_length )
    }  
}

const IS_START_AND_END_DATE_SAME = () => {
    if (start_date.value.length != 0 && end_date.value.length != 0) {
        if ( start_date.value == end_date.value ) {
            return true
        }
    } else if ( start_date.value.length == 0 && end_date.value.length == 0 ) {
        return false
    }
}

</script>