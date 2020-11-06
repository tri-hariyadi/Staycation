import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';
import formatNumber from 'utils/formatNumber';

import ImageHero from 'assets/images/img-hero.jpg';
import ImageHero_ from 'assets/images/img-hero-frame.jpg';
import IcCities from 'assets/images/icons/ic_cities.svg';
import IcTraveler from 'assets/images/icons/ic_traveler.svg';
import IcTreasure from 'assets/images/icons/ic_treasure.svg';

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth"
    })
  }

  return (
    <Fade bottom duration={1100}>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pr-5">
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
          </h1>
            <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%" }} >
              We provide what you need to enjoy your
              holiday with family. Time to make another
              memorable moments.
            </p>
            <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked} >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: 80 }} >
              <div className="col-auto" style={{ marginRight: 35 }} >
                <img width="36" height="36" src={IcTraveler} alt={`${props.data.travelers} Travelers`} />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)} <span className="text-gray-500 font-weight-light">Travelers</span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }} >
                <img width="36" height="36" src={IcTreasure} alt={`${props.data.treasures} Travelers`} />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)} <span className="text-gray-500 font-weight-light">Treasures</span>
                </h6>
              </div>
              <div className="col-auto">
                <img width="36" height="36" src={IcCities} alt={`${props.data.cities} Cities`} />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)} <span className="text-gray-500 font-weight-light">Cities</span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pl-5">
            <div style={{ width: 520, height: 410 }} >
              <img src={ImageHero} alt="Room With Couches" className="img-fluid position-absolute" style={{ margin: '-30px 0 0 -30px', zIndex: 1 }} />
              <img src={ImageHero_} alt="Room With Couches Frame" className="img-fluid position-absolute" style={{ margin: '0 -15px -15px 0' }} />
            </div>
          </div>

        </div>
      </section>
    </Fade>
  )
}
