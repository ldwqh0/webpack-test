import cal from './modules/cal'
import ch from './modules/ch'
import './style/style.css'
import './modules/body'
import b2 from './modules/body2'

setTimeout(() => {
  b2.toBody2()
}, 3000)

console.log(cal.getSum(8, 8, 8, 8, 8, 8, 8))
console.log(cal.getSum(5, 84, 5, 5))
console.log(ch.toUpper('dlddldjldj'))
