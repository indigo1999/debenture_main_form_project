<template>
    <div>
        <div>
            <v-row>
                <v-col class="bg-red d-flex justify-center" cols="2">
                    <v-btn size="x-large" @click="clear" >CLEAR</v-btn>
                </v-col>
                <v-col class="bg-green" cols="8">

                </v-col>
                <v-col class="bg-red d-flex justify-center" cols="2">
                    <v-btn size="x-large" @click="submit" >SUBMIT</v-btn>
                </v-col>
            </v-row>  
        </div>

    </div>

</template>

<script setup>
import { ref , computed } from "vue"
import { useStore } from "vuex"

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

const submit = () => {
    // alert(JSON.stringify(investment.value))
    //console.log(JSON.stringify(debenture_paper_image.value))

    //WORK
    // if (IS_THERE_ANY_EMPTY_VALUE_EXIST == true) {
    //     alert("YOU ARE MISSING SOMETHING")
    // } else {
    //     alert("SUCCESS IN FILLING OUT FORM")
    // }

    if (IS_INT_FREQ_EQUAL_LENGTH_INT_OUT_DATE) {
        IS_INT_FREQ_EQUAL_LENGTH_INT_OUT_DATE()
        alert("SUCCESS IN COMPARISON OF INT FREQ & INT OUT DATE")
    } else {
        alert("YOU NEED TO CHECK ON INT FREQ OR INT OUT DATE")
    }

    //WORK
    // if(IS_START_AND_END_DATE_SAME){
    //     alert("START & END DATE CANNOT BE THE SAME")
    // } else {
    //     alert("SUCCESS IN COMPARISON OF START & END DATE")
    // }

    // if(IS_DEBEN_IMAGE_FRONT_BACK_SAME){
    //     alert("YOU NEED TO RECHECK AGAIN WITH THOSE INSERTED IMAGES")
    // }else{
    //     alert("SUCCESS IN INSERTION OF FRONT AND BACK IMAGES")
    // }
}

const clear = () => {

}

const IS_THERE_ANY_EMPTY_VALUE_EXIST = () => {
    const debenture_image_front = JSON.stringify(debenture_paper_image.value).front_base64
    const debenture_image_back = JSON.stringify(debenture_paper_image.value).back_base64
    const interest_out_date_json_arr = JSON.stringify(interest_out_date.value)

    if (debenture_name.value.length && duration_config.value.length && debenture_code.value.length
        && start_date.value.length && end_date.value.length
        && interest_freq.value.length && interest_percent.value.length && agency_name.value.length && registrar_name.value.length
        && debenture_image_front && debenture_image_back
        && interest_out_date_json_arr.length
        && IS_VALID_INVESTMENT_RATIO
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
    alert(`${ parseInt(interest_freq.value) } == ${interest_out_date.value.length}`)
    return ( parseInt(interest_freq.value) === parseInt(interest_out_date.value.length) ) 
}

const IS_START_AND_END_DATE_SAME = () => {
    return ( start_date.value == end_date.value )
}

const IS_DEBEN_IMAGE_FRONT_BACK_SAME = () => {
    const debenture_image_front = JSON.stringify(debenture_paper_image.value).front_base64
    const debenture_image_back = JSON.stringify(debenture_paper_image.value).back_base64
    return ( debenture_image_front == debenture_image_back  )
} 

</script>