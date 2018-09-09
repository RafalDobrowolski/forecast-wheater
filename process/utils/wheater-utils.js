export class WeatherForecastUtil {
    mapForecastWheater (item) {
               
        let forecast = {
            date:item.dt_txt,
            tempMax: item.main.temp_max,
            tempMin: item.main.temp_min,
            wheaterType: item.weather[0].main,
            humidity: item.main.humidity
        };
        return forecast;
    }

    getAverageHumidity(forecast)  {
        return Math.round(
            forecast.reduce(( (acc, curr) => acc + curr.main.humidity ), 0) /
            forecast.length);
    }
}