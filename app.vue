<template>
  <div>
    <NuxtRouteAnnouncer />
    <div>
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
    </div>
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