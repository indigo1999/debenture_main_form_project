<template>
    <div>
        <div>
            <v-row>
                <v-col class="d-flex justify-center" cols="3">
                    <v-btn color="#E53935" rounded="lg" size="x-large" @click="clear" >CLEAR</v-btn>
                </v-col>
                <v-col class="" cols="6">

                </v-col>
                <v-col class="d-flex justify-center" cols="3">
                    <v-btn color="#64FFDA" rounded="lg" size="x-large" @click="submit" >SUBMIT</v-btn>
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
const interest_out_date = ref({}) // object

const overlay_status = ref(false)
const EMPTY_VALUE_EXIST = ref(false)
const INT_FREQ_UNEQUAL_LENGTH_INT_OUT_DATE = ref(false)
const START_AND_END_DATE_SAME = ref(false)

const debenture_image_front = () => {
    let debenture_image_front_value = JSON.stringify(debenture_paper_image.value)
    let debenture_image_front_base64 = JSON.parse(debenture_image_front_value).front_base64
    return debenture_image_front_base64
}

const debenture_image_back = () => {
    let debenture_image_back_value = JSON.stringify(debenture_paper_image.value)
    let debenture_image_back_base64 = JSON.parse(debenture_image_back_value).front_base64
    return debenture_image_back_base64
}

const debenture_image_obj = () => {
    return { img_front : debenture_paper_image.value["front_base64"] , img_back : debenture_paper_image.value["back_base64"] }
}

const interest_out_date_json_arr = () => {
    let interest_out_date_json_arr = JSON.stringify(interest_out_date.value)
    let interest_out_date_json_arr_parse = JSON.parse(interest_out_date_json_arr)
    return interest_out_date_json_arr_parse
}

const investment_group = () => {
    return investment.value
}

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

    // WORK --
    if (IS_INT_FREQ_EQUAL_LENGTH_INT_OUT_DATE() == false) {
        INT_FREQ_UNEQUAL_LENGTH_INT_OUT_DATE.value = true
    } 

    // //WORK --
    if(IS_START_AND_END_DATE_SAME()){
        // alert("START & END DATE CANNOT BE THE SAME")
        START_AND_END_DATE_SAME.value = true
    }

    //WORK --
    if (IS_THERE_ANY_EMPTY_VALUE_EXIST()) {
        // alert("YOU ARE MISSING SOMETHING") 
        EMPTY_VALUE_EXIST.value = true
    } else {
        // alert("Form Filled Complete")
        const int_out_date_arr = interest_out_date_json_arr()
        const inv_grp = investment_group()
        const img_obj = debenture_image_obj()
        SEND_OUT_DATA(img_obj.img_front,img_obj.img_back,int_out_date_arr,inv_grp);
    }

}

async function SEND_OUT_DATA (deben_img_front,deben_img_back,int_out_date_arr,inv_grp) {
    const form_data = new FormData()

    form_data.append("Debenture Name",debenture_name.value)
    form_data.append("Debenture Duration",duration_config.value)
    form_data.append("Debenture Code",debenture_code.value)
    form_data.append("Start Date",start_date.value)
    form_data.append("End Date",end_date.value)
    form_data.append("Interest Payment Frequency",interest_freq.value)
    form_data.append("Interest Rate (%)",interest_percent.value)
    form_data.append("Notes",detail_note.value)
    form_data.append("Total Investment (THB)",Number(inv_grp.total))
    form_data.append("Mother's Investment (THB)",Number(inv_grp.mom))
    form_data.append("Goi's Investment (THB)",Number(inv_grp.goi))
    form_data.append("Gam's Investment (THB)",Number(inv_grp.gam))
    form_data.append("Game's Investment (THB)",Number(inv_grp.game))
    form_data.append("Underwriter",agency_name.value)
    form_data.append("Registrar",registrar_name.value)
    form_data.append("Contract Front Image",deben_img_front)
    form_data.append("Contract Back Image",deben_img_back)
    form_data.append("interest_out_date",int_out_date_arr)

    

    // let data = {
    //         debenture_name : debenture_name.value,
    //         duration_config : duration_config.value,
    //         debenture_code : debenture_code.value,
    //         start_date : start_date.value,
    //         end_date : end_date.value,
    //         interest_freq : interest_freq.value,
    //         interest_percent : interest_percent.value,
    //         detail_note : detail_note.value,
    //         investment : {
    //             total : inv_grp.total,
    //             mom : inv_grp.mom,
    //             goi : inv_grp.goi,
    //             gam : inv_grp.gam,
    //             game : inv_grp.game
    //         },
    //         agency_name : agency_name.value,
    //         registrar_name : registrar_name.value,
    //         debenture_paper_image : {
    //             front_base64 : deben_img_front,
    //             back_base64 : deben_img_back
    //         },
    //         interest_out_date : int_out_date_arr
    // } 

    const config = useRuntimeConfig();
    console.log(form_data)
    try {
        store.dispatch("send_data",form_data)

        form_data.delete("Debenture Name")
        form_data.delete("Debenture Duration")
        form_data.delete("Debenture Code")
        form_data.delete("Start Date")
        form_data.delete("End Date")
        form_data.delete("Interest Payment Frequency")
        form_data.delete("Interest Rate (%)")
        form_data.delete("Notes")
        form_data.delete("Total Investment (THB)")
        form_data.delete("Mother's Investment (THB)")
        form_data.delete("Goi's Investment (THB)")
        form_data.delete("Gam's Investment (THB)")
        form_data.delete("Game's Investment (THB)")
        form_data.delete("Underwriter")
        form_data.delete("Registrar")
        form_data.delete("Contract Front Image")
        form_data.delete("Contract Back Image")
        form_data.delete("interest_out_date")
    } catch (error) {
        console.log(error)
    }
}

function close_overlay () {
    overlay_status.value = false
    EMPTY_VALUE_EXIST.value = false
    INT_FREQ_UNEQUAL_LENGTH_INT_OUT_DATE.value = false
    START_AND_END_DATE_SAME.value = false
}

const clear = () => {
    store.dispatch("append_debenture_name","")
    store.dispatch("append_duration_config","")
    store.dispatch("append_debenture_code","")
    store.dispatch("append_start_date","")
    store.dispatch("append_end_date","")
    store.dispatch("append_interest_freq","")
    store.dispatch("append_interest_percent","")
    store.dispatch("append_detail_note","")
    store.dispatch("append_total_investment",0)
    store.dispatch("append_total_invest_mom",0)
    store.dispatch("append_total_invest_goi",0)
    store.dispatch("append_total_invest_gam",0)
    store.dispatch("append_total_invest_game",0)
    store.dispatch("append_agency_name","")
    store.dispatch("append_registrar_name","")
    store.dispatch("append_debenture_paper_image_front","")
    store.dispatch("append_debenture_paper_image_back","")
    store.dispatch("append_interest_out_date_array",[])
    window.location.reload();
}

const IS_THERE_ANY_EMPTY_VALUE_EXIST = () => {

    if ( 
        (debenture_name.value && duration_config.value && debenture_code.value)
        && ( start_date.value && end_date.value )
        && ( interest_freq.value && interest_percent.value) 
        && ( agency_name.value && registrar_name.value )
        && ( debenture_image_front() && debenture_image_back() )
        && interest_out_date_json_arr()
    ) {
        return false
    } else {
        console.log(debenture_image_front())

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