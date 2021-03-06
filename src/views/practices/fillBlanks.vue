<style>
#blank{
    height: 300px;
    width: 20vw;
    padding-top: 25px;
    font-size: 20px;
    background-color: #fcfcfc;
    font-family: Arial, Helvetica, sans-serif;
}
.content{
    border-bottom: 1px solid #000;
    outline: none;
    text-align: center;
    font-size: 20px;
    background-color: #fcfcfc;
    width: 70px;
    font-family: Arial, Helvetica, sans-serif;
}
</style>
<template>
    <div id="blank"></div>
</template>
<script>
export default {
  data () {
    return {
      datastr: '12345replace6789012345replace67890'
    }
  },
  methods: {
    noenter (e) {
      this.a(e)
    },
    editstr () {
      let str = this.datastr
      let htmlstr = str.replace(/replace/g, '<span contenteditable=true class="content" @keydown="noenter($event)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>')
      document.getElementById('blank').innerHTML = htmlstr
    }
  },
  mounted () {
    this.editstr()
    let that = this
    that.a = function (e) {
      if (e.keyCode === 13) {
        e.preventDefault()
      }
    }
  }
}
</script>
