import React, { useState } from "react"; // <-- Important import

const SubmittedForm = () => {
  const [inputValue, setInputValue] = useState(""); // useState is now defined

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2 style={{ margin: 20 }}>31-Devesh Ghadigaonkar</h2>
      <form
        style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}
      >
        <h3 style={{ marginTop: 0 }}>Form</h3>

        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type your message..."
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            boxSizing: "border-box",
          }}
        />
      </form>

      {/* Live Preview */}
      <div style={{ marginTop: "15px", fontSize: "0.9rem", color: "#ffffff" }}>
        <strong>Live Preview:</strong> {inputValue || "Waiting for input..."}
      </div>
    </div>
  );
};

export default SubmittedForm;