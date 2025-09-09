<template>
    <div>
        <v-sheet
        class="pa-3 mt-1"
        :elevation="9"
        rounded>
            <div class="bg-white rounded-lg pa-1 mt-1">
                <h2>เลือกรูปภาพใบหุ้นกู้ ส่วนหน้า และ ส่วนหลัง</h2>
                <div>
                    <v-file-input
                        class="mt-5"
                        v-model="file_front"
                        type="file"
                        label="เลือกรูปใบหุ้นกู้ ส่วนด้านหน้า"
                        placeholder="เลือกรูปใบหุ้นกู้ ส่วนด้านหน้า"
                        prepend-icon="mdi-camera"
                        @change="handle_front"
                        @click:clear="handle_clear_front"
                    >
                        <template v-slot:selection="{ fileNames }">
                        <template v-for="fileName in fileNames" :key="fileName">
                            <v-chip
                            class="me-2"
                            color="primary"
                            size="small"
                            label
                            >
                            {{ fileName }}
                            </v-chip>
                        </template>
                        </template>
                    </v-file-input>
                    <div class="bg-green rounded">
                        <div class="d-flex justify-center">
                            <v-img 
                            v-if="show_file_front == true" 
                            :src="image_url_front"
                            class="mx-auto"
                            height="300"
                            max-width="500"/>
                            <v-img
                                v-if="show_file_front == false"
                                class="mx-auto"
                                height="300"
                                lazy-src="https://picsum.photos/id/11/100/60"
                                max-width="500"
                                src="https://bad.src/not/valid"
                            >
                                <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular
                                    color="grey-lighten-4"
                                    indeterminate
                                    ></v-progress-circular>
                                </div>
                                </template>
                            </v-img>
                        </div>
                    </div>
                </div>
                <div>
                    <v-file-input
                        class="mt-9"
                        v-model="file_back"
                        type="file"
                        label="เลือกรูปใบหุ้นกู้ ส่วนด้านหลัง"
                        placeholder="เลือกรูปใบหุ้นกู้ ส่วนด้านหลัง"
                        prepend-icon="mdi-camera"
                        @change="handle_back"
                        @click:clear="handle_clear_back"
                    >
                        <template v-slot:selection="{ fileNames }">
                        <template v-for="fileName in fileNames" :key="fileName">
                            <v-chip
                            class="me-2"
                            color="primary"
                            size="small"
                            label
                            >
                            {{ fileName }}
                            </v-chip>
                        </template>
                        </template>
                    </v-file-input>
                    <div class="bg-green rounded">
                        <div class="d-flex justify-center">
                            <v-img 
                            v-if="show_file_back == true" 
                            :src="image_url_back"
                            class="mx-auto"
                            height="300"
                            max-width="500"/>
                            <v-img
                                v-if="show_file_back == false"
                                class="mx-auto"
                                height="300"
                                lazy-src="https://picsum.photos/id/11/100/60"
                                max-width="500"
                                src="https://bad.src/not/valid"
                            >
                                <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular
                                    color="grey-lighten-4"
                                    indeterminate
                                    ></v-progress-circular>
                                </div>
                                </template>
                            </v-img>
                        </div>
                    </div>
                </div>
            </div>
        </v-sheet>
        <v-overlay 
        class="align-center justify-center" 
        v-model="overlay_image_alert_status_same">
            <div>
                <v-card color="#EF5350" title="แจ้งเตือน">
                    <v-card-text>
                        <Browse_debenture_paper_alert/>
                    </v-card-text>
                </v-card>
            </div>
            <div class="d-flex justify-end ma-1 mt-2">
                <v-btn
                @click="overlay_image_alert_status_same = !overlay_image_alert_status_same">
                    ปิดหน้าต่างนี้
                </v-btn>
            </div>
        </v-overlay>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex"
import Browse_debenture_paper_alert from "./Browse_debenture_paper_alert/browse_image_alert.vue"

const file_front = ref([])
const file_back = ref([])
const image_url_front = ref("")
const image_url_back = ref("")
const show_file_front = ref(false)
const show_file_back = ref(false)
const overlay_image_alert_status_same = ref(false)

const store = useStore()

watchEffect(() => {
    if ( image_url_front.value && image_url_back.value ) {
        if(IS_FRONT_BACK_IMG_SAME()){
            overlay_image_alert_status_same.value = true
            file_front.value = []
            image_url_front.value = ""
            file_back.value = []
            image_url_back.value = ""
            show_file_front.value = false
            show_file_back.value = false
            store.dispatch("set_debenture_paper_image_front","")
            store.dispatch("set_debenture_paper_image_back","")
        } else {
            alert("Correct Insertion don't forget to verify your images again")
        }
    }
})

const handle_front = async (event) => {
    const file = event.target.files[0]; // this is a real File object
    const base64 = await fileToBase64(file);
    image_url_front.value = base64
    const base64_string_front = base64.split(",")[1]
    //console.log(base64_string_front)
    show_file_front.value = true
    store.dispatch("set_debenture_paper_image_front",base64_string_front)
    // this.$store.commit("setFileBase64", base64);
}

const handle_clear_front = () => {
    file_front.value = []
    image_url_front.value = ""
    show_file_front.value = false
    store.dispatch("set_debenture_paper_image_front","")
    
}

const handle_back = async (event) => {
    const file = event.target.files[0]; // this is a real File object
    const base64 = await fileToBase64(file);
    image_url_back.value = base64
    const base64_string_back = base64.split(",")[1]
    //console.log(base64_string_back)
    show_file_back.value = true
    store.dispatch("set_debenture_paper_image_back",base64_string_back)
    // this.$store.commit("setFileBase64", base64);
}

const handle_clear_back = () => {
    file_back.value = []
    image_url_back.value = ""
    show_file_back.value = false
    store.dispatch("set_debenture_paper_image_back","")
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result); // this will be base64 string
    };

    reader.onerror = reject;
    reader.readAsDataURL(file)// reads file as base64 encoded string
  });
}

function IS_FRONT_BACK_IMG_SAME () {
    return ( image_url_front.value == image_url_back.value )
}
</script>