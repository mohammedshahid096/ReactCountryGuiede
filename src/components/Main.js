import React, { useState } from "react";

function Main() {
  const [country, setcountry] = useState("");
  const [searchedcountry, setsearchedcountry] = useState("in");

  const searchfunction = async () => {
    let url = `https://restcountries.com/v2/name/${country}?fullText=true`;
    const response = await fetch(url);
    const ApiData = await response.json();
    // console.log(ApiData["message"]);
    setsearchedcountry(ApiData[0]);
  };

  const searchiongcountry = (event) => {
    setcountry(event.target.value);
  };
  return (
    <div className="container">
      <div className="row justify-content-center p-2 " id="maincontainer">
        <div className="col-md-6">
          <center>
            <h1 style={{ textTransform: "uppercase" }}>Country Guide :</h1>
          </center>
        </div>
        <div className="w-100 m-3"></div>

        <div className="col-md-6" id="mainbox">
          <nav className="navbar">
            <form className="d-flex w-100" role="search">
              <input
                className="form-control  me-2"
                type="search"
                placeholder="Enter City name"
                aria-label="Search"
                onChange={searchiongcountry}
              />

              <button
                className="btn btn-danger w-25"
                style={{ borderRadius: "35px" }}
                type="button"
                onClick={searchfunction}
              >
                Search
              </button>
            </form>
          </nav>
          <div className="row mt-3">

            {!searchedcountry.name ? (
              <div>
                <center>
                  {!searchedcountry.message?<h3> Pls Enter The City</h3>:<h3>Pls check the country nameeee properly! </h3> }
                </center>
                </div>
                  
            ) : 
      
            (
              
              <>
                <div className="col mb-3">
                  <center>
                    <img
                      src= {searchedcountry.flag}
                      className="w-50"
                      id="imageDiv"
                      alt=""
                    />
                    {/* <br /> */}
                    <h1>{searchedcountry.name}</h1>
                  </center>
                </div>
                <div className="w-100"></div>

                <div className="col" id="Details">
                  <h3>Capital : </h3> <span>{searchedcountry.capital}</span>
                  <br />
                  <h3>Other Names : </h3> <span>{searchedcountry.altSpellings}</span>
                  <br />
                  <h3>Demonym : </h3> <span>{searchedcountry.demonym}</span>
                  <br />
                  <h3>Cotinent : </h3> <span>{searchedcountry.region}</span>
                  <br />
                  <h3>Population : </h3> <span>{searchedcountry.population}</span>
                  <br />
                  <h3>Calling code : </h3> <span>+{searchedcountry.callingCodes}</span>
                  <br />
                  <h3>Area : </h3>{" "}
                  <span>
                   {searchedcountry.area/1000000} million km <sup>2</sup>
                  </span>
                </div>
                <div className="w-100"></div>

                <div className="col" id="Details">
                  <hr />
                  <center><h3>Currencies</h3></center>
                  <h3>Currency : </h3> <span>{searchedcountry.currencies[0].code}</span>
                  <br />
                 
                  <h3>Name : </h3> <span>{searchedcountry.currencies[0].name}</span>
                  <br />
                 
                  <h3>Symbol : </h3> <span>{searchedcountry.currencies[0].symbol}</span>
                  <br />
                 
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
