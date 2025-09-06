<template>
    <div>
        <v-sheet
        class="pa-3 mt-1"
        :elevation="9"
        rounded>
            <div class="bg-white rounded-lg pa-1 mt-1">
                <h2>รหัสหุ้นกู้</h2>
                <div>
                    <form>
                        <v-text-field
                            ref="name_input"
                            v-model="debenture_code.value.value"
                            :error-messages="debenture_code.errorMessage.value"
                            label="รหัสหุ้นกู้"
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

const { handleSubmit, handleReset } = useForm({
    validationSchema : {
        debenture_code (value) {
            if (value?.length >= 2) {
                store.dispatch("set_debenture_code",value);
                return true 
            }

            return "Name needs to be at least 2 characters."
        }
    }
})

const debenture_code = useField("debenture_code")

// const submit = handleSubmit(values => {
//     alert(JSON.stringify(values,null,2));
// })


</script>