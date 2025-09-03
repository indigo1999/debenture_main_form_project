<template>
    <div>
        <div class="bg-white rounded-lg pa-3 mt-2">
            <h2>Registrar</h2>
            <div>
                <form>
                    <v-text-field
                        ref="agency_input"
                        v-model="registrar_name.value.value"
                        :error-messages="registrar_name.errorMessage.value"
                        label="นายทะเบียน"
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
        registrar_name (value) {
            if (value?.length >= 1) {
                store.dispatch("set_registrar_name",value);
                return true 
            }

            return "Registrar Name needs to be filled"
        }
    }
})

const registrar_name = useField("registrar_name")


</script>