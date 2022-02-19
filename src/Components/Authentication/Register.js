import React,{useEffect, useState}from 'react'
import register_validate from '../../Functions/Register_Validate'
function Register() {
    const [formerrors,setFormErrors]=useState({});
    const [isSubmit,setisSubmit]=useState(false);
    const [newuser,setNewuser]=useState({
        name:'',
        password:'',
        email:'',
        address:'',
        phone:'',
    })
    const handleInput=e=>
    {   
        const key = e.target.name;
        const value =e.target.value;
        setNewuser({...newuser,[key]:value})    
    }
    const handleNewUser=e=>
    { e.preventDefault();
       setFormErrors(register_validate(newuser));
        setisSubmit(true);
    }
    useEffect(()=>{
        if(Object.keys(formerrors).length===0 && isSubmit)
        {
            setisSubmit(true)
        }
    },[formerrors])
    return (
        <div onSubmit={handleNewUser}>
            <div className="Register-form">
                <h2>Time to feel like home,</h2>
                <div className='Register-form__items'>
                    <label className='Register-form__label'>
                        Name
                    </label>
                    <input type="text"  className='Register-form__inputs' name="name" onChange={handleInput}>
                    </input>
                </div>
                <p className='Register-form__error'>{formerrors.name}</p>
                <div className='Register-form__items'>
                    <label className='Register-form__label'>
                        email
                    </label>
                    <input type="text"  className='Register-form__inputs' name="email" onChange={handleInput}>
                    </input>
                <p className='Register-form__error'>{formerrors.email}</p>
                </div>
                <div className='Register-form__items'>
                    <span className='Register-form__label'>
                        Password
                    </span>
                    <input className='Register-form__inputs' type="password" name="password" onChange={handleInput} />
                </div>
                <p className='Register-form__error'>{formerrors.password}</p>
                <div className='Register-form__items'> 
                    <span className='Register-form__label'>
                        Address
                    </span>
                    <input className='Register-form__inputs' type="text" name="address" onChange={handleInput}/>
                </div>
                <p className='Register-form__error'>{formerrors.address}</p>
                <div className='Register-form__items'> 
                    <span className='Register-form__label'>
                        Phone number
                    </span>
                    <input className='Register-form__inputs' type="text" name="phone" onChange={handleInput}/>
                </div>
                <p className='Register-form__error'>{formerrors.phone}</p>
                <div className='Register-form__items'>
                    <button type="button" className="Auth-button" onClick={handleNewUser} >Sign Up</button>
                </div>  
            </div>
        </div>
    )
}

export default Register
