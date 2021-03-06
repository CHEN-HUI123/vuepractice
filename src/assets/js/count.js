let count = {
  /**
     * 排序
     * @param {prop 排序的参数}
     * @return 升序排列
     */
  sort: function (prop) {
    return function (obj1, obj2) {
      var val1 = obj1[prop]
      var val2 = obj2[prop]
      if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
        val1 = Number(val1)
        val2 = Number(val2)
      }
      if (val1 < val2) {
        return -1
      } else if (val1 > val2) {
        return 1
      } else {
        return 0
      }
    }
  },
  // JSON 拷贝
  shallowCopy: function (params) {
    let str = JSON.stringify(params)
    return JSON.parse(str)
  },
  // 移除 JSON 空值的项
  filterJson: function (obj) {
    for (var prop in obj) {
      if (!obj[prop]) {
        delete obj[prop]
      }
    }
    return obj
  },
  /**
     *移除数组中 JSON 的 prop 值不为 value 的项
     * @param {*} arr  接收的数组
     * @param {*} propName 属性名
     * @param {*} vale 过滤值
     * @returns
     */
  removeSpecialJsonItem (arr, propName, value) {
    return arr.filter((obj) => {
      return obj[propName] === value
    })
  },
  /**
     * param 将要转为URL参数字符串的对象
     * key URL参数字符串的前缀
     * encode true/false 是否进行URL编码,默认为false
     *
     * return URL参数字符串
     */
  urlEncode (param, key, encode) {
    if (param == null) return ''
    var paramStr = ''
    var t = typeof (param)
    if (t === 'string' || t === 'number' || t === 'boolean') {
      paramStr += '&' + key + '=' + (!encode ? param : encodeURIComponent(param))
    } else {
      for (var i in param) {
        var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
        paramStr += this.urlEncode(param[i], k, encode)
      }
    }
    return paramStr
  },
  /**
     *讲url地址参数转换成对象
     */
  url2Object (url) {
    url = decodeURI(url)
    var urlObject = {}
    if (/\?/.test(url)) {
      var urlString = url.substring(url.indexOf('?') + 1)
      var urlArray = urlString.split('&')
      for (var i = 0, len = urlArray.length; i < len; i++) {
        var urlItem = urlArray[i]
        var item = urlItem.split('=')
        urlObject[item[0]] = item[1]
      }
      return urlObject
    }
  },
  /**
     * 计算dom距离body左边的距离
     */
  getAbsLeft: function (obj) {
    var l = obj.offsetLeft
    while (obj.offsetParent != null) {
      obj = obj.offsetParent
      l += obj.offsetLeft
    }
    return l
  },
  /**
     * 计算dom距离顶部的距离
     */
  getAbsTop: function (obj) {
    var top = obj.offsetTop
    while (obj.offsetParent != null) {
      obj = obj.offsetParent
      top += obj.offsetTop
    }
    return top
  },
  /**
     * 检验特殊字符
     */
  checkSpeacilStr: function (str) {
    var myReg = /[,:;*?~`/\\"|!#$%^=<>{}]|\/|\\\|"|\|/
    if (myReg.test(str)) {
      return true
    }
    return false
  },
  /*
     * @param {*} obj
     * @returns 数组
     */
  object2Array: function (obj) {
    let arr = Object.keys(obj)
    let returnArray = []
    arr.forEach(element => {
      returnArray[element] = obj[element]
    })

    return returnArray
  },
  /**
     * @param {*} obj 转化对象
     * @returns 数组，item是对象
     */
  object2Array2: function (obj) {
    let object = this.shallowCopy(obj)
    let returnArray = []
    for (let prop in object) {
      returnArray.push({
        id: prop,
        value: object[prop]
      })
    }
    return returnArray
  },
  /**
     * 比较两个对象的内容是否相等
     * @param {*} a
     * @param {*} b
     * @returns
     */
  isObjectValueEqual: function (a, b) {
    var aProps = Object.getOwnPropertyNames(a)
    var bProps = Object.getOwnPropertyNames(b)

    if (aProps.length !== bProps.length) {
      return false
    }

    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i]

      var propA = a[propName]
      var propB = b[propName]
      if (propA !== propB) {
        if ((typeof (propA) === 'object')) {
          if (this.isObjectValueEqual(propA, propB)) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        return false
      }
    }
  },
  /**
     * @returns 8位随机数
     */
  randomEightNum () {
    let randow = Math.ceil(Math.random() * Math.pow(10, 8)) + '00000000'
    return randow.slice(0, 8)
  },
  getFormatDate () {
    let date = new Date()
    let year = date.getFullYear()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let format = `${year}-${month}-${day}`
    return format
  },
  /**
     *得到当前的年月
     * @returns 2018-11
     */
  getCurrentYearMomth () {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let format = `${year}-${month}`
    return format
  },
  /**
     *得到当前的年月日
     * @returns 2018-11-01
     */
  getCurrentYearMonthDay (data) {
    let date = new Date(data)
    let year = date.getFullYear()
    let month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)
    let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
    let format = `${year}-${month}-${day}`
    return format
  },
  /**
     *得到上个月的月份
     *@param time 当前时间 2018-11
     *@returns 2018-10
     */
  getPrevMonth (time) {
    let arr = time.split('-')
    let year = parseInt(arr[0])
    let month = parseInt(arr[1])
    if (month === 1) {
      year--
      month = 12
    } else {
      month--
    }
    let formatMonth = month < 10 ? `0${month}` : month
    let format = `${year}-${formatMonth}`
    return format
  },
  /**
     *得到下个月
     * @param {*} time 当前时间 2018-11
     * @returns 2018-12
     */
  getNextMonth (time) {
    let arr = time.split('-')
    let year = parseInt(arr[0])
    let month = parseInt(arr[1])
    if (month === 12) {
      year++
      month = 1
    } else {
      month++
    }
    let formatMonth = month < 10 ? `0${month}` : month
    let format = `${year}-${formatMonth}`
    return format
  },
  /**
     *传入年月返回一个月的天数
     * @param {*} month
     * @param {*} year
     * @returns
     */
  getMonthDay (month, year) {
    let day
    let bigMonth = [1, 3, 5, 7, 8, 10, 12]
    let smallMonth = [4, 6, 9, 11]
    if (month === 2) {
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        day = 29
      } else {
        day = 28
      }
    } else if (bigMonth.indexOf(month) >= 0) {
      day = 31
    } else if (smallMonth.indexOf(month) >= 0) {
      day = 30
    }
    return day
  },
  /**
     *拿到上周的日期
     * @param {*} time 2018-10-10
     * @returns 2018-10-03
     */
  getPrevWeekDate (time) {
    let arr = time.split('-')
    let year = parseInt(arr[0])
    let month = parseInt(arr[1])
    let day = parseInt(arr[2])
    if (day - 7 < 1) {
      let dayNum
      if (month === 1) {
        year--
        month = 12
        dayNum = this.getMonthDay(month, year)
      } else {
        dayNum = this.getMonthDay(month - 1, year)
        month--
      }
      day = dayNum - 7 + day
    } else {
      day = day - 7
    }

    let formatMonth = month < 10 ? `0${month}` : month
    let format = `${year}-${formatMonth}-${day}`
    return format
  },
  /**
     *得到下周的时间2018-12-05
     * @param {*} time 2018-11-28
     * @returns 2018-12-05
     */
  getNextWeekDate (time) {
    console.log(time)
    let arr = time.split('-')
    let year = parseInt(arr[0])
    let month = parseInt(arr[1])
    let day = parseInt(arr[2])
    let dayNum = this.getMonthDay(month, year)
    if (day + 7 > dayNum) {
      if (month === 12) {
        year++
        month = 1
      } else {
        month++
      }
      day = 7 - dayNum + day
    } else {
      day = day + 7
    }

    let formatMonth = month < 10 ? `0${month}` : month
    let format = `${year}-${formatMonth}-${day}`
    return format
  },
  /**
     *传入一个百分数，返回百分比
     * @param {*} percent
     * @returns
     */
  getPercent (percent) {
    if (percent === 100) {
      return 100
    }
    let str = parseInt(percent.toString().slice(0, 2)) || 0
    return str
  },
  /**
     *传入对象，返回用,拼接的字符串
     * @param {*} obj
     * @returns key value,key value
     */
  object2String (obj) {
    let str = ''
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        str += key + ' ' + obj[key] + ', '
      }
    }
    return str.substring(0, str.length - 2)
  },
  // sDate1和sDate2是2006-12-18格式
  datedifference (sDate1, sDate2) {
    var dateSpan,
      iDays
    sDate1 = Date.parse(sDate1)
    sDate2 = Date.parse(sDate2)
    dateSpan = sDate2 - sDate1
    dateSpan = Math.abs(dateSpan)
    iDays = Math.floor(dateSpan / (24 * 3600 * 1000))
    return iDays
  }
}
export default count
