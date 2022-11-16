import React from 'react'

const element1 = React.createElement(
  'p',
  {
    className: 'greeting'
  },
  "hihhi"
)

const element2 = (
  <div>
    <ul>
      <li>自定义内容1</li>
      <li>自定义内容2</li>
    </ul>
  </div>
)

export {
  element1,
  element2
}