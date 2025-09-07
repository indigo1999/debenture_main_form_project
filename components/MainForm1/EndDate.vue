<template>
    <div>
        <div class="bg-white rounded-lg pa-1 mt-1">
            <h2>วันเดือนปีที่หมดสัญญา</h2>
            <div>
                <VueDatePicker 
                class="dp__theme_light"
                locale="th"
                cancel-text="ยกเลิก"
                select-text="ตกลง"
                v-model="date"
                :format="format"
                month-name-format="long"
                ></VueDatePicker>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex"
import VueDatePicker from "@vuepic/vue-datepicker"
import '@vuepic/vue-datepicker/dist/main.css'

const store = useStore();

const date = ref(new Date());

const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year_porsor = date.getFullYear() + 543;
  const start_end_str = `${day}/${month}/${year_porsor}`
  store.dispatch("set_end_date",start_end_str)
  return start_end_str;
}
</script>

<style>

.dp__theme_light {
    --dp-background-color: #fcbfdd;
    --dp-text-color: #212121;
    --dp-hover-color: #f3f3f3;
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