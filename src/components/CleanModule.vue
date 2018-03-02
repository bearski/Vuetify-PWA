<template>
  <v-slide-y-transition mode="out-in">
    <v-layout column>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            class="white--text"
            height="200px"
            :src="getImgUrl(tag.mod_image)"
             v-bind:alt="tag.mod_image"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline"> {{ tag.objective_alt }} </span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>

          <v-card-text>
            {{ tag.text }}
            <v-spacer></v-spacer>
            <ul>
              <li v-for="topic in tag.topics">
                {{ topic.title }}
              </li>
            </ul>
          </v-card-text>

          <v-card-actions>
            <v-btn flat color="orange" @click.prevent="playSound(tag.audio_isiXhosa)">isiXhosa</v-btn>
            <v-btn flat color="orange" @click.prevent="playSound(tag.audio_english)">English</v-btn>
          </v-card-actions>

          <v-card-text>
            If you have access to data, please click on the link below to watch a demonstration on how to use some commonly used cleaning equipment
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="orange">Watch Demo</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>

    </v-layout>
  </v-slide-y-transition>
</template>

<script>
  import serverData from '../server/clean.json'

  export default {
    name: 'cleanModule',
    data () {
      return {
        alert: {
          success: false,
          error: false,
          message: ''
        },
        tagId: this.$route.params.id,
        tag: '',
        menu: false,
        dateFinished: null
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        console.log('in here:' + this.$route.params.id + ' tagId: ' + this.tagId + ' items:' + JSON.stringify(this.items))
        if (navigator.onLine) {
          console.log('User is online - Fetching tag information from server')
          this.$set(this, 'tag', serverData.tags.find(item => item.id === parseInt(this.tagId)))
        } else {
          console.log('User is offline - Fetching tag information from localstorage')
          let tags = JSON.parse(localStorage.getItem('tags'))
          this.$set(this, 'tag', tags.find(item => item.id === parseInt(this.tagId)))
        }
        console.log('tag:' + JSON.stringify(this.tag))
      })
    },
    methods: {
      // save () {
      //   // this.doSomeStuff()
      //   // need to get the background sync working...just not succeeding right now
      //   let newTags = this.getTags().filter(item => item.id !== parseInt(this.tagId))
      //   newTags.push(this.tag)
      //   localStorage.setItem('tags', JSON.stringify(newTags))
      //   this.alertSuccess('Record Saved')
      // },
      // complete () {
      //   if (navigator.onLine) {
      //     console.log('User is online - save the data to the server')
      //   } else {
      //     console.log('User is offline - need to save the data when user is back online')
      //   }
      //   this.alertSuccess('Record Completed')
      // },
      getTags () {
        if (navigator.onLine) {
          return serverData.tags
        } else {
          return JSON.parse(localStorage.getItem('tags'))
        }
      },
      alertSuccess (message) {
        this.alert.error = false
        this.alert.message = message
        this.alert.success = true
      },
      alertError (message) {
        this.alert.success = false
        this.alert.message = message
        this.alert.error = true
      },
      doSomeStuff () {
        console.log('DOING SOME STUFF!!')
        // var message = 'Promise message'
        // return Promise.resolve(message)
        fetch('./static/img/v.png')
          .then(function (response) {
            console.log('returning some response')
            return response
          })
          .then(function (text) {
            console.log('Request successful', text)
          })
          .catch(function (error) {
            console.log('Request failed', error)
          })
      },
      getImgUrl (img) {
        let images = require.context('../../static/img/', false, /\.jpg$/)
        return images('./' + img)
      },
      playSound (sound) {
        if (sound) {
          // let file = require.context('../../static/audio/', false, /\.ogg$/)
          let audio = new Audio(sound)
          audio.play()
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  td input {
    border: 1px solid rgba(0,0,0,0.12);
  }

  div.input-group__selections__comma, div.list__tile__title {
    font-size:13px!important;
  }

  input.sm-1 {
    width: 25px;
  }

  input.sm-2 {
    width: 45px;
  }

  .dialog-lnk {
    color: indigo;
    cursor: pointer;
    border-bottom: 1px dashed indigo;
  }

  .alert {
    width: 100%;
  }
</style>
