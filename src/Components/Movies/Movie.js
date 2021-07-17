import react from "react";

export default function Movie(props) {
  console.log(props);
  return (
    <div>
      hi
      <img
        id="base64image"
        src={`data:image/jpeg;base64,${props.image}`}
        alt="Missing"
      />
    </div>
  );
}
