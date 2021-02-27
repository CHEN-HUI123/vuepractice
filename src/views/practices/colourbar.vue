<style>

#bar{
  /* width: 2vmin;
  height: 2vmin; */
  overflow:hidden;
  height: 90vh;
}

/* div:nth-child(1){
 background-color: hotpink;
} */
div:nth-child(2){
  animation-duration: 4.23s;
  background-color: rgb(209, 201, 205);
  transform:rotate(120deg);
  left: 2vw;
}
div:nth-child(3){
  animation-duration: 7.6082661613s;
  animation-delay: -2.4177632704s;
  background-color: rgb(82, 238, 129);
  left: 35vw;
  animation-delay: -2.9090695973s;
}
div:nth-child(4){
  animation-duration: 8.244s;
  animation-delay: -1s;
  background-color: rgb(224, 177, 73);
  transform:rotate(50deg);
  left: 10vw;
  animation-delay: -6.9090695973s;
}
div:nth-child(5){
  animation-duration: 4.55666s;
  animation-delay: 0s;
  background-color: rgb(79, 116, 238);
  transform:rotate(3deg);
  left: 20vw;
}
div:nth-child(6){
animation-duration: 5s;
 background-color: rgb(233, 93, 163);
 transform:rotate(100deg);
 left: 9vw;
}
div:nth-child(7){
  animation-duration: 6.256s;
 background-color: rgb(228, 33, 33);
 transform:rotate(170deg);
 left: 45vw;
}
div:nth-child(8){
  animation-duration: 5.6s;
 background-color: rgb(212, 240, 57);
 transform:rotate(0deg);
 left: 2vw;
}
div:nth-child(9){
  animation-duration: 9.4556s;
 background-color: rgb(207, 194, 117);
 transform:rotate(20deg);
 left: 78vw;
}
div:nth-child(10){
  animation-duration: 2.43s;
 background-color: rgb(105, 250, 255);
 transform:rotate(60deg);
 left: 30vw;
}
div:nth-child(11){
  animation-duration: 5.566s;
 background-color: rgb(123, 255, 105);
 transform:rotate(90deg);
 left: 2vw;
}
div:nth-child(12){
  animation-duration: 8.123s;
 background-color: rgb(95, 28, 62);
 transform:rotate(120deg);
 left: 20vw;
}
div:nth-child(13){
  animation-duration: 4.356s;
 background-color: rgb(27, 221, 60);
 transform:rotate(30deg);
 left: 25vw;
}
div:nth-child(14){
  animation-duration: 3.236s;
 background-color: rgb(80, 26, 228);
 transform:rotate(20deg);
 left: 70vw;
}
div:nth-child(15){
  animation-duration: 1.24677s;
 background-color: rgb(230, 20, 20);
 transform:rotate(130deg);
 left: 89vw;
}
div:nth-child(16){
 animation-duration: 7.46566s;
 background-color: rgb(240, 95, 12);
 transform:rotate(80deg);
 left: 35vw;
}
div:nth-child(17){
  animation-duration: 4.9995s;
 background-color: rgb(156, 114, 135);
 transform:rotate(90deg);
 left: 67vw;
}
div:nth-child(18){
  animation-duration: 3.45s;
 background-color: hotpink;
 transform:rotate(40deg);
 left: 35vw;
}
div:nth-child(19){
  animation-duration: 2.26s;
 background-color: rgb(105, 255, 143);
 transform:rotate(150deg);
 left: 79vw;
}
div:nth-child(20){
 animation-duration: 7.346s;
 background-color: rgb(170, 105, 255);
 transform:rotate(80deg);
 left: 24vw;
}
div:nth-child(21){
  animation-duration: 4.234s;
 background-color: rgb(59, 29, 197);
 transform:rotate(36deg);
 left: 8vw;
}

div:nth-child(22){
  animation-duration: 2.234s;
 background-color: rgb(76, 194, 72);
 transform:rotate(157deg);
 left: 50vw;
}

div:nth-child(23){
  animation-duration: 3.34s;
 background-color: rgb(139, 108, 39);
 transform:rotate(88deg);
 left: 55vw;
}

div:nth-child(24){
  animation-duration: 2.234s;
 background-color: rgb(29, 192, 197);
 transform:rotate(26deg);
 left: 60vw;
}
div:nth-child(25){
  animation-duration: 6.234s;
 background-color: rgb(197, 29, 189);
 transform:rotate(166deg);
 left: 65vw;
}
div:nth-child(26){
  animation-duration: 3.222234s;
 background-color: rgb(197, 96, 29);
 transform:rotate(76deg);
 left: 70vw;
}
div:nth-child(27){
  animation-duration: 1.834s;
 background-color: rgb(235, 34, 20);
 transform:rotate(56deg);
 left: 75vw;
}
div:nth-child(28){
  animation-duration: 5.234s;
 background-color: rgb(126, 119, 156);
 transform:rotate(75deg);
 left: 80vw;
}
div:nth-child(29){
  animation-duration: 3.234s;
 background-color: rgb(29, 192, 197);
 transform:rotate(146deg);
 left: 85vw;
}
div:nth-child(30){
  animation-duration: 4.234s;
 background-color: rgb(159, 84, 182);
 transform:rotate(36deg);
 left: 90vw;
}
div:nth-child(31){
  animation-duration: 4.234s;
 background-color: rgb(82, 197, 29);
 transform:rotate(86deg);
 left: 57vw;
}
div:nth-child(32){
animation-duration: 2.24677s;
 background-color: rgb(204, 159, 159);
 transform:rotate(68deg);
 left: 86.345vw;
}

#bar div{
  top: 0vh;
  width: 20px;
  height: 10px;
  position: relative;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

}

div:nth-child(even){
  animation-name: colourbar1;
}

div:nth-child(odd){
  animation-name: colourbar2;
}

@keyframes colourbar1{
    0% {top: -30vh;}
    100% {top:60vh;}
}

@keyframes colourbar2{
    0% {top: -40vh;}
    100% {top:45vh;}
}
</style>

<template>
      <div id="bar" >
        <div v-for="n in 32" :key="n"></div>
      </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  }
}
</script>
