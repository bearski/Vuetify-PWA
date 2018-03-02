<template>
  <v-slide-y-transition mode="out-in">
    <v-layout column>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            class="white--text"
            height="200px"
            src="/static/img/comm_clean.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Commercial Cleaning</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>

          <v-card-text>
            <ul>
              <li v-for="(item, index) in sortedItems">
                <router-link :to="{ name: 'cleanModule', params: { id: item.id }}">{{ item.name }} :  {{ item.objective }}</router-link>
              </li>
            </ul>
          </v-card-text>          
        </v-card>
      </v-flex>

    </v-layout>
  </v-slide-y-transition>
</template>

<script>
  import serverData from '../server/clean.json'

  export default {
    name: 'clean',
    data () {
      return {
        items: null
      }
    },
    created () {
      this.fetchData()
    },
    computed: {
      sortedItems () {
        return this.items.sort((a, b) => a.name > b.name)
      }
    },
    methods: {
      fetchData () {
        if (navigator.onLine) {
          console.log('User is online - Fetching tag information from server')
          this.$set(this, 'items', serverData.tags)
          localStorage.setItem('tags', JSON.stringify(this.items))
        } else {
          console.log('User is offline - Fetching tag information from localstorage')
          this.$set(this, 'items', JSON.parse(localStorage.getItem('tags')))
        }
        console.log('items: ' + JSON.stringify(this.items))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  ul {
    list-style: none;
  }

  li {
    margin: 10px 0;
    border-bottom: 1px dashed rgba(0,0,0,0.12);
  }

  a {
    text-decoration: none;
  }
</style>
