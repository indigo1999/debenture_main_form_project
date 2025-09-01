<template>
    <div>
        <div>
            <h1>MAIN PART 1/2 COMPONENT</h1>
        </div>
        <div>
            <div>
                <div class="bg-red rounded-lg pa-3 mt-2 d-flex justify-center">
                    <CurrentDateTime/>
                </div>
            </div>
            <div>
                <div class="bg-red rounded-lg pa-3 mt-2 ">
                    <Debenturename/>
                </div>
            </div>
            <div>
                <div class="bg-red rounded-lg pa-3 mt-2">
                    <DurationConfig/>
                </div>
            </div>
            <div>
                <div class="bg-red rounded-lg pa-3 mt-2">
                    <v-row>
                        <v-col>
                            <StartDate/>
                        </v-col>
                        <v-col>
                            <EndDate/>
                        </v-col>
                    </v-row>
                    
                </div>
            </div>
            <div>
                <div class="bg-red rounded-lg pa-3 mt-2">
                    <InterestsFrequency/>
                </div>
            </div>
            <div>
                <div class="bg-red rounded-lg pa-3 mt-2">
                    <InterestPercent/>
                </div>
            </div>
            <div>
                <div class="bg-red rounded-lg pa-3 mt-2">
                    <Detail_Note/>
                </div>
            </div>
            <div>
                <div class="bg-red rounded-lg pa-3 mt-2">
                    <TotalInvest/>
                </div>
            </div>
            <div>
                <div class="bg-red rounded-lg pa-3 mt-2">
                    <v-row>
                        <v-col>
                            <Total_Invest_Mom/>
                        </v-col>
                        <v-col>
                            <Total_Invest_Goi/>
                        </v-col>
                    </v-row>
                </div>
            </div>
            <div>
                <div class="bg-red rounded-lg pa-3 mt-2">
                    <Agency/>
                </div>
            </div>
            <div>
                <div class="bg-red rounded-lg pa-3 mt-2">
                    <Registrar/>
                </div>
            </div>
        </div>

    </div>

</template>

<script setup>
import CurrentDateTime from "./CurrentDateTime.vue"
import Debenturename from "./DebentureName.vue"
import DurationConfig from "./DurationConfig.vue"
import StartDate from "./StartDate.vue"
import EndDate from "./EndDate.vue"
import InterestsFrequency from "./InterestsFrequency.vue"
import InterestPercent from "./InterestPercent.vue"
import Detail_Note from "./Detail_Note.vue"
import TotalInvest from "./TotalInvest.vue"
import Total_Invest_Mom from "./Total_Invest_Mom.vue"
import Total_Invest_Goi from "./Total_Invest_Goi.vue"
import Agency from "./Agency.vue"
import Registrar from "./Registrar.vue"

</script>
