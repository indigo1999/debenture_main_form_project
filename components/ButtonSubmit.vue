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
                        <div class="pa-6" v-if="INT_FREQ_EQUAL_LENGTH_INT_OUT_DATE">
                            <Int_freq_Int_out_date/>
                        </div>
                        <div class="pa-6" v-if="START_AND_END_DATE_SAME">
                            <Start_End_date_same/>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
            <div class="d-flex justify-end">
                <v-btn @click="overlay_status = false">ปิดหน้าต่างนี้</v-btn>
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
const INT_FREQ_EQUAL_LENGTH_INT_OUT_DATE = ref(false)
const START_AND_END_DATE_SAME = ref(false)

watchEffect(() => {
    debenture_name.value = computed( () => state.debenture_name ).value // string
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
    } 

    // WORK --
    if (IS_INT_FREQ_EQUAL_LENGTH_INT_OUT_DATE() == false) {
        INT_FREQ_EQUAL_LENGTH_INT_OUT_DATE.value = true
    } 

    // //WORK --
    if(IS_START_AND_END_DATE_SAME()){
        // alert("START & END DATE CANNOT BE THE SAME")
        START_AND_END_DATE_SAME.value = true
    } 

}

const clear = () => {

}

const IS_THERE_ANY_EMPTY_VALUE_EXIST = () => {
    const debenture_image_front = JSON.stringify(debenture_paper_image.value).front_base64
    const debenture_image_back = JSON.stringify(debenture_paper_image.value).back_base64
    const interest_out_date_json_arr = JSON.stringify(interest_out_date.value)
    const investment_group = JSON.stringify(investment.value)

    if (debenture_name.value.length && duration_config.value.length && debenture_code.value.length
        && start_date.value.length && end_date.value.length
        && interest_freq.value.length && interest_percent.value.length && agency_name.value.length && registrar_name.value.length
        && debenture_image_front && debenture_image_back
        && interest_out_date_json_arr.length
        && investment_group.total && investment_group.mom && investment_group.goi 
        && investment_group.gam && investment_group.game 
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
    alert(interest_out_date.value.length)
    return ( ( 12 / parseInt(interest_freq.value.split(" ")[0]) ) == parseInt(interest_out_date.value.length) ) 
}

const IS_START_AND_END_DATE_SAME = () => {
    if (start_date.value.length != 0 && end_date.value.length != 0) {
        return ( start_date.value == end_date.value )
    } else if ( start_date.value.length == 0 && end_date.value.length == 0 ) {
        return false
    }
}

</script>