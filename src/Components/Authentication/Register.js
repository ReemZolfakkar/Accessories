import React,{useState}from 'react'

function Register() {
    const [newuser,setNewuser]=useState({
        name:'',
        password:'',
        email:'',
        address:'',
        phone:'',
    })
    const [formerrors,setFormErrors]=useState({});
    const handleInput=e=>
    {   
        const key = e.target.name;
        console.log(e.target.name)
        const value =e.target.value;
        setNewuser({...newuser,[key]:value})    
    }
    const handleNewUser=e=>
    {
       
        console.log(newuser)
    }
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
                <div className='Register-form__items'>
                    <label className='Register-form__label'>
                        email
                    </label>
                    <input type="text"  className='Register-form__inputs' name="email" onChange={handleInput}>
                    </input>
                </div>
                <div className='Register-form__items'>
                    <span className='Register-form__label'>
                        Password
                    </span>
                    <input className='Register-form__inputs' type="password" name="password" onChange={handleInput} />
                </div>
                <div className='Register-form__items'> 
                    <span className='Register-form__label'>
                        Address
                    </span>
                    <input className='Register-form__inputs' type="text" name="address" onChange={handleInput}/>
                </div>
                <div className='Register-form__items'> 
                    <span className='Register-form__label'>
                        Phone number
                    </span>
                    <input className='Register-form__inputs' type="text" name="phone" onChange={handleInput}/>
                </div>
                <div className='Register-form__items'>
                    <button type="button" className="Auth-button" onClick={handleNewUser} >Sign Up</button>
                </div>  
            </div>
        </div>
    )
}

export default Register
