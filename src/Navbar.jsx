import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <h2>Task Managment App</h2>
            <Link to="/">Home</Link>
            <Link to="/add">Add Task</Link>
        </nav>
    );
}

export default Navbar;