<template>
    <v-sheet id="screen-one" class="fill-height">
        <v-container class="align-center fill-height">
            <v-row class="justify-space-between align-center">
                <img
                class="logo"
                src="../../public/images/landingPage/Logo.png"
                >
                <button
                    class="algo-button"
                >
                    <a :href="baseUrl + '/edit-profile'">Create Account</a>
                </button>
            </v-row>
            <v-row class="page-wrapper align-center justify-center pt-4">
                <v-col class="content-container col-6 pa-0">
                    <h6 class="fs-6 c-primary font-weight-bold">AlgoPainter helps artists to create, distribute and sell NFTs on scale in a simple.</h6>
                    <h6 class="fs-2 py-2 font-weight-bold">A platform where artists can upload their own generative art and have other people create unique NFTs using algorithms based on it.</h6>
                    <h6 class="fs-1 pb-4 c-secondary">It’s like having your own NFT-creating, revenue generating machine that works 24 hours on your behalf.</h6>
                    <button
                        class="algo-button btn-bottom"
                    >
                        <a :href="baseUrl">
                            Create an amazing art
                        </a>
                    </button>
                </v-col>
                <img
                    src="../../public/images/landingPage/Notebook.png"
                    class="img-notebook col-6 pa-0"
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
    #screen-one {
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
        background: url(../../public/images/landingPage/BgPrimary.png);

        .img-notebook {
            width: 100%;
            height: auto;
        }

        .logo {
            width:213px;
            height: 50px;
        }
    }

    @media (max-width: 960px) {
        #screen-one {
            height: auto;

            .page-wrapper {
                flex-direction: column;
            }

            .content-container,
            .img-notebook {
                max-width: 100%;
            }
            
            .img-notebook {
                margin-top: 32px;
            }

            .img-notebook {
                width: 480px;
                height: 360px;
            }
    
            .logo {
                width:213px;
                height: 50px;
            }

            .btn-bottom {
                display: flex;
                margin: auto;
            }

            .fs-1 {
                padding-bottom: 16px !important;
            }
        }
    }

    @media (max-width: 700px) {
        #screen-one {
            .img-notebook {
                width: 360px;
                height: 270px;
            }
        }
    }

    @media (max-width: 600px) {
        .page-padding-first,
        .page-padding {
            padding: 24px !important;
        }

        #screen-one {
            .logo {
                width:160px;
                height: 37.5px;
            }

            .fs-1 {
                font-size: 12px;
                line-height: 24px;
                padding-bottom: 16px !important;
            }

            .fs-2 {
                font-size: 18px;
                line-height: 24.75px;
            }
            
            .fs-6 {
                font-size: 33px;
                line-height: 40px;
            }
        }
    }

    @media (max-width: 450px) {
        #screen-one {
            .img-notebook {
                width: 270px;
                height: 202.5px;
            }

            .fs-1 {
                font-size: 10px;
                line-height: 20px;
            }

            .fs-2 {
                font-size: 13.5px;
                line-height: 18.5625px;
            }
            
            .fs-6 {
                font-size: 24.75px;
                line-height: 30px;
            }
        }
    }

    @media (max-width: 450px) {
        #screen-one {
            .logo {
                width:120px;
                height: 28.125px;
            }
        }
    }

    @media (max-width: 350px) {
        #screen-one {
            .logo {
                width:90px;
                height: 21.09375px;
            }
        }
    }
</style>