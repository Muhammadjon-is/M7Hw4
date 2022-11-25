import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookList from "./components/BookList";
import MyNavbar from "./components/Navbar.jsx"
import MainPage from "./components/MainPage.jsx"

function App() {
  return (
    <div>
      
      <MyNavbar/>
      <MainPage/>
      <BookList />
    </div>
  );
}

export default App;
