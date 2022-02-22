<template>
  <v-sheet id="screen-nine">
    <v-container class="align-center justify-center text-center">
        <p class="fs-5 c-primary font-weight-bold">Partners</p>
        <p class="fs-4">Take a look at some of our partnerships</p>
        <v-row class="content-container">
            <div class="img-container col-6">
                <img
                    src="../../public/images/landingPage/Certik.png"
                    class="img-logo"
                >
            </div>
            <div class="img-container col-6">
                <img
                    src="../../public/images/landingPage/KickPAD.png"
                    class="img-logo"
                >
            </div>
        </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
    #screen-nine {
        background: url(../../public/images/landingPage/BgPrimary.png);

        p {
            margin: 0;
        }

        .content-container {
            padding-top: 20px;
            .img-logo {
                width: 400px !important;
                height: 80px !important;
            }
        }
    }

    @media (max-width: 960px) {
        #screen-nine {
           .content-container {
               flex-direction: column;
               justify-content: center;
               align-items: center;
           }
           
           .col-6 {
               max-width: 100%;
           }
        }
    }

    @media (max-width: 600px) {
        #screen-nine {
            .content-container {
                .img-logo {
                    width: 300px !important;
                    height: 60px !important;
                }
            }
        }
    }

    @media (max-width: 450px) {
        #screen-nine {
            .content-container {
                .img-logo {
                    width: 200px !important;
                    height: 40px !important;
                }
            }
        }
    }

    @media (max-width: 350px) {
        #screen-nine {
            .content-container {
                .img-logo {
                    width: 150px !important;
                    height: 30px !important;
                }
            }
        }
    }
</style>