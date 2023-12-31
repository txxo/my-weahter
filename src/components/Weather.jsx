import { For, Show, createResource } from "solid-js"
const get_weather = async () => {
  const response = await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc')
  const data = await response.json()
  return data.weatherForecast
}

function Weather() {
  const [weathers] = createResource(get_weather)





  return (
    <>
      <h3>香港九天天氣預報</h3>
      <Show when={weathers} callback={<h1>Loading...</h1>}>
        {console.log(weathers())}
        <For each={weathers()}>
          {(w) => (
            <div class="card">
              <div>{w.forecastDate}</div>
              <div>{w.week}</div>
              <div>{w.forecastMintemp.value + '℃'}</div>
              <div>{w.forecastMaxtemp.value + '℃'}</div>
              <div>{w.forecastWeather}</div>
              <img src={`https://www.hko.gov.hk/images/HKOWxIconOutline/pic${w.ForecastIcon}.png`} />

            </div>
          )
          }
        </For>

      </Show>




    </>
  )
}

export default Weather