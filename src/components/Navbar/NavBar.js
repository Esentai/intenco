import React from 'react'
import './NavBar.css'
import logo from '../../assets/images/img_logo.png'
function NavBar(){
    return(
        <div className="nav">
            <div className="container">
                <div className="navbar">
                    <div>
                        <img src={logo} className="navbar_logo" alt="logo" />
                        <a className="navbar_link" href="#">기능소개</a>
                        <a className="navbar_link" href="#">제품소개</a>
                        <a className="navbar_link" href="#">가격안내</a>
                    </div>
                    <div>
                        <a href="#" className="navbar_link rigth">회원가입</a>
                        <a href="#" className="navbar_btn">로그인</a>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default NavBar
