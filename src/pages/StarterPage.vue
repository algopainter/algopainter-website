<template>
  <div class="body">
    <v-sheet color="transparent" class="header">
      <v-container>
        <v-row>
          <v-col cols="12" md="3" class="d-none d-md-block">
            <v-img
              data-aos="fade-right"
              class="rounded-lg mt-2 float-rigth"
              max-height="480"
              contain
              src="/images/project/hashly-gwei.svg"
              alt=""
            >
            </v-img>
          </v-col>

          <v-col cols="12" md="6" class="text-center" data-aos="fade-up">
            <h2 class="text-h2">Make Your Crypto Art</h2>
            <p class="text-header mt-4">
              Choose your artist and have your own unique and exclusive work of
              art! Each artwork is minted as a non-fungible token (NFT) on the
              blockchain.
            </p>
            <v-btn large color="primary" class="mt-4">
              <a class="white--text text-decoration-none" href="#artists"
                >Choose Your Artist
              </a>
            </v-btn>

            <v-btn
              large
              color="primary"
              href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xbee554dbbc677eb9fb711f5e939a2f2302598c75"
              target="_blank"
              class="mt-4 btnBuy"
            >
              <a class="white--text text-decoration-none"> Buy $ALGOP </a>
            </v-btn>
          </v-col>

          <v-col cols="12" md="3" class="d-none d-md-block">
            <v-img
              data-aos="fade-left"
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
    </v-sheet>

    <v-sheet id="UniqueArt" color="transparent">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="12" md="3" data-aos="fade-up">
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
              <p>
                Have a unique art in a totally safe way, painted by a virtual
                artist exclusively for you.<br />
                Be unique!
              </p>
            </div>
          </v-col>

          <v-col cols="12" md="3" data-aos="fade-down">
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
              <p>
                Limited Combinations of arts by each digital painter will be
                made available. <br />
                Like Van Gogh's works.
              </p>
            </div>
          </v-col>

          <v-col cols="12" md="3" data-aos="fade-up">
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
              <p>
                In order to certify its uniqueness, we tokenize the artwork as
                an NFT on the blockchain.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="px-6">
        <v-row class="buy-container">
          <div
            :class="
              $vuetify.breakpoint.mdAndUp
                ? 'd-flex align-center justify-space-between'
                : 'justify-center text-center pa-2'
            "
            style="width: 100%"
          >
            <div>
              Buy ALGOP and create incredible artwork in your own way right now!
            </div>
            <div class="pa-1">
              <v-btn
                large
                href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xbee554dbbc677eb9fb711f5e939a2f2302598c75"
                target="_blank"
                style="color: #f4538d"
              >
                Buy $ALGOP
              </v-btn>
            </div>
          </div>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet id="artists">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 class="text-h5 text-md-h2 text-center">
              Select Your Artist
              <v-divider
                width="255px"
                dark
                class="mx-auto my-md-2 black--border"
              ></v-divider>
            </h2>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="3">
            <div class="text-center" data-aos-duration="900" data-aos="fade-up">
              <img
                class="mx-auto"
                src="/images/project/hashly-gwei.svg"
                height="408"
              />
            </div>
            <div class="text-center">
              <h5 class="text-h5 my-3">Hashly Gwei</h5>
              <v-btn
                class="flex-center mt-n1"
                color="primary"
                @click="goToApp()"
                large
              >
                Go to App
              </v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="3">
            <div
              class="text-center"
              data-aos-duration="900"
              data-aos="fade-down"
            >
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
            <div class="text-center" data-aos-duration="900" data-aos="fade-up">
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

    <v-sheet id="about-gwei" color="transparent">
      <v-container class="mt-lg-6">
        <v-row justify="space-between">
          <v-col
            align-self="center"
            cols="12"
            md="6"
            sm="12"
            class="d-none d-md-block"
            data-aos="fade-right"
          >
            <v-img
              src="/images/project/hashly-gwei-example.png"
              width="90%"
            ></v-img>
          </v-col>
          <v-col
            align-self="center"
            class="pa-md-9"
            cols="12"
            md="6"
            sm="12"
            data-aos="fade-left"
          >
            <div>
              <h6 class="text-body-1 my-3 font-weight-black primary--text">
                Hashly Gwei
              </h6>
              <h4 class="text-h4 my-3 font-weight-black">
                Abstract Unique Art
              </h4>
              <p>
                Choose a unique and revolutionary style so that our artist can
                immortalize you in our gallery.
              </p>
              <p>
                Our artist exclusively creates a totally unique work of art with
                the style you choose. Infinite possibilities to create, register
                and sell your works.
              </p>

              <v-img
                class="d-flex d-md-none"
                src="/images/project/hashly-gwei-example.png"
                width="90%"
              ></v-img>

              <v-btn
                class="d-flex ma-1"
                color="primary"
                @click="goToApp()"
                large
              >
                Go to App
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet id="about-claude-and-fracthereum" color="transparent">
      <v-container>
        <v-row justify="space-between">
          <v-col
            align-self="start"
            cols="12"
            md="3"
            sm="12"
            data-aos-duration="900"
            data-aos="fade-up"
          >
            <div>
              <h6 class="text-body-1 my-md-3 font-weight-black primary--text">
                Claude Monero
              </h6>
              <h4 class="text-h4 my-3 font-weight-black">Choose 2 Pictures</h4>
              <p style="min-height: 192px">
                Choose two images of your choice and create a new unique and
                limited work of art with the characteristics of both the images.
                Endless possibilities to create, register and sell your works.
              </p>

              <img
                class="mx-auto d-flex d-md-none"
                src="/images/project/claude-monero-example.png"
                width="100%"
              />

              <v-btn large color="primary" class="mt-4"> Coming Soon </v-btn>
            </div>
          </v-col>
          <v-col
            align-self="center"
            cols="12"
            md="3"
            sm="12"
            class="d-none d-md-block"
            data-aos="fade-up"
          >
            <div class="text-center">
              <img
                class="mx-auto"
                src="/images/project/claude-monero-example.png"
                width="100%"
              />
            </div>
          </v-col>
          <v-col
            align-self="start"
            cols="12"
            md="3"
            sm="12"
            data-aos-duration="900"
            data-aos="fade-up"
          >
            <div>
              <h6 class="text-body-1 my-md-3 font-weight-black primary--text">
                Angelo Fracthereum
              </h6>
              <h4 class="text-h4 my-3 font-weight-black">Fractal Unique Art</h4>
              <p>
                Fractal art is a form of algorithmic art created by calculating
                fractal objects and representing the calculation results as
                still images, animations, and media. Fractal art developed from
                the mid-1980s onwards.
              </p>

              <img
                class="mx-auto d-flex d-md-none"
                src="/images/project/angelo-fracthereum-example.png"
                width="100%"
              />
              <v-btn large color="primary" class="mt-4"> Coming Soon </v-btn>
            </div>
          </v-col>
          <v-col
            align-self="center"
            cols="12"
            md="3"
            sm="12"
            class="d-none d-md-block"
            data-aos="fade-up"
          >
            <div class="text-center">
              <img
                class="mx-auto"
                src="/images/project/angelo-fracthereum-example.png"
                width="100%"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet id="buy-sell">
      <v-container>
        <v-row data-aos="flip-up" data-aos-duration="900">
          <v-col cols="12">
            <div class="card-ultimate-platform text-center">
              <h2 class="text-h5 text-md-h2 white--text">
                The ultimate platform for creators, buyers, and sellers
              </h2>
              <p class="text-body-1 mt-0 mt-md-3 white--text">
                With the BidBack System and PIRS, all the participants receive
                the incentive to be active on the platform.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet id="bidback">
      <v-container>
        <v-row data-aos="zoom-in">
          <v-col cols="12">
            <h2 class="text-h5 text-md-h2">BidBack System</h2>
            <p class="text-body-1 mt-0 mt-md-3">
              Join an auction and receive a percentage of the sale price back.
            </p>
            <p class="mt-n2">
              A user can create an auction and set a BidBack percentage. It will
              incentivize all the users to send bids because all the bidders
              will join the BidBack pool and receive an artwork sell price
              percentage.
            </p>
          </v-col>
        </v-row>

        <v-row justify="space-between" class="mt-n3 mt-sm-0">
          <v-col cols="12" md="3" class="mt-n3 mt-md-0" data-aos="fade-up">
            <v-img
              class="mx-auto"
              src="/images/project/make-bid.svg"
              width="142"
            ></v-img>
            <v-divider
              width="50"
              dark
              class="mx-auto my-3 black--border"
            ></v-divider>
            <div class="text-center">
              <h2 class="my-3">Make a bid</h2>
              <p>Participate in the auction by making a minimum bid.</p>
            </div>
          </v-col>

          <v-col cols="12" md="3" class="mt-n3 mt-md-0" data-aos="fade-down">
            <v-img
              class="mx-auto"
              src="/images/project/auction.svg"
              width="142"
            ></v-img>
            <v-divider
              width="50"
              dark
              class="mx-auto my-3 black--border"
            ></v-divider>
            <div class="text-center">
              <h2 class="my-3">Wait for the auction</h2>
              <p>Wait for the auction to be finished.</p>
            </div>
          </v-col>

          <v-col cols="12" md="3" class="mt-n3 mt-md-0" data-aos="fade-up">
            <v-img
              class="mx-auto"
              src="/images/project/get-back.svg"
              width="142"
            ></v-img>
            <v-divider
              width="50"
              dark
              class="mx-auto my-3 black--border"
            ></v-divider>
            <div class="text-center">
              <h2 class="my-3">Get back</h2>
              <p>
                All the bidders will receive a percentage of the sale price,
                based on the amount of
                <b class="primary--text">$ALGOP tokens</b> in their wallets.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet id="PIRS">
      <v-container>
        <v-row data-aos="zoom-in">
          <v-col cols="12">
            <h2 class="text-h5 text-md-h2">
              Perpetual Inclusive Royalty System - PIRS
            </h2>
          </v-col>
        </v-row>

        <v-row justify="space-between">
          <v-col cols="12" sm="2" data-aos="fade-up">
            <v-img
              class="mx-auto my-n9 my-md-0"
              src="/images/project/creators-royalties.svg"
              width="180"
            ></v-img>
          </v-col>

          <v-col cols="12" sm="4" data-aos="fade-down">
            <div>
              <h2 class="my-3 text-center text-md-left">Creators Royalties</h2>
              <p>
                The artist who sent the work or the user who hired an
                AlgoPainter to generate the work.
              </p>
            </div>
          </v-col>

          <v-col cols="12" sm="2" data-aos="fade-up">
            <v-img
              class="mx-auto my-n6 my-md-0"
              src="/images/project/investors-royalties.svg"
              width="180"
            ></v-img>
          </v-col>

          <v-col cols="12" sm="4" data-aos="fade-down">
            <div>
              <h2 class="my-3 text-center text-md-left">Investors Royalties</h2>
              <p>
                The list of owners of the artwork (users who bought the item
                over time).
              </p>
            </div>
          </v-col>
        </v-row>

        <v-row class="simulation" data-aos="zoom-in">
          <v-col align-self="center" cols="12" md="6" sm="12">
            <h4 class="text-h4 pa-3">Simulation</h4>
            <p class="pa-md-4 text-body-1 text-justify">
              An artwork that was sold for <b>1,000,000 USD</b> and has a
              configuration of <b>10% of Creator Royalties</b> and
              <b>10% of Investors Royalties:</b>
            </p>
          </v-col>

          <v-col
            align-self="center"
            class="d-flex align-center"
            cols="12"
            md="6"
            sm="12"
          >
            <img
              src="/images/project/bracket.svg"
              width="61px"
              class="float-left mr-3 d-none d-sm-flex"
            />
            <div class="mt-n6 mt-md-0">
              <p class="text-body-1">
                The seller will receive:
                <b class="primary--text">800,000 USD</b>
              </p>
              <p class="text-body-1">
                The creator will receive:
                <b class="primary--text">100,000 USD</b>
              </p>
              <p class="text-body-1 mt-md-6 text-justify">
                Investors will receive the distribution of
                <b class="primary--text">100,000 USD</b> in proportion to the
                <b class="primary--text">$ALGOP Tokens</b> they have in their
                wallets at the time of sale.
              </p>
            </div>
          </v-col>

          <v-col align-self="center" cols="12" md="12" sm="12">
            <p class="text-body-1 mt-n6 mt-md-0 mb-n1">
              The perpetual inclusive royalty system will bring attention to
              your artwork because all the owners will receive a royalty
              incentivate to buy and sell.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet id="team">
      <v-container>
        <v-row data-aos="zoom-in">
          <v-col cols="12">
            <h2 class="text-h5 text-md-h2">The Team</h2>
          </v-col>
        </v-row>

        <v-row data-aos="zoom-in">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="item in team"
            v-bind:key="item.name"
          >
            <v-img :src="item.img" max-width="257px" class="mx-auto"></v-img>
            <div class="text-center">
              <h2 class="my-1 primary--text">{{ item.name }}</h2>
              <div>{{ item.description }}</div>
            </div>
            <!-- <div class="d-flex justify-center">
              <v-btn icon color="grey lighten-1" x-large>
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon color="grey lighten-1" x-large>
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </div> -->
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet id="nft">
      <v-container>
        <v-row justify="space-between">
          <v-col
            align-self="center"
            cols="12"
            md="6"
            data-aos-duration="900"
            data-aos="fade-right"
          >
            <div>
              <h3 class="text-h5 text-md-h3 mb-md-3">
                Blockchain certification
              </h3>
              <p>
                Each artwork is one-of-a-kind, which means that we will never
                sell any other copies. To certify its uniqueness, we tokenize
                the painting as an NFT on the blockchain.
              </p>
              <p>
                It doesn't prevent anyone from making digital copies of it, but
                the original piece is registered on the blockchain and has only
                one owner. We have the uniqueness certified by the blockchain.
              </p>
            </div>
          </v-col>

          <v-col
            align-self="center"
            cols="12"
            md="4"
            data-aos-duration="900"
            data-aos="fade-left"
          >
            <v-img class="mx-auto" src="/images/project/nft-logo.png"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet id="partnerships" color="transparent" class="my-0 my-md-3 my-lg-3">
      <v-container data-aos="zoom-in" data-aos-duration="1200">
        <v-row>
          <v-col cols="12">
            <div class="text-center">
              <h3 class="text-h5 text-md-h3">Partnerships</h3>
            </div>

            <div class="d-flex d-justify-center">
              <a
                href="https://thekickpad.com/"
                target="_blank"
                class="mx-auto align-self-center"
              >
                <img
                  class="mx-auto"
                  height="70px"
                  src="/images/partnerships/kickpad.png"
                />
              </a>

              <a
                href="https://www.certik.org/"
                target="_blank"
                class="mx-auto align-self-center"
              >
                <img
                  class="mx-auto"
                  height="180px"
                  src="/images/partnerships/certik.png"
                />
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet id="faq" color="transparent">
      <v-container data-aos="fade-down" data-aos-duration="1200">
        <v-row>
          <v-col cols="12">
            <div class="text-center">
              <div
                class="
                  text-uppercase
                  font-weight-bold
                  body-2
                  primary--text
                  mb-2
                "
              >
                Support
              </div>
              <h3 class="text-h5 text-md-h3">Frequently Asked Questions</h3>
            </div>

            <v-expansion-panels multiple class="mt-3 mt-md-8">
              <v-expansion-panel v-for="(item, i) in faq" :key="i">
                <v-expansion-panel-header class="text-h5">
                  {{ item.question }}
                </v-expansion-panel-header>
                <v-expansion-panel-content class="text-body-1 secondary--text">
                  {{ item.answer }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet>
      <v-container>
        <v-row justify="center" class="my-3">
          <v-col
            cols="12"
            md="8"
            data-aos-duration="1200"
            data-aos="fade-right"
          >
            <div>
              <h4 class="text-h5 text-md-h4">
                Hire an AlgoPainter right now and start to collecting unique
                digital paintings!
              </h4>
            </div>
          </v-col>

          <v-col cols="12" md="4" data-aos-duration="1200" data-aos="fade-left">
            <v-btn x-large block height="76" color="primary" @click="goToApp()">
              Go to App
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
      pannel: [0],
      faq: [
        {
          question: "What is AlgoPainter?",
          answer:
            "AlgoPainter is a platform to connect digital painters to collectors. The AlgoPainters generate unique and limited paintings using marvelous algorithms. When you request a piece of art to an AlgoPainter, you need to specify how this work will be done using a set of parameters to create a unique painting.",
        },
        {
          question: "How rare is a painting?",
          answer:
            "Each AlgoPainter can be hired only a limited amount of time, and for each art, they will be incentivized to charge more to get the work done. They will ask you a small amount to cover expenses with digital ink and other digital resources as a fresh start. Still, with the works' advancement, they will feel valued and charge fair values for the splendid artistic works they will produce!",
        },
        {
          question: "Are there rare items added to the paintings?",
          answer:
            "Yes! When the AlgoPainter gets retired, after delivering their beautiful works, he will randomly gift 10% of his clients with new items to decorate the piece of art.",
        },
        {
          question: "Can I sell my piece of art?",
          answer:
            "Yes! We will soon provide an internal marketplace, but you can use any other platform. Feel free to sell or keep your painting!",
        },
        {
          question: "How Hashly Gwei works?",
          answer:
            "It is tough to explain how an artist works, but simply some works and feelings inspire her, extracting geometric blocks and assembling a unique creation. As she is very organized, you can specify several parameters to create an amazing job for you. You can talk about what inspiration you want her to follow, what way to work with colors, and whether you want more psychedelic and digital work or art to hang on the wall. You are in charge!",
        },
        {
          question: "Can I send my algorithm to the platform?",
          answer:
            "Yes you can! You can create your own algorithm, connect to the platform following the communication protocol and start to get new orders!",
        },
        {
          question: "Do I need $ALGOP to use the platform?",
          answer:
            "No, you can use the platform without buying any $ALGOP token. However, you will not be eligible to participate in the BidBack System and the PIRS without our utility token.",
        },
      ],

      team: [
        {
          name: "Gleisson de Assis",
          img: "/images/team/picture-1.png",
          description: "Cofounder / Blockchain Specialist",
          social: {
            twitter: "/",
            linkedin: "/",
          },
        },
        {
          name: "Antonio Hoffert",
          img: "/images/team/picture-2.png",
          description: "Cofounder / Blockchain Specialist",
          social: {
            twitter: "/",
            linkedin: "/",
          },
        },
        {
          name: "Guilherme Dias",
          img: "/images/team/picture-3.png",
          description: "Front End Developer",
          social: {
            twitter: "/",
            linkedin: "/",
          },
        },
        {
          name: "Vinicius Felix",
          img: "/images/team/picture-4.png",
          description: "UI/UX Designer",
          social: {
            twitter: "/",
            linkedin: "/",
          },
        },
        {
          name: "Thiago Alvernaz",
          img: "/images/team/picture-5.png",
          description: "Full Stack Developer",
          social: {
            twitter: "/",
            linkedin: "/",
          },
        },
        {
          name: "Luiz Couto",
          img: "/images/team/picture-6.png",
          description: "Graphic Designer",
          social: {
            twitter: "/",
            linkedin: "/",
          },
        },
      ],

      paintings: false,
      urlGallery: process.env.VUE_APP_URL_GALLERY,
      urlAPP: process.env.VUE_APP_LINK_APP,
    };
  },

  mounted() {
    this.getPaintings();
  },

  methods: {
    openNewTab(link) {
      window.open(link);
    },
    goNewPainting() {
      console.log("goNewPainting");
      return (window.location = `${this.urlAPP}/paintings/new`);
    },

    goToApp() {
      return (window.location = `${this.urlAPP}`);
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
.body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}
.header {
  background-image: url("../../public/images/project/background-header.png");
  background-size: cover;
  padding: 120px 0px 0px 0px;
}
.btnBuy {
  margin-left: 2px;
}
.buy-container {
  background: #f4538d;
  font-size: 1.3rem;
  border-radius: 15px;
  color: #ffff;
  font-weight: bold;
  padding: 10px;
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

.text-h5 {
  line-height: 48px !important;
}

.simulation {
  margin: 5px;
  border: 2px dashed #f4538d;
  border-radius: 9px;
  margin: 3px !important;
}

.card-ultimate-platform {
  background-color: #f4538d;
  border-radius: 6px;
  padding: 50px;
}

/* mobile */
@media screen and (max-width: 959px) {
  .header {
    padding: 90px 0px 0px 0px;
  }
  .degrade {
    height: 100px;
    margin-bottom: -50px;
  }
  .card-ultimate-platform {
    padding: 20px;
  }
}
</style>
