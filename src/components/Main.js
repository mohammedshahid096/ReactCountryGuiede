import React from "react";

function Main() {
  return (
    <div className="container">

      <div className="row justify-content-center p-2 " id="maincontainer">
        <div className="col-md-6">
          <center>
            <h1 style={{ textTransform  : "uppercase" }}>Country Guide  :</h1>
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
                //   onChange={finidingcity}
              />

              <button
                className="btn btn-danger w-25" style={{borderRadius  :"35px"}}
                type="button"
                //   onClick={searchfunction}
              >
                Search
              </button>
            </form>
          </nav>
          <div className="row mt-3">

            <div className="col mb-3">
              <center><img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png?20111003033457" className="w-50" 
              id="imageDiv" alt="" />
              {/* <br /> */}
              <h1>India</h1>
              </center>
            </div>
            <div className="w-100"></div>
            <div className="col" id="Details" >
              <h3>Capital  : </h3> <span>new Delhi</span>

              <br />
              <h3>Other Names  : </h3> <span>Bharat</span>

              <br />
              <h3>Cotinent  : </h3> <span>Asia</span>
              
              <br />
              <h3>Population  : </h3> <span>Asia</span>
              
              <br />
              <h3>Calling code  : </h3> <span>Asia</span>
              
              <br />
              <h3>Area  : </h3> <span>3.287 million km <sup>2</sup></span>
              

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
