<template>
    <v-sheet id="screen-ten">
        <v-container class="align-center justify-center text-center">
            <p class="fs-5 font-weight-bold c-primary">FAQ</p>
            <p class="fs-1">FREQUENTLY ASKED QUESTIONS</p>
            <v-expansion-panels multiple class="mt-3 mt-md-8">
              <v-expansion-panel color="blue" v-for="(item, i) in faq" :key="i">
                <v-expansion-panel-header color="transparent">
                    <div class="img-container fs-3 font-weight-bold d-flex align-center">
                        <img
                            src="../../public/images/landingPage/ArrowRightBold.png"
                            class="img-arrow-right-bold pr-1"
                        >
                        {{ item.question }}
                        <div class="thin-line"></div>
                    </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="text-left fs-3">
                  {{ item.answer }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
        </v-container>
    </v-sheet>
</template>

<script>
    export default {
        data() {
            return {
                faq: [
                    {
                        question: 'WHAT IS ALGOPAINTER?',
                        answer: 'AlgoPainter is a platform to connect digital painters to collectors. The AlgoPainters generate unique and limited paintings using marvelous algorithms. When you request a piece of art to an AlgoPainter, you need to specify how this work will be done using a set of parameters to create a unique painting.',
                    },
                    // {
                    //     question: 'HOW CAN I USE IT?',
                    //     answer: "Each AlgoPainter can be hired only a limited amount of time, and for each art, they will be incentivized to charge more to get the work done. They will ask you a small amount to cover expenses with digital ink and other digital resources as a fresh start. Still, with the works' advancement, they will feel valued and charge fair values for the splendid artistic works they will produce!",
                    // },
                    // {
                    //     question: 'DO I NEED CODING SKILLS?',
                    //     answer: 'Yes! When the AlgoPainter gets retired, after delivering their beautiful works, he will randomly gift 10% of his clients with new items to decorate the piece of art.',
                    // },
                    // {
                    //     question: 'HOW RARE IS A PAINTING (NFT)?',
                    //     answer: 'Yes! We will soon provide an internal marketplace, but you can use any other platform. Feel free to sell or keep your painting!',
                    // },
                    // {
                    //     question: 'CAN I SELL MY NFTs?',
                    //     answer: 'It is tough to explain how an artist works, but simply some works and feelings inspire her, extracting geometric blocks and assembling a unique creation. As she is very organized, you can specify several parameters to create an amazing job for you. You can talk about what inspiration you want her to follow, what way to work with colors, and whether you want more psychedelic and digital work or art to hang on the wall. You are in charge!',
                    // },
                    {
                        question: 'DO I NEED $ALGOP (the Token) TO USE THE PLATFORM?',
                        answer: 'No, you can use the platform without buying any $ALGOP token. However, you will not be eligible to participate in the BidBack System and the PIRS without our utility token.',
                    },
                    // {
                    //     question: 'HOW CAN I BUY THE $ALGOP TOKEN?',
                    //     answer: 'No, you can use the platform without buying any $ALGOP token. However, you will not be eligible to participate in the BidBack System and the PIRS without our utility token.',
                    // },
                ],                
            }
        }
    }
</script>


<style lang="scss">
    #screen-ten {
        .v-expansion-panel {
            background-color: rgb(0,0,0,0) !important;
            color: #ffffff !important;
        }

        .v-expansion-panel-content__wrap {
            padding: 16px 24px 16px;
        }
    }

    @media (max-width: 450px) {
        #screen-ten {
            .v-expansion-panel-header {
                padding: 10px 0;
            }

            .container {
                padding: 0;
            }
        }
    }
</style>

<style lang="scss" scoped>
    #screen-ten {
        background: linear-gradient(180deg, #030018 0%, #01002D 100%);
        color: #ffffff;

       .img-container {
           width: 18px;
           height: 14px;
       }

       .thin-line {
           border: 1px solid #1C1B57;
       }
    }

    @media (max-width: 750px) {
        #screen-ten {
            .fs-3 {
                font-size: 16px;
                line-height: 24px;
            }
        }
    }

    @media (max-width: 650px) {
        #screen-ten {
            .fs-3 {
                font-size: 15px;
                line-height: 24px;
            }
        }
    }

    @media (max-width: 450px) {
        #screen-ten {
            .fs-3 {
                font-size: 13px;
                line-height: 24px;
            }
        }
    }

    @media (max-width: 380px) {
        #screen-ten {
            .fs-3 {
                font-size: 11px;
                line-height: 24px;
            }
        }
    }
</style>
