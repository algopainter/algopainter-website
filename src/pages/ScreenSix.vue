<template>
  <v-sheet id="screen-six">
    <v-container class="align-center justify-center">
        <v-row>
            <v-col class="align-center justify-center text-center">
                <p class="fs-5 c-primary font-weight-bold">Advanced Features</p>
                <p class="fs-4 font-weight-bold">BidBack System</p>
                <p class="fs-1"><b>A user can create an auction and set a BidBack percentage.</b> It will incentivize all the users to send bids because all the bidders will join the BidBack pool and receive an artwork sell price percentage.</p>
                <v-row class="boxes-container justify-center align-center mt-3">
                    <div class="box box-1 justify-center align-center">
                        <p class="box-text fs-1">- To participate in the <b>BidBack</b> system, you must be participating in an auction and bidding</p>
                    </div>
                    <div class="box box-2 justify-center align-center">
                        <p class="box-text fs-1">- <b>BidBack percentage</b> is set by the person responsible for the auction</p>
                    </div>
                    <div class="box box-3 justify-center align-center">
                        <p class="box-text fs-1">- If the artwork is auctioned, all <b>auction participants</b> will share the value of the set percentage</p>
                    </div>
                    <div class="box box-4 justify-center align-center">
                        <p class="box-text fs-1">- To be able to participate, you just have to have made a bid, but to receive, you need to have staked <b>$ALGOP</b>, but the distribution of this percentage is according to the number of tokens <b>($ALGOP)</b> that you staked</p>
                    </div>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
    #screen-six {
        background: linear-gradient(180deg, #01002D 0%, #030017 100%);
        color: #ffffff;

        .box {
            width: 290px;
            height: 230px;
            border: 2px solid #F4538D;
            border-radius: 10px;
            margin: auto;
            display: flex;
            margin: 4px 0 0 4px;
            padding: 8px;

            .img-container {
                text-align: center;
                margin: auto;
            }

            .box-text {
                margin: 0;
            }
        }
    }

    @media (max-width: 650px) {
        #screen-six {
            .box {
                height: 150px !important;
            }
        }
    }

    @media (max-width: 374px) {
        #screen-six {
            .box {
                height: 180px !important;
            }
        }
    }
</style>