import { Card} from 'antd'

export default function RouteDesc() {

  return (
    <>
      <Card title='react-router-dom路由使用'>
        <ul>
          <li>
            <h4>get传参及使用，使用举例如下</h4>
            <code>
              // 取参数方法: url?aa=90
              const [searchParam]= useSearchParams() 
              searchParam.get('aa')
            </code>
          </li>
          <li>
            <h4>动态路由传参及使用，使用举例如下</h4>
            <code>
              <h3>444</h3>
              // 取参数方法: path='/product/:id'
              const param = useParams() 
              param.id
            </code>
          </li>
          <li>
            <h4>state传参及使用，使用举例如下</h4>
            <code>
              // 取参数方法,Link组件指定第二个属性state
             或者 navigat跳转时指定第二个参数对象的state
              const param = useLocation().state 
            </code>
          </li>
        </ul>
      </Card>
    </>
  )
} 