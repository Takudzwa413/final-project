import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  render() {
    const { status } = this.state;

    return (
      <section
        className='paralax-mf footer-paralax bg-image sect-mt4 route'
        style={{ padding: 0 }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='contact-mf'>
                <div id='contact' className='box-shadow-full'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='title-box-2'>
                        <h5 className='title-left'>Send Us A Message</h5>
                      </div>
                      <div>
                        <form
                          onSubmit={this.submitForm}
                          action='https://formspree.io/myynnjqn'
                          method='POST'
                          className='contactForm'
                        >
                          <div className='row'>
                            <div className='col-md-12 mb-3'>
                              <div className='form-group'>
                                <input
                                  type='text'
                                  name='name'
                                  className='form-control'
                                  id='name'
                                  placeholder='Your Name'
                                  data-rule='minlen:4'
                                  data-msg='Please enter at least 4 chars'
                                  required
                                />
                                <div className='validation'></div>
                              </div>
                            </div>
                            <div className='col-md-12 mb-3'>
                              <div className='form-group'>
                                <input
                                  type='email'
                                  className='form-control'
                                  name='email'
                                  id='email'
                                  placeholder='Your Email'
                                  data-rule='email'
                                  data-msg='Please enter a valid email'
                                  required
                                />
                                <div className='validation'></div>
                              </div>
                            </div>
                            <div className='col-md-12 mb-3'>
                              <div className='form-group'>
                                <textarea
                                  className='form-control'
                                  name='message'
                                  rows='5'
                                  data-rule='required'
                                  data-msg='Please write something for us'
                                  placeholder='Message'
                                  required
                                ></textarea>
                                <div className='validation'></div>
                              </div>
                            </div>
                            <div className='col-md-12'>
                              {status === 'SUCCESS' ? (
                                <p className='submit'>
                                  Your message has been sent. Reload to submit
                                  again. Thank you!
                                </p>
                              ) : (
                                <button
                                  type='submit'
                                  className='button button-a button-big button-rouded'
                                >
                                  Send Message
                                </button>
                              )}
                              {status === 'ERROR' && (
                                <p className='submit'>
                                  Ooops! There was an error.
                                </p>
                              )}
                            </div>
                            <div></div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='title-box-2 pt-4 pt-md-0'>
                        <h5 className='title-left'>Let's get in Touch</h5>
                      </div>
                      <div className='more-info'>
                        <p className='lead'>
                          Hi we are Next Dealership company for any quiries
                          Please contact us .
                          <br />
                          Fill in the form and We will get back to you . Thanks!
                        </p>
                        <ul class='list-ico'>
                          <li>
                            <span class='ion-ios-location'></span>48 van der
                            bijl belmont park,kraaifontein Capetown
                          </li>
                          <li>
                            <span class='ion-ios-telephone'></span>
                            0670018776
                          </li>
                          <li>
                            <span class='ion-email'></span>
                            tvengai75@gmail.com
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}

export default Contact;
