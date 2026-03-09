import { useParams } from "react-router-dom";

function TaskDetails({tasks}) {
    const { id } = useParams();
    return(
        <div className="card task-details">
            <h2>Task Details</h2>
            <p>{tasks[id]}</p>
        </div>
    );
}

export default TaskDetails;