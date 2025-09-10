<template>
    <div>
        <v-sheet
        class="pa-3 mt-1"
        :elevation="9"
        rounded>
            <div class="bg-white rounded-lg pa-1 mt-1">
                <h2>ชื่อหุ้นกู้</h2>
                <div>
                    <form>
                        <v-text-field
                            ref="name_input"
                            v-model="name.value.value"
                            :error-messages="name.errorMessage.value"
                            label="ชื่อหุ้นกู้"
                            clearable
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

onUpdated(() => {
    name.value.value = store.state.debenture_name
})

const { handleSubmit, handleReset } = useForm({
    validationSchema : {
        name (value) {
            if (value?.length >= 1) {
                store.dispatch("set_debenture_name",value);
                return true 
            }

            return "กรุณากรอกชื่อหุ้นกู้"
        }
    }
})

const name = useField("name")

// const submit = handleSubmit(values => {
//     alert(JSON.stringify(values,null,2));
// })


</script>