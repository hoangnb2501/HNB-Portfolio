import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';
import { images } from '../../constants';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:bahoang2501@gmail.com" className="p-text">
            bahoang2501@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +84 (867) 765 003" className="p-text">
            +84 (867) 765 003
          </a>
        </div>
        <div className="app__footer-card app__footer-card-social">
          <a
            href="https://github.com/hoanguyen2501"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hoang-nguyen-ba-nbh251"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://instagram.com/hnb.251?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
              cols="30"
              rows="10"
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </div>
      ) : (
        <dir>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </dir>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
