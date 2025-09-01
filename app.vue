<template>
  <div>
    <NuxtRouteAnnouncer />

    
      <div class="bg-surface-variant pa-4 position-relative rounded-lg ma-2">
        <div class="bg-surface-light position-relative py-3 ps-3">
          <div class="position-relative pe-3" style="max-height:max-content">
            <div>
              <div>
                <Header_/>
              </div>
              Relative parent
            </div>
            <div class="position-relative" style="">
              <div class="bg-info rounded-lg pa-3 mt-2">
                <div>
                  <MainForm1/>
                </div>
              </div>
              <div class="bg-info rounded-lg pa-3 mt-2">
                <div>
                  <MainForm2/>
                </div>
              </div>
              <div class="bg-info rounded-lg pa-3 mt-2">
                <div>
                  {{ this.$store.state.count }}
                </div>
              </div>
              <div class="bg-info rounded-lg pa-3 mt-2">
                <div>
                  <ButtonSubmit/>
                </div>
              </div>
              <!-- <div class="bg-info rounded-lg pa-3 mt-2">
                Static child
              </div> -->
            </div>
            <!-- <div
              v-for="n in 5"
              :key="n"
            >
              <div class="bg-primary position-sticky top-0 pa-3 mt-2">
                Sticky header {{ n }}
              </div>

              <div class="bg-info rounded-lg pa-3 mt-2">
                Static child
              </div>

            </div> -->
          </div>
        </div>
      </div>
  
    <!-- <div>
      <div>
        <Header_/>
      </div>
      <div>
        <MainForm1/>
      </div>
      <div>
        <MainForm2/>
      </div>
      <div>
        <ButtonSubmit/>
      </div>
    </div> -->
  </div>
</template>

<script>
import TestComponent from "./components/testComponent.vue"
import Header_ from "./components/Header.vue"
import MainForm1 from "./components/MainForm1/index.vue"
import MainForm2 from "./components/MainForm2.vue"
import ButtonSubmit from "./components/ButtonSubmit.vue"

export default {
  mounted() {
    console.log(this.$store.state.count)
    const {data : count} = this.$store.state.count
  },
  // methods : {
  //   increment() {
  //     this.$store.commit('increment')
  //     console.log(console.log(this.$store.state.count))
  //   },
  //   decrement() {
  //     this.$store.commit('decrement')
  //     console.log(console.log(this.$store.state.count))
  //   }
  // }
}

</script>

<style>

</style>