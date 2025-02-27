// - Erstelle eine Function, die aus dem vorgegeben weather Objekt (siehe Code-Snippet) die Rekordtemperatur (niedrigste und höchste) des Jahres anzeigt.
// - **Bitte halte dich an den Typescript-Standard.**
// - Um diese Aufgabe zu erledigen, verwende ggf.:
//     - map()
//     - spread operator
//     - Math.min()
//     - Math.max()


type WeatherData = {
    date: string;
    temperature: number;
    temperature_min: number;
    temperature_max: number;
    precipitation: number;
    snowfall: number | null;
    snowdepth: number;
    winddirection: number | null;
    windspeed: number;
    peakgust: number;
    sunshine: number;
    pressure: number;
};
  
type Weather = { 
    meta: { source: string }; 
    data: WeatherData[] 
}

const weather: Weather = {
    meta: {
      source: 'National Oceanic and Atmospheric Administration, Deutscher Wetterdienst'
    },
    data: [
      {
        date: '2019-05-25',
        temperature: 13.9,
        temperature_min: 6.5,
        temperature_max: 19.9,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: 275,
        windspeed: 6.9,
        peakgust: 26,
        sunshine: 465,
        pressure: 1017.2
      },
      {
        date: '2019-05-26',
        temperature: 16.1,
        temperature_min: 8.9,
        temperature_max: 20.8,
        precipitation: 1.3,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 15,
        peakgust: 38.9,
        sunshine: 167,
        pressure: 1013.6
      },
      {
        date: '2019-05-27',
        temperature: 15.8,
        temperature_min: 8.9,
        temperature_max: 20.2,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: 263,
        windspeed: 13.1,
        peakgust: 35.3,
        sunshine: 281,
        pressure: 1009.1
      },
      {
        date: '2019-05-28',
        temperature: 12.3,
        temperature_min: 8.7,
        temperature_max: 16.1,
        precipitation: 3.3,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 9.8,
        peakgust: 48.2,
        sunshine: 98,
        pressure: 1008.8
      },
      {
        date: '2019-05-29',
        temperature: 13.8,
        temperature_min: 3.7,
        temperature_max: 19.9,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 8.4,
        peakgust: 29.2,
        sunshine: 879,
        pressure: 1020.2
      },
      {
        date: '2019-05-30',
        temperature: 16.5,
        temperature_min: 12.3,
        temperature_max: 20.9,
        precipitation: 0.2,
        snowfall: null,
        snowdepth: 0,
        winddirection: 196,
        windspeed: 16.4,
        peakgust: 38.2,
        sunshine: 69,
        pressure: 1022.3
      },
      {
        date: '2019-05-31',
        temperature: 18.6,
        temperature_min: 11.5,
        temperature_max: 22.9,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 14.2,
        peakgust: 43.9,
        sunshine: 681,
        pressure: 1024.1
      },
      {
        date: '2019-06-01',
        temperature: 19.8,
        temperature_min: 10.4,
        temperature_max: 27.7,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 7.9,
        peakgust: 25.2,
        sunshine: 796,
        pressure: 1021.3
      },
      {
        date: '2019-06-02',
        temperature: 24.4,
        temperature_min: 14.9,
        temperature_max: 31.8,
        precipitation: 10.1,
        snowfall: null,
        snowdepth: 0,
        winddirection: 169,
        windspeed: 17.3,
        peakgust: 46.4,
        sunshine: 883,
        pressure: 1013.8
      },
      {
        date: '2019-06-03',
        temperature: 19.7,
        temperature_min: 15.8,
        temperature_max: 23.3,
        precipitation: 0.5,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 10.8,
        peakgust: 46.8,
        sunshine: 136,
        pressure: 1012.6
      },
      {
        date: '2019-06-04',
        temperature: 22,
        temperature_min: 13.4,
        temperature_max: 28.4,
        precipitation: 0.3,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 11.1,
        peakgust: 50.8,
        sunshine: 498,
        pressure: 1009.6
      },
      {
        date: '2019-06-05',
        temperature: 22.2,
        temperature_min: 15.8,
        temperature_max: 26.9,
        precipitation: 10.5,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 10.8,
        peakgust: 69.8,
        sunshine: 576,
        pressure: 1006
      },
      {
        date: '2019-06-06',
        temperature: 15.3,
        temperature_min: 9.9,
        temperature_max: 19.5,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: 226,
        windspeed: 15.1,
        peakgust: 59.8,
        sunshine: 304,
        pressure: 1010.9
      },
      {
        date: '2019-06-07',
        temperature: 16.6,
        temperature_min: 9.1,
        temperature_max: 25.7,
        precipitation: 2.5,
        snowfall: null,
        snowdepth: 0,
        winddirection: 145,
        windspeed: 19.9,
        peakgust: 61.2,
        sunshine: 602,
        pressure: 1010.5
      },
      {
        date: '2019-06-08',
        temperature: 15.4,
        temperature_min: 12.2,
        temperature_max: 19.6,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: 207,
        windspeed: 31.6,
        peakgust: 81,
        sunshine: 183,
        pressure: 1018.2
      },
      {
        date: '2019-06-09',
        temperature: 17.1,
        temperature_min: 9.5,
        temperature_max: 22.5,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 10.7,
        peakgust: 20.9,
        sunshine: 481,
        pressure: 1021.6
      },
      {
        date: '2019-06-10',
        temperature: 18.4,
        temperature_min: 13.5,
        temperature_max: 24.6,
        precipitation: 0.6,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 7.3,
        peakgust: 34.6,
        sunshine: 315,
        pressure: 1012
      },
      {
        date: '2019-06-11',
        temperature: 17.1,
        temperature_min: 13.1,
        temperature_max: 21.9,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 10.7,
        peakgust: 27.7,
        sunshine: 463,
        pressure: 1011.4
      },
      {
        date: '2019-06-12',
        temperature: 17.3,
        temperature_min: 13.1,
        temperature_max: 21.6,
        precipitation: 7,
        snowfall: null,
        snowdepth: 0,
        winddirection: 162,
        windspeed: 15.9,
        peakgust: 50.8,
        sunshine: 458,
        pressure: 1009.9
      },
      {
        date: '2019-06-13',
        temperature: 17.1,
        temperature_min: 12.7,
        temperature_max: 21.9,
        precipitation: 0.7,
        snowfall: null,
        snowdepth: 0,
        winddirection: 192,
        windspeed: 19.9,
        peakgust: 50,
        sunshine: 490,
        pressure: 1012
      },
      {
        date: '2019-06-14',
        temperature: 20,
        temperature_min: 10.4,
        temperature_max: 26.4,
        precipitation: 1.6,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 8.4,
        peakgust: 22.3,
        sunshine: 701,
        pressure: 1013.3
      },
      {
        date: '2019-06-15',
        temperature: 19.1,
        temperature_min: 15.2,
        temperature_max: 23.2,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 11.7,
        peakgust: 38.9,
        sunshine: 279,
        pressure: 1012.5
      },
      {
        date: '2019-06-16',
        temperature: 18.8,
        temperature_min: 12.5,
        temperature_max: 23.2,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 13.1,
        peakgust: 45.7,
        sunshine: 753,
        pressure: 1019.2
      },
      {
        date: '2019-06-17',
        temperature: 20.6,
        temperature_min: 11,
        temperature_max: 27.3,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 8.1,
        peakgust: 29.2,
        sunshine: 706,
        pressure: 1019.2
      },
      {
        date: '2019-06-18',
        temperature: 22.7,
        temperature_min: 12.7,
        temperature_max: 29.7,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 6.8,
        peakgust: 33.5,
        sunshine: 627,
        pressure: 1013.6
      },
      {
        date: '2019-06-19',
        temperature: 22.9,
        temperature_min: 16.5,
        temperature_max: 29.6,
        precipitation: 13.7,
        snowfall: null,
        snowdepth: 0,
        winddirection: 183,
        windspeed: 15.7,
        peakgust: 74.2,
        sunshine: 539,
        pressure: 1007.8
      },
      {
        date: '2019-06-20',
        temperature: 17.9,
        temperature_min: 13.5,
        temperature_max: 21.9,
        precipitation: 1.3,
        snowfall: null,
        snowdepth: 0,
        winddirection: 227,
        windspeed: 13.1,
        peakgust: 37.1,
        sunshine: 156,
        pressure: 1011.7
      },
      {
        date: '2019-06-21',
        temperature: 16.9,
        temperature_min: 11.4,
        temperature_max: 22.5,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 10.3,
        peakgust: 30.2,
        sunshine: 643,
        pressure: 1018.5
      },
      {
        date: '2019-06-22',
        temperature: 19.8,
        temperature_min: 10.7,
        temperature_max: 26.5,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 13.6,
        peakgust: 45,
        sunshine: 778,
        pressure: 1020.7
      },
      {
        date: '2019-06-23',
        temperature: 24.1,
        temperature_min: 14.4,
        temperature_max: 31.4,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 11.8,
        peakgust: 42.5,
        sunshine: 736,
        pressure: 1017.9
      },
      {
        date: '2019-06-24',
        temperature: 26.9,
        temperature_min: 19,
        temperature_max: 32.9,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: 120,
        windspeed: 14.7,
        peakgust: 40,
        sunshine: 779,
        pressure: 1018
      }
    ]
};



