import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Dropdown from "./components/Dropdown";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="heading">Weather Forecast</h1>
          </Col>
        </Row>
      </Container>

      <div className="container box">
        <Dropdown />
      </div>
      <div>
        <WeatherForecast />
      </div>
    </div>
  );
}

export default App;
