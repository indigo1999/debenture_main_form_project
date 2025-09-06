<template>
    <div>
        <div class="bg-white rounded-lg pa-3 mt-4">
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
                ></v-text-field>
            </div>
        </div>
        <div>
            <v-row>
                <v-col>
                    <div class="bg-white rounded-lg pa-3 mt-8">
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
                            ></v-text-field>
                        </div>
                    </div>
                </v-col>
                <v-col>
                    <div class="bg-white rounded-lg pa-3 mt-8">
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
                            ></v-text-field>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <div class="bg-white rounded-lg pa-3 mt-2">
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
                            ></v-text-field>
                        </div>
                    </div>
                </v-col>
                <v-col>
                    <div class="bg-white rounded-lg pa-3 mt-2">
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
            <v-btn
                color="success"
                @click="invalid_ratio_status = false"
            >
                Hide Overlay
            </v-btn>
        </v-overlay>
    </div>
</template>

<script setup>
import ALERT_WRONG_RATIO from "./Total_Investment_alerts/alert_wrong_ratio.vue"

import { ref } from "vue"
import { useStore } from "vuex"

const store = useStore()

const total_investment_all = ref("")
const total_investment_mom = ref("")
const total_investment_goi = ref("")
const total_investment_gam = ref("")
const total_investment_game = ref("")

const invalid_ratio_status = ref(false)

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

watch(() => {
    if (total_investment_all.value != "" 
    && total_investment_mom.value != ""
    && total_investment_goi.value != ""
    && total_investment_gam.value != ""
    && total_investment_game.value != ""
    ){
        alert_invalid_ratio(total_investment_all.value,total_investment_mom.value,total_investment_goi.value,total_investment_gam.value,total_investment_game.value)
    }
})
</script>