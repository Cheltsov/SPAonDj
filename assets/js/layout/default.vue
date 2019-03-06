<template>
    <div class="main-layout">
      <navbar/>
      <div class="cotainer-fluid">
         <child/>
      </div>
    </div>
</template>

<script>
  import Navbar from '~/components/Navbar'

    export default {
        name: "default",
        components: {Navbar}
    }
</script>

<style scoped>

</style>
