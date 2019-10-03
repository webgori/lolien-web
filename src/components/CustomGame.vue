<template>
  <v-app>
    <v-container
      class="contens"
      bg
      fill-height
      grid-list-lg
      text-lg-left
    >
      <v-layout
        row
        wrap
        align-content-start
      >
        <v-flex lg12>
          <v-card
            color="#385F73"
            dark
          >
            <v-card-text class="white--text">
              <div class="headline mb-2">
                Unlimited music now
              </div>
              Listen to your favorite artists and albums whenever and wherever, online and offline.
            </v-card-text>

            <v-card-actions>
              <v-btn text>
                Listen Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex
          v-for="(item, i) in items"
          :key="i"
          lg12
        >
          <v-card
            :color="item.color"
            dark
          >
            <v-list-item three-line>
              <v-list-item-content class="align-self-start">
                <v-list-item-title
                  class="headline mb-2"
                  v-text="item.title"
                />

                <v-list-item-subtitle v-text="item.artist" />
              </v-list-item-content>

              <v-list-item-avatar
                size="125"
                tile
              >
                <v-img :src="item.src" />
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: "Member",
    components: {},
    props: {
      source: {
        type: String,
        default: ""
      },
    },
    data: () => ({
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel11111111111',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
    }),
    mounted () {
      this.getData();
    },
    methods: {
      getData() {
        this.$http.get('http://webgori.kr:8080/custom-game').then(response => {
          let responseBody = response.body;
          let customGames = responseBody['customGames'];

          console.log(responseBody);

          customGames.forEach(function(customGame) {
            let idx = customGame['idx'];
            console.log(idx);
          });
        }, response => {
          alert(response);
        });
      }
    },
  }
</script>
