<template>
    <div>
        <div class="bg-white rounded-lg pa-1 mt-1">
            <div class="">
                <h2>เลือกวันที่มีการชำระดอก</h2>
                <div class="bg-indigo-accent-4">
                    <div>
                        <v-container fluid>
                            <p>Selected Button: {{ payment_choice_radio }}</p>
                            <v-radio-group v-model="payment_choice_radio">
                                <v-radio label="จ่ายตามวันที่ปกติ" value="normal"></v-radio>
                                <v-radio label="จ่ายเฉพาะวันสุดท้ายของเดือน" value="abnormal"></v-radio>
                            </v-radio-group>
                        </v-container>
                    </div>
                </div>
                <div class="bg-blue">
                    <div v-if="payment_choice_radio == 'normal'">
                        <v-card>
                            <Normal_Payment/>
                        </v-card>
                    </div>
                    <div v-if="payment_choice_radio == 'abnormal'">
                        <v-card>
                            <Abnormal_Payment/>
                        </v-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex"

import Normal_Payment from "../components/MainForm2/Normal_Payment.vue"
import Abnormal_Payment from "../components/MainForm2/Abnormal_Payment.vue"

const payment_choice_radio = ref("normal")




const chosen_day = ref(null)
const day_item = ['1','2','3','4','5','6','7','8','9','10',
    '11','12','13','14','15','16','17','18','19','20',
    '21','22','23','24','25','26','27','28','29','30',
    '31'
]

const chosen_months = ref([])


const store = useStore();

// const date = ref();

const on_clear_date = () => {
    store.dispatch("set_interest_out_date_array",[])
}

watchEffect(() => {
   store.dispatch("set_interest_out_date_array",[chosen_months.value,chosen_day.value])
})
// const format = (date) => {
//     if (!date || date.length == 0) {
//         return "";
//     }
//     const return_date = date.map(date => {
//                             const day = date.getDate();
//                             const month = date.getMonth() + 1;
//                             const year_porsor = date.getFullYear() + 543;
//                             const date_str = `${day}/${month}/${year_porsor}`
                            
//                             return date_str;
//                         }).join(",")

//     store.dispatch("set_interest_out_date_array",return_date.split(","))
//     return return_date
// }
</script>

<style>
/*
.dp__theme_light {
    --dp-background-color: #fff !important;
    --dp-text-color: #212121;
    --dp-hover-color: #f3f3f3 !important;
    --dp-hover-text-color: #212121;
    --dp-hover-icon-color: #959595;
    --dp-primary-color: #1976d2;
    --dp-primary-disabled-color: #6bacea;
    --dp-primary-text-color: #f8f5f5;
    --dp-secondary-color: #c0c4cc;
    --dp-border-color: #ddd;
    --dp-menu-border-color: #ddd;
    --dp-border-color-hover: #aaaeb7;
    --dp-border-color-focus: #aaaeb7;
    --dp-disabled-color: #f6f6f6;
    --dp-scroll-bar-background: #f3f3f3;
    --dp-scroll-bar-color: #959595;
    --dp-success-color: #76d275;
    --dp-success-color-disabled: #a3d9b1;
    --dp-icon-color: #959595;
    --dp-danger-color: #ff6f60;
    --dp-marker-color: #ff6f60;
    --dp-tooltip-color: #fafafa;
    --dp-disabled-color-text: #8e8e8e;
    --dp-highlight-color: rgb(25 118 210 / 10%);
    --dp-range-between-dates-background-color: var(--dp-hover-color, #f3f3f3);
    --dp-range-between-dates-text-color: var(--dp-hover-text-color, #212121);
    --dp-range-between-border-color: var(--dp-hover-color, #f3f3f3);
}
*/
</style>