import React, { useState } from 'react'

function ShippingForm(props) {
    const [Title, setTitle] = useState('');
    const [Colour, setColour] = useState('');
    const [Weight, setWeight] = useState('');
    const [Address, setAddress] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            Title: Title,
            Colour: Colour,
            Weight: Weight,
            Address: Address
        }
        props.addToListCallback(data)
    }
    return(
        <div className='ship'>
            <form onSubmit={handleSubmit}>
                <h1>SHIPPING FORM</h1>
                <input type="text" value={Title} placeholder="enter the name of the box" onChange={(e) => setTitle(e.target.value)} ></input><tr></tr>
                <label>color of the box</label>
                <input type="color" value={Colour} placeholder="enter the color of the box" onChange={(e) => setColour(e.target.value)} ></input><tr></tr>
                <input type="number" value={Weight} placeholder="enter the weight of the box" onChange={(e) => setWeight(e.target.value)} ></input><tr></tr>
                <input type="text" value={Address} placeholder="enter the address of the box" onChange={(e) => setAddress(e.target.value)} ></input><tr></tr>
                <button>SUBMIT</button>
            </form>
        </div >
    )
}

export default ShippingForm