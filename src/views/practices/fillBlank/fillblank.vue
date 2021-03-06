<style>
    .contianer {
        width: 200px;
        word-break: normal;
        word-wrap: break-word;
        white-space: normal;
    }
    .blank {
        cursor: pointer;
        padding: 0 10px;
        min-width: 20px;
        border-bottom: 1px solid #000;
        text-align: center;
        outline: none;
    }
</style>
<template>
  <div>
      <div class="contianer">
          <div v-html="finalString" @keydown="forbiddenEnter($event)"></div>
      </div>
  </div>
</template>

<script>
export default {
  created () {
    this.strReplace(this.originSrting)
  },
  data () {
    return {
      // eslint-disable-next-line no-template-curly-in-string
      originSrting: '12345${replace}6789012345${replace}67890',
      finalString: ''
    }
  },
  methods: {
    strReplace (originSrting) {
      const editableSpan = `<span class="blank" contenteditable="true"></span>`
      // eslint-disable-next-line no-template-curly-in-string
      const finalString = originSrting.split('${replace}').join(editableSpan)
      this.finalString = finalString
    },
    forbiddenEnter (e) {
      if (e.keyCode === 13) {
        e.preventDefault() // 禁用回车的默认事件
      }
    }
  }
}
</script>
