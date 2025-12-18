import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit'; //cold
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'; //rain
import DeviceThermostatTwoToneIcon from '@mui/icons-material/DeviceThermostatTwoTone'; //hot

export default function InfoBox({ info }) {

    let weatheImg = "https://images.unsplash.com/photo-1735067457419-620aa35696dd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let hotImg = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let coldImg = "https://images.unsplash.com/photo-1680729962018-86ae6ba260e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rainImg = "https://images.unsplash.com/photo-1666549235014-6297464b02d8?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
        <div className='infoBox'>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 140 }}
                        image={info.humidity > 80 ? rainImg : info.temp > 15 ? hotImg : coldImg} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">

                        </Typography>
                        <Typography variant="body2" component={"span"}>
                            <h3>{info.city}{info.humidity > 80 ?<ThunderstormIcon /> : info.temp > 15 ? <DeviceThermostatTwoToneIcon /> : <AcUnitIcon />}</h3>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Temperature Max = {info.tempMax}</p>
                            <p>Temperature Min = {info.tempMin}</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>WindSpeed = {info.windSpeed}km/h </p>
                            <p>FeelLike = {info.feelLike}</p>
                            <p> presure = {info.pressure}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}