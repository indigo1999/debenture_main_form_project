<template>
    <div>
        <v-sheet
        class="pa-3 mt-1"
        :elevation="9"
        rounded>
            <div class="bg-white rounded-lg pa-1 mt-1">
                <h2>ระยะเวลาหุ้นกู้</h2>
                <div>
                    <form @submit.prevent="submit">
                        <v-row
                        align="center"
                        no-gutters
                        class="ga-7">
                            <v-col 
                            class="bg-green rounded-lg pa-3 mt-2" 
                            cols="4">
                                <h3>
                                    เลือกจำนวนปี
                                </h3>
                                <v-select
                                    class="ma-2 pa-2 align-self-center"
                                    max-width="'100%'"
                                    v-model="select_year.value.value"
                                    :error-messages="select_year.errorMessage.value"
                                    :items="select_year_items"
                                    label="กี่ปี"
                                ></v-select>
                            </v-col>
                            <v-col class="bg-green rounded-lg pa-3 mt-2">
                                <h3>
                                    เลือกจำนวนเดือน
                                </h3>
                                <v-select
                                    class="ma-2 pa-2 align-self-center"
                                    v-model="select_month.value.value"
                                    :error-messages="select_month.errorMessage.value"
                                    :items="select_month_items"
                                    label="กี่เดือน"
                                ></v-select>
                            </v-col>
                            <v-col class="bg-green rounded-lg pa-3 mt-2">
                                <h3>
                                    เลือกจำนวนวัน
                                </h3>
                                <v-select
                                    class="ma-2 pa-2 align-self-center"
                                    v-model="select_day.value.value"
                                    :error-messages="select_day.errorMessage.value"
                                    :items="select_day_items"
                                    label="กี่วัน"
                                ></v-select>
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
        </v-sheet>
    </div>
</template>

<script setup>
import { ref,onMounted } from "vue"
import { useStore } from "vuex"
import { useField, useForm } from 'vee-validate'
import { validateDateFormat } from "../../services/MainForm1/DurationConfig_service"

const store = useStore();

const initial_date = ref({ year: "", month: "", day: "" })


watchEffect(() => {
    const valid_date_object = validateDateFormat(initial_date.value)
    const is_valid_date = valid_date_object.valid
    const day = valid_date_object.days
    const month = valid_date_object.months
    const year = valid_date_object.years

    const duration = `${year} ปี ${month} เดือน  ${day} วัน`    
    is_valid_date ? store.dispatch("set_duration_config",duration)
    : console.log("INVALID DATE")
    
})

const { handleSubmit , handleReset} = useForm({
    validationSchema : {
        select_year (value) {
            if (value) {
                initial_date.value.year = value
                return true
            }

            return 'กรุณาเลือกจำนวนปี'
        },
        select_month (value) {
            if (value) {
                initial_date.value.month = value
                return true
            }

            return "กรุณาเลือกจำนวนเดือน"
        },
        select_day (value) {
            if (value) {
                initial_date.value.day = value
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