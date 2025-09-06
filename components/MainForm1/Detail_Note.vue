<template>
    <div>
        <v-sheet
        class="pa-3 mt-1"
        :elevation="9"
        rounded>
            <div class="bg-white rounded-lg pa-1 mt-1">
                <h2>รายละเอียดประกอบ (หากมี)</h2>
                <div>
                    <v-container fluid>
                        <v-textarea
                        clear-icon="mdi-close-circle"
                        label="พิมพ์หมายเหตุ (ถ้ามี)"
                        v-model="detail_note"
                        clearable
                        ></v-textarea>
                    </v-container>
                </div>
            </div>
        </v-sheet>
    </div>
</template>

<script>
import { ref } from "vue"
import { useStore } from "vuex"
import { useField, useForm } from "vee-validate"

export default {
    data : () => {
        return {
            detail_note : ""
        }
    },
    props :{

    },
    watch : {
        detail_note(value) {
            this.$store.dispatch("set_detail_note",value)
        }
    }

}




</script>