<template>
  <v-sheet id="screen-five">
    <v-container class="align-center justify-center">
      <v-row>
          <v-col class="justify-center align-center text-center">
            <p class="fs-2">The method</p>
            <p class="c-primary font-weight-bold fs-5">Easy to Start</p>
            <p class="font-weight-bold fs-1">In order to start creating NFTs, you have 3 simple steps:</p>
          </v-col>
      </v-row>
      <v-col class="boxes-container justify-center align-center">
        <v-row class="box box-1">
          <v-col class="img-container col-3">
            <img
              src="../../public/images/landingPage/MagnifyingGlass.png"
              class="img-magnifying-glass"
            >
          </v-col>
          <v-col class="content-container col-9">
            <p class="box-title fs-2 font-weight-bold">1) Find your artist</p>
            <p class="box-text fs-1">Each algorithm has a different style of NFTs. Choose the one you like the best. If you’re an artist, you can integrate your own algorithm so people can create NFTs based on your pattern.</p>
          </v-col>
        </v-row>
        <v-row class="box box-2">
          <v-col class="img-container col-3">
            <img
              src="../../public/images/landingPage/PaletteBrush.png"
              class="img-palette-brush"
            >
          </v-col >
          <v-col  class="content-container col-9">
            <p class="box-title fs-2 font-weight-bold">2) Customize the NFT</p>
            <p class="box-text fs-1">After choosing the artist, you can interact with AlgoPainter by providing a few bits of information to shape the NFT to your liking. Change the style, color and have your unique piece of NFT ready in less than 5 minutes.</p>
          </v-col>
        </v-row>
        <v-row class="box box-3">
          <v-col  class="img-container col-3">
            <img
              src="../../public/images/landingPage/ArrowRightTop.png"
              class="img-arrow-right-top"
            >
          </v-col >
          <v-col  class="content-container col-9">
            <p class="box-title font-weight-bold fs-2">3) Share or Sell the NFT</p>
            <p class="box-text fs-1">If you that’s what you desire, you can sell your NFT to an end-user or have it listed under Algo Painter’s marketplace so you can start monetizing right away.</p>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
    #screen-five {
        background: url(../../public/images/landingPage/BgPrimary.png);

        .col-3,
        .col-4,
        .col-9 {
            padding: 8px
        }

        .row {
            margin: 0;
        }

        .fs-1 {
            font-size: 14px;
        }

        .box {
            height: 150px !important;
            border: 2px solid #F4538D;
            border-radius: 10px;
            margin: auto;

            .img-container {
                text-align: center;
                margin: auto;
            }

            .box-text {
                margin: 0;
            }
        }

        .box-2,
        .box-3 {
            margin-top: 8px;
        }
    }

    @media (max-width: 850px) {
        #screen-five {
            .box {
                height: 200px !important;
            }
        }
    }


    @media (max-width: 850px) {
        #screen-five {
            .container {
                padding: 0;
            }
        }
    }

    @media (max-width: 450px) {
        #screen-five {
            .box {
                height: 250px !important;
            }

            .img-magnifying-glass,
            .img-palette-brush,
            .img-arrow-right-top {
                width: 45px;
                height: 45px;
            }
        }
    }

    @media (max-width: 350px) {
        #screen-five {
            .box {
                height: 300px !important;
            }
        }
    }

    @media (max-width: 330px) {
        #screen-five {
            .box {
                height: 350px !important;
            }
        }
    }

    @media (max-width: 300px) {
        #screen-five {
            .box {
                height: 400px !important;
            }
        }
    }

    @media (max-width: 280px) {
        #screen-five {
            .box {
                height: 430px !important;
            }
        }
    }
</style>