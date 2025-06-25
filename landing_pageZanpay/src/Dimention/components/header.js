import { useState } from "react";
import { IoMenu } from "react-icons/io5";



function Header() {
    const [menuBtn, setMenueBtn] = useState("none")

    function menu() {
        if (menuBtn === "none")
            setMenueBtn("")
        else
            setMenueBtn("none")

    }

    return (
        <header>
            <div className="headerName-Menu">
                <h1 className="headerName">Zenpay</h1>
                <i onClick={menu}><IoMenu /></i>
            </div>

                <nav className="headerLinks" visibility={menuBtn}>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </nav>

                <div className="btnContainer" visibility={menuBtn}>
                    <button className="signIn-Btn">Sign In</button>
                    <button className="signUp-Btn">Sign Up</button>
                </div>
        </header>
    );
}

export default Header;
