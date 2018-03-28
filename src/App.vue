<template>
  <component :is="layout"></component>
</template>
<script>
  import LoginLayout from './components/layouts/Login'
  import PrincipalLayout from './components/layouts/Principal'
  import {mapState} from 'vuex'
  export default {
    components: {LoginLayout, PrincipalLayout},
    computed: mapState(['layout'])
  }
</script>