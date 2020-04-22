<template>
    <section id="admin">
        <ul v-if="results[0] !== undefined">
            <li v-for="result in results" :key="result.id">
                <div><span class="title">Title:</span> {{result.title }}</div>
                <div><span class="title"> Template: </span>{{result.template}}</div>
                <br/>
                <div>This combination occurs {{result.nbrAppears}} times</div>
            </li>
        </ul>
        <div v-else class="warning">
            No combination was generated
        </div>
    </section>
</template>

<script>
  export default {
    name: "admin",
    data() {
      return {
        results: []
      }
    },
    mounted: function () {
      document.querySelector('#footer').style.display = "none"
      if (this.$store.getters.getCombination[0] !== undefined) {
        this.results = this.$store.getters.getCombination
      } else {
        this.results = JSON.parse(localStorage.getItem('combination'))
        this.$store.commit('getLocalStorage')
      }
    },
    beforeDestroy: function () {
      document.querySelector('#footer').style.display = 'flex'
    }
  }
</script>

<style lang="scss" scoped>

    #admin {
        width: 80vw;
        margin: 0 auto;

        ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            list-style: none;

            li {
                margin-bottom: 2vh;
                padding: 15px;
                background-color: aliceblue;
                border-bottom: 1px solid;

                .title {
                    font-size: 1.2rem;
                    text-decoration: underline;
                }
            }
        }
    }

</style>