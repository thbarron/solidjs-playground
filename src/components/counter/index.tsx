import { createSignal } from "solid-js"

const Counter = () => {
  const [count, setCount] =  createSignal(0)
  
  function increment() {
    setCount(count() + 1)
  }

  function decrement() {
    setCount(count() - 1)
  }


  return(
    <>
      <div>
        Current Count is {count()}
      </div>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}


export default Counter;