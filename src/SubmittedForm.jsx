import React, { useState } from "react"; // <-- Important import

const SubmittedForm = () => {
  const [inputValue, setInputValue] = useState(""); // useState is now defined

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    if (inputValue.trim() === "") {
      alert("Please enter something before submitting!");
    } else {
      alert(`Form Submitted!\nValue: ${inputValue}`);
      setInputValue(""); // Clear input after submit
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <form
        onSubmit={handleSubmit}
        style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}
      >
        <h3 style={{ marginTop: 0 }}>Feedback Form</h3>

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

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Submit Form
        </button>
      </form>

      {/* Live Preview */}
      <div style={{ marginTop: "15px", fontSize: "0.9rem", color: "#666" }}>
        <strong>Live Preview:</strong> {inputValue || "Waiting for input..."}
      </div>
    </div>
  );
};

export default SubmittedForm;