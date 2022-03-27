import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types'
import {login,clearErrors} from '../../actions/authActions';
import {setAlert} from '../../actions/alertActions';

const Login = ({auth:{isAuthenticated,error},login,setAlert,props}) => {
  
useEffect(()=>{
   if(isAuthenticated){
     props.history.push('/');
   }
   if(error=== 'user with this email does not exist'){
     setAlert(error,'danger');
     clearErrors();
   }
})

 const [field,setField] = useState({

        email: '',
        password: '',
       

    });

   const {email,password}= field 

const onChange = e =>  setField({...field,[e.target.name]: e.target.value})

const onSubmit = e =>{
  e.preventDefault()
  
  if( email=== '' || password == ''){
    setAlert('please fill the login form','danger')
  } else {
    
    const formData = new formData({
      email,
      password
    })
    login(formData);
  }

    
}
 return(

    <div>
    <div className='form-container'>
    <h2>Login Form</h2>
    <form onSubmit={onSubmit} >
    
              <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} placeholder='Email' onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} placeholder='Password' onChange={onChange} minLength="6"/>
        </div>
        
         <input type="submit" value="Login" className="btn btn-primary block" />
    </form>
</div>
</div>
 )

}

Login.propTypes = {
  
  login: propTypes.func.isRequired,
  setAlert: propTypes.func.isRequired,
  isAuthenticated : propTypes.arr.isRequired
}
const mapStateToProps = state => ({
  auth : state.auth,
  
})

export default connect(mapStateToProps,{login,setAlert}) (Login);
