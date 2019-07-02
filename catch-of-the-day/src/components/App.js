import React from 'react';
import Header from './Header';
import Inventory from './Inventory'
import Order from './Order'
import LoadSampleFishes  from '../sample-fishes'
import Samplefishes from '../sample-fishes';

class App extends React.Component {
state = {
fishes: {},
order: {}
}
addFish = fish => {
   //1. create a copy of the state
   const fishes ={...this.state.fishes}
   //2. add new fish to the fishes variaable
   fishes[`fish${Date.now()}`] = fish
   this.setState({
       fishes: fishes
   })


    
}
LoadSampleFishes =() => {
    this.setState({
fishes: Samplefishes
    })
}
    render() {
       
        return (
            <div className="catch-of-the-day">
                <div >
                     <Header tagline="wes is cool" age={400}/>
                     <Header tagline="wes is coolio" age={400}/>
                </div>
                <Order/>
                <Inventory addFish={this.addFish} LoadSampleFishes={this.LoadSampleFishes}/>
                
                 
               
            </div>
        );
    }
}

export default App;
