import React from 'react';
import './App.css';
import BookList from './Components/Comments/BookList';
import MainPage from './Components/MainPage';
import MyCards from './Components/MyCards';
import MyFooter from './Components/MyFooter';
import MyNavbar from './Components/MyNavbar';

function App() {
  return (
    <div className="App container-fluid">
        <MyNavbar/>
        <h1 className='header'>Welcome our book store</h1>
        <MainPage/>
        <MyCards/>
        <MyFooter/>
        <BookList/>

    </div>
  );
}

export default App;
