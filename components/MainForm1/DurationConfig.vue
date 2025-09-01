<template>
    <div>
        <div class="bg-white rounded-lg pa-3 mt-2">
            <h2> Duration Config</h2>
            <div>
                <form @submit.prevent="submit">
                    <v-row>
                        <v-col class="bg-green rounded-lg pa-3 mt-2">
                            ระยะเวลาหุ้นกู้
                        </v-col>
                        <v-col class="bg-green rounded-lg pa-3 mt-2">
                            <v-select
                                v-model="select_year.value.value"
                                :error-messages="select_year.errorMessage.value"
                                :items="select_year_items"
                                label="เลือกจำนวนปี"
                            ></v-select>
                        </v-col>
                        <v-col class="bg-green rounded-lg pa-3 mt-2">
                            ปี
                        </v-col>
                        <v-col class="bg-green rounded-lg pa-3 mt-2">
                            <v-select
                                v-model="select_month.value.value"
                                :error-messages="select_month.errorMessage.value"
                                :items="select_month_items"
                                label="เลือกจำนวนเดือน"
                            ></v-select>
                        </v-col>
                        <v-col class="bg-green rounded-lg pa-3 mt-2">
                            เดือน
                        </v-col>
                        <v-col class="bg-green rounded-lg pa-3 mt-2">
                            <v-select
                                v-model="select_day.value.value"
                                :error-messages="select_day.errorMessage.value"
                                :items="select_day_items"
                                label="เลือกจำนวนวัน"
                            ></v-select>
                        </v-col>
                        <v-col class="bg-green rounded-lg pa-3 mt-2">
                            วัน
                        </v-col>
                    </v-row>
                    <!-- <v-row>
                        <div>
                            <v-btn
                            class="me-4"
                            @click="submit_duration_config"
                            >
                            submit
                            </v-btn>
                        </div>
                    </v-row> -->
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref,onMounted } from "vue"
import { useStore } from "vuex"
import { useField, useForm } from 'vee-validate'
import { validateDateFormat } from "../../services/MainForm1/DurationConfig_service"

const store = useStore();

const initial_date = { year: "", month: "", day: "" }

const { handleSubmit , handleReset} = useForm({
    validationSchema : {
        select_year (value) {
            if (value) {
                initial_date.year = value
                store.dispatch("set_duration_config_year",initial_date.year)
                return true
            }

            return 'กรุณาเลือกจำนวนปี'
        },
        select_month (value) {
            if (value) {
                initial_date.month = value
                store.dispatch("set_duration_config_month",initial_date.month)
                return true
            }

            return "กรุณาเลือกจำนวนเดือน"
        },
        select_day (value) {
            if (value) {
                initial_date.day = value
                store.dispatch("set_duration_config_day",initial_date.day)
                return true
            }

            return "กรุณาเลือกจำนวนวัน"
        }
    }
})

const select_year = useField("select_year");
const select_month = useField("select_month")
const select_day = useField("select_day")

const select_year_items = ref([
    '0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'
])

const select_month_items = ref([
    '0','1','2','3','4','5','6','7','8','9','10','11','12'
])

const select_day_items = ref([
    '0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20',
    '21','22','23','24','25','26','27','28','29','30','31'
])

const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
})



</script>