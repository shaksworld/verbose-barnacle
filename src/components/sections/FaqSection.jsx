import classNames from 'classnames';
import React, { useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';
import faq from '../../images/illustrations/faq.png';
import { Fade } from 'react-reveal';


const FaqItem = ({ open, title, children }) => {
  const [isOpen, setIsOpen] = useState(open ? true : false);

  const iconClass = classNames({
    'transition-all duration-300': true,
    'rotate-180': isOpen
  });

  const contentClass = classNames({
    'text-gray transition-all duration-300 overflow-hidden': true,
    'h-full': isOpen,
    'h-0': !isOpen
  });

  return (
    <div className='mb-3 border-b border-lightgray pb-3' >
      <div className='flex justify-between py-3 cursor-pointer hover:text-primary' onClick={() => setIsOpen(!isOpen)}>
        {title}
        <BsChevronUp className={iconClass} />
      </div>
      <div className={contentClass}>
        <p className="select-none">
          {children}
        </p>
      </div>
    </div>
  );
};

export default function FaqSection() {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2">
        <div className="mb-4">
          <Fade up duration={1000}>
            <img src={faq} alt="FAQ" />
          </Fade>
        </div>
        <div className="flex justify-center">
          <div className="">
            <span className="text-primary">SUPPORT</span>
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Frequently asked questions
            </h2>
            <div className="my-6">
              <FaqItem open={true} title="Why should I choose Discovery Bank?">
                We're industry pioneers, having been in the banking industry for many years. We've served millions of customers worldwide, offering a wide range of financial services and innovative solutions. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure transactions, and extensive feature set.
              </FaqItem>
              <FaqItem open={false} title="How secure is Discovery Bank?">
                We're industry pioneers, having been in the banking industry for many years. We've served millions of customers worldwide, offering a wide range of financial services and innovative solutions. Today, we're trusted by over 8 million customers around the world and have received praise for our top-notch security measures, user-friendly interface, and comprehensive features.
              </FaqItem>
              <FaqItem open={false} title="Do I need a large initial deposit to open an account with Discovery Bank?">
                We're industry pioneers, having been in the banking industry for many years. We offer various account options to suit your needs, and you don't necessarily need a large initial deposit to get started. We're committed to making banking accessible to everyone.
              </FaqItem>
              <FaqItem open={false} title="How do I open an account with Discovery Bank?">
                Opening an account with Discovery Bank is simple. Just visit our website or download our mobile app on iOS or Android. Follow the easy steps to set up your account, and you'll be ready to enjoy the benefits of banking with us.
              </FaqItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
