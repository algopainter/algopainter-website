<template>
  <v-main>
    <top-menu />
    <router-view></router-view>
    <footer-info />
  </v-main>
</template>

<script>
import TopMenu from '@/lib/components/ui/public/TopMenu.vue';
import FooterInfo from '@/lib/components/ui/public/FooterInfo.vue';


export default {
  components: { 
    TopMenu,
    FooterInfo,
  },
}
</script>
