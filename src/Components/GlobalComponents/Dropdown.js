import { Dropdown } from "react-bootstrap";

export default function Dropdownbox() {
  return (
    <div>
      <Dropdown>
        <div className="r-flex justify-content-center mt-2">
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Videos number
          </Dropdown.Toggle>
        </div>

        <Dropdown.Menu>
          <Dropdown.Item>10</Dropdown.Item>
          <Dropdown.Item>25</Dropdown.Item>
          <Dropdown.Item>50</Dropdown.Item>
          <Dropdown.Item>100</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
