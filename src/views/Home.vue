<template lang="pug">
    #Home
        .rect-top
            svg
            .header-box
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
#Home {
    width: 100%;
    overflow: hidden;
    height: auto;
    .rect-top {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        background: linear-gradient(to bottom, #1400FF 25%, #00C4FF 100%);
        background: -webkit-linear-gradient(to bottom, #1400FF 25%, #00C4FF 100%);
        box-shadow: 0px 20px 100px rgba(20, 0, 255, .16);
        width: 100%;
        max-width: 100%;
        height: 360px;
        svg {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            background-image: url('../assets/topography.svg');
            filter: invert(100%);
            opacity: .16;
            width: 100%;
            height: 100%;
        }
        .header-box {
            position: absolute;
            bottom: -65%;
            max-width: 95%;
            width: 1000px;
            height: 360px;
            box-shadow: 0px 20px 100px rgba(20, 0, 255, .16);
            background: white;
            border-radius: 50px;
        }
    }
}
</style>
