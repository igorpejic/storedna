import React from 'react'
import ButtonForm from '../ButtonForm'
import Button from '../Button'

const Contact = () =>
<div className="article article--contact">
  <div className="article__intro">
    <div className="d-flex flex-column flex-sm-row justify-content-between">
      <div>
        <h3 className="mb-3 pt-0">Global HQ</h3>
        <div>Singel 542</div>
        <div>Amsterdam, 1017AZ</div>
        <div>The Netherlands</div>
        <br/>
        <div>Monolith International BV</div>
      </div>
      <br className="d-sm-none" />
      <br className="d-sm-none" />
      <div className="ml-sm-6">
        <h3 className="mb-3 pt-0">USA Office</h3>
        <div>68 5th Ave</div>
        <div>New York, NY 10011</div>
        <div>USA</div>
        <br/>
        <div>Monolith Retail Solutions Inc.</div>
      </div>
    </div>
    <Button
      classAdditions="mt-4 btn-unstyled px-4 bg-brand"
      label="Send email"
      href="mailto:grow@storedna.co" />
  </div>

  <div className="article__body">
    <h1 className="t-center">Reason for inquiry?</h1>
    <div className="bb-grey" />

    <div className="d-flex flex-column t-center">
      <div className="t-center mb-3">
        <h2 className="mb-3 pt-0">Request a Demo</h2>
        <p>Request a demo for ActionBoard, and see how leading retailers are using it to improve their fleet performance.</p>
        <p>(expected response time: same business day)</p>
          <ButtonForm
            classAdditions="m-2"
            label="Request a Demo"
            successLabel="Request sent"
            btnColor="black"
            kind="ask-for-demo-contact"
            height={ 40 } />
      </div>
      <div className="bb-grey" />

      <div className="t-center mb-3">
        <h2 className="mb-3 pt-0">Sales Inquiry</h2>
        <p>Reach out to our global sales teams for immediate assistance with all sales related inquiries.</p>
        <p>(expected response time: same business day)</p>
        <div className="contact-buttons d-flex flex-column flex-sm-row justify-content-center align-items-center">
          <Button
            classAdditions="m-2"
            btnColor="black"
            label="Contact USA"
            href="mailto:scott@storedna.co" />
          <Button
            classAdditions="m-2"
            btnColor="black"
            label="Contact EU"
            href="mailto:martin@storedna.co" />
          <Button
            classAdditions="m-2"
            btnColor="black"
            label="Contact MENA"
            href="mailto:uros@storedna.co" />
        </div>
      </div>
      <div className="bb-grey" />

      <div className="t-center mb-3">
        <h2 className="mb-3 pt-0">Customer Support</h2>
        <p>Get in touch with our customer support for assistance with your ActionBoard implementation and usage.</p>
        <p>(expected response time: within minutes during CET working hours)</p>

        <Button
          btnColor="black"
          label="Contact Customer Support"
          classAdditions="m-2 drift-open-chat"
          onClick={(e) => {e && e.preventDefault}} // eslint-disable-line no-unused-expressions
        />
      </div>
    </div>
  </div>
</div>

export default Contact
