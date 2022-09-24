import React from 'react'
import { useState } from 'react'
import ShippingForm from './ShippingForm';
function ShippingList() {
    const [items, setItems] = useState([]);
    const addToList = (item) => {
        console.log(item);
        const itemsCopy = [...items]
        itemsCopy.push(item)
        setItems(itemsCopy);
    };
    return (
        <div>
            <ShippingForm addToListCallback=
                {(value) => addToList(value)} />
            <h3>SHIPPING LIST</h3>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Color</th>
                    <th>Weight</th>
                    <th>Address</th>
                </thead>
                <tbody>
                    {
                        items.map(item => {
                            return (
                                <tr key={item.name}>
                                    <td>{item.Title}</td>
                                    <td>{item.Colour}</td>
                                    <td>{item.Weight}</td>
                                    <td>{item.Address}</td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ShippingList