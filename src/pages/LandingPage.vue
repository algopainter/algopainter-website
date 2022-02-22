<template>
    <div class="pages-container">
        <screen-one class="page-padding-first"/>
        <screen-two class="page-padding"/>
        <screen-three class="page-padding"/>
        <screen-four class="page-padding"/>
        <screen-five class="page-padding" />
        <screen-six class="page-padding" />
        <screen-seven class="page-padding" />
        <screen-eight class="page-padding" />
        <screen-nine class="page-padding" />
        <screen-ten class="page-padding" />
    </div>
</template>
<script lang="ts">
    import ScreenOne from './ScreenOne.vue';
    import ScreenTwo from './ScreenTwo.vue';
    import ScreenThree from './ScreenThree.vue';
    import ScreenFour from './ScreenFour.vue';
    import ScreenFive from './ScreenFive.vue';
    import ScreenSix from './ScreenSix.vue';
    import ScreenSeven from './ScreenSeven.vue';
    import ScreenEight from './ScreenEight.vue';
    import ScreenNine from './ScreenNine.vue';
    import ScreenTen from './ScreenTen.vue';

export default {
    components: {
        ScreenOne,
        ScreenTwo,
        ScreenThree,
        ScreenFour,
        ScreenFive,
        ScreenSix,
        ScreenSeven,
        ScreenEight,
        ScreenNine,
        ScreenTen,
    }
}
</script>

<style lang="scss" >
    * {
        margin: 0;
		padding: 0;
		box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    .c-primary {
        color: #F4538D;
    }

    .c-secondary {
        color: #9198A6;
    }

    .algo-button {
        background-color: #F4538D;
        font-weight: bold;
        border-radius: 12px;
        font-size: 22px;
        line-height: 33px;
        text-align: center;
        padding: 8px 16px;
        a {
            color: #ffffff;
        }
    }

    .fs-1 {
        font-size: 16px;
        line-height: 24px;
    }

    .fs-2 {
        font-size: 22px;
        line-height: 33px;
    }

    .fs-3 {
        font-size: 24px;
        line-height: 36px;
    }

    .fs-4 {
        font-size: 28px;
        line-height: 42px;
    }

    .fs-5 {
        font-size: 38px;
        line-height: 57px;
    }

    .fs-6 {
        font-size: 44px;
        line-height: 64px;
    }

    @media (max-width: 960px) {
        .page-padding-first,
        .page-padding {
            padding: 32px !important;
        }

        .fs-1 {
            font-size: 12px;
            line-height: 24px;
        }

        .fs-2 {
            font-size: 16.5px;
            line-height: 24.75px;
        }

        .fs-3 {
            font-size: 18px;
            line-height: 27px;
        }

        .fs-4 {
            font-size: 21px;
            line-height: 31,5px;
        }

        .fs-5 {
            font-size: 28.5px;
            line-height: 42.75px;
        }
        
        .fs-6 {
            font-size: 33px;
            line-height: 48px;
        }
    }

    @media (max-width: 600px) {
        .page-padding-first,
        .page-padding {
            padding: 24px !important;
        }

        .algo-button {
            font-size: 16.5px !important;
            line-height: 24.75px !important;
        }

        .fs-1 {
            font-size: 10.2px;
            line-height: 20.4px;
        }

        .fs-2 {
            font-size: 14.025px;
            line-height: 21.0375px;
        }

        .fs-3 {
            font-size: 15.3px;
            line-height: 22.95px;
        }

        .fs-4 {
            font-size: 17.85px;
            line-height: 26.775px;
        }

        .fs-5 {
            font-size: 24.225px;
            line-height: 36.3375px;
        }
        
        .fs-6 {
            font-size: 28.05px;
            line-height: 40.8px;
        }
    }

    @media (max-width: 450px) {
        .algo-button {
            font-size: 12.375px !important;
            line-height: 18.5625px !important;
        }

        p {
            margin-bottom: 10px !important;
        }
    }

    @media (max-width: 350px) {
        .algo-button {
            font-size: 11px !important;
            line-height: 14px !important;
        }
    }

    @media (max-width: 300) {
        .algo-button {
            font-size: 10px !important;
            line-height: 12px !important;
        }
    }
</style>

<style scoped lang="scss" >
    .pages-container {
        .page-padding {
            padding: 64px;
        }

        .page-padding-first {
            padding: 32px 64px 64px 64px
        }
    }
</style>