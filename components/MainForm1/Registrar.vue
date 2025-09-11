<template>
    <div>
        <v-sheet
        class="pa-3 mt-1"
        :elevation="9"
        rounded>
            <div class="bg-white rounded-lg pa-1 mt-1">
                <h2>นายทะเบียน</h2>
                <div>
                    <form>
                        <v-text-field
                            ref="agency_input"
                            v-model="registrar_name.value.value"
                            :error-messages="registrar_name.errorMessage.value"
                            label="นายทะเบียน"
                            clearable
                            @click:clear="on_clear"
                        ></v-text-field>
                    </form>
                </div>
            </div>
        </v-sheet>
    </div>
</template>

<script setup>
import { useStore } from "vuex"
import { useField, useForm } from "vee-validate"

const store = useStore()

const on_clear = () => {
    store.dispatch("set_registrar_name","")
}

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