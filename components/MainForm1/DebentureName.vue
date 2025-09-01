<template>
    <div>
        <div class="bg-white rounded-lg pa-3 mt-2">
            <h2> Debenture name</h2>
            <div>
                <form ref="form_name_ref" @submit.prevent="submit">
                    <v-text-field
                        ref="name_input"
                        v-model="name.value.value"
                        :counter="10"
                        :error-messages="name.errorMessage.value"
                        label="Name"
                    ></v-text-field>
                    <!-- <v-btn
                        class="me-4"
                        @click="submit"
                    >
                        submit
                    </v-btn> -->
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "vuex"
import { ref } from "vue"
import { useField, useForm } from "vee-validate"

const store = useStore()

const { handleSubmit, handleReset } = useForm({
    validationSchema : {
        name (value) {
            if (value?.length >= 2) return true 

            return "Name needs to be at least 2 characters."
        }
    }
})

const name = useField("name")

const submit = handleSubmit(values => {
    alert(JSON.stringify(values,null,2));
    store.dispatch("set_debenture_name",values.name);
})


</script>