import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { Link } from "react-router-dom";
function TaskList({tasks}) {

    const theme = useContext(ThemeContext);

    return (
        <div className="card"
            style={{
                background: theme === "light" ? "#eee" : "#333",
                color : theme === "light" ? "#333" : "#fff"
            }}>
            <ul>
                {tasks.map((task, index) => {
                    <li key={index}>
                        <Link to={`task/${index}`}>{task}</Link>
                        <button className="delete">Delete</button>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default TaskList;