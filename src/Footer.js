import React, { Fragment } from 'react'

const Footer = () => {

    //==================== Main_Return_function ======================//
    return (
        <Fragment>
            <div className='Zigglers_footer_blk'>
                <div className='Zigglers_footer-shape w-embed'>
                    <svg width="100%" viewBox="0 0 1577 4307" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#f84f39">
                            <animate attributeName="d" dur="30s" repeatCount="indefinite" values="M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z;
M0 300.446V2126H1577V504.101C1360.04 335.784 1108.8 171.677 918.5 72.2294C571.912 -108.886 269.554 81.8469 0 300.446Z;
M0 283.735V2056H1577V317.047C1369.34 129.452 1125.7 -19.1374 918.5 2.22934C525.4 42.7656 247.64 143.295 0 283.735Z;
M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z">
                            </animate>
                        </path>
                    </svg>
                </div>
                <div class="Zigglers-footer-title">
                    <p class="heading-medium g-text-align-center g-margin-b-medium"><span class="g-text-color-white">Apply </span>to&nbsp;join&nbsp;our private beta</p>
                    <p class="text-size-medium g-text-align-center g-font-weight-semibold">Available soon on all major devices.</p>
                </div>
                <div className='container-small'>
                    <div className="beta-form-block w-form">
                        <form
                            id="beta-form"
                            name="email-form"
                            data-name="Email Form"
                            redirect="https://form.typeform.com/to/oLQt0t7c"
                            data-redirect="https://form.typeform.com/to/oLQt0t7c"
                            action="https://superlist.us8.list-manage.com/subscribe/post?u=17f99aef615910508a9c9570e&amp;amp;id=f9c83b2913"
                            method="post"
                            className="beta-form"
                            aria-label="Email Form"
                        >
                            <label htmlFor="EMAIL-3" className="beta-form_label">
                                Your email
                            </label>
                            <input
                                type="email"
                                className="beta-form_field w-input"
                                autoComplete="off"
                                maxLength="256"
                                name="EMAIL"
                                data-name="EMAIL"
                                placeholder=""
                                data-w-id="8912e0d8-13fa-7635-fd54-54fc5e19c5b1"
                                data-lpignore="true"
                                id="EMAIL-3"
                                required
                            />
                            <input
                                type="submit"
                                id="form-button"
                                value=""
                                data-wait=""
                                data-w-id="8912e0d8-13fa-7635-fd54-54fc5e19c5b2"
                                className="beta-form_submit-button w-button"
                                style={{
                                    willChange: 'transform',
                                    transform:
                                        'translate3d(-5.8416px, 4.19936px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                    transformStyle: 'preserve-3d',
                                }}
                            />
                        </form>
                        <div
                            className="beta-form_success w-form-done"
                            tabIndex="-1"
                            role="region"
                            aria-label="Email Form success"
                        >
                            <div>We’ll be in touch!</div>
                        </div>
                        <div
                            className="w-form-fail"
                            tabIndex="-1"
                            role="region"
                            aria-label="Email Form failure"
                        >
                            <div>
                                Something went wrong while submitting the form. It appears you might
                                have an ad blocker preventing you from using this form. Please head
                                <a
                                    href="https://eepurl.com/hsAKu5"
                                    target="_blank"
                                    className="g-text-color-black"
                                >
                                    over here
                                </a>{' '}
                                to submit your contact details.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >


    )
}

export default Footer
