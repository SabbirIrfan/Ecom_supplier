import React from "react";


class Register extends React.Component{





    render(){
        return (
            <div>
                
                <form accept-charser = "utf-8">
                    name: <input type= "text" name="" value="" /> <br/>
                    address : <input type= "text"  id="" value="" /> <br/> 
                    email : <input type= "email"  id="" value="" /> <br/> <br/>
                    username : <input type= "text"  id="" value="" /> <br/>
                    password : <input type= "password"  id="" value="" /> <br/> 


                    <input type= "submit"  value="submit" /> 
                    <input type= "reset" value="reset" /> 

                </form>
            </div>
        )
    }
}

export default Register;