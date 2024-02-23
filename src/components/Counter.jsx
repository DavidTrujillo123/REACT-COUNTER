import '../styles/Counter.css'
function Counter({ number }){
    return (
        <div className="counter">
            {number}
        </div>
    );
}

export default Counter;