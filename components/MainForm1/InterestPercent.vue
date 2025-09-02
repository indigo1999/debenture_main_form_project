<template>
    <div>
        <div class="bg-white rounded-lg pa-3 mt-2">
            <div>
                <h2>Interest Percent</h2>
            </div>
            <v-row>
                <v-col>
                    <div>
                        <v-text-field
                            ref="percent_integer_input"
                            v-model="percent_integer.value.value"
                            :error-messages="percent_integer.errorMessage.value"
                            label="Percent หุ้นกู้ ส่วนหลัก"
                        ></v-text-field>
                    </div>
                </v-col>
                <v-col>
                    <h1>.</h1>
                </v-col>
                <v-col>
                    <div>
                        <v-text-field
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
import { useStore } from "vuex"
import { useField, useForm } from "vee-validate"

const store = useStore()

const { handleSubmit, handleReset } = useForm({
    validationSchema : {
        percent_integer (value) {
            if (value?.length >= 1) {
                //store.dispatch("set_debenture_code",value);
                return true 
            }

            return "กรุณากรอก Percent ส่วนหลัก"
        },
        percent_decimal (value) {
            if (value?.length >= 1) {
                //combine decimal points

                //store.dispatch("set_debenture_code",value);
                return true 
            } else {
                //just give decimal as .000
            }

        },

    }
})

const percent_integer = useField("percent_integer")
const percent_decimal = useField("percent_decimal")


</script>