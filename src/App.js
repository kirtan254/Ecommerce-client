import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context"; // Assuming this manages general app state
// import { AuthProvider } from './utils/context'; // Assuming this manages authentication state
import SignIn from "./components/signup/SignIn";
import SignUp from "./components/signup/SignUP"
// import Profile from "./components/signup/Profile";
// import Products from "./components/Products/Products";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> Wrap AppContext with AuthProvider if managing authentication */}
        <AppContext> {/* Or AuthProvider if it includes AppContext functionalities */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>
          <Newsletter />
          <Footer />
        </AppContext>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}

export default App;
