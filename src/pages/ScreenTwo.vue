<template>
    <v-sheet id="screen-two">
        <v-container class="align-center text-center">
            <p class="c-primary font-weight-bold fs-5 mx-auto">How does it work?</p>
            <v-row class="content-container pt-6 justify-center align-center">
                <v-row class="text-container text-left">
                    <v-col class="col-6 container-left">
                        <p class="fs-1">If you’re an artist, there’s a possibility that you are unsure on how to thrive on the NFT market. It’s not hard to find several artists that only got the recognition and awards they’ve deserved well after their death.</p>
                        <p class="fs-1">Of course, you don’t want to wait that long and the NFT market seems to be the perfect way to keep creating, sell your artwork and scale it around the world.</p>
                        <p class="fs-1">The big problem is that although anyone can upload their NFTs on marketplaces, it’s no guarantee that the NFT will find a buyer. For most artists, they still can’t pass a certain point of price and they struggle on how to get their work known and increase its value.</p>
                    </v-col>
                    <v-col class="col-6 container-right">
                        <p class="fs-1">It’s like having your own NFT-creating, revenue generating machine that works 24 hours on your behalf.</p>
                        <p class="fs-1">This is amazing for you because it means that not only, you’ll be able to create a unique NFT at scale (while maintaining your artistic touch) but it will allow you to earn PIRS (Perpetual Inclusive Royalty System) by letting other people (regular people, not artists or coders) to create their own NFT based on your algorithm.</p>
                        <p class="fs-1">It’s like having your own NFT-creating machine that works 24 hours.</p>
                        <p class="fs-1">Do you want to see how this works?</p>
                    </v-col>
                </v-row>
                <p class="c-primary fs-3 font-weight-bold text-center">AlgoPainter helps artists to create, distribute and sell NFTs on scale in a simple way by providing a platform where artists can upload their own generative art and have other people create unique NFTs using algorithms based on it.</p>
                <button
                    class="algo-button"
                >
                    <a :href="baseUrl">Be a great artist</a>
                </button>
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
    #screen-two {
        overflow-x: hidden;
        background: #030017;
        
        

        .fs-1 {
            color: #ffffff;
        }

        .img-notebook {
            width: 360px;
            height: 480px;
        }
    }

    @media (max-width: 600px) {
        #screen-two{
            .text-container {
                .col-6 {
                    padding: 0;
                }
            }

            .container-left {
                padding: 0 6px 0px 24px !important;
            }

            .container-right {
                padding: 0 24px 0px 6px !important;
            }

            .fs-3 {
                margin: 20px 0px !important;
            }
        }
    }
</style>

    