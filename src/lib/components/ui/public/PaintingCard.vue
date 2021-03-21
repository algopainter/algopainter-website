<template>
  <v-card class="mx-auto" min-height="250">
    <v-card-title>
      <div
        class="d-inline-block text-truncate"
        style="max-width: 250px;"
        :title="painting.owner"
      >
        #{{ painting.tokenId }}
        {{ painting.name }}
      </div>
    </v-card-title>

    <v-img height="300" :src="painting.image"></v-img>

    <v-card-text>
      <small class="d-inline-block text-truncate" style="max-width: 250px;">
        {{ painting.description }}
      </small>
    </v-card-text>

    <v-divider></v-divider>
    <div class="d-flex">
      <v-btn
        @click="goApp(painting.tokenId)"
        class="flex-grow-1"
        tile
        height="48"
        text
      >
        <v-icon left>mdi-share-all</v-icon>
        View
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["painting"],
  data() {
    return {
      url: process.env.VUE_APP_LINK_APP,
    };
  },
  methods: {
    goApp(tokenId) {
      return (window.location = `${this.url}/paintings/${tokenId}`);
    },
  },
};
</script>
