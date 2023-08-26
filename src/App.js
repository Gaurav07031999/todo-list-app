import { useState } from 'react';
import './App.css';
import uuid  from 'react-uuid';
import TodoList from './components/TodoList'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [itemId, setItemId] = useState();



  function handleChange(e){
    setItem(e.target.value);
  }
  function addItem(){
    if(toggleBtn){
      const newList = itemList.map((todo)=>{
        if(todo.id === itemId){
          return {...todo, itemName: item}
        }
        return todo;
      })
      setItemList(newList);
      setToggleBtn(false);
      setItem("");
      setItemId();
      toast.info("Item updated successfully...")
    }
    else{
      const itemObj = {id: uuid(), itemName: item}
    setItemList((prevItem)=>[...prevItem, itemObj]);
    setItem("");
    toast.success("Item added successfully...")
    }
  }
  function deleteItem(id){
    // console.log(id);
    const filterItem = itemList.filter((value)=>{
      return value.id !== id;
    })
    setItemList(filterItem);
    toast.error("Item deleted successfully...")

  }
  function DeleteAll(){
    setItemList([]);
    toast.error("All items deleted successfully...")

  }
  function editItem(id){
    const editTodo = itemList.find((todo)=>{
      return todo.id === id;
    })
    // console.log("editTodo", editTodo);
    setItem(editTodo.itemName);
    setToggleBtn(true);
    setItemId(id);
    // console.log("id", id);
  }

  return (
    <div className="App">
      <div className="parent_div">
        <h1>React To-Do List App</h1>
        <div className="upper_half">
          <div className="input_div">
            <input type="search" placeholder='To-Do...' value={item}
              onChange={handleChange}
            />
          </div>
          <div className="btn_div">
            <button className='add_btn' onClick={addItem} disabled={item.length <= 2 ? true: false}>{toggleBtn ? "Update Item" : "Add Item"}</button>
            <button className='deleteAll_btn' onClick={DeleteAll}>Delete All</button>
          </div>
        </div>
        <div className="lower_half">
        <TodoList itemList={itemList} deleteItem={deleteItem} editItem = {editItem}/>
        <ToastContainer theme='colored'/>
        </div>
      </div>
    </div>
  );
}

export default App;
