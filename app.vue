<template>
  <div>
    <NuxtRouteAnnouncer />
    <div class="bg-surface-variant pa-4 position-relative rounded-lg ma-2">
    <div class="bg-surface-light position-relative py-3 ps-3">
      <div class="overflow-y-auto pe-3" style="max-height: 250px">
        <div>Relative parent</div>

        <div
          v-for="n in 5"
          :key="n"
        >
          <div class="bg-primary position-sticky top-0 pa-3 mt-2">
            Sticky header {{ n }}
          </div>

          <div
            v-for="k in 8"
            :key="k"
            class="bg-info rounded-lg pa-3 mt-2"
          >
            Static child
          </div>

        </div>
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
import MainForm1 from "./components/MainForm1.vue"
import MainForm2 from "./components/MainForm2.vue"
import ButtonSubmit from "./components/ButtonSubmit.vue"


</script>

<style>

</style>