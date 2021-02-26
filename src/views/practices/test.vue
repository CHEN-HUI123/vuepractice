<style>
        body,html{
            margin: 0;
            padding: 0;
            overflow: hidden;
            height: 100%;
        }
        .snow{
            position: absolute;
        }
    </style>

<template>
    <div></div>
</template>

<script>
var windowWidth = window.screen.width
var windowHeight = window.screen.height
const colorAll = ['#bae9d0', '#fada9b', '#a5dd8b', '#d7b425', '#e1f409', '#e8b6e7', '#9fb6e6', '#d55256']

function createSnow () {
  var left = 0
  var top = 0

  // 定义一个初始化随机数,使雪花在屏幕中
  var leftRandom = Math.random() * windowWidth
  var topRandom = Math.random() * windowHeight
  var div = document.createElement('div')
  div.className = 'snow'
  div.style.transform = 'rotate(' + (Math.random() * 180) + 'deg)'
  div.style.background = colorAll[Math.floor((Math.random() * colorAll.length))]
  div.style.width = '20px'
  div.style.height = '10px'
  div.style.top = '-200px'

  document.body.appendChild(div)

  // 雪花飘落
  setInterval(function () {
    div.style.left = leftRandom + left + 'px'
    div.style.top = topRandom + top + 'px'
    left += 0.1
    top += 0.6

    // 如果雪花跑到屏幕外面了,让雪花重新返回屏幕顶部
    if (leftRandom + left >= windowWidth) {
      leftRandom = Math.random()
      left = 0
    }

    if (topRandom + top >= windowHeight) {
      topRandom = Math.random()
      top = 0
    }
  }, 10)
}
for (var i = 0; i < 50; i++) {
  createSnow()
}
</script>
