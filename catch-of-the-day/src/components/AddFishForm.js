import React, { Component } from 'react';

class AddFishForm extends Component {
    nameRef= React.createRef()
    priceRef=React.createRef()
    statusRef=React.createRef()
    descRef=React.createRef()
    imageRef=React.createRef()
   

     createFish = (event)=>{
         event.preventDefault(  )
         const fish = {
        name: this.nameRef.current.value,
        price: this.priceRef.current.value,
        status: this.statusRef.current.value,
        desc: this.descRef.current.value,
        image: this.imageRef.current.value
         }
        
         this.props.addFish(fish)
         event.currentTarget.reset()
     }
    render() {
        return (
            <div>
               <form className ="fish-edit" onSubmit={this.createFish}>
                   <input name ="names" ref={this.nameRef} type="text" placeholder="Name"/>
                   <input name ="Price" ref={this.priceRef}type="text" placeholder="Price"/>
                   <select name ="status" ref={this.statusRef}>
                    <option value="available"> Fresh !</option>
                    <option value="Unavailable"> Sold Out !</option>
                   </select>
                          
                   <textarea name ="desc" ref={this.descRef} type="text" placeholder="Desc"/>
                   <input name ="image" ref={this.imageRef} stype="text" placeholder="Image"/>
                   <button type="submit">+Add Fish</button>


               </form>
            </div>
        );
    }
}

export default AddFishForm
;
