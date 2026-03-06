import { useState } from "react";

function EventHandler() {
  const [text, setText] = useState("Click Me");

  return (
    <button className="btn"onClick={() => setText("EventHandler!")}>
      {text}
    </button>
  );
}
export default EventHandler;
