import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import Navbar from './Navbar';
import FooterNav from './FooterNav';
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });
  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };
  const clearList = () => {
    showAlert(true, 'The List of Items is now clear', 'danger');
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, `The item ${name} was erase`, 'danger');
    setList(list.filter((item) => item.id === id));
  };
  const editItem = (id) => {
    const selectedId = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(selectedId.title);
  };
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //Display Alert
      showAlert(true, 'Please enter some Value', 'danger');
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true, `You successfully change the Item ${name}`, 'success');
    } else {
      showAlert(true, `You Succesfully Create the item ${name}`, 'success');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };
  return (
    <>
      <Navbar />
      <section className="section-center">
        <form onSubmit={handleSubmit} className="grocery-form">
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="Example: Eggs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="submit-btn" type="submit">
              {isEditing ? 'edit' : 'submit'}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className="clear-btn" onClick={clearList}>
              clear items
            </button>
          </div>
        )}
      </section>
      <FooterNav />
    </>
  );
}

export default App;
