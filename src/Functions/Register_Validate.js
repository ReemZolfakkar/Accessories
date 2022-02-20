const register_validate=(NewUser)=>
{
    const error={};
    const email_valdiation=NewUser.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var enough_password_Regex = new RegExp("(?=.{8,}).*", "g");
    var phoneno = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  
    if(!NewUser.name)
    {
        error.name="Username is required";
    }
    if(!email_valdiation)
    {
        error.email="Email is in wrong format";
    }
    if(!NewUser.email)
    {
        error.email="Email is required";
    }
    if(!enough_password_Regex.test(NewUser.password))
    {
        error.password="Password is week";
    }
    if(!NewUser.password)
    {
        error.password="Password is required";
    }
    if(NewUser.password.length>16)
    {
        error.password="Password is too large";
    }
    if(!NewUser.address)
    {
        error.address="Address is required";
    }
    if(!phoneno.test(NewUser.phone))
    {
        error.phone="Phone is in wrong format";
    }
    if(!NewUser.phone)
    {
        error.phone="Phone number is required";
    }
    return error
}
export default register_validate