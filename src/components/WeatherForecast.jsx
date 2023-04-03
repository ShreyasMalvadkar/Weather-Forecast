import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { dataSelector, hasErrorsSelector } from "../selectors/weatherInfoSelector";
import Card from "./Card";

const WeatherForecast=()=>{

    const weatherData = useSelector(dataSelector);
    const hasErrors= useSelector(hasErrorsSelector);
    const degreeSymbol = "\u00b0";
  
    if (!weatherData || hasErrors) return <></>;
  
    const {
      Headline: { Text: headline },
      DailyForecasts: forecasts
    } = weatherData;
  
    return(<>
        <div className="container-fluid">
        <Container>
            <Row>
                <Col><h1 className="subheading border">{headline}</h1></Col>
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
                var obj={date,iconPhrase,minTempStr,maxTempStr};
              return (
                <li className="tempCards" key={idx} alignItems={"stretch"} >
                    <Card date={date} iconPhrase={iconPhrase} minTempStr={minTempStr} maxTempStr={maxTempStr}/>
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