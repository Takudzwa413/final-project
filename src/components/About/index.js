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
              <img
                src='https://apimatic.io/img/theme/aboutUs/images-1.png'
                alt='take'
              />
            </div>
            <div className='circles-container'>
              <div className='img-1'>
                <img
                  src='https://apimatic.io/img/theme/aboutUs/Circles-1-1.svg'
                  alt='take'
                />
              </div>
              <div className='img-2'>
                <img
                  src='https://apimatic.io/img/theme/aboutUs/Circles-2-1.svg'
                  alt='take'
                />
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
        </div>
      </div>
    );
  }
}

export default About;
