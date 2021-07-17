export default function Movie(props) {
  return (
    <div
      className="mt-3"
      style={{ cursor: "pointer" }}
      onClick={() => {
        props.setId(props.data.id);
        props.playvideo();
      }}
    >
      <img
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
        id="base64image"
        src={`data:image/jpeg;base64,${props.data.thumbnail}`}
        alt="Thumbnail"
      />
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          padding: "5px",
        }}
      >
        <div style={{ color: "white", fontWeight: "bold" }}>
          {props.data.name}
        </div>
        <div style={{ color: "grey" }}>{props.data.year}</div>
      </div>
    </div>
  );
}
