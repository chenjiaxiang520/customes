<template>
  <div id="app">
	<NavHearder/>
    <router-view/>   
  </div>
</template>

<script>
import NavHearder from './components/NavHearder'
export default {
  name: 'App',
  components:{
  	NavHearder
  }
}
</script>

<style>

</style>
