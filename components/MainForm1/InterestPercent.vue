<template>
    <div>
        <div class="bg-white rounded-lg pa-3 mt-2">
            <div>
                <h2>จำนวนเปอร์เซนต์ของดอกที่ชำระ</h2>
            </div>
            <v-row align="center" no-gutters class="">
                <v-col class="bg-green" cols="5.5">
                    <div>
                        <v-text-field
                            type="number"
                            ref="percent_integer_input"
                            v-model="percent_integer.value.value"
                            :error-messages="percent_integer.errorMessage.value"
                            label="Percent หุ้นกู้ ส่วนหลัก"
                        ></v-text-field>
                    </div>
                </v-col>
                <v-col class="d-flex justify-center" cols="1">
                    <h1>.</h1>
                </v-col>
                <v-col class="bg-green" cols="5.5">
                    <div>
                        <v-text-field
                            type="number"
                            ref="percent_decimal_input"
                            v-model="percent_decimal.value.value"
                            :error-messages="percent_decimal.errorMessage.value"
                            label="Percent หุ้นกู้ ส่วนทศนิยม (optional)"
                        ></v-text-field>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script setup>
import { ref , onUpdated } from "vue"
import { useStore } from "vuex"
import { useField, useForm } from "vee-validate"

const store = useStore()

const percent_str = ref(["",""])

onUpdated(() => {
    let pc_str = percent_str.value
    let log = pc_str[0] + "." + pc_str[1]
    console.log(log)
})

const { handleSubmit, handleReset } = useForm({
    validationSchema : {
        percent_integer (value) {
            if (value?.length >= 1) {
                //store.dispatch("set_debenture_code",value);
                percent_str.value[0] = value
                console.log("main : "+percent_str.value[0])
                return true 
            }

            return "กรุณากรอก Percent ส่วนหลัก"
        },
        percent_decimal (value) {
            if (value?.length >= 1) {
                //store.dispatch("set_debenture_code",value);
                percent_str.value[1] = value
                console.log("decimal "+percent_str.value[1])
                return true 
            } else {
                //just give decimal as .000
                percent_str.value[1] = "00"
            }

        },

    }
})

const percent_integer = useField("percent_integer")
const percent_decimal = useField("percent_decimal")


</script>