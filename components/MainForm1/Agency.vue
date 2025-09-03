<template>
    <div>
        <div class="bg-white rounded-lg pa-3 mt-2">
            <h2>Agency</h2>
            <div>
                <form>
                    <v-text-field
                        ref="agency_input"
                        v-model="agency_name.value.value"
                        :error-messages="agency_name.errorMessage.value"
                        label="ชื่อผู้แทนจัดจำหน่าย"
                    ></v-text-field>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "vuex"
import { useField, useForm } from "vee-validate"

const store = useStore()

const { handleSubmit, handleReset } = useForm({
    validationSchema : {
        agency_name (value) {
            if (value?.length >= 1) {
                store.dispatch("set_agency_name",value);
                return true 
            }

            return "Agency Name needs to be filled"
        }
    }
})

const agency_name = useField("agency_name")


</script>