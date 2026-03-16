import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Dashboard</Link>
              <Link to="/tasks">Tasks</Link>
              <Link to="/add">Add Task</Link>
              <Link to="/completed">Completed</Link>
              <Link to="/about">About</Link>
        </nav>
    );
}

export default Navbar;