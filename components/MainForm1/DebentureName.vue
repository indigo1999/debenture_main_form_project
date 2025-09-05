<template>
    <div>
        <div class="bg-white rounded-lg pa-3 mt-2">
            <h2>ชื่อหุ้นกู้</h2>
            <div>
                <form @submit.prevent="submit">
                    <v-text-field
                        ref="name_input"
                        v-model="name.value.value"
                        :counter="10"
                        :error-messages="name.errorMessage.value"
                        label="ชื่อหุ้นกู้"
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