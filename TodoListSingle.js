import { useState } from 'react';

 import './TodoListSingle.css'

function TodoListSingle() {

  const [newValue, setnewValue] = useState("");
 const [newArr, setnewArr] = useState([]);
 
 const ClickButton=()=>{ 
  setnewArr([...newArr, {newValue}]);
  setnewValue('')
}

const removeData=(i)=>{
const updatedList = newArr.filter((elem, id)=>{


return i!=id;

})

setnewArr(updatedList);

}

  

return ( <div>
<div className="inputDiv">

<div >  <input className="myInput" value={newValue} type="text"
 onChange={ (e)=>setnewValue(e.target.value)} >
  </input> <button className='button'  onClick={(newValue=="") ? null: ClickButton} >ADD</button>   </div>

 
<div> {  newArr.map( (ele, i) => {
  return ( 
<p key={i} >
   <div>  <li className='list'> <button className='remove-btn' onClick={()=>removeData(i)}  >X</button>  {ele.newValue}</li> 
     </div>

</p>
) } ) }  </div>


 


</div>
</div>  ) }


export default TodoListSingle;