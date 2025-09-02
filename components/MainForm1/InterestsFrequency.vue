<template>
    <div>
        <div class="bg-white rounded-lg pa-3 mt-2">
            <h2>Interest Frequency</h2>
            <div>
                <v-row>
                    <v-col class="bg-green rounded-lg pa-3 mt-2">
                        ความถี่การจ่ายดอก
                    </v-col>
                    <v-col class="bg-green rounded-lg pa-3 mt-2">
                        <v-select
                            v-model="select_frequency.value.value"
                            :error-messages="select_frequency.errorMessage.value"
                            :items="select_frequency_items"
                            label="เลือกจำนวนครั้ง"
                        ></v-select>
                    </v-col>
                    <v-col class="bg-green rounded-lg pa-3 mt-2">
                        ครั้ง / ปี
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