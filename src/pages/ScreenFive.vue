<template>
  <v-sheet id="screen-five">
    <v-container class="align-center justify-center">
      <v-row>
        <v-col class="justify-center align-center text-center">
          <p class="fs-2">The method</p>
          <p class="c-primary font-weight-bold fs-5">Easy to Start</p>
          <p class="font-weight-bold fs-1">In order to start creating NFTs, you have 3 simple steps:</p>
          <v-row class="boxes-container justify-center align-center">
            <v-row class="box box-1">
              <div class="img-container">
                <img
                  src="../../public/images/landingPage/MagnifyingGlass.png"
                  class="img-icon"
                >
              </div>
              <div class="content-container">
                <p class="box-title fs-2 font-weight-bold">1) Find your artist</p>
                <p class="box-text fs-1">Each algorithm has a different style of NFTs. Choose the one you like the best. If you’re an artist, you can integrate your own algorithm so people can create NFTs based on your pattern.</p>
              </div>
            </v-row>
            <v-row class="box box-2">
              <div class="img-container">
                <img
                  src="../../public/images/landingPage/PaletteBrush.png"
                  class="img-icon"
                >
              </div >
              <div  class="content-container">
                <p class="box-title fs-2 font-weight-bold">2) Customize the NFT</p>
                <p class="box-text fs-1">After choosing the artist, you can interact with AlgoPainter by providing a few bits of information to shape the NFT to your liking. Change the style, color and have your unique piece of NFT ready in less than 5 minutes.</p>
              </div>
            </v-row>
            <v-row class="box box-3">
              <div  class="img-container">
                <img
                  src="../../public/images/landingPage/ArrowRightTop.png"
                  class="img-icon"
                >
              </div >
              <div  class="content-container">
                <p class="box-title font-weight-bold fs-2">3) Share or Sell the NFT</p>
                <p class="box-text fs-1">If you that’s what you desire, you can sell your NFT to an end-user or have it listed under Algo Painter’s marketplace so you can start monetizing right away.</p>
              </div>
            </v-row>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss">
  #screen-five {
    .row,
    .container {
      flex: none;
    }

    .col {
      padding: 0;
    }
  }
</style>

<style lang="scss" scoped>
    #screen-five {
        background: url(../../public/images/landingPage/BgPrimary.png);

        .row {
            margin: 0;
        }

        .img-icon {
          width: 55px;
          height: 55px;
        }

        .box {
          width: 350px;
          height: 350px;
          border: 2px solid #F4538D;
          border-radius: 10px;
          margin: 4px 0 0 4px;
          padding: 15px;
          text-align: left;

          .content-container {
            width: 80%;
          }

          .img-container {
            text-align: center;
            width: 20%;
          }

          .box-text {
              margin: 0;
          }
        }
    }

    @media (max-width: 950px) {
        #screen-five {
            .box {
                height: 240px !important;
            }
        }
    }

    @media (max-width: 600px) {
        #screen-five {
          .box {
              height: 210px !important;
          }

          .img-icon {
            width: 45px;
            height: 45px;
          }
        }
    }

    @media (max-width: 450px) {
        #screen-five {
            .box {
                width: 300px;
                padding: 10px;
            }
        }
    }

    @media (max-width: 350px) {
        #screen-five {
            .box {
              width: 250px;
              height: 230px !important;
              padding: 5px;

              .img-icon {
                width: 35px;
                height: 35px;
              }
            }
        }
    }

    @media (max-width: 320px) {
        #screen-five {
            .box {
              width: 220px;
              height: 220px !important;
            }
        }
    }
</style>