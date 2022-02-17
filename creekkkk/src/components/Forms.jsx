import {Link} from "react-router-dom"

const Forms = () => {
    const navItems = [
        { title: "Sign in", path: "/" },
        { title: "Register", path: "/Register" },    
    ]


    return ( 
        <div className="creek__from">
            <ul className="form__header">
                {navItems.map((navItem, index) => {

                    return (
                    <li className="sign_in_form">
                    <Link to={navItem.path}>{navItem.title}</Link>
                    </li>

                    )
                })}
                

               
            </ul>
        </div>
     );
}
 
export default Forms;