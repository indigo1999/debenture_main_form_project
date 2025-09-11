<template>
    
        <div>
            <div>
                <div class="pa-3 mt-2 d-flex justify-center">
                    <CurrentDateTime/>
                </div>
            </div>
            <div>
                <div class="pa-3 mt-2 ">
                    <Debenturename/>
                </div>
            </div>
            <div>
                <div class="pa-3 mt-2">
                    <DurationConfig/>
                </div>
            </div>
            <div>
                <div class="pa-3 mt-2">
                    <DebentureCode/>
                </div>
            </div>
            <div>
                <div class="pa-3 mt-2">
                    <v-sheet
                    class="pa-3 mt-1"
                    :elevation="9"
                    rounded>
                        <v-row>
                            <v-col>
                                <StartDate/>
                            </v-col>
                            <v-col>
                                <EndDate/>
                            </v-col>
                        </v-row>
                    </v-sheet>
                </div>
            </div>
            <div>
                <div class="pa-3 mt-2">
                    <InterestsFrequency/>
                </div>
            </div>
            <div>
                <div class="pa-3 mt-2">
                    <InterestPercent/>
                </div>
            </div>
            <div>
                <div class="pa-3 mt-2">
                    <Detail_Note/>
                </div>
            </div>
            <div>
                <div class="pa-3 mt-2">
                    <v-sheet
                    class="pa-3 mt-1"
                    :elevation="9"
                    rounded>
                        <Total_Investment_form/>
                    </v-sheet>
                </div>
            </div>
            <div>
                <div class="pa-3 mt-2">
                    <Agency/>
                </div>
            </div>
            <div>
                <div class="pa-3 mt-2">
                    <Registrar/>
                </div>
            </div>
            <div>
                <div class="pa-3 mt-2">
                    <Browse_Debenture_paper/>
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
import Agency from "./Agency.vue"
import Registrar from "./Registrar.vue"
import DebentureCode from "./DebentureCode.vue"
import Browse_Debenture_paper from "./Browse_Debenture_paper.vue"
import Total_Investment_form from "./Total_Investment_form.vue"

</script>
