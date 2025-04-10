import React from "react";



const Forecast = ({ forecastweather, location }) => {
    return (

        <div className="container mt-5">
            <h4 className="text-center text-light fw-bold">Forecast weather of {location.name},{location.region},{location.country}</h4>
            {/* accordian for forecast weather */}
            {forecastweather.forecastday.map((data, index) => {
                return (
                    <div className="accordion accordion-flush mt-3 "  id="accordionFlushExample">
                        <div className="accordion-item  " >
                            <h2 className="accordion-header  ">
                                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="false" aria-controls="flush-collapseOne">
                                    <div class="d-flex flex-rowalign-items-center mb-3">
                                        <div class="p-2 text-primary fw-bold">Day:{data.date}</div>
                                        <div class="p-2 "><img src={data.day.condition.icon}/></div>
                                        <div class="p-2 text-primary fw-bold">{data.day.condition.text}</div>
                                        <div class="p-2 text-primary fw-bold">max temp:{data.day.maxtemp_c}</div>
                                    </div>
                                </button>
                            </h2>
                            <div id={`${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    {data.hour.map((data)=>{
                                        return(
                                            <>
                                            <h6 className="text-primary fw-bold">{data.time} max temp: {data.temp_c}</h6>
                                            <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar progress-bar-striped" style={{width:`${data.temp_c}%`}}></div>
                                          </div></>

                                          
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                )
            })}

            
        </div>

    )
}
export default Forecast;
