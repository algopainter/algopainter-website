<template>
  <div>
    <v-sheet color="transparent" class="header">
      <v-container>
        <v-row>
          <v-col cols="12" md="3" class="d-none d-md-block">
            <v-img
              class="rounded-lg mt-2 float-rigth"
              max-height="480"
              contain
              src="/images/project/hashly-gwei.svg"
              alt=""
            >
            </v-img>
          </v-col>

          <v-col cols="12" md="6" class="text-center mt-9">
            <h2 class="text-h2">
              Make Your Cryto Art
            </h2>
            <p class="text-header mt-4">
              Choose your artist and have your own unique and exclusive work of
              art! Each artwork is minted as a non-fungible token (NFT) on
              Ethereum's own blockchain.
            </p>
            <v-btn large color="primary" class="mt-4">
              <a class="white--text text-decoration-none" href="#artists"
                >Choose Your Artist
              </a>
            </v-btn>
          </v-col>

          <v-col cols="12" md="3" class="d-none d-md-block">
            <v-img
              class="rounded-lg mt-2 float-left"
              max-height="480"
              contain
              src="/images/project/claude-monero.svg"
              alt=""
            >
            </v-img>
          </v-col>
        </v-row>
      </v-container>
      <div class="degrade"></div>
    </v-sheet>

    <v-sheet>
      <v-container>
        <v-row justify="center" class="mb-6 pb-6">
          <v-col cols="12" md="4">
            <v-img
              class="mx-auto"
              src="/images/project/unique-art.svg"
              width="142"
            ></v-img>
            <v-divider
              width="50"
              dark
              class="mx-auto my-3 black--border"
            ></v-divider>
            <div class="text-center">
              <h2 class="my-3">Unique Art</h2>
              <p class="text-left">
                Have a unique art in a totally safe way, painted by a virtual
                artist exclusively for you.<br />
                Be unique!
              </p>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <v-img
              class="mx-auto"
              src="/images/project/limited.svg"
              width="142"
            ></v-img>
            <v-divider
              width="50"
              dark
              class="mx-auto my-3 black--border"
            ></v-divider>
            <div class="text-center">
              <h2 class="my-3">Limited</h2>
              <p class="text-left">
                Only 1000 thousand combinations of arts by style will be made
                available, a limited number of works. <br />
                Like Van Ghog's works.
              </p>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <v-img
              class="mx-auto"
              src="/images/project/blockchain.svg"
              width="142"
            ></v-img>
            <v-divider
              width="50"
              dark
              class="mx-auto my-3 black--border"
            ></v-divider>
            <div class="text-center">
              <h2 class="my-3">Blockchain</h2>
              <p class="text-left">
                In order to certify its uniqueness we tokenize the artwork as a
                NFT on Ethereum's own blockchain.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet id="artists">
      <v-container>
        <h2 class="text-h2 text-center pb-9">
          Select Your Artist
          <v-divider
            width="255px"
            dark
            class="mx-auto my-3 black--border"
          ></v-divider>
        </h2>

        <v-row justify="center" class="my-3">
          <v-col cols="12" md="3">
            <div class="text-center">
              <img
                class="mx-auto"
                src="/images/project/hashly-gwei.svg"
                height="408"
              />
            </div>
            <div class="text-center">
              <h5 class="text-h5 my-3">Hashly Gwei</h5>
            </div>
          </v-col>

          <v-col cols="12" md="3">
            <div class="text-center">
              <img
                class="mx-auto"
                src="/images/project/angelo-fracthereum.svg"
                height="408"
              />
            </div>
            <div class="text-center">
              <h5 class="text-h5 my-3">Angelo Fracthereum</h5>
              <h4 class="text-h4 mt-n1 primary--text">Coming Soon</h4>
            </div>
          </v-col>

          <v-col cols="12" md="3">
            <div class="text-center">
              <img
                class="mx-auto"
                src="/images/project/claude-monero.svg"
                height="408"
              />
            </div>
            <div class="text-center">
              <h5 class="text-h5 my-3">Claude Monero</h5>
              <h4 class="text-h4 mt-n1 primary--text">Coming Soon</h4>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="transparent">
      <v-container>
        <v-row justify="center" class="my-3">
          <v-col cols="12" md="6">
            <div class="text-center">
              <img
                class="mx-auto"
                src="/images/project/hashly-gwei-example.png"
                height="509"
              />
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div>
              <h6 class="text-h6 my-3 font-weight-black primary--text">
                Hashly Gwei
              </h6>
              <h4 class="text-h4 my-3 font-weight-black">
                Abstract Unique Art
              </h4>
              <p>
                Choose a unique and revolutionary style so that our artist can
                immortalize you in your collection.
              </p>
              <p>
                Our artist exclusively creates a totally unique work of art with
                the style you choose. Infinite possibilities to create, register
                and sell your works.
              </p>
              <v-btn @click="goToBlog" large color="primary" class="mt-4">
                Make Your Art
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="transparent">
      <v-container>
        <v-row justify="center" class="my-3">
          <v-col cols="12" md="4">
            <div>
              <h6 class="text-h6 my-3 font-weight-black primary--text">
                Claude Monero
              </h6>
              <h4 class="text-h4 my-3 font-weight-black">
                Choice 2 Pictures
              </h4>
              <p>
                Choose two images of your choice and create a new unique and
                limited work of art.
              </p>
              <p>
                Our artist uniquely creates a work of art totally unique with
                the characteristics of the images sent. Endless possibilities to
                create, register and sell your works.
              </p>
              <v-btn @click="goToBlog" large color="primary" class="mt-4">
                Coming Soon
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="text-center">
              <img
                class="mx-auto"
                src="/images/project/claude-monero-example.png"
                height="509"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="transparent">
      <v-container>
        <v-row justify="center" class="my-3">
          <v-col cols="12" md="6">
            <div class="text-center">
              <img
                class="mx-auto"
                src="/images/project/angelo-fracthereum-example.png"
                height="509"
              />
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div>
              <h6 class="text-h6 my-3 font-weight-black primary--text">
                Angelo Fracthereum
              </h6>
              <h4 class="text-h4 my-3 font-weight-black">
                Fractal Unique Art
              </h4>
              <p>
                Fractal art is a form of algorithmic art created by calculating
                fractal objects and representing the calculation results as
                still images, animations, and media. Fractal art developed from
                the mid-1980s onwards.
              </p>
              <p>
                It is a genre of computer art and digital art which are part of
                new media art. The mathematical beauty of fractals lies at the
                intersection of generative art and computer art. They combine to
                produce a type of abstract art.
              </p>
              <v-btn @click="goToBlog" large color="primary" class="mt-4">
                Coming Soon
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet id="gallery">
      <v-container>
        <h2 class="text-h2 mt-6 text-center pb-9">
          Gallery
          <v-divider
            width="80px"
            dark
            class="mx-auto my-3 black--border"
          ></v-divider>
        </h2>

        <v-row dense v-if="paintings == false">
          <v-col>
            <v-skeleton-loader
              type="card-heading, image, list-item, list-item, actions"
            ></v-skeleton-loader>
          </v-col>
          <v-col>
            <v-skeleton-loader
              type="card-heading, image, list-item, list-item, actions"
            ></v-skeleton-loader>
          </v-col>
          <v-col>
            <v-skeleton-loader
              type="card-heading, image, list-item, list-item, actions"
            ></v-skeleton-loader>
          </v-col>
          <v-col>
            <v-skeleton-loader
              type="card-heading, image, list-item, list-item, actions"
            ></v-skeleton-loader>
          </v-col>
        </v-row>

        <v-row v-else>
          <v-col
            cols="12"
            md="3"
            :key="painting.tokenId"
            v-for="painting in paintings"
          >
            <painting-card :key="painting.tokenId" :painting="painting" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet id="nft">
      <v-container class="my-9 py-9 py-lg-8">
        <v-row justify="center" class="my-9">
          <v-col cols="12" md="3">
            <div>
              <h2 class="mb-3">Uniqueness certified by the blockchain</h2>
              <p>
                Uniqueness certified by the blockchain Each artwork is
                one-of-a-kind, which means that no other copies will ever be
                sold by us. In order to certify its uniqueness we tokenize the
                artwork as a NFT on Ethereum's own blockchain.
              </p>
              <p>
                It doesn't prevent that anyone can make digital copies of it;
                but the original is registered on the blockchain and has only
                one owner.
              </p>
            </div>
          </v-col>

          <v-col cols="12" md="3">
            <v-img class="mx-auto" src="/images/project/nft-logo.png"></v-img>
          </v-col>

          <v-col cols="12" md="3">
            <div>
              <p>
                In order to purchase a NFT you need to have an Ethereum wallet
                address (see FAQ) where we will transfer the token.
              </p>
              <p>
                After the transfer we will destroy our own copy of the artwork.
                The high-resolution PNG file is made available as unlockable
                content in the NFT.
              </p>
              <p>
                NFT owners can trade with them on different marketplaces such as
                Rarible or Opensea. A 2% royalty fee for secondary sales applies
                automatically.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet id="faq" color="transparent">
      <v-container class="mt-n9">
        <div class="text-center">
          <div
            class="text-uppercase font-weight-bold body-2 primary--text mb-2"
          >
            Support
          </div>
          <h2 class="text-h3 text-lg-h2">Frequently Asked Questions</h2>
        </div>

        <v-expansion-panels multiple class="mt-8">
          <v-expansion-panel v-for="(item, i) in faq" :key="i">
            <v-expansion-panel-header class="text-h5">
              {{ item.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content class="text-h6 secondary--text">
              {{ item.answer }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-sheet>

    <v-sheet>
      <v-container class="my-9 py-9 py-lg-8">
        <v-row justify="center" class="my-9">
          <v-col cols="12" md="8">
            <div>
              <h4 class="text-h4">
                Meet one of our artists today and start and collect and sell
                your works today!
              </h4>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <v-btn @click="goToBlog" x-large block height="76" color="primary">
              Sign up Now
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import PaintingCard from "@/lib/components/ui/public/PaintingCard";

export default {
  components: { PaintingCard },

  data() {
    return {
      features: [
        {
          icon: "mdi-star-circle-outline",
          title: "Save time and money",
          description:
            "Let Votility be your governance module. You will save development (smart contract, front-end and back-end) and audit hours and the amount of gas used to deploy your contract.",
        },
        {
          icon: "mdi-link-variant",
          title: "Off-chain and On-chain",
          description:
            "You can combine all benefits using both strategies. Proposals are running on-chain to endorse your ideals and the voting off-chain to get community engagement.",
        },
        {
          icon: "mdi-cog-transfer-outline",
          title: "One simple hook function",
          description:
            "All you need to do is, when necessary, write a receiver contract waiting for the proposal result, and done! Just one simple hook function.",
        },
        {
          icon: "mdi-gavel",
          title: "Utility Token or Governance Token?",
          description:
            "Don't worry about that. Create your Utility Token, develop your project, and whenever you need, transform your token into voting power!",
        },
      ],

      pannel: [0],
      faq: [
        {
          question: "What is Lorem Ipsum?",
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          question: "What is Lorem Ipsum?",
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          question: "What is Lorem Ipsum?",
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],

      paintings: false,
      urlGallery: process.env.VUE_APP_URL_GALLERY,
    };
  },

  mounted() {
    this.getPaintings();
  },

  methods: {
    goToBlog() {
      window.location = "https://blog.votility.io";
    },
    async getPaintings() {
      const getPaintings = await fetch(this.urlGallery);
      const paintings = await getPaintings.json();
      this.paintings = paintings.slice(0, 8);
    },
  },
};
</script>

<style scoped>
.header {
  background-image: url("../../public/images/project/background-header.png");
  background-size: cover;
  padding: 150px 0px 0px 0px;
}
.degrade {
  width: 100%;
  height: 300px;
  margin-bottom: -150px;
  background: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0) 0%,
    rgb(255 255 255) 50%
  );
}

#getready {
  background-image: url(/img/background-select-artist.4f2d80b5.png);
  background-size: cover;
  height: 1000px;
  margin-bottom: -200px;
}

.text-header {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 48px;
  text-align: center;
  color: #000000;
}
</style>
