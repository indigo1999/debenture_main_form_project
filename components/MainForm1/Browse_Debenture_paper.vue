<template>
    <div>
        <div class="bg-white rounded-lg pa-3 mt-2">
            <h2>Browse Debenture paper</h2>
            <div>
                <v-file-input
                    v-model="file_front"
                    type="file"
                    label="File input"
                    placeholder="Upload your documents"
                    prepend-icon="mdi-paperclip"
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
                <div>
                    <v-img v-if="show_file_front == true" :src="image_url_front"/>
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
            <div>
                <v-file-input
                    v-model="file_back"
                    type="file"
                    label="File input"
                    placeholder="Upload your documents"
                    prepend-icon="mdi-paperclip"
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
                <div>
                    <v-img v-if="show_file_back == true" :src="image_url_back"/>
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
</template>

<script setup>
import { ref } from "vue"

const file_front = ref([])
const file_back = ref([])
const image_url_front = ref("")
const image_url_back = ref("")
const show_file_front = ref(false)
const show_file_back = ref(false)

const handle_front = async (event) => {
    const file = event.target.files[0]; // this is a real File object
    const base64 = await fileToBase64(file);
    image_url_front.value = base64
    const base64_string_front = base64.split(",")[1]
    console.log(base64_string_front)
    show_file_front.value = true
    // this.$store.commit("setFileBase64", base64);
}

const handle_clear_front = () => {
    file_front.value = []
    image_url_front.value = ""
    show_file_front.value = false
}

const handle_back = async (event) => {
    const file = event.target.files[0]; // this is a real File object
    const base64 = await fileToBase64(file);
    image_url_back.value = base64
    const base64_string_back = base64.split(",")[1]
    console.log(base64_string_back)
    show_file_back.value = true
    // this.$store.commit("setFileBase64", base64);
}

const handle_clear_back = () => {
    file_back.value = []
    image_url_back.value = ""
    show_file_back.value = false
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
</script>