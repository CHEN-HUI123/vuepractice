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
    word-break: break-all;
    cursor: pointer;
    padding: 0 10px;
}
</style>
<template>
    <div id="blank" @keydown="noenter($event)"></div>
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
      if (e.keyCode === 13) {
        e.preventDefault()
      }
    },
    editstr () {
      let str = this.datastr
      let htmlstr = str.replace(/replace/g, '<span contenteditable=true class="content"></span>')
      document.getElementById('blank').innerHTML = htmlstr
    }
  },
  mounted () {
    this.editstr()
  }
}
</script>

<!--知识点：
contenteditable="true|false"    属性指定元素内容是否可编辑。
replace(char searchChar, char newChar) 通过用 newChar 字符替换字符串中出现的所有 searchChar 字符，并返回替换后的新字符串。
keydown   当按钮被按下时，发生 keydown 事件。
css：
outline: none;
word-break: break-all;

v-html
v-html会将元素当成HTML标签解析后输出

v-text
v-text会将元素当成纯文本输出
-->
