import React from "react";
export class Storepicker extends React.Component{
    render(){

            return (
                <React.Fragment>
                <form className="store-selector">
                <p>Fish</p>
                <h2>Please enter a store</h2>
                <input type="text" required placeholder ="storeName"/>
                </form>
                </React.Fragment>
                
            );
        }
    }
export default Storepicker          
    

