<template>
  <div>
    <v-footer class="footer">
      <v-container fluid>
        <v-row justify="space-between" class="my-3">
          <v-col cols="12" md="3" align-self="center">
            <h2 class="text-h2 white--text">AlgoPainter</h2>
            <div class="my-1 white--text">
              © All Rights Reserved
            </div>
          </v-col>
          <v-col cols="12" md="3">
            <h5 class="text-h5 white--text mb-3">
              Our policies
            </h5>
            <a class="white--text d-block text-decoration-none my-1" href="#">
              Terms of Service
            </a>
            <a class="white--text d-block text-decoration-none my-1" href="#">
              Privacy Policy
            </a>
          </v-col>
          <v-col cols="12" md="3">
            <h5 class="text-h5 white--text mb-3">
              Menu
            </h5>
            <a class="white--text d-block text-decoration-none my-1" href="mailto:contact@algopainter.art">
              Contact
            </a>
          </v-col>
          <v-col cols="12" md="3" align-self="center">
            <div>
              <v-btn
                @click="goToWhitepaper()"
                icon
                color="white lighten-3"
                class="ml-2"
                ><v-icon>mdi-file-document-outline</v-icon>
              </v-btn>
              <v-btn
                @click="goToTwitter()"
                icon
                color="white lighten-3"
                class="ml-2"
                ><v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn
                @click="goToGithub()"
                icon
                color="white lighten-3"
                class="ml-2"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  methods: {
    goToWhitepaper() {
      window.location = "/whitepaper/whitepaper-v1.0.0.pdf";
    },

    goToBlog() {
      window.location = "https://blog.votility.io";
    },

    goToTrello() {
      window.location = "https://trello.com/votilityprotocol";
    },

    goToTwitter() {
      window.location = "https://twitter.com/@algopainter";
    },

    goToGithub() {
      window.location = "https://github.com/algopainter";
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #000000 !important;
}
</style>
