<template>
        <div class="pa-5">
            <v-row>
                <v-col class="" cols="8">
                    <div>
                        <div class="font-weight-bold text-h6">
                            เลือกเดือน
                        </div>
                        <div>
                            <v-select
                                v-model="month_model"
                                label="เลือกเดือนที่จ่ายดอก"
                                :items="month_item_choice"
                                item-title="month_name"
                                item-value="month_payment_str"
                            ></v-select>
                        </div>
                    </div>
                    
                    <div>
                        <v-btn @click="add_payment_month()">เพิ่มเดือนที่มีการจ่ายดอกเบี้ย</v-btn>
                    </div>
                </v-col>
                <v-col 
                class="bg-cyan-lighten-5 rounded-sm"
                cols="4">
                    <div class="bg-cyan-lighten-4 rounded-sm pa-3">
                        <div class="font-weight-bold text-h6">เดือน ที่เลือก</div>
                    </div>
                    <div
                        v-for="(payment_month,index) in array_payment_date"
                        :key=payment_month
                    >
                        <v-chip
                            class="ma-2 pa-5" 
                            closable
                            @click:close="remove_payment_month(index)"
                        >
                            <div>{{ payment_month }}</div>
                        </v-chip>
                    </div>
                    <!-- {{ array_payment_date }} -->
                </v-col>
            </v-row>
        </div>
</template>

<script setup>
import { ref , shallowRef , onMounted } from "vue"
import { useStore } from "vuex"

const store = useStore()
const month_model = ref(null)
const day_model = ref(null)
const array_payment_date = ref([])

const month_choices = [
    { 
        "month_name" : "มกราคม" ,
        "month_payment_str" : "Jan Payment Date"  
    },
    { 
        "month_name" : "กุมภาพันธ์" ,
        "month_payment_str" : "Feb Payment Date"  
    },
    { 
        "month_name" : "มีนาคม" ,
        "month_payment_str" : "Mar Payment Date"  
    },
    { 
        "month_name" : "เมษายน" ,
        "month_payment_str" : "Apr Payment Date"  
    },
    { 
        "month_name" : "พฤษภาคม" ,
        "month_payment_str" : "May Payment Date"  
    },
    { 
        "month_name" : "มิถุนายน" ,
        "month_payment_str" : "Jun Payment Date"  
    },
    { 
        "month_name" : "กรกฎาคม" ,
        "month_payment_str" : "Jul Payment Date"  
    },
    { 
        "month_name" : "สิงหาคม" ,
        "month_payment_str" : "Aug Payment Date"  
    },
    { 
        "month_name" : "กันยายน" ,
        "month_payment_str" : "Sep Payment Date"  
    },
    { 
        "month_name" : "ตุลาคม" ,
        "month_payment_str" : "Oct Payment Date"  
    },
    { 
        "month_name" : "พฤษจิกายน" ,
        "month_payment_str" : "Nov Payment Date"  
    },
    { 
        "month_name" : "ธันวาคม" ,
        "month_payment_str" : "Dec Payment Date"  
    },

]
const month_item_choice = ref(month_choices)

const day_choices = ['1','2','3','4','5','6','7','8','9','10',
    '11','12','13','14','15','16','17','18','19','20',
    '21','22','23','24','25','26','27','28','29','30',
    '31'
]

const day_item_choice = ref(day_choices)

// watchEffect(() => {
//    store.dispatch("push_interest_out_date_array",[month_model.value])
// })

onMounted(() => {
    store.dispatch("reset_interest_out_date_array")
})


function add_payment_month () {

    let chosen_month = month_model.value

    if(array_payment_date.value.length) {
        
        const found_payment_month = array_payment_date.value.find((payment_month) => payment_month == chosen_month) 

        if (found_payment_month) {
            window.alert("ซ้ำเดือน ห้ามต่อเติม")
        } else {
            store.dispatch("push_interest_out_date_array",[chosen_month])
            array_payment_date.value.push( chosen_month )
        }
        
    } else {
        store.dispatch("push_interest_out_date_array",[chosen_month])
        array_payment_date.value.push( chosen_month )
    }

}

function remove_payment_month(index) {
    store.dispatch("remove_interest_out_date_array",index)
    array_payment_date.value.splice(index,1)
}


</script>