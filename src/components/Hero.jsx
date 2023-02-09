import React from 'react'
import direction from '../assets/direction.svg'
import bg from '../assets/bg.png'
import map from '../assets/map.png'
import people from '../assets/people.png'
import beach from '../assets/beach.svg'
import beachtwo from '../assets/beach2.png'
import plane from '../assets/plane.svg'
import location from '../assets/Location.svg'
import train from '../assets/train.png'

const Hero = () => {
  return (
  <div className='hero'>
    <div className="page--hero__heading">
        <div className="visit__btn">
          <p>Visit</p>
          <img src={direction} alt='direction'></img>
        </div>
        <div className="hero__heading">The Exotic <span>Lakshadweep</span> Islands</div>
        <div className="discover__btn"><a href="">Discover</a></div>
      <div className="plane"></div>
      </div>
      <div className="hero--map">
        <img src={map} alt='map' className='map child'/>
        <img src={bg} alt='round' className='bg child'/>
        <img src={people} alt='people' className='people child'/>
      </div>
      <div className="container--one">
        <div className="image__container">
            <img src={beach} alt="beach"/>
        </div>
        <div className="container__title">Explore Labuan Bajo</div>
        <div className="location--one">
            <img src={location}/>
            <p>NTT,Indonesua</p>
        </div>
      </div>
      <div className="container--two">
        <div className="image__container--two">
            <img src={beachtwo} alt="beach"/>
        </div>
        <div className="container__title--two">Le Pirate Hotel</div>
        <div className="location--two">
            <img src={location} alt="location"/>
            <p>Flores, Indonesia</p>
        </div>
      </div>
      <div className="plane-name">
        <img src={plane} alt="plane"/>
        <p>Jakarta - Bali</p>
      </div>
      <div className="train">
        <img src={train} alt="train"/>
      </div>
      </div>
  )
}

export default Hero