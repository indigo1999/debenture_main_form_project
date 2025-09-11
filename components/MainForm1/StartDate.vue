<template>
    <div>
        <div class="bg-white rounded-lg pa-1 mt-1">
            <h2>วันที่เริ่มสัญญา</h2>
            <div>
                <VueDatePicker 
                class="dp__theme_light"
                locale="th"
                @cleared="on_clear_date"
                cancel-text="ยกเลิก"
                select-text="ตกลง"
                v-model="date"
                :format="format"
                month-name-format="long"
                ></VueDatePicker>
            </div>
        </div>

        <v-overlay
          v-model="INVALID_DATE_OVERLAY_STATUS"
          :absolute="true"
          class="d-flex justify-center position-sticky"
          contained
        >
            <v-card color="#EF5350" title="แจ้งเตือน">
                <v-card-text>
                    <div>
                        <Invalid_start_date/>
                    </div>
                </v-card-text>
            </v-card>
            <div class="d-flex justify-end ma-1 mt-2">
                <v-btn
                    color="red"
                    @click="close_overlay"
                >
                    ปิดการแจ้งเตือน
                </v-btn>
            </div>
        </v-overlay>
    </div>

    
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex"
import VueDatePicker from "@vuepic/vue-datepicker"
import Invalid_start_date from "./Start_date_alert/Invalid_start_date.vue"
import '@vuepic/vue-datepicker/dist/main.css'

const store = useStore();

const date = ref("");
const INVALID_DATE_OVERLAY_STATUS = ref(false) 

const close_overlay = () => {
    INVALID_DATE_OVERLAY_STATUS.value = false
    date.value = ""
    store.dispatch("set_start_date","")
}

const on_clear_date = () => {
    store.dispatch("set_start_date","")
}

onMounted(() => {
    store.dispatch("set_start_date","")
})

const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year_porsor = date.getFullYear() + 543;


  const day_now = new Date().getDate();
  const month_now = new Date().getMonth() + 1;
  const year_now = new Date().getFullYear()

  if ( date.getFullYear() - year_now >= 0) {
        if ( month - month_now >= 0) {
                if (day - day_now >= 0) {
                    console.log("VALID DATE")
                    const start_date_str = `${day}/${month}/${year_porsor}`
                    store.dispatch("set_start_date",start_date_str)
                    return start_date_str;
                } else {
                    INVALID_DATE_OVERLAY_STATUS.value = true
                    // console.log("day must not be in the past from the current" + (day - day_now))
                }
        } else {
            INVALID_DATE_OVERLAY_STATUS.value = true
            // console.log("Month must not be in the past from the current" + ( month - month_now ))
        }
  } else {
    INVALID_DATE_OVERLAY_STATUS.value = true
    // console.log("Year must not be in the past from the current" + year_now)
  }
}
</script>

<style>

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

</style>