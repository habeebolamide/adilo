<template>
  <div id="app">
    <Sidebar>
      <router-view/>
    </Sidebar>  
  </div>
</template>

<style>

</style>

<script>
import Sidebar from './views/Layouts/Sidebar';

export default {
    name: "DashBoard",
    components: {
        Sidebar
    },
    data() {
        return {

        };
    },
    methods: {

    },
}
</script>
