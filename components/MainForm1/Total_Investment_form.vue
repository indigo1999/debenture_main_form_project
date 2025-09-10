<template>
    <div>
        <div class="bg-white rounded-lg pa-2 mt-1">
            <div>
                <h2>จำนวนเงินต้น</h2>
            </div>
            <div>
                <v-text-field
                    type="number"
                    v-model="total_investment_all"
                    hide-details="auto"
                    label="กรอกจำนวนเงินต้น"
                    clearable
                    @input="on_input_total"
                ></v-text-field>
            </div>
        </div>
        <div>
            <v-row>
                <v-col>
                    <div class="bg-white rounded-lg pa-3 mt-2">
                        <div>
                            <h2>จำนวนเงินต้นของแม่</h2>
                        </div>
                        <div>
                            <v-text-field
                                type="number"
                                v-model="total_investment_mom"
                                hide-details="auto"
                                label="กรอกจำนวนเงินต้นของแม่"
                                clearable
                                @input="on_input_mom"
                            ></v-text-field>
                        </div>
                    </div>
                </v-col>
                <v-col>
                    <div class="bg-white rounded-lg pa-3 mt-2">
                        <div>
                            <h2>จำนวนเงินต้นของก้อย</h2>
                        </div>
                        <div>
                            <v-text-field
                                type="number"
                                v-model="total_investment_goi"
                                hide-details="auto"
                                label="กรอกจำนวนเงินต้นของก้อย"
                                clearable
                                @input="on_input_goi"
                            ></v-text-field>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <div class="bg-white rounded-lg pa-3 mt-1">
                        <div>
                            <h2>จำนวนเงินต้นของแก้ม</h2>
                        </div>
                        <div>
                            <v-text-field
                                type="number"
                                v-model="total_investment_gam"
                                hide-details="auto"
                                label="กรอกจำนวนเงินต้นของแก้ม"
                                clearable
                                @input="on_input_gam"
                            ></v-text-field>
                        </div>
                    </div>
                </v-col>
                <v-col>
                    <div class="bg-white rounded-lg pa-3 mt-1">
                        <div>
                            <h2>จำนวนเงินต้นของเกม</h2>
                        </div>
                        <div>
                            <v-text-field
                                type="number"
                                v-model="total_investment_game"
                                hide-details="auto"
                                label="กรอกจำนวนเงินต้นของเกม"
                                clearable
                                @input="on_input_game"
                            ></v-text-field>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>

        <v-overlay
          v-model="invalid_ratio_status"
          class="align-center justify-center"
          contained
        >
            <div>
                <ALERT_WRONG_RATIO/>
            </div>
            <div class="d-flex justify-end ma-1 mt-2">
                <v-btn
                    color="red"
                    @click="invalid_ratio_status = false"
                >
                    ปิดการแจ้งเตือน
                </v-btn>
            </div>
        </v-overlay>
    </div>
</template>

<script setup>
import ALERT_WRONG_RATIO from "./Total_Investment_alerts/alert_wrong_ratio.vue"

import { ref } from "vue"
import { useStore } from "vuex"
import { useDebounceFn } from "@vueuse/core"

const store = useStore()

const total_investment_all = ref("")
const total_investment_mom = ref("")
const total_investment_goi = ref("")
const total_investment_gam = ref("")
const total_investment_game = ref("")

const total_investment_all_num = ref(0)
const total_investment_mom_num = ref(0)
const total_investment_goi_num = ref(0)
const total_investment_gam_num = ref(0)
const total_investment_game_num = ref(0)

const invalid_ratio_status = ref(false)

const on_input_total = useDebounceFn(() => {
   total_investment_all_num.value = Number(total_investment_all.value)
},40000)

const on_input_mom = useDebounceFn(() => {
   total_investment_mom_num.value = Number(total_investment_mom.value)
},10000)

const on_input_goi = useDebounceFn(() => {
   total_investment_goi_num.value = Number(total_investment_goi.value)
},10000)

const on_input_gam = useDebounceFn(() => {
   total_investment_gam_num.value = Number(total_investment_gam.value)
},10000)

const on_input_game = useDebounceFn(() => {
   total_investment_game_num.value = Number(total_investment_game.value)
},10000)


function alert_invalid_ratio (all_,mom_,goi_,gam_,game_) {

    const all = Number(all_)
    const mom = Number(mom_)
    const goi = Number(goi_)
    const gam = Number(gam_)
    const game = Number(game_)

    const is_valid = ((all) == (mom + goi + gam + game))
    if (is_valid) {
        invalid_ratio_status.value = false
        // alert(`${all} ${mom} ${goi} ${gam} ${game}`)
        store.dispatch("set_total_investment",all)
        store.dispatch("set_total_invest_mom",mom)
        store.dispatch("set_total_invest_goi",goi)
        store.dispatch("set_total_invest_gam",gam)
        store.dispatch("set_total_invest_game",game)
    } else {
        invalid_ratio_status.value = true
        // alert(`${all} ${mom} ${goi} ${gam} ${game}`)
        total_investment_mom.value = ""
        total_investment_goi.value = ""
        total_investment_gam.value = ""
        total_investment_game.value = ""
    }
    
}

watchEffect(() => {
    console.log(`TOTAL : ${total_investment_all_num.value}`)
    console.log(`MOM : ${total_investment_mom_num.value}`)
    console.log(`GOI : ${total_investment_goi_num.value}`)
    console.log(`GAM : ${total_investment_gam_num.value}`)
    console.log(`GAME : ${total_investment_gam_num.value}`)
    if (total_investment_all_num.value != 0
    && 
    ( total_investment_mom_num.value != 0
    || total_investment_goi_num.value != 0
    || total_investment_gam_num.value != 0
    || total_investment_game_num.value != 0 )
    ){
        alert_invalid_ratio(total_investment_all_num.value,total_investment_mom_num.value,total_investment_goi_num.value,total_investment_gam_num.value,total_investment_game_num.value)
    }
})
</script>