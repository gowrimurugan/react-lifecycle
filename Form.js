import React, { useState } from "react";
import './Form.css';

function Form(props) {
    const [form, setForm] = useState({
        name: '',
        amount: '',
        offer: ''
    });

    const nameHandler = (event) => {
        setForm({ ...form, name: event.target.value });
    }
    const amountHandler = (event) => {
        setForm({ ...form, amount: event.target.value });
    }
    const offerHandler = (event) => {
        setForm({ ...form, offer: event.target.value });
    }
    const subjectHandler = (event) => {
        event.preventDefault();
        props.add(form);
    }
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <form onSubmit={subjectHandler}>
                    <input type="text" placeholder="Food Name" onChange={nameHandler} /><br/>
                    <input type="text" placeholder="Enter Amount" onChange={amountHandler} /><br/>
                    <input type="text" placeholder="Enter offer" onChange={offerHandler} /><br/>
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;