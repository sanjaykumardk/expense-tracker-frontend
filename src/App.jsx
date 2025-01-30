import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './index.css'
import TransactionList from "./components/TransactionList"
import TransactionCard from "./components/TransactionCard"
import TransactionForm from './components/TransactionForm'



function App() {
  const [transactions,setTransactions]=useState([])



  useEffect(()=>{()=>{
    const fetchTransactions=async()=>{
      const response=await axios.get('https://nodejs-4jaz.onrender.com/api/expenses')
      setTransactions(response.data)
    }
    fetchTransactions()
    
  },[]})
  const addTransaction=(title,amount)=>{
    console.log(title,amount)
    const newTxn={
      id:transactions.length+1,
      title:title,
      amount:+amount
    }
    setTransactions([...transactions,newTxn])
  }

  return (
    <>
      <h1>Expense Tracker</h1>
      <TransactionList transactions={transactions}/>
      <TransactionForm transactions={transactions} addTransaction={addTransaction}/>
    </>
  )
}

export default App
