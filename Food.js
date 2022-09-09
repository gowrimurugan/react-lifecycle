import "./Food.css";
import { useState } from 'react'

function Food(props) {

    const [amount, setAmount] = useState(props.amount)
    const [offer, setOffer] = useState(props.offer)

    const updateAmount = () => {
        let newAmount = props.amount - ((offer / 100))* props.amount
        setAmount(newAmount)
    }
    const [x, setX] = useState("heart")

    return (
        <div className='food-box'>
            <div className='food-image'>
                <img src={props.image} />
            </div>
            <h2 className="food-name">{props.name}</h2>
            <p className="food-amount">{amount}</p>
            <p className="food-offer">{offer}% off</p>
            <button onClick={updateAmount}>Offer</button>
            <p className={x} onClick={()=>{
                if(x == "heart"){
                    setX("heart liked")
                }else{
                    setX("heart")
                }
            }  }>&#10084; &#9733;&#9733;&#9733;&#9733;&#9733;</p>
        </div>);
}
export default Food;