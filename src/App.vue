<template>
    <div id="app">
        <header>
            <router-link class="blog" :to="{name : 'home'}">Blog.</router-link>
            <section>
                <router-link :to="{name : 'admin'}">Admin</router-link>
                <div>New</div>
                <div>Popular</div>
                <div>Subscribe</div>
            </section>
        </header>
        <articleContent v-on:title="getTitle($event)"></articleContent>
        <footer id="footer">
            <div class="nav">
                <button @click="$router.go(-1)" class="prev">
                    Prev
                </button>
                <router-link :to="{ name: 'home' }">
                    <button class="next">
                        Next
                    </button>
                </router-link>
            </div>
            <h2>
                More like this
            </h2>
            <div class="moreLikeThis">
                <figure v-for="article in pickArticles" :key="article.id">
                    <img :src="article.url" alt="article"/>
                    <figcaption>
                        {{article.title}}
                    </figcaption>
                </figure>
            </div>
        </footer>
    </div>
</template>
<script>
  import articleContent from './components/articlecontent'

  export default {
    name: "app",
    data() {
      return {
        articles: [
          {
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://picsum.photos/id/1024/275/100.jpg"
          },
          {
            id: 2,
            title: "reprehenderit est deserunt velit ipsam",
            url: "https://picsum.photos/id/678/275/100.jpg"
          },
          {
            id: 3,
            title: "officia porro iure quia iusto qui ipsa ut modi",
            url: "https://picsum.photos/id/345/275/100.jpg"
          },
          {
            id: 4,
            title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
            url: "https://picsum.photos/id/23/275/100.jpg"
          },
          {
            id: 5,
            title: "natus nisi omnis corporis facere molestiae rerum in",
            url: "https://picsum.photos/id/789/275/100.jpg"
          },
          {
            id: 6,
            title: "accusamus ea aliquid et amet sequi nemo",
            url: "https://picsum.photos/id/908/275/100.jpg"
          },
          {
            id: 7,
            title: "officia delectus consequatur vero aut veniam explicabo molestias",
            url: "https://picsum.photos/id/654/275/100.jpg"
          },
          {
            id: 8,
            title: "aut porro officiis laborum odit ea laudantium corporis",
            url: "https://picsum.photos/id/278/275/100.jpg"
          },
          {
            id: 9,
            title: "qui eius qui autem sed",
            url: "https://picsum.photos/id/921/275/100.jpg"
          },
          {
            id: 10,
            title: "beatae et provident et ut vel",
            url: "https://picsum.photos/id/456/275/100.jpg"
          }
        ],
        pickArticles: [],
        title: ''
      }
    },
    methods: {
      getTitle: function (elem) {
        this.title = elem
      },
      randomArticles: function () {
        let ArrayOfNbr = []

        while (ArrayOfNbr[3] === undefined) {

          let pickNbr = Math.floor(Math.random() * Math.floor(this.articles.length))

          if (ArrayOfNbr.indexOf(pickNbr) === -1) {
            ArrayOfNbr.push(pickNbr)
          }
        }
        this.pickArticles = [
          this.articles[ArrayOfNbr[0]],
          this.articles[ArrayOfNbr[1]],
          this.articles[ArrayOfNbr[2]]
        ]
      },
      pushCombination: function (title, template) {
        if (title !== undefined && template !== undefined) {
          let result = this.$store.getters.getCombination.filter(elem => elem.title === title && elem.template === template)
          if (result.length === 0) {
            this.$store.dispatch('objectCombination', {title: title, template: template})
          } else {
            this.$store.dispatch('incrementCombination', {id: result[0].id})
          }
        }
      }
    },
    watch: {
      $route(to, from) {
        this.randomArticles()
        this.pushCombination()
      },
      title: function () {
        this.pushCombination(this.title, this.$router.currentRoute.name)
      }
    },
    mounted: function () {
      this.randomArticles()
    },
    components: {
      'articleContent': articleContent
    }
  }
</script>
<style lang="scss">
    button, a, button:active {
        text-decoration: none;
        border: none;
        outline: none;
    }

    #app {
        footer {
            display: flex;
            flex-direction: column;
            width: 1024px;
            margin: 0 auto;
            justify-content: center;

            h2 {
                color: #fc603d;
            }

            .moreLikeThis {
                display: flex;

                figure {
                    cursor: pointer;

                    figcaption {
                        text-transform: capitalize;
                    }
                }
            }

            .nav {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                padding: 5vh 0;
                border-bottom: 1px solid lightgrey;

                button {
                    color: white;
                    padding: 5px 25px;
                    border-radius: 15px;
                    font-size: 1.3rem;
                }

                .prev {
                    background-color: #b3b3b3;
                }

                .next {
                    background-color: #fc603d;

                }
            }
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100vw;
            padding: 2vh 0;
            position: sticky;
            top: 0;
            background-color: white;

            div {
                cursor: pointer;
            }

            > .blog {
                margin-left: 5vw;
                text-decoration: none;
                color: #fc603d;
                font-weight: bold;
                font-size: 2rem;
            }

            section {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                width: 25vw;
                margin-right: 5vw;

                div:last-child {
                    color: white;
                    padding: 5px 15px;
                    background-color: #fc603d;
                    border-radius: 15px;
                }
            }
        }

        .content {
            width: 1024px;
            margin: 0 auto;
            display: flex;
        }
    }


</style>
