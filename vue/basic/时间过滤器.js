/**
 * 1.一般用于将时间拆分 在拼起来 获取年月日时分秒格式化
 * 2.moment.js库 npm install moment--save
 * 3.input 可以是任意时间格式
 * 4.moment 是当前时间 format 是格式化
 * 5.format 里面使用的正则表达，可以随意写东西
 * 6.参数自定义，可以多参数，定义时间格式
 */
import moment from 'moment'
Vue.filter('dateFilter', input => {
    moment(input,).format('YYYY-MM-DD-HH:mm:ss')//2019-08-09-15:50:12
})