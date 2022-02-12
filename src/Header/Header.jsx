export default function Header ()
{
    return (
        <nav>
            <section>
                <h1>Redux Essentials Example</h1>
                <div className="navContent">
                    <div className="navLinks">
                        <a href="/" dideo-checked="true">Posts</a>
                        <a href="/users" dideo-checked="true">Users</a>
                        <a href="/notifications" dideo-checked="true">Notifications <span className="badge">5</span></a>
                    </div>
                    <button className="button">Refresh Notifications</button>
                </div>
            </section>
        </nav>
    )
}