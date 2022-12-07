import React, { useState, useRef, useEffect } from 'react';
import '../assets/style/demo.scss'

export default function Demo(props) {

  return (
    <>
      <div>Hook 开始</div>
      <p>useRef</p>
      <Content />
    </>
  )

}


function Content() {
  const [n, setNum] = useState(11)
  const btnRef = useRef(null)

  useEffect(() => {
    console.log(btnRef, 11)
  })

  return (
    <>
     <div> Count: {n}
        <button ref={btnRef} onClick={() => setNum(n + 1)}>&nbsp;+&nbsp;</button>
      </div>
    </>
  );
}

