import React, { useRef } from 'react';
import { useState } from 'react';

import emailjs from "@emailjs/browser";
import Footer from '../component/Footer';
import Herosection from '../component/Herosection';
import Bottom from '../component/bottom';

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
    />
  </label>
);



const Contact = () => {
  const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setConfirmation("");

    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!form.name.trim()) {
      setNameError("Name is required.");
      return;
    }

    setLoading(true);

    emailjs

      .send(
        "service_r2i0by4",
        "template_mf5x3bh",
        {
          from_name: form.name,
          to_name: "Oluwatoyin Michael",
          from_email: form.email,
          to_email: "michaeloluwatoyin49@gmail.com",
          message: form.message,
        },
        "p-gXzzyvEhPaJ0XA-"
      )
      .then(
        () => {
          setLoading(false);
          setConfirmation("Thank you! I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        }
      )
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setConfirmation("Something went wrong. Please try again. :/");
      });
  };

  return (
    <>
    <Herosection/>
     <section className={`xl:mt-20 flex xl:flex-row  h-[100vh]  gap-3 overflow-hidden relative  bg-cover bg-center bg-[url('https://fundmystartup.vc/wp-content/uploads/2023/03/venture_05.jpg')]`}>
      <div className=" z-0 absolute inset-0 bg-black bg-opacity-70"></div>

        <div className='items-center absolute flex flex-col justify-center z-10 w-[50%] h-full'>
          {/* <p className={Styles.sectionSubText}>Get in touch</p> */}
        <h3 className='text-2xl font-bold mt-20 ml-2'>Contact Form</h3>
        

        <form ref={formRef} onSubmit={handleSubmit} className="mt-10 bg-blend-overlay ml-20 flex flex-col lg:gap-8 gap-2 mb-4">
          <p className='text-base '>At icma, we believe that every interaction is an opportunity to inspire change and cultivate growth within our community. Whether you’re a visionary entrepreneur, investor, or a curious explorer, we invite you to reach out and share your thoughts, ideas, or questions.</p>
          <InputField
            label="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Insert Your name here..."
            type="text"
          />
          {nameError && <span className="text-red-500">{nameError}</span>}

          <InputField
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email address?"
            type="email"
          />
          {emailError && <span className="text-red-500">{emailError}</span>}

          <InputField
            label="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What you want to say...?"
            type="text"
          />

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          {confirmation && <p className="text-green-500">{confirmation}</p>}
        </form>
        </div>
        
      
      
        <div className="absolute hidden  z-10 w-1/2 h-full lg:flex lg:flex-col space-y-2 justify-center items-center lg:right-10   border-white lg:gap-10 gap-5  ">
          <div className="space-y-1 text-white flex flex-col items-center ">
            {" "}
            <h1 className=" lg:text-2xl font-bold   ">
            Our Office
          </h1>
          <p>ICMA Fundación</p>
          <p>NIF: N0305013E</p>
          <p>Avda. Diagonal 449, 4º, </p>
          <p>08036 Barcelona, Spain</p>
          
        </div>
        <div className="flex text-white flex-col items-center ">
            {" "}
            <h1 className="font-semibold lg:text-2xl">Contact Us</h1>
            <a className="  underline" href="#">
              info@icma.fund
            </a>
            <a className="  underline" href="#">
              0034 6242 55 208
            </a>
          </div>
          </div>
        
      
      </section>
      <section className="bg-[#22272a] text-white lg:hidden flex flex-col  justify-center w-full">
      <Footer/>
      </section>
      <Bottom/>
    </>
     
  )
}

export default Contact;