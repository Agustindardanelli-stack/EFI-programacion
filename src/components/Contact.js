import React, { useState } from "react";
import { useContext } from 'react'
import { LanguageContext } from '../context/Context'
import { langtranslate } from '../locales/chooseLang'

const FORM_ENDPOINT = "";
const ContactForm = () => {
  const { language } = useContext(LanguageContext);
  const textsLanguage = langtranslate(language,'contact')
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }
  return (
    <div
      className="h-screen flex flex-col 
      items-center justify-center"
    >
      <div className="mb-3 pt-0">
        <h3 className="text-center text-gray-400 text-s">{textsLanguage.text}</h3>
      </div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}        
      >
        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder={textsLanguage.name}
            name="name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder={textsLanguage.email}
            name="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder={textsLanguage.message}
            name="message"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            {textsLanguage.submit}
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
