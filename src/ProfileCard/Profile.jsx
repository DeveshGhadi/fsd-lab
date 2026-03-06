import Avatar from "./Avatar";
import Bio from "./Bio";

function Profile({ name, username, profession, image }) {
  return (
    <div
      style={{
        borderRadius: "10px",
        padding: "20px",
        width: "220px",
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}
    >
      <Avatar image={image} name={name} />
      <Bio 
        name={name}
        username={username}
        profession={profession}
      />
    </div>
  );
}

export default Profile;
