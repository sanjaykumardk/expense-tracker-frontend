const TransactionCard=(props)=>{
    const {transaction}=props;
    
    return(
        <>
        <div className={`transaction-card ${(transaction.amount<0)?"negative":"positive"}`}>
            <div>{transaction.title}</div>
            <div>${transaction.amount}</div>
        </div>
        </>
    )
}

export default TransactionCard