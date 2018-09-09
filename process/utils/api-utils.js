export class WeatherForecastApiUtil {
    getUrl (paramQuery, rows) {
     
        const query = `forecast?q=${ paramQuery }`;
        const apiKey = "appid=b6178dce4681752383be34c3ba4ab462";
        const url = `https://api.openweathermap.org/data/2.5/${ query }&${apiKey}&cnt=${rows}`;
    
        return url;
    }
  }