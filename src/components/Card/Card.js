const Card = ({ symbol, amount, bgColor, children}) => {
    return (
        <div className={`${bgColor} mx-7 my-5 py-10 rounded shadow-md card text-center`}>
            <h1 className="uppercase font-bold mb-5 text-xl">{children}</h1>
            <span className="text-5xl"> { symbol }{ amount }</span>
        </div>
    )
}

export default Card
