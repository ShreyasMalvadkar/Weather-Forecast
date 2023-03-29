import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { dataSelector } from "../selectors/weatherInfoSelector";

const WeatherForecast=()=>{

    const weatherData = useSelector(dataSelector);

    const degreeSymbol = "\u00b0";
  
    if (!weatherData) return <></>;
  
    const {
      Headline: { Text: headline },
      DailyForecasts: forecasts
    } = weatherData;
  
    return(<>
        <div className="container-fluid">
        <Container>
            <Row>
                <Col><h1 className="subheading">{headline}</h1></Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col>
        <ul>
        {forecasts &&
            forecasts.map((forecast, idx) => {
              const date = new Date(forecast.Date).toDateString();
              const iconPhrase = forecast.Day.IconPhrase;
              const minTemp = forecast.Temperature.Minimum;
              const maxTemp = forecast.Temperature.Maximum;
              const minTempStr = `${minTemp.Value} ${degreeSymbol}${minTemp.Unit}`;
              const maxTempStr = `${maxTemp.Value} ${degreeSymbol}${maxTemp.Unit}`;

              return (
                <li className="tempCards" key={idx} alignItems={"stretch"} >
                    <div className="card">
                        <div className="card-header">
                        <i>{date}</i>
                        <br/>
                        {iconPhrase}
                        </div>
                    <div className="card-body">
                    <blockquote className="blockquote">
                    <div> {minTempStr} / {maxTempStr}</div>
                    </blockquote>
                    </div>
                    </div>
               </li>
              );
            })}
        </ul>
        </Col>
            </Row>
        </Container>
        </div>
    </>)
}

export default WeatherForecast;