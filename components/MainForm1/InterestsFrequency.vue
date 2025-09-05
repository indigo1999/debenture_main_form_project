<template>
    <div>
        <div class="bg-white rounded-lg pa-3 mt-2">
            <h2>ความถี่การชำระดอก</h2>
            <div>
                <v-row 
                align="center"
                no-gutters>
                    <v-col class="bg-green rounded-lg pa-3 mt-2">
                        <v-row>
                            <v-select
                                class="ma-2 pa-2 align-self-center"
                                max-width="'100%'"
                                v-model="select_frequency.value.value"
                                :error-messages="select_frequency.errorMessage.value"
                                :items="select_frequency_items"
                                label="เลือกจำนวนครั้ง"
                            ></v-select>
                            <v-col class="pa-5">
                                <h1>
                                : ครั้ง / ปี
                                </h1>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex"
import { useField, useForm } from 'vee-validate'

const store = useStore()

const select_frequency_items = ref(['1','2','3','4'])

const { handleSubmit , handleReset } = useForm({
    validationSchema : {
        select_frequency (value) {
            if (value) {
                const interest_freq = 12 / parseInt(value)

                if(interest_freq == 12){
                    store.dispatch("set_interest_freq"," 1 ปี")
                } else {
                    store.dispatch("set_interest_freq",`${interest_freq} เดือน`)
                }
                
                return true
            }
        }
    }
})

const select_frequency = useField("select_frequency")

</script>