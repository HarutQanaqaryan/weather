const API_KEY = `6a7c24bc3b75b3a53d16bcec8f105fec`;


const getData = (cityName: string, count: number): Promise<any> => {
   return fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric
              &cnt=${count}&appid=${API_KEY}`
      )
}

export default getData;