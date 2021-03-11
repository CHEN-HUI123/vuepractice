<style>
/* text-overflow : ellipsis|clip    clip 不显示省略标记，而是简单的裁剪；ellipsis 当对象向内文本溢出时显示省略标记(...) */
.download_content{
    width: 500px;
}
h1{
    text-align: center;
}
.text{
    text-indent:2em
}

.text1{
        overflow: hidden;
        text-overflow: ellipsis;
    }
.text2{
  overflow: hidden;
  text-overflow: ellipsis;
  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  word-break: break-all;
}

span{
    width: 28%;
    word-break: break-word;
}

.text4{
    display: flex;
    justify-content: space-between;
}

.html2canvas-container {
    width: 3000px !important;
    height: 3000px !important;
}

</style>>

<template>
    <div>
        <el-button type="primary" @click="toImage" >download</el-button>
        <div class="download_content" ref="imageDom" >
            <h1>以树之名</h1>
            <p class="text text1">111111wddddddddddddddddddddddddddddddddddddddddddddddddd111111</p>
            <p class="text text2">3333333dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd33333</p>
            <p class="text">
                <img src="../../assets/tree.jpg" align="right" width="120" hspace="5" vspace="5">
                环绕图片布局HTMHTML文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局HTM文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局HTML文字环绕图片布局
            </p>

            <p class="text text4">
                <span style="float:left">left11111111111111111111111111111111111111111111111111111111111111111111111</span>
                <span style="float: left;margin: 0 20px 0 20px;">middle222222222222222222222222222222222222222222222222222222222222222222222</span>
                <span style="float:right">right333333333333333333333333333333333333333333333333333333333333333333333333</span>
            </p>
        </div>
    </div>
</template>
<script>
import html2canvas from 'html2canvas'
export default {
    methods: {
        toImage() {
            html2canvas(this.$refs.imageDom, {
                backgroundColor: 'null'
            }).then((canvas) => {
                let url = canvas.toDataURL('image/png')
                let downloadName = 'paragraph.png'
               this.downloadFile(downloadName, url)
            })
        },
        base64ToBlob (code) {
            let parts = code.split(';base64,')
            let contentType = parts[0].split(':')[1]
            let raw = window.atob(parts[1])
            let rawLength = raw.length

            let uInt8Array = new Uint8Array(rawLength)

            for (let i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i)
            }
            return new Blob([uInt8Array], {type: contentType})
        },

        downloadFile(fileName, content) {
            let aLink = document.createElement('a')
            let blob = this.base64ToBlob(content) // new Blob([content]);

            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('click', true, true)// initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
            aLink.download = fileName
            aLink.href = URL.createObjectURL(blob)
            aLink.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}))// 兼容火狐
        }
    }
}
</script>
