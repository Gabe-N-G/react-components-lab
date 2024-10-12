import './WeatherForecast.css'

// day: 'Mon',
// img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
// imgAlt: 'sun icon',
// conditions: 'sunny',
// time: 'Morning',

const WeatherForecast = ({weather}) => {
    return (
        <div className="weather">
            <h2>{weather.day}</h2>
            <img src={weather.img} alt={weather.alt} />
            <p><span>conditions: </span>{weather.conditions}</p>
            <p><span>time: </span>{weather.time}</p>
        </div>
    )
}

export default WeatherForecast