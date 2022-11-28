import React,{useState} from 'react'
import axios from 'axios';
import './Itemlist.css';
function Itemlist() {
    const [list,setList]= useState([]);
    const [item,setItem] = useState();

   const show=async()=>{

    const res = await axios.get('http://localhost:8000')
    setList(res.data);
   
   }
       
        const add=async()=>{
          const res= await axios.post('http://localhost:8000',{ groceryItem:item,isPurchased:"false"})
     show();
        
    }

    const update=async(val)=>{
      // document.getElementById(index).style.textDecoration = "line-through" ;
      const res= await axios.put(`http://localhost:8000/${val.groceryItem}`,{isPurchased:'true'})
     
      show();
         
    }

const remove=async(val)=>{
  const res= await axios.delete(`http://localhost:8000/${val.groceryItem}`)
     
  show();
}

  return (
    <div className='head'>
    
    <p onClick={()=>show()}><b>Monthly Grocery Planning App</b></p>
   <div className='inhead'>

   
   <h5>Plan for the month of November</h5>  
  <table border>
  <tr>
        <td><input placeholder='Add Shooping item' onChange={(e)=>setItem(e.target.value)} >
        </input><button  id='add' onClick={()=>add()}>Add</button> </td>
        </tr>
  
   { 
   list&&
   list.map((el,index)=>{
    return(
        
        <tr>
        <td style={{textDecoration:el.isPurchased==='true'?'line-through':''}}>
                               {el.groceryItem}
                            </td>
        
        <td><button id='pbutton' onClick={()=>update(el)} >purchased</button>
        <button onClick={()=>remove(el)}>X</button></td>
        </tr>
    )

   }) 
   }
   </table>
   </div>
    </div>
  )
}

export default Itemlist;
// <button onClick={()=>add()}></button>