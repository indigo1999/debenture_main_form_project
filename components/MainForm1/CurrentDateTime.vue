<template>
    <div>
        <div class="bg-white rounded-lg pa-3 mt-2">
            <!-- <div class="d-flex justify-center">
                <h2> {{ formattedTime }}</h2>
            </div> -->
            <div class="d-flex justify-center">
                <h2> {{ current_date_dd_mm_yyy() }}</h2>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { useTicker } from '../../composables/useTicker'

const current_date_time = ref("")
const current_date = ref("")
const ticker = useTicker()

const formattedTime = computed(() => {
    return "เวลา " + new Date(ticker.value).toLocaleTimeString().split(" ")[0];
})

const formattedDate = computed(() => {
      return new Date(ticker.value).toLocaleDateString();
});

function current_date_dd_mm_yyy () {
    const set_month = {
        "1" : { "eng" : "January" , "th" : "มกราคม"},
        "2" : { "eng" : "February" , "th" : "กุมภาพันธ์"},
        "3" : { "eng" : "March" , "th" : "มีนาคม"},
        "4" : { "eng" : "April" , "th" : "เมษายน"},
        "5" : { "eng" : "May" , "th" : "พฤษภาคม"},
        "6" : { "eng" : "June" , "th" : "มิถุนายน"},
        "7" : { "eng" : "July" , "th" : "กรกฎาคม"},
        "8" : { "eng" : "August" , "th" : "สิงหาคม"},
        "9" : { "eng" : "September" , "th" : "กันยายน"},
        "10" : { "eng" : "October" , "th" : "ตุลาคม"},
        "11" : { "eng" : "November" , "th" : "พฤษจิกายน"},
        "12" : { "eng" : "December" , "th" : "ธันวาคม"},
    }
    const current_date_ = formattedDate.value.split("/")
    const dd = current_date_[1]
    const mm = set_month[current_date_[0]]['th']
    const yyyy = parseInt(current_date_[2]) + 543


    return `วันที่ ${dd} เดือน ${mm} พ.ศ. ${yyyy} `
}

// watch(current_time,(ct) => {
//     let date_and_time = ct.split(",")
//     current_time = date_and_time[0]
// })

</script>