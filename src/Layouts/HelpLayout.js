import { NavLink, Outlet } from "react-router-dom"

const HelpLayout = () => {
  return (
   <div className="help-layout">
    <h2>Website HELP</h2>
    <p>LOREMLOREMREMREMRMERMEMREMRMASDMAMSDAMSDMASMD</p>
            <nav>
                <NavLink to="faq">View Faq</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </nav>
    <Outlet/>
   </div>
     )
}

export default HelpLayout
