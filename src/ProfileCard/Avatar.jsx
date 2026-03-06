function Avatar({ image, name }) {
  return (
    <img
      src={image}
      alt={name}
      width="150"
      style={{ borderRadius: "10px" }}
    />
  );
}

export default Avatar;

