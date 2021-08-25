import React,{useState} from 'react';

const Counter =function () {

  const [like,setLike]=useState(0);
  const [value,setValue]=useState('');

  const plusOneHandler = () => {
    setLike(prev=>prev+1);
  }
  const minusOneHandler=()=>{
    setLike(prev=>prev-1);
  }
  const handleInputChange=(e)=>{
    setValue(prev=>prev=e.target.value)
  }
    return (
      <div>
        <h1>{like}</h1>
        <h1>{value}</h1>
        <input type="text" onChange={handleInputChange} value={value} />
        <button onClick={plusOneHandler}>Plus</button>
        <button onClick={minusOneHandler}>Minus</button>
      </div>
    );
}
export default Counter;