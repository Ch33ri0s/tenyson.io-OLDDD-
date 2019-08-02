<template lang="pug">
    #navbar
        .inner
            .content
                h1 Tenyson
                h4 The Creative Mastermind.
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
#navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    height: 200px;
    z-index: 99999;
    .inner {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1000px;
        max-width: 100%;
        height: 100%;
        margin: auto;
        .content {
            color: white;
            font-family: 'Leckerli One', cursive, Helvetica, sans-serif;
            h1 {
                font-size: 80px;
                margin: 0;
                text-align: center;
                // text-shadow: 0px 3px 16px rgba(0, 0, 0, 0.65);
                text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
            }
            h4 {
                font-size: 30px;
                margin: 0;
                text-align: center;
                // text-shadow: 0px 3px 16px rgba(0, 0, 0, 0.65);
                text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
                letter-spacing: 4px;
            }
        }
    }
}
</style>
