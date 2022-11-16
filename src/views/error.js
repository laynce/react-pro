import { Link} from 'react-router-dom'
export default function error() {
  return (
    <>
      <div>谢谢，请求的页面404 not found!!</div>
      <Link to='/'>返回standard</Link>
    </>
  )
}