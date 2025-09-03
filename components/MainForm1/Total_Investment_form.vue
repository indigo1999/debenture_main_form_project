<template>
    <div>
        <div class="bg-white rounded-lg pa-3 mt-4">
            <div>
                <h2> Total Investment : </h2>
            </div>
            <div>
                <v-text-field
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
    </div>
</template>

<script>
import { useStore } from "vuex"

export default {

    data : () => {
        return {
            total_investment_all : "",
            total_investment_mom : "",
            total_investment_goi : "",
            total_investment_gam : "",
            total_investment_game : "",
        }
    },
    methods : {
        
    },
    watch : {
        total_investment_all(value){
            (value == "") ? this.total_investment_all = "" : this.$store.dispatch("set_total_investment",parseInt(value))
        },
        total_investment_mom(value){
            (value == "") ? this.total_investment_mom = "" : this.$store.dispatch("set_total_invest_mom",parseInt(value))
        },
        total_investment_goi(value){
            (value == "") ? this.total_investment_goi = "" : this.$store.dispatch("set_total_invest_goi",parseInt(value))
        },
        total_investment_gam(value){
            (value == "") ? this.total_investment_gam = "" : this.$store.dispatch("set_total_invest_gam",parseInt(value))
        },
        total_investment_game(value){
            (value == "") ? this.total_investment_game = "" : this.$store.dispatch("set_total_invest_game",parseInt(value))
        }
    }
}




</script>