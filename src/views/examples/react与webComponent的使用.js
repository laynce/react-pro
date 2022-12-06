import React from 'react';
import '../assets/style/demo.scss'

// 无论是函数组件还是类组件都有defaultProps

// Profiler测试性能的组件
export default function Demo(props) {

  return (
    <>
      <div>Demo组件</div>
      <Content age=''/>
    </>
  )

}


class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [1, 2]
    }

    this.delete = this.delete.bind(this)
  }

  delete() {
    this.setState((state) => ({
      arr: [state.arr.pop()]
    }))
  }

  componentDidMount() {
   console.log(this.props.age, 999) // 过时api方法, StrictModel下控制台会进行提示
  }

  render() {
    return (
      <p ref={this.bb}>
        {/* ref="ss"不建议这样使用，已经过时api,正确使用方法使用creatRef,或者函数形式 ref={e=> this.aa = e} */}
        {
          this.state.arr.map((c,index) => (
            <input type='text' key={c} c={c} />
          ))
        }
        <br />
         <word-count data-txt="自定義" w="200" h="60" c="red">4455322</word-count>
        <button onClick={this.delete}>删除</button>
      </p>
    )
  }
}


Content.defaultProps = {
  age: 12
}


class WordCount extends HTMLElement {
  static get observedAttributes() {
    console.log(9991211)
    return ['c', 'w'];
  }
  constructor() {
    super()
    // const shadowRoot = this.attachShadow({ mode: 'open' })
    this.attachShadow({ mode: 'open' })
    // const span = document.createElement('span')
    // span.textContent = this.getAttribute('data-txt')
    // console.log(span.textContent, 111, this.getAttribute('data-txt')) // 在react中此处获取不到属性，需要放在钩子函数connectedCallback里面执行
    //const style = document.createElement('style')
    // style.textContent = `
    //   span {
    //     color: red
    //   }

    // `
   //shadowRoot.appendChild(style)
    // shadowRoot.appendChild(span)

  }

  connectedCallback() {
    const span = document.createElement('span')
    span.textContent = this.getAttribute('data-txt')
    const style = document.createElement('style')
    this.shadowRoot.appendChild(style)
    this.shadowRoot.appendChild(span)
    console.log('被插入到元素上', this)
    this.updateStyle(this)
  }
  updateStyle(elem) {
    var shadow = elem.shadowRoot;
    console.log(elem.getAttribute("w"), 666);
    shadow.querySelector("style") && (shadow.querySelector("style").textContent = `
      span {
        display: block,
        width: ${elem.getAttribute("w")}px;
        height: ${elem.getAttribute("h")}px;
        background-color: ${elem.getAttribute("c")};
      }
    `);

    // console.log(elem.getAttribute("data-txt"), 999, elem.getAttribute("h"))
    // shadow.querySelector("span").textContent = `
    // ${elem.getAttribute("data-txt")}
    // `;
  }
  attributeChangedCallback() {
    console.log('属性被修改', this)
    this.updateStyle(this)
  }
}

customElements.define('word-count', WordCount); 