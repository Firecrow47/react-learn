import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../Button/myButton";
import { AuthContext } from "../../../context";

const Navbar = function () {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
      setIsAuth(false);
      localStorage.removeItem('auth')
    }
    return (
        <div className="navbar">

        <MyButton onClick={logout}>
            Выйти
        </MyButton>
        <div className="navbar__links">
          <Link to="/about">О сайте</Link>
          <Link to="/posts">Посты</Link>
        </div>
      </div> 
    )
}

export default Navbar;