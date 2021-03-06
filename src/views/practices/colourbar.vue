<style>

#bar{
  overflow:hidden;
  height: 90vh;
}

#bar div{
  position: fixed;
  width: 20px;
  height: 10px;
  animation-name: colourbar;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0, 0, 1, 0.65);
}

div:nth-child(2){
  animation-duration: 4.23s;
  background-color: rgb(209, 201, 205);
  transform: translate(70.7404476506vw, 39.2982912115vh);
  transform:rotate(13deg);
}
div:nth-child(3){
  animation-duration: 7.6082661613s;
  animation-delay: -2.4177632704s;
  background-color: rgb(82, 238, 129);
  transform: translate(21.390916309vw, 83.9320950239vh);
  transform:rotate(90deg);
}
div:nth-child(4){
  animation-duration: 8.244s;
  animation-delay: -1s;
  background-color: rgb(224, 177, 73);
  transform: translate(99.4707896083vw, 50.8779038063vh);
  transform:rotate(60deg);
}
div:nth-child(5){
  animation-duration: 4.55666s;
  animation-delay: 0s;
  background-color: rgb(79, 116, 238);
  transform: translate(87.209776097vw, 87.4722435411vh);
  transform:rotate(40deg);
}
div:nth-child(6){
  animation-duration: 5s;
  background-color: rgb(233, 93, 163);
  transform: translate(49.209776097vw, 67.4722435411vh);
  transform:rotate(70deg);
  }
  div:nth-child(7){
    animation-duration: 3.256s;
  background-color: rgb(228, 33, 33);
  transform: translate(78.209776097vw, 80.4722435411vh);
  transform:rotate(10deg);
  }
  div:nth-child(8){
    animation-duration: 5.6s;
  background-color: rgb(212, 240, 57);
  transform:rotate(0deg);
  transform: translate(75.209776097vw, 80.4722435411vh);
  }
  div:nth-child(9){
    animation-duration: 9.4556s;
  background-color: rgb(207, 194, 117);
  transform:rotate(20deg);
  transform: translate(67.209776097vw, 80.4722435411vh);
  }
  div:nth-child(10){
    animation-duration: 2.43s;
  background-color: rgb(105, 250, 255);
  transform:rotate(60deg);
  transform: translate(35.209776097vw, 80.4722435411vh);
  }
  div:nth-child(11){
    animation-duration: 5.566s;
  background-color: rgb(123, 255, 105);
  transform:rotate(90deg);
  transform: translate(25.209776097vw, 80.4722435411vh);
  }
  div:nth-child(12){
    animation-duration: 8.123s;
  background-color: rgb(95, 28, 62);
  transform:rotate(120deg);
  transform: translate(75.209776097vw, 80.4722435411vh);
  }
  div:nth-child(13){
    animation-duration: 4.356s;
  background-color: rgb(27, 221, 60);
  transform:rotate(30deg);
  transform: translate(63.209776097vw, 80.4722435411vh);
  }
  div:nth-child(14){
    animation-duration: 3.236s;
  background-color: rgb(80, 26, 228);
  transform:rotate(20deg);
  transform: translate(14.209776097vw, 80.4722435411vh);
  }
  div:nth-child(15){
    animation-duration: 1.24677s;
  background-color: rgb(230, 20, 20);
  transform:rotate(130deg);
  transform: translate(53.209776097vw, 80.4722435411vh);
  }
  div:nth-child(16){
  animation-duration: 7.46566s;
  background-color: rgb(240, 95, 12);
  transform:rotate(80deg);
  transform: translate(78.209776097vw, 80.4722435411vh);
  }
  div:nth-child(17){
    animation-duration: 4.9995s;
  background-color: rgb(156, 114, 135);
  transform:rotate(90deg);
  transform: translate(35.209776097vw, 80.4722435411vh);
  }
  div:nth-child(18){
    animation-duration: 3.45s;
  background-color: hotpink;
  transform:rotate(40deg);
  transform: translate(26.209776097vw, 80.4722435411vh);
  }
  div:nth-child(19){
    animation-duration: 2.26s;
  background-color: rgb(105, 255, 143);
  transform:rotate(150deg);
  transform: translate(45.209776097vw, 80.4722435411vh);
  }
  div:nth-child(20){
  animation-duration: 7.346s;
  background-color: rgb(170, 105, 255);
  transform:rotate(80deg);
  transform: translate(23.209776097vw, 80.4722435411vh);
  }
  div:nth-child(21){
    animation-duration: 4.234s;
  background-color: rgb(59, 29, 197);
  transform:rotate(36deg);
  transform: translate(19.209776097vw, 80.4722435411vh);
  }

  div:nth-child(22){
    animation-duration: 2.234s;
  background-color: rgb(76, 194, 72);
  transform:rotate(157deg);
  transform: translate(65.209776097vw, 80.4722435411vh);
  }

  div:nth-child(23){
    animation-duration: 3.34s;
  background-color: rgb(139, 108, 39);
  transform:rotate(88deg);
  transform: translate(52.209776097vw, 80.4722435411vh);
  }

  div:nth-child(24){
    animation-duration: 2.234s;
  background-color: rgb(29, 192, 197);
  transform:rotate(26deg);
  transform: translate(34.209776097vw, 80.4722435411vh);
  }
  div:nth-child(25){
    animation-duration: 6.234s;
  background-color: rgb(197, 29, 189);
  transform:rotate(166deg);
  transform: translate(57.209776097vw, 80.4722435411vh);
  }
  div:nth-child(26){
    animation-duration: 3.222234s;
  background-color: rgb(197, 96, 29);
  transform:rotate(76deg);
  transform: translate(76.209776097vw, 80.4722435411vh);
  }
  div:nth-child(27){
    animation-duration: 1.834s;
  background-color: rgb(235, 34, 20);
  transform:rotate(56deg);
  transform: translate(13.209776097vw, 80.4722435411vh);
  }
  div:nth-child(28){
    animation-duration: 5.234s;
  background-color: rgb(126, 119, 156);
  transform:rotate(75deg);
  transform: translate(27.209776097vw, 70.4722435411vh);
  }
  div:nth-child(29){
    animation-duration: 3.234s;
  background-color: rgb(29, 192, 197);
  transform:rotate(146deg);
  transform: translate(37.209776097vw, 70.4722435411vh);
  }
  div:nth-child(30){
  animation-duration: 4.234s;
  background-color: rgb(159, 84, 182);
  transform:rotate(36deg);
  transform: translate(87.209776097vw, 70.4722435411vh);
  }
  div:nth-child(31){
    animation-duration: 4.234s;
  background-color: rgb(82, 197, 29);
  transform:rotate(86deg);
  transform: translate(57.209776097vw, 70.4722435411vh);
  }
  div:nth-child(32){
  animation-duration: 2.24677s;
  background-color: rgb(204, 159, 159);
  transform:rotate(68deg);
  transform: translate(27.209776097vw, 70.4722435411vh),rotate(68deg);
  }

@keyframes colourbar{
    0% {
      transform: translate(50vw, -40vh);
      opacity: 1;
    }
    80% {
      opacity: 0.5;
    }
    100% {
       opacity: 0;
    }
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
