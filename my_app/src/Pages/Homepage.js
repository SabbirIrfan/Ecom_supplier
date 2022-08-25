import React from "react"

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: " code lancer",
            username: "code@lancer",
            balance: 0
        }
    }
    
    render(){
        return (
            <div>
            <h2> Welcome User 
                {this.state.name}
                </h2>
                <div>
                    balance: <h1> {this.state.balance}
                            </h1>
                </div>
                <div>
                    <button> Deposite</button>
                        <button>Withdraw</button>
                </div>
                <div>
                    <button> update</button>
                    <button> logout</button>
                </div>

            </div>
        )
    }
}

export default Homepage;