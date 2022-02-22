<template>
    <v-sheet id="screen-eleven">
        <v-container class="align-center justify-center text-center">
            <p class="fs-5 c-primary font-weight-bold">Start using AlgoPainter</p>
            <p class="fs-4">AlgoPainter helps artists to create, distribute and sell NFTs on scale in a simple way by providing a platform where artists can upload their own generative art and have other people create unique NFTs using algorithms based on it.</p>
            <p class="fs-4">To start using the platform, click on the button below</p>
            <button
                class="algo-button"
            >
                <a
                    :href="baseUrl"
                    target="_blank"
                >
                    Start using right now
                </a>
            </button>
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
    @media (max-width: 450px ) {
        #screen-eleven {
            .fs-5 {
                font-size: 20.59125px;
                line-height: 30.886875px;
            }
    
            .fs-4 {
                font-size: 15.1725px;
                line-height: 22.75875px;
            }

            .fs-5,
            .fs-4 {
                margin-bottom: 20px !important;
            }
        }
    }
</style>