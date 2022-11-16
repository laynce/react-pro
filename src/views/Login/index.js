import React from 'react'
import {useNavigate} from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        password: ''
      }
    }

    this.submit = this.submit.bind(this)
    console.log(this.a, 9999)
  }

  change(e, key) {
    console.log(e.target.value)
    this.setState(state => ({
      form : Object.assign(state.form, {[key]: e.target.value})
    }))
  }

  submit(e) {
    const values = Object.values(this.state.form)
    e.preventDefault()

    if (values.some(v => !v)) {
      return 
    }

    this.props.navigate('/page')
  }

  render() {
    return (
      <form
        style={{ margin: '200px auto', padding: '30px', border: '1px solid #000', width: '400px', height: '300px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
        onSubmit={this.submit}>
        <p className='mb-20'>
          <label>账号:&nbsp;</label>
          <input type="text" value={this.state.form.name} onChange={(e)=> this.change(e, 'name')} />
        </p>
        <p>
          <label>密码:&nbsp;</label>
          <input type="password" value={ this.state.form.password} onChange={(e)=> this.change(e, 'password')}/>
        </p>
        <p className='mt-20'>
        <input type="submit" value='提交'/>
        </p>
      </form>
    )
  }
}


export default function LoginCom(props) {
  const navigate = useNavigate()

  return (
    <Login {...props} navigate={navigate} />
  )
}

