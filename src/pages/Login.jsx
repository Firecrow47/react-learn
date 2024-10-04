import React, { useContext } from "react";
import MyInput from "../components/UI/Input/myInput";
import MyButton from "../components/UI/Button/myButton";
import { AuthContext } from "../context";

const Login = function () {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();
        const login = document.getElementById('login');
        const password = document.getElementById('password');
        if (login.value === password.value && login.value !== '' && password.value !== '') {
            setIsAuth(true)
            localStorage.setItem('auth', 'true')
        }

    } 
    return (
       <div>
        <h1>Страница для авторизации</h1>
        <h2>Если хочешь войти, соблюдай условие</h2>
        <h2>login===password</h2>
        <form onSubmit={login}>
        <MyInput id="login" type="text" placeholder="Введите логин"/>
        <MyInput id="password" type="password" placeholder="Введите пароль"/>
        <MyButton>Войти</MyButton>
        </form>
       </div>
    )
}

export default Login;