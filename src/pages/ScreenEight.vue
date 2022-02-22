<template>
  <v-sheet id="screen-four">
        <v-container class="align-center justify-center fill-height">
            <v-row class="page-wrapper align-center justify-center fill-height">
                <v-col class="content-container">
                    <p class="fs-2">You can trust us.</p>
                    <p class="c-primary font-weight-bold fs-5">Blockchain Certification</p>
                    <p class="fs-1">Each artwork is one-of-a-kind, which means that we will never sell any other copies. To certify its uniqueness, we tokenize the painting as an NFT on the blockchain.</p>
                    <p class="fs-1">It doesn’t prevent anyone from making digital copies of it, but the original piece is registered on the blockchain and has only one owner. We have the uniqueness certified by the blockchain.</p>
                        <button
                            class="algo-button mt-4"
                        >
                            <a
                                :href="baseUrl + '/create-collectible'"
                                target="_blank"
                            >
                                Create an amazing art
                            </a>
                        </button>
                </v-col>
                <img
                    src="../../public/images/landingPage/Padlock.png"
                    class="img-padlock"
                >
            </v-row>
        </v-container>
  </v-sheet>
</template>

<script lang="ts">
    export default {
        props: {
            baseUrl: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    #screen-four {
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
        background: linear-gradient(180deg, #030018 0%, #01002D 100%);
        color: #ffffff;

        .img-padlock {
            width: 540px;
            height: 480px;
        }
    }

    @media (max-width: 1050px) {
        #screen-four {
            .img-padlock {
                width: 405px;
                height: 360px;
            }
        }
    }

    @media (max-width: 800px) {
        #screen-four {
            .img-padlock {
                width: 305px;
                height: 270px;
            }
        }
    }

    @media (max-width: 700px) {
        #screen-four {
            .img-padlock {
                width: 260px;
                height: 230px;
            }
        }
    }

    @media (max-width: 400px) {
        #screen-four {
            height: 120vh;
        }
    }
</style>