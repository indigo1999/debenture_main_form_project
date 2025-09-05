<template>
    <div>
        <div class="bg-white rounded-lg pa-3 mt-4">
            <div>
                <h2> Total Investment : </h2>
            </div>
            <div>
                <v-text-field
                    type="number"
                    v-model="total_investment_all"
                    hide-details="auto"
                    label="Total Investment"
                    clearable
                ></v-text-field>
            </div>
        </div>
        <div>
            <v-row>
                <v-col>
                    <div class="bg-white rounded-lg pa-3 mt-8">
                        <div>
                            <h2>Total Invest Mom</h2>
                        </div>
                        <div>
                            <v-text-field
                                type="number"
                                v-model="total_investment_mom"
                                hide-details="auto"
                                label="Total Investment Mom"
                                clearable
                            ></v-text-field>
                        </div>
                    </div>
                </v-col>
                <v-col>
                    <div class="bg-white rounded-lg pa-3 mt-8">
                        <div>
                            <h2>Total Invest Goi</h2>
                        </div>
                        <div>
                            <v-text-field
                                type="number"
                                v-model="total_investment_goi"
                                hide-details="auto"
                                label="Total Investment Goi"
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
                            <h2>Total Invest Gam</h2>
                        </div>
                        <div>
                            <v-text-field
                                type="number"
                                v-model="total_investment_gam"
                                hide-details="auto"
                                label="Total Investment Gam"
                                clearable
                            ></v-text-field>
                        </div>
                    </div>
                </v-col>
                <v-col>
                    <div class="bg-white rounded-lg pa-3 mt-2">
                        <div>
                            <h2>Total Invest Game</h2>
                        </div>
                        <div>
                            <v-text-field
                                type="number"
                                v-model="total_investment_game"
                                hide-details="auto"
                                label="Total Investment Game"
                                clearable
                            ></v-text-field>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>

        <v-overlay
          v-model="total_investment_all_alert_status"
          class="align-center justify-center"
          contained
        >
            <div>
                <ALERT_ALL/>
            </div>
            <v-btn
                color="success"
                @click="total_investment_all_alert_status = false"
            >
                Hide Overlay
            </v-btn>
        </v-overlay>

        <v-overlay
          v-model="total_investment_mom_alert_status"
          class="align-center justify-center"
          contained
        >
            <div>
                <ALERT_MOM/>
            </div>
            <v-btn
                color="success"
                @click="total_investment_mom_alert_status = false"
            >
                Hide Overlay
            </v-btn>
        </v-overlay>

        <v-overlay
          v-model="total_investment_goi_alert_status"
          class="align-center justify-center"
          contained
        >
            <div>
                <ALERT_GOI/>
            </div>
            <v-btn
                color="success"
                @click="total_investment_goi_alert_status = false"
            >
                Hide Overlay
            </v-btn>
        </v-overlay>

        <v-overlay
          v-model="total_investment_gam_alert_status"
          class="align-center justify-center"
          contained
        >
            <div>
                <ALERT_GAM/>
            </div>
            <v-btn
                color="success"
                @click="total_investment_gam_alert_status = false"
            >
                Hide Overlay
            </v-btn>
        </v-overlay>

        <v-overlay
          v-model="total_investment_game_alert_status"
          class="align-center justify-center"
          contained
        >
            <div>
                <ALERT_GAME/>
            </div>
            <v-btn
                color="success"
                @click="total_investment_game_alert_status = false"
            >
                Hide Overlay
            </v-btn>
        </v-overlay>

        

    </div>
</template>

<script>
import ALERT_ALL from "./Total_Investment_alerts/alerts_all.vue"
import ALERT_MOM from "./Total_Investment_alerts/alerts_mom.vue"
import ALERT_GOI from "./Total_Investment_alerts/alerts_goi.vue"
import ALERT_GAM from "./Total_Investment_alerts/alerts_gam.vue"
import ALERT_GAME from "./Total_Investment_alerts/alerts_game.vue"

export default {

    data : () => {
        return {
            total_investment_all : "",
            total_investment_mom : "",
            total_investment_goi : "",
            total_investment_gam : "",
            total_investment_game : "",
            total_investment_all_alert_status : false,
            total_investment_mom_alert_status : false,
            total_investment_goi_alert_status : false,
            total_investment_gam_alert_status : false,
            total_investment_game_alert_status : false,     
            is_ratio_valid : false
        }
    },
    methods : {
        alert_total_all () {
            this.total_investment_all_alert_status = true
        },
        alert_total_mom () {
            this.total_investment_mom_alert_status = true
        },
        alert_total_goi () {
            this.total_investment_goi_alert_status = true
        },
        alert_total_gam () {
            this.total_investment_gam_alert_status = true
        },
        alert_total_game () {
            this.total_investment_game_alert_status = true
        }

    },
    components : {
        ALERT_ALL,
        ALERT_MOM,
        ALERT_GOI,
        ALERT_GAM,
        ALERT_GAME
    }, 
    watch : {
        total_investment_all(value){
            (value == "") ? this.total_investment_all = "" 
            : isNaN(parseInt(value)) ? ( this.alert_total_all() )
            : this.$store.dispatch("set_total_investment",parseInt(value))
        },
        total_investment_mom(value){
            (value == "") ? this.total_investment_mom = "" 
            : isNaN(parseInt(value)) ? ( this.alert_total_mom() )
            : this.$store.dispatch("set_total_invest_mom",parseInt(value))
        },
        total_investment_goi(value){
            (value == "") ? this.total_investment_goi = "" 
            : isNaN(parseInt(value)) ? ( this.alert_total_goi() )
            : this.$store.dispatch("set_total_invest_goi",parseInt(value))
        },
        total_investment_gam(value){
            (value == "") ? this.total_investment_gam = "" 
            : isNaN(parseInt(value)) ? ( this.alert_total_gam() )
            : this.$store.dispatch("set_total_invest_gam",parseInt(value))
        },
        total_investment_game(value){
            (value == "") ? this.total_investment_game = "" 
            : isNaN(parseInt(value)) ? ( this.alert_total_game() )
            : this.$store.dispatch("set_total_invest_game",parseInt(value))
        }
    }
}




</script>