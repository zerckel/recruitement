<template>
    <div id="articleContent">
        <div class="headTemplate">
            <h1>
                {{ title }}
            </h1>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: "articleContent",
    data() {
      return {
        title: "",
        titles: [
          'Mon exemple de titre 1',
          'Mon exemple de titre 2',
          'Mon exemple de titre 3',
          'Mon exemple de titre 4',
          'Mon exemple de titre 5'
        ]
      }
    },
    updated: function () {
      this.title = this.titles[this.$route.params.title - 1]
    },
    watch: {
      title: function () {
        this.$emit('title', this.title)
      }
    },
    mounted: function () {
      this.title = this.titles[this.$route.params.title - 1]
    }
  }
</script>

<style lang="scss" scoped>
    #articleContent {
        .headTemplate {
            width: 100vw;
            background-image: url("/img/templateBG.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            padding: 10vh 0 5vh;

            h1 {
                color: white;
                width: 1024px;
                margin: 0 auto;
            }
        }
    }
</style>