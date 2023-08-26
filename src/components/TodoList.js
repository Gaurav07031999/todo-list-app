import React from 'react';
import "./TodoList.css";
import {RiDeleteBin3Fill, RiImageEditFill} from "react-icons/ri";

function TodoList(props) {
    const {itemList, deleteItem, editItem} = props;
  return (
    <>
    {itemList?.length !==0
     ?itemList.map((val)=>{
        return(
            <div className="item" key={val.id}>
                <div className='span_div'>
                    <span>{val.itemName}</span>
                </div>
                <div className='btns'>
                  <div>
                    <RiDeleteBin3Fill className='delete_btn' onClick={()=>deleteItem(val.id)}/>
                  </div>
                  <div onClick={()=>editItem(val.id)}>
                    <RiImageEditFill className='edit_btn' />
                  </div>
                </div>
            </div>
        )
     }):"No item to display..."}
    </>
  )
}

export default TodoList
