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
      <Show when={weathers} callback={<h1>Loading...</h1>}>
        {console.log(weathers())}
        <For each={weathers()}>
          {(w) => (
            <div class="card">
              <div>{w.forecastDate}<br />{w.week}</div>
              <div>溫度<br />{w.forecastMintemp.value + '℃'}
                <br />~<br />{w.forecastMaxtemp.value + '℃'}
              </div>
              <div>濕度<br />{w.forecastMinrh.value + '℃'}
                <br />~<br />{w.forecastMaxrh.value + '℃'}
              </div>
              <div>{w.forecastWeather}</div>
              <img src={`https://www.hko.gov.hk/images/HKOWxIconOutline/pic${w.ForecastIcon}.png`} alt="" />
            </div>
          )
          }
        </For>
      </Show>
    </>
  )
}

export default Weather