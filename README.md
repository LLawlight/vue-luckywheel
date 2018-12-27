# vue-luckywheel

组件名称：vue幸运转盘  
应用场景：抽奖

## Luckywheel Events
| 事件名称 | 说明 | 回调参数 |
| ------ | ------ | ------ |
| get-prize | 点击转盘按钮时触发 | / |
| game-over | 转盘动画结束时触发 | / |

## Luckywheel Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ----- |
| size | 转盘的尺寸 | number | 300 |
| prize-index | 抽中的奖项是转盘中的第几块 | number | / |
| rotate-time | 转盘旋转动画的时间(s) | number | 6 |
| default-background | 是否启用默认背景色 | boolean | true |
