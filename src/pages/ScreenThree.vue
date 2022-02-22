<template>
    <v-sheet id="screen-three" class="fill-height">
        <v-container class="align-center justify-center fill-height">
            <v-row class="page-wrapper align-center justify-center fill-height">
                <img
                    src="../../public/images/landingPage/ExpressionsArt.png"
                    class="img-expressions-art"
                >
                <v-col class="content-container align-center justify-center">
                    <p class="fs-2">Welcome To AlgoPainter</p>
                    <p class="c-primary font-weight-bold fs-5">AlgoPainter is great for artists</p>
                    <p class="fs-1"><v-icon class="i-chevron" >mdi-chevron-right</v-icon>Each NFT created is unique</p>
                    <p class="fs-1"><v-icon class="i-chevron" >mdi-chevron-right</v-icon>You can upload your own algorithm</p>
                    <p class="fs-1"><v-icon class="i-chevron" >mdi-chevron-right</v-icon>Earn PIRS, a Royalties system that will help you monetize your work in a secure and sustainable way</p>
                    <button
                        class="algo-button"
                    >
                        <a
                            :href="baseUrl"
                            target="_blank"
                        >
                            Start creating now
                        </a>
                    </button>
                </v-col>
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
    #screen-three {
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
        background: url(../../public/images/landingPage/BgPrimary.png);
        
        .img-expressions-art {
            width: 565px;
            height: 565px;
        }
    }

    @media (max-width: 960px) {
        #screen-three {
            .page-wrapper {
                flex-direction: column;
                display: flex;
            }

            .content-container,
            .img-expressions-art  {
                max-width: 100%;
            }

        
            .img-expressions-art {
                width: 300px;
                height: 300px;
            }
        }
    }

    @media (max-width: 500px) {
        #screen-three {
            .fs-5 {
                font-size: 20.05px;
                line-height: 30.8px;
            }
        }

        .img-expressions-art {
            width: 250px !important;
            height: 250px !important;
        }
    }

    @media (max-width: 320px) {
        .img-expressions-art {
            width: 200px !important;
            height: 200px !important;
        }
    }

    @media (max-width: 300px) {
        .img-expressions-art {
            width: 180px !important;
            height: 180px !important;
        }
    }
</style>