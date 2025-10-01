<template>
    <div>
        <div class="bg-white rounded-lg pa-1 mt-1">
            <div class="">
                <h2>เลือกวันที่มีการชำระดอก</h2>
                <div>
                    <!-- <VueDatePicker 
                    class="dp__theme_light"
                    locale="th"
                    @cleared="on_clear_date"
                    cancel-text="ยกเลิก"
                    select-text="ตกลง"
                    v-model="date"
                    :format="format"
                    :enable-time-picker="false"
                    month-name-format="long"
                    multi-dates
                    ></VueDatePicker> -->
                    <v-select 
                        label="เลือกวันที่"
                        :items="day_item"
                        v-model="chosen_day">
                    </v-select>
                </div>
            </div>
            <div class="">
                <h2>เลือกเดือนที่ทีการชำระดอก</h2>
                <div>
                    <v-container fluid>
                        <v-row>
                            <v-col>
                                <v-checkbox
                                    v-model="chosen_months"
                                    label="มกราคม"
                                    style=""
                                    value="Jan Payment Date"
                                ></v-checkbox>
                            </v-col>
                            <v-col>
                                <v-checkbox
                                    v-model="chosen_months"
                                    label="กุมภาพันธ์"
                                    value="Feb Payment Date"
                                ></v-checkbox>
                            </v-col>
                            <v-col>
                                <v-checkbox
                                    v-model="chosen_months"
                                    label="มีนาคม"
                                    value="Mar Payment Date"
                                ></v-checkbox>
                            </v-col>
                            <v-col>
                                <v-checkbox
                                    v-model="chosen_months"
                                    label="เมษายน"
                                    value="Apr Payment Date"
                                ></v-checkbox>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-checkbox
                                    v-model="chosen_months"
                                    label="พฤษภาคม"
                                    value="May Payment Date"
                                ></v-checkbox>
                            </v-col>
                            <v-col>
                                <v-checkbox
                                    v-model="chosen_months"
                                    label="มิถุนายน"
                                    value="Jun Payment Date"
                                ></v-checkbox>
                            </v-col>
                            <v-col>
                                <v-checkbox
                                    v-model="chosen_months"
                                    label="กรกฎาคม"
                                    value="Jul Payment Date"
                                ></v-checkbox>
                            </v-col>
                            <v-col>
                                <v-checkbox
                                    v-model="chosen_months"
                                    label="สิงหาคม"
                                    value="Aug Payment Date"
                                ></v-checkbox>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-checkbox
                                    v-model="chosen_months"
                                    label="กันยายน"
                                    value="Sep Payment Date"
                                ></v-checkbox>
                            </v-col>
                            <v-col>
                                <v-checkbox
                                    v-model="chosen_months"
                                    label="ตุลาคม"
                                    value="Oct Payment Date"
                                ></v-checkbox>
                            </v-col>
                            <v-col>
                                <v-checkbox
                                    v-model="chosen_months"
                                    label="พฤศจิกายน"
                                    value="Nov Payment Date"
                                ></v-checkbox>
                            </v-col>
                            <v-col>
                                <v-checkbox
                                    v-model="chosen_months"
                                    label="ธันวาคม"
                                    value="Dec Payment Date"
                                ></v-checkbox>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex"
// import VueDatePicker from "@vuepic/vue-datepicker"
// import '@vuepic/vue-datepicker/dist/main.css'
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