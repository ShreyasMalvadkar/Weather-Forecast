import cityList from "../top-cities.json";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { changeCity } from "../actions/cityAction";
import { citySelector } from "../selectors/citySelector";
import { getWeatherData } from "../service/weatherAPI";
import { startWeatherLoader } from "../actions/weatherInfoActions";

const Dropdown=()=>{
    const dispatch = useDispatch();
    const selectedCity = useSelector(citySelector);

  const handleChange = e => {
    dispatch(changeCity(e.target.value));
    dispatch(startWeatherLoader());
    getWeatherData(e.target.value, dispatch);
  };

    return(<>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select City</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedCity}
                label="city"
                onChange={handleChange}
            >
               {cityList.map(obj => (
            <MenuItem key={obj.Key} value={obj.Key}>{`${obj.EnglishName}, ${obj.Country.EnglishName}`}</MenuItem>
          ))}
            </Select>
    </FormControl>
    </>)
}
export default Dropdown;