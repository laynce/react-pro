import { Card} from 'antd'

export default function RouteDesc() {
  const stateUrl = `<Link to={'/page/product/' + n} state={{sex: 'man',age: '12'}}>跳转Hook,Sate传参</Link>`
  const naviUrl = `navigate('/page/product/6?aa=900', {
    state: {
      ss: 233223 // state传参
    }})`

  return (
    <>
      <Card title='react-router-dom路由使用'>
        <ul>
          <li>
            <h4>get传参及使用，使用举例如下</h4>
            <code>
              // 取参数方法: url?aa=90 <br />
              const [searchParam]= useSearchParams()   <br />
              searchParam.get('aa')
            </code>
          </li>
          <li>
            <h4>动态路由传参及使用，使用举例如下</h4>
            <code>
              // 取参数方法: path='/product/:id'  <br />
              const param = useParams()   <br />
              param.id
              </code>
          </li>
          <li>
            <h4>state传参及使用，使用举例如下</h4>
            <code>
              // 取参数方法,Link组件指定第二个属性state  <br />
              或者 navigat跳转时指定第二个参数对象的state  <br />
              {stateUrl}, <br />
             {naviUrl}  <br />
              const param = useLocation().state 
            </code>
          </li>
        </ul>
      </Card>
    </>
  )
} 