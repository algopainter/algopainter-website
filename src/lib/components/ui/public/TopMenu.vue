<template>
  <div class="menu">
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense nav>
        <v-subheader class="text-uppercase font-weight-bold">Menu</v-subheader>
        <v-list-item v-for="(item, index) in menu" :key="index" link>
          <v-list-item-content>
            <a
              :href="`${item.id}`"
              :key="index"
              class="mx-1 v-btn v-btn--text theme--light v-size--default"
            >
              {{ item.title }}
            </a>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div @click="drawer = !drawer" class="d-md-none drawer-button d-flex menu-mobile">
        <v-btn rounded small class="ma-1">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <span class="d-flex align-center ">Menu</span>
      <v-spacer></v-spacer>
      <v-btn
        class="d-flex ma-1"
        color="primary"
        @click="goToApp()"
        small
      >
        Go to App
      </v-btn>
    </div>

    <v-app-bar class="elevation-0" height="80">
      <v-container class="py-0 px-0 px-sm-2 fill-height">
        <router-link
          to="/"
          class="d-flex align-center text-decoration-none mr-2"
        >
          <img
            src="/images/project/logo-small.png"
            alt=""
            height="48"
            class="mr-1"
          />
          <span class="font-weight-black black--text text-h5">
            AlgoPainter
          </span>
        </router-link>

        <v-spacer></v-spacer>

        <div class="d-none d-md-block">
          <a
            :href="`${item.id}`"
            v-for="(item, index) in menu"
            :key="index"
            text
            class="mx-1 v-btn v-btn--text theme--light v-size--default"
          >
            {{ item.title }}
          </a>
        </div>

        <v-spacer></v-spacer>

        <v-btn
          class="d-none d-md-flex"
          color="primary"
          @click="goToApp()"
          large
        >
          Go to App
        </v-btn>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      menu: [
        {
          title: "Artists",
          id: "/#artists",
        },
        {
          title: "Gallery",
          id: "/#gallery",
        },
        {
          title: "FAQ",
          id: "/#faq",
        },
      ],
      urlAPP: process.env.VUE_APP_LINK_APP,
    };
  },

  methods: {
    goToApp() {
      return (window.location = `${this.urlAPP}`);
    },
  },
};
</script>

<style scoped>
.menu >>> .theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: transparent !important;
  position: absolute;
}

.menu >>> .menu-mobile {
  height: 50px;
  background: #f4f4f5;
}
</style>
