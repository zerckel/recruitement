<template>
    <div class="content">
        <div class="invisible divpub"></div>
        <loremipsum></loremipsum>
    </div>
</template>

<script>
  import loremipsum from "@/components/loremipsum"

  export default {
    name: "templateTwo",
    components:{
      'loremipsum' : loremipsum
    },
    methods:{
      observer: function (elem) {
        let observer = new IntersectionObserver(function(entries) {
          let divpub = document.querySelector('.divpub')

          if(entries[0].isIntersecting === true){
            divpub.classList.remove('invisible')
            divpub.classList.add('visible')
          }else{
            divpub.classList.remove('visible')
            divpub.classList.add('invisible')
          }
        }, { threshold: [1] });
        observer.observe(elem);
      }
    },
    mounted: function () {
        this.observer(document.querySelector('.watch'))
        document.querySelector('.headTemplate').style.height = '50vh'
    },
    updated : function () {
        this.observer(document.querySelector('.watch'))
    },
    beforeDestroy: function () {
      document.querySelector('.headTemplate').style.height = 'unset'
    }
  }
</script>

<style scoped>
    .content{
        flex-direction: column;
    }
    .invisible{
        visibility:hidden;
    }
    .visible{
        visibility: initial;
    }
    .divpub {
        margin-top: 1vh;
        height: 10vh;
        width: 100%;
    }
</style>