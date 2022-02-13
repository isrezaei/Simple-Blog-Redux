import {Link} from "react-router-dom";

export default function Header ()
{
    return (
        <nav>
            <section>
                <h1>Redux Essentials Example</h1>
                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/">Posts</Link>
                        <Link to="/users">Users</Link>
                        <Link to="/notifications">Notifications <span className="badge">5</span></Link>
                    </div>
                    <button className="button">Refresh Notifications</button>
                </div>
            </section>
        </nav>
    )
}