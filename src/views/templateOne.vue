<template>
    <div class="content">
        <loremipsum></loremipsum>
        <div class="divpub"></div>
    </div>
</template>

<script>
  import loremipsum from "@/components/loremipsum"

  export default {
    name: "templateOne",
    components: {
      'loremipsum': loremipsum
    }
  }
</script>

<style scoped>
    .divpub{
        height: 50vh;
        width: 30vw;
        top: 30%;
        position: sticky;
        margin-left: 1vw;
    }
</style>