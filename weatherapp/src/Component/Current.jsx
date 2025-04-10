import React from "react";




const Current = ({ currentweather, location }) => {
  return (
    <div className="container  mt-5">
      <h4 className="text-center text-light fw-bold">Current weather of {location.name},{location.region},{location.country}</h4>
      {/* row 1 weather details*/}
      <div className="row">
        {/* col 1 */}
        <div classNameName="col-3" style={{width: '18em'}} >
          <div className="card" >
            <img src={currentweather.condition.icon} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-primary fw-bold">{currentweather.condition.text}</h5>
            </div>
          </div>
        </div>
        {/* col 2 */}
        <div className="col-3"style={{width: '18em'} } >
          {/* <h4 classNameName="text-warning border pt-2 card title">Temp in c:{currentweather.temp_c}</h4> */}
          <div className="card" >
          <img src="https://static.vecteezy.com/system/resources/previews/007/878/371/non_2x/celsius-icon-style-free-vector.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-primary fw-bold">TEMP in C:{currentweather.temp_c}</h5>
            </div>
          </div>
        </div>
        {/* COL 3 */}
        <div className="col-3"style={{width: '18em'}} >
          <div className="card" >
            <img src="https://static.vecteezy.com/system/resources/previews/019/519/952/non_2x/fahrenheit-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg"/>
            <div className="card-body">
              <h5 className="card-title text-primary fw-bold">TEMP in F:{currentweather.temp_f}</h5>
            </div>
          </div>
        </div>
        <div className="col-3"style={{width: '18em'}} >
          <div className="card" >
            <img src="https://cdn-icons-png.flaticon.com/512/4148/4148460.png" alt="" />
            <div className="card-body">
              <h5 className="card-title text-primary fw-bold">Humidity:{currentweather.humidity}</h5>
            </div>
          </div>
        </div>

      </div>
      {/* row 2  wind details*/}
      <div className="row mt-2">
        {/* col 1 */}
        <div className="col-3"style={{width: '18em'}} >
          <div className="card" >
            <img src="https://img.freepik.com/premium-vector/wind-direction-icon-logo-vector-design-template_827767-3225.jpg" alt="" />
            <div className="card-body">
              <h5 className="card-title text-primary fw-bold">Wind direction:{currentweather.wind_dir}</h5>
            </div>
          </div>
        </div>
        {/* col 2 */}
        <div className="col-3"style={{width: '18em'}} >
          {/* <h4 classNameName="text-warning border pt-2 card title">Temp in c:{currentweather.temp_c}</h4> */}
          <div className="card" >
            <img src="https://cdn-icons-png.flaticon.com/512/54/54298.png" alt="" />
            <div className="card-body">
              <h5 className="card-title text-primary fw-bold">wind speed in MPH:{currentweather.wind_mph}</h5>
            </div>
          </div>
        </div>
        {/* COL 3 */}
        <div className="col-3 "style={{width: '18em'}} >
          <div className="card" >
            <img src="https://cdn-icons-png.flaticon.com/512/54/54298.png" alt="" />
            <div className="card-body ">
              
              <h5 className="card-title text-primary fw-bold">Wind speed in KPH:{currentweather.wind_kph}</h5>
            </div>
          </div>
        </div>
        <div className="col-3"style={{width: '18em'}} >
          <div className="card" >
            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/761/165/small_2x/rain-clouds-storm-vector.jpg" alt="" />
            <div className="card-body">
              <h5 className="card-title text-primary fw-bold">Precipitation:{currentweather.precip_mm}</h5>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Current;