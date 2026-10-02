import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
 const [title, setTitle] = useState('');
 const [author, setAuthor] = useState('');
 const [category, setCategory] = useState('');
 
 const categories = {
   '1': 'Powieść',
   '2': 'Kryminał',
   '3': 'Fantastyka',
   '4': 'Biografia'
 };
 const handleAdd = () => {
   const categoryName = categories[category] || '';
   console.log(`tytuł: ${title}; autor: ${author}; gatunek: ${categoryName}`);
 };
 return (
<div style={{ padding: '20px' }}>
<form>
<div className="form-group mb-3">
  <label htmlFor="bookTitle">Tytuł książki</label>
    <input
      type="text"
      className="form-control"
      id="bookTitle"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
</div>
<div className="form-group mb-3">
  <label htmlFor="bookAuthor">Autor książki</label>
    <input
      type="text"
      className="form-control"
      id="bookAuthor"
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
    />
</div>
<div className="form-group mb-3">
  <label htmlFor="bookCategory">Gatunek</label>
    <select
      className="form-control"
      id="bookCategory"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
    <option value=""></option>
    <option value="1">Powieść</option>
    <option value="2">Kryminał</option>
    <option value="3">Fantastyka</option>
    <option value="4">Biografia</option>
  </select>
</div>
<button type="button" className="btn btn-primary" onClick={handleAdd}>Dodaj</button>
</form>
</div>
 );
}
export default App;