<template>
  <v-slide-y-transition mode="out-in">
    <v-layout column align-center>
   <v-app light>
    <v-content>
      <section>
        <v-parallax src="static/img/iwp780688173-parallax-wallpapers.jpg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <!-- <img src="static/img/v.png" alt="Vuetify.js" height="200"> -->
            <h1 class="white--text mb-2 display-1 text-xs-center">Sound Future Iniative</h1>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <span class="subheading">
                <p>Revolutionise Learning and Skills Transfer</p>
                <p>Democratise Access to Fair and Equitable Learning Resources</p>
                <p>Partner with Communities, Industry and Academia to find Learning Solutions</p>
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">What we do</div>
                    </v-card-title>
                    <v-card-text>
                        Blended audio tutoring, in mother tongue languages, allowing
                        people to learn independently and at their own pace, anywhere, anytime.
                        This allows students to progress to new levels of learning
                        as soon as they demonstrate mastery of a topic.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Achieving our vision</div>
                    </v-card-title>
                    <v-card-text>
                      We focus on the common goal of empowering communities
                      through education and skills training by harnessing
                      innovation.  This means that we use technology to optimally
                      enable sustainable access to learning, without compromising
                      human interactions.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">The challenge</div>
                    </v-card-title>
                    <v-card-text>
                      The break from poverty’s grip becomes believable when we
                      see the next generation having access to quality contextual
                      education.  The stakes are high. Limited opportunity for
                      too many young people results in dramatically lower life
                      prospects for them and a worse quality of life for all of us.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="static/img/iwp780688173-parallax-wallpapers.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Learning has never been easier</div>
            
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              to="/clean"
            >
              View Our Demo
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  We believe that attitudes and behaviours along with skills
                  transfer is what will improve lives. With that as our common
                  goal, we believe we have the right skills, the dedication and
                  we are at the right time, to make the difference.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>+27 81 525 8739</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Cape Town, South Africa</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>info@soundfuture.org.za</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>
              by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
    </v-layout>
  </v-slide-y-transition>
</template>

<script>
export default {
  name: 'home'
}
</script>
