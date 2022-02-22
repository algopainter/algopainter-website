<template>
  <v-sheet id="screen-seven">
    <v-container>
        <v-row>
            <v-col class="wrapper align-center justify-center text-left">
                <v-row class="top-part">
                    <v-col class="left-part col-6">
                        <p class="fs-2">Token</p>
                        <p class="fs-5 c-primary font-weight-bold">Perpetual Inclusive Royalty System - PIRS</p>
                        <v-col class="boxes-left-container">
                            <v-row class="box-top align-center">
                                <img
                                    src="../../public/images/landingPage/Beret.png"
                                    class="img-beret pr-1"
                                >
                                <p class="box-right fs-1 pl-1"><b>Creators Royalties –</b> The artist who sent the work or the user who hired an AlgoPainter to generate the work.</p>
                            </v-row>
                            <v-row class="box-bottom align-center">
                                <img
                                    src="../../public/images/landingPage/StackOfCoins.png"
                                    class="img-stack-of-coins pr-1"
                                >
                                <p class="box-right fs-1 pl-1"><b>Investors Royalties –</b> The list of owners of the artwork (users who bought the item over time). </p>
                            </v-row>
                        </v-col>
                    </v-col>
                    <v-col class="right-part col-6">
                        <p class="fs-2 c-primary font-weight-bold">SIMULATION</p>
                        <p class="fs-1">An artwork that was sold for 1,000,000 USD and has a configuration of 10% of Creator Royalties and 10% of Investors Royalties:</p>
                        <p class="fs-1 c-primary font-weight-bold">The seller will receive: 800,000 USD</p>
                        <p class="fs-1 c-primary font-weight-bold">The creator will receive: 100,000 USD</p>
                        <p class="fs-1">Investors will receive the distribution of 100,000 USD in proportion to the $ALGOP Tokens they have in their wallets at the time of sale.</p>
                        <p class="fs-1">The perpetual inclusive royalty system will bring attention to your artwork because all the owners will receive a royalty incentivize to buy and sell.</p>
                        <button
                            class="algo-button"
                        >
                            <a
                                href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xbee554dbbc677eb9fb711f5e939a2f2302598c75"
                                target="_blank"
                            >
                                Buy $ALGOP now
                            </a>
                        </button>
                    </v-col>
                </v-row>
                    <p class="font-weight-bold c-primary fs-4 mt-6 text-center">PIRS System (Investors Royalties)</p>
                    <v-row class="boxes-container mt-3 justify-center align-center">
                        <div class="box box-1 justify-center align-center">
                            <p class="box-text fs-1">- <b>PIRS</b> is a percentage of the earnings of the artwork's previous owners</p>
                        </div>
                        <div class="box box-2 justify-center align-center">
                            <p class="box-text fs-1">- The creator of the art sets a percentage of <b>PIRS</b>, and this amount will be divided to the previous owners of that work whenever there is a sale</p>
                        </div>
                        <div class="box box-3 justify-center align-center">
                            <p class="box-text fs-1">- Once the first sale of any artwork is made, the last seller/owner will be eligible for <b>PIRS</b> calculations</p>
                        </div>
                        <div class="box box-4 justify-center align-center">
                            <p class="box-text fs-1">- The distribution of the value of this percentage is according to the number of <b>$ALGOP</b> staked</p>
                        </div>
                    </v-row>
            </v-col>
        </v-row>    
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
    #screen-seven {
        .wrapper {
            width: 100%;

            .top-part {
                .fs-2 {
                    margin: 0;
                }
                .left-part {
                    .img-stack-of-coins,
                    .img-beret {
                        width: 35%;
                    }
    
                    .box-right {
                        width: 65%;
                        margin: 0;
                    }
                }
                .right-part {
                    background: #030017;
                    border-radius: 15px;
                    color: #ffffff;
                    .fs-2 {
                        margin-bottom: 20px;
                    }
                }
            }



            .box {
                width: 290px;
                height: 230px;
                border: 2px solid #F4538D;
                border-radius: 10px;
                margin: auto;
                display: flex;
                margin: 4px 0 0 4px;
                padding: 8px;

                .box-text {
                    margin: 0 !important;
                }
            }
        }
    }

    @media (max-width: 650px) {
        #screen-seven {
            .box {
                height: 100px !important;
            }
        }
    }

    @media (max-width: 500px) {
        #screen-seven {
            .top-part {
                flex-direction: column;

                .fs-5,
                .fs-2 {
                    text-align: center;
                }

                .algo-button {
                    display: flex;
                    margin: auto;
                }
            }

            .col-6 {
                max-width: 100%;
            }
        }
    }
</style>