// import React from "react";
import React from 'react';
import '../assets/style/demo.scss'

export default class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      c : 90
    }



    setTimeout(() => {
      this.setState({
        c: 900
      })
    }, 2000)
  }
  render() {
    console.log(3344)
    return (
      <div>
        函数组件
        <Content value="aa" />
        <WordAdder />
      </div>
    )
  }
}


// const Content = ()=> {
//   // var aa;

//   // return (
//   //   <React.Fragment>
//   //     <div ref={el=> aa = el} >6666</div>
//   //   </React.Fragment>
//   // )

//   const t = [<div key={0}>333</div>, <li key={1}>333</li>]

//   console.log(t, 111)

//   return t



// }

// Content.displayName = 'aaa22' // devtools显示的名称可以自定义


// React.PureComponent 来代替手写 shouldComponentUpdate。但它只对props 和 state进行浅比较，不变的话不更新组件， 但当 props 或者 state 某种程度是可变的话，浅比较会有遗漏，那你就不能使用它了
class Content extends React.PureComponent { 
  render() {
    const t = [<div key={0}>333</div>, <li key={1}>333</li>]

    console.log(t, 111)
  
    return t
  }
}



class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 这样会更新
    // const words = JSON.parse(JSON.stringify(this.state.words));
    // words.push('marklar');
    // this.setState(state => ({
    //   words: words
    // }));

    // 这样不会更新
    const words = this.state.words
    words.push('marklar');
    this.setState(state => ({
      words: words
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} >点击</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}