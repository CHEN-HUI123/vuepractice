const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var filePath = '../text.md'
rl.question('输入你需要操作的文件名：', (filename) => {
  if (filename !== 'package.json') {
    console.log('文件名错误')
    rl.close()
  } else {
    replaceFile(filePath)
  }
})

/**
 * 修改package.json
 */
const fs = require('fs') // 引入文件模块
const path = require('path')
let replaceFile = function (filePath) {
  fs.readFile(path.join(__dirname, filePath), 'utf8', function (err, data) {
    if (err) {
      console.log('文件不存在')
      rl.close()
    }

    try {
      var list = JSON.parse(data)

      if ('scripts' in list) {
        var str = {
          '1': 'test111111',
          '2': '345556'
        } // 格式这一块先不写了

        str = JSON.stringify(str, '/r/n', 4)
        list.scripts = JSON.parse(str)

        let fd = fs.openSync(filePath, 'w')
        fs.writeFileSync(fd, JSON.stringify(list, '/r/n', 4), 'utf8')
        fs.closeSync(fd)
      }
      console.log('文件关闭成功')
      rl.close()
    } catch (e) {
      console.log('文件内容格式不对')
      rl.close()
    }
  })
}

rl.on('close', function () {
  process.exit(0)
})
