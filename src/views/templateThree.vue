<template>
    <div class="content template3">
        <div class="divpub"></div>
        <loremipsum></loremipsum>
    </div>
</template>

<script>
  import LoremIpsum from "@/components/loremipsum"

  export default {
    name: "templateThree",
    components: {
      'loremipsum': LoremIpsum
    },
    methods: {
      watchScroll: function () {
        let lastScrollTop = 0
        window.addEventListener("scroll", function () {
          if (document.querySelector('.template3')) {
            let st = window.pageYOffset
            if (st > lastScrollTop) {
              document.querySelector('.template3').style.flexDirection = 'column-reverse'
            } else {
              document.querySelector('.template3').style.flexDirection = 'column'
            }
            lastScrollTop = st
          }
        }, false)

      }
    },
    mounted: function () {
      this.watchScroll()
    },
    created: function () {
      this.watchScroll()
    }
  }
</script>
<style scoped>
    .template3 {
        flex-direction: column;
    }

    .divpub {
        height: 10vh;
        width: 100%;
        margin: 1vh 0;
    }
</style>


