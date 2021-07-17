import { Container, Row, Col, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import axios from "axios";

export default function UploadMovie() {
  const inputthumbnail = useRef(null);
  const inputvideo = useRef(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [MovieName, setMovieName] = useState("");
  const [YearOfRelease, setYearOfRelease] = useState("");
  const [Language, setLanguage] = useState("");
  const [ThumbNail, setThumbnail] = useState(null);
  const [Video, setVideo] = useState(null);

  const handleSubmit = () => {
    if (MovieName === "") setError("Enter movie name");
    else if (YearOfRelease === "") setError("Enter release year");
    else if (Language === "") setError("Enter Language");
    else if (ThumbNail === null) setError("Please upload Thumbnail");
    else if (Video === null) setError("Please upload video");
    else {
      var formData = new FormData();
      formData.append("name", MovieName);
      formData.append("year", YearOfRelease);
      formData.append("language", Language);
      formData.append("thumbnail", ThumbNail);
      formData.append("video", Video);

      axios
        .post("http://localhost:3000/uploadmovie", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          setError("");
          setStatus("Done uploading");
          console.log("done", res);
          setTimeout(() => {
            setStatus("");
            setMovieName("");
            setLanguage("");
            setYearOfRelease("");
            setThumbnail(null);
            setVideo(null);
          }, 2000);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleThumbnail = (e) => {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    setThumbnail(file);
    // getBase64(file, (result) => {
    //   setThumbnail(result);
    // });
  };

  const handleVideo = (e) => {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    setVideo(file);
    // getBase64(file, (result) => {
    //   console.log(result);
    //   setVideo(result);
    // });
  };

  // function getBase64(file, cb) {
  //   let reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = function () {
  //     cb(reader.result);
  //   };
  //   reader.onerror = function (error) {
  //     console.log("Error: ", error);
  //   };
  // }

  return (
    <div>
      <Container className="w-50">
        <Row>
          <Col className="d-flex justify-content-center mt-5">
            <h2>Upload your video</h2>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-4 ">
            <input
              type="text"
              placeholder="Movie Name"
              onChange={(e) => setMovieName(e.target.value)}
              value={MovieName}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-3">
            <input
              type="number"
              placeholder="Year of Release"
              onChange={(e) => setYearOfRelease(e.target.value)}
              value={YearOfRelease}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-3">
            <input
              type="text"
              placeholder="Language"
              onChange={(e) => setLanguage(e.target.value)}
              value={Language}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center mt-3">
            <div>Upload Thumbnail</div>
            <Button
              className="d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#444444",
                fontWeight: "bold",
                borderRadius: "50%",
                border: "none",
              }}
              onClick={() => inputthumbnail.current.click()}
            >
              +
            </Button>
            <input
              ref={inputthumbnail}
              type="file"
              accept=".jpg,.png,.jpeg"
              className="d-none"
              onChange={(e) => handleThumbnail(e)}
            />
          </Col>

          <Col className="d-flex flex-column align-items-center justify-content-center mt-3">
            <div>Upload Video file</div>
            <Button
              className="d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#444444",
                fontWeight: "bold",
                border: "none",
                borderRadius: "50%",
              }}
              onClick={() => inputvideo.current.click()}
            >
              +
            </Button>
            <input
              type="file"
              ref={inputvideo}
              accept=".mp4,.mov,.wmv"
              className="d-none"
              onChange={(e) => handleVideo(e)}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center mt-3">
            <Button
              style={{
                backgroundColor: "#444444",
                width: "50%",
                border: "none",
              }}
              onClick={handleSubmit}
            >
              Upload
            </Button>
            <div style={{ color: "red" }}>{error}</div>
            <div style={{ color: "green" }}>{status}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
