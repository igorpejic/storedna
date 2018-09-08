import React from 'react'
import ButtonForm from './ButtonForm'
import Button from './Button'

const Contact = () =>
<div>
  <div className="d-flex flex-column flex-sm-row t-white my-4">
    <div className="bg-brand-dark mb-3 mr-sm-3 p-3 p-md-4">
      <h3 className="p-0">Global HQ</h3>
      <div>Singel 542</div>
      <div>Amsterdam, 1017AZ</div>
      <div>The Netherlands</div>
      <br/>
      <div>Monolith International BV</div>
      <div>grow@storedna.co</div>
      <div>+31 6 4697 6484</div>
      <div></div>
    </div>
    <div className="bg-brand-dark mb-3 p-3 p-md-4">
      <h3 className="p-0">USA Office</h3>
      <div>68 5th Ave</div>
      <div>New York, NY 10011</div>
      <div>USA</div>
      <br/>
      <div>Monolith Retail Solutions Inc.</div>
      <div>grow@storedna.co</div>
    </div>
  </div>
  <h2>Reason for inquiry?</h2>
  <div className="d-flex flex-column t-center">
    <div className="t-center bg-white mb-3 p-3">
      <h3 className="mb-3 pt-0">Request a Demo</h3>
      <p>Request a demo for ActionBoard, and see how leading retailers are using it to improve their fleet performance.</p>
      <p className="expected-response-time">(expected response time: same business day)</p>
        <ButtonForm
          label="Request a Demo"
          successLabel="Request sent"
          btnColor="black"
          kind="ask-for-demo-contact"
          height={ 40 } />
    </div>
    <div className="t-center bg-white mb-3 p-3">
      <h3 className="mb-3 pt-0">Sales Inquiry</h3>
      <p>Reach out to our global sales teams for immediate assistance with all sales related inquiries.</p>
      <p className="expected-response-time">(expected response time: same business day)</p>
      <div className="d-flex flex-column flex-sm-row justify-content-center">
        <Button
          classAdditions="my-3 my-sm-0 mx-sm-3"
          btnColor="black"
          label="Contact USA"
          href="mailto:scott@storedna.co" />
        <Button
          classAdditions="my-3 my-sm-0 mx-sm-3"
          btnColor="black"
          label="Contact EU"
          href="mailto:martin@storedna.co" />
        <Button
          classAdditions="my-3 my-sm-0 mx-sm-3"
          btnColor="black"
          label="Contact MENA"
          href="mailto:uros@storedna.co" />
      </div>
    </div>
    <div className="t-center bg-white mb-3 p-3">
      <h3 className="mb-3 pt-0">Customer Support</h3>
      <p>Get in touch with our customer support for assistance with your ActionBoard implementation and usage.</p>
      <p className="expected-response-time">(expected response time: within minutes during CET working hours)</p>

      <Button
        btnColor="black"
        label="Contact Customer Support"
        classAdditions="drift-open-chat"
        onClick={(e) => {e && e.preventDefault}}
      />
    </div>
  </div>
</div>

export default Contact