const minAndMaxTemaprature = ({data}: Weather)=>{
    const minWeather = Math.min(...data.map(entry => entry.temperature_min));
    const maxWeather = Math.max(...data.map(entry => entry.temperature_max));

    return {
        min: minWeather, 
        max: maxWeather
    }
    // console.log(`Die niedriste Temaparatur was ${minWeather}°C und die höchste Temperatur war ${maxWeather}°C`)
    

}

// ! Destrukturierung
// - liefert ein Objekt zurück, das mindestens die Eigenschaften min und max enthält.
// ? der Originalname der Eigenschaft (min, max) wird auf neue Namen (minWeather, maxWeather) gemappt.
// ? Das Destrukturieren greift auf das zurückgegebene Objekt der Funktion zu
// * Die Funktion minAndMaxTemperature liefert nur das Objekt { min, max }. Das Mapping von min → minWeather und max → maxWeather passiert durch das Destrukturieren und hat nichts mit der Funktion selbst zu tun.
// * Die Funktion verwendet den Parameter weather(Array). Innerhalb der Funktion wird dieser Parameter genutzt, um das min und max zu berechnen. Die Destrukturierung findet erst nach der Rückgabe der Funktion statt.
const {min: minWeather, max: maxWeather} = minAndMaxTemaprature(weather)

console.log(`Die niedriste Temaparatur was ${minWeather}°C und die höchste Temperatur war ${maxWeather}°C`)
console.log(minWeather, maxWeather);