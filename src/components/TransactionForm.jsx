import {useState} from "react";



const TransactionForm = (props)=>{
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState(0);
    const {addTransaction}=props;
    const handleSubmit=(e)=>{
        
        e.preventDefault()
        addTransaction(title,amount)
    }
    const handleTitleChange=(e)=>{
        setTitle(e.target.value)
    }

    const handleAmountChange=(e)=>{
        setAmount(e.target.value)
    }
return (
    <div>
        <h1>New Transaction</h1>
        <hr/>
        <form>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" onChange={handleTitleChange} id="title"></input>
            </div>
            <div>
                <label htmlFor="Amount">Amount </label>
                <input type="number" onChange={handleAmountChange} id="amount"></input>
            </div>
            <button onClick={handleSubmit}>Add Transaction</button>
        </form>
    </div>
)
}
export default TransactionForm