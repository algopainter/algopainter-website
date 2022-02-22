<template>
  <v-sheet id="screen-four">
        <v-container class="align-center justify-center fill-height">
            <v-row class="page-wrapper align-center justify-center fill-height">
                <v-col class="content-container">
                    <p class="fs-2">Why Choose Us?</p>
                    <p class="c-primary font-weight-bold fs-5">Learn how to use AlgoPainter</p>
                    <p class="fs-1 font-weight-bold pb-4">If you’re an artist you can use AlgoPainter to:</p>
                    <p class="fs-1"><v-icon class="i-chevron">mdi-chevron-right</v-icon> your own algorithm and connect it to the platform. This will allow other people to create their NFTs based on your algorithm while you main your shares (PIRS).</p>
                    <p class="fs-1"><v-icon class="i-chevron">mdi-chevron-right</v-icon> the algorithms in the platform to create and sell NFTs at scale. By providing a few inputs of information you can have your own unique NFT that will contain your artistic DNA.</p>
                        <button
                            class="algo-button mt-4"
                        >
                            <a>Start using right now</a>
                        </button>
                </v-col>
                <img
                src="../../public/images/landingPage/Monitor.png"
                class="img-monitor"
                >
            </v-row>
        </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
    #screen-four {
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
        background: #030017;
        

        .fs-1,
        .fs-2,
        .i-chevron {
            color: #ffffff;
        }

        .img-monitor {
            width: 540px;
            height: 480px;
        }
    }

    @media (max-width: 1050px) {
        #screen-four {
            .img-monitor {
                width: 405px;
                height: 360px;
            }
        }
    }

    @media (max-width: 800px) {
        #screen-four {
            .img-monitor {
                width: 305px;
                height: 270px;
            }
        }
    }

    @media (max-width: 700px) {
        #screen-four {
            .img-monitor {
                width: 260px;
                height: 230px;
            }
        }
    }

    @media (max-width: 400px) {
        #screen-four {
            height: 120vh;
            .img-monitor {
                width: 195px;
                height: 175px;
            }
        }
    }
</style>