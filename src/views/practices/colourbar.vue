<style>
    .bar{
        width:20px;
        height:10px;
        margin-top: -50px;
        position:relative;
        animation:mymove 5s infinite;
        animation-timing-function:linear;

        /* Safari and Chrome */
        -webkit-animation:mymove 5s infinite;
        -webkit-animation-timing-function:linear;
    }

    @keyframes mymove
    {
    from {top:0px;}
    to {top:1000px;}
    }
</style>
<template>
<div class="bar"></div>
</template>

<script>
const windowWidth = window.screen.width
export default {

  methods: {
    createObject () {
      setInterval(function () {
        var div = document.createElement('div')
        div.className = 'bar'
        div.style.transform = 'rotate(' + (Math.random() * 180) + 'deg)'
        div.style.background = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',0.8)'
        div.style.left = Math.random() * windowWidth + 'px'
        document.body.appendChild(div)
      }, 100)
    }
  },
  created () {
    this.createObject()
  }
}
</script>
