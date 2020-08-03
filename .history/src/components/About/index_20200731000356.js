// Dependencies
import React, { Component } from 'react';
// Internals
import './index.css';

class About extends Component {
  render() {
    return (
      <div id='about-main'>
        <div className='jumbotron'>
          <div className='jumbotron-inner'>
            <div className='top-box'>
              <div className='content-box'>
                <h1>About Next Dealership</h1>
                <p>
                  Next dealership is a company that sells brand new cars. <br />{' '}
                  Our mission is to make customers happy and satisfied.
                </p>
              </div>
            </div>
          </div>
          <div className='img-layer-container'>
            <div className='team-image' id='team-image'>
              <img src='https://apimatic.io/img/theme/aboutUs/images-1.png' />
            </div>
            <div className='circles-container'>
              <div className='img-1'>
                <img src='https://apimatic.io/img/theme/aboutUs/Circles-1-1.svg' />
              </div>
              <div className='img-2'>
                <img src='https://apimatic.io/img/theme/aboutUs/Circles-2-1.svg' />
              </div>
            </div>
          </div>
        </div>
        <div className='story-container'>
          <div className='need-for-dx-container'>
            <h3 className='text-center'>About Next Dealership</h3>
            <p>
              A company that specialize of Porshe,Toyota ,Benz and Toyota.
              Founded by Takudzwa Vengai in 2004. We have served thousands of
              happy customers.Porsche is the most successful manufacturer of
              exclusive sports cars and has an outstanding reputation. This
              success is based on the desirability of the vehicles, but equally
              importantly, due to its unique corporate culture that is shaped by
              integrity and compliance. And it should stay that way. All board
              members, members of the management bodies, managers and employees
              make their own contributions every day according to the motto:
              Sporty and fair - that's typical Porsche.
            </p>
            <div className='img-container'>
              <img
                src='https://media3.giphy.com/media/l0MYKAE0BbuPKEPNm/giphy.gif'
                alt='apimatic developer experience process'
                className='img-responsive'
              />
            </div>
          </div>
          <div className='container-divider' />
          <div className='our-tech-container'>
            <h3 className='text-center'>VW South Africa</h3>
            <p>
              Volkswagen was established in 1937 by the German Labour Front
              (Deutsche Arbeitsfront) in Berlin.[6] In the early 1930s, cars
              were a luxury – most Germans could afford nothing more elaborate
              than a motorcycle. Only one German out of 50 owned a car. Seeking
              a potential new market, some car makers began independent
              "people's car" projects – the Mercedes 170H, Adler AutoBahn, Steyr
              55, and Hanomag 1.3L, among others.
            </p>
            <div className='img-container'>
              <img
                src='https://thumbs.gfycat.com/MealyPlumpAmazontreeboa-size_restricted.gif'
                alt='apimatic code generation engine'
                className='img-responsive'
              />
            </div>
          </div>
          <div className='container-divider' />
          <div className='origin-story-container'>
            <h3 className='text-center'>Origin Story</h3>
            <p>
              While doing research work for their PhDs from the University of
              Auckland in 2014, our founders came across one of the API
              industry's pain points: SDKs. They realized that API providers who
              spent hundreds of thousands of dollars every year on improving
              developer experience, by providing SDKs and user-friendly
              documentation were able to reach a wider developer audience for
              their APIs compared to API providers who weren't able to do so.
            </p>
            <p>
              It was so clear that even though writing SDKs and documentation
              was a difficult and expensive task, it followed repeatable
              patterns which could be defined as logic blocks in a code
              generation engine. So, as a research project, they started working
              on a code generation engine which dynamically generated SDKs using
              API description as input.
            </p>
            <p>
              After a rigorous journey, this research project was selected as a
              candidate for commercialization by Return on Science (a NZ
              national research commercialization program focused on bringing
              new academic research to market) and the concept was transformed
              into a product i.e. APIMatic.
            </p>
          </div>
          <div className='container-divider' />
          <div className='today-container'>
            <h3 className='text-center'>Flash Forward Today</h3>
            <p>
              APIMatic has come a long way since its inception 3 years ago.
              Having started with only generating SDKs, APIMatic now provides
              solutions in other areas of developer experience as well.
              Presently, APIMatic is used by numerous organizations around the
              world to:
            </p>
            <ul>
              <li>Create and store definitions of their APIs</li>
              <li>Generate SDKs for their APIs for 10 platforms</li>
              <li>Keep these SDKs in sync with API updates</li>
              <li>
                Convert API descriptions into multiple formats (Swagger, API
                Blueprint, RAML etc.)
              </li>
              <li>Generate beautiful documentation for their APIs and SDKs</li>
              <li>Generate complete Developer Experience API Portals</li>
            </ul>
          </div>
          <div className='container-divider' />
        </div>
      </div>
    );
  }
}

export default About;
