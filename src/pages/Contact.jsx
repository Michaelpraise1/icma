import React, { useRef } from 'react';
import { useState } from 'react';
import { Styles } from '../Styles';
import emailjs from "@emailjs/browser";
import Footer from '../component/Footer';
import Herosection from '../component/Herosection';

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
     <div className={`xl:mt-20 flex xl:flex-row  h-[90vh] flex-col-reverse gap-10 overflow-hidden relative  bg-cover bg-center bg-[url('https://fundmystartup.vc/wp-content/uploads/2023/03/venture_05.jpg')]`}>
      <div className=" z-0 absolute inset-0 bg-black bg-opacity-70"></div>

        <div className='items-center absolute flex flex-col justify-center z-10 w-[50%] h-full'>
          {/* <p className={Styles.sectionSubText}>Get in touch</p> */}
        <h3 className='text-2xl font-bold mt-10 ml-2'>Contact Me</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-10 bg-blend-overlay flex flex-col gap-8">
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
        
      {/* <div className=' h-fit border-1 rounded-3' >
        <img className='w-full h-auto mt-60' src='https://fundmystartup.vc/wp-content/uploads/2023/03/venture_05.jpg'/>

      </div> */}
      
      
      </div>
      <Footer/>
    </>
     
  )
}

export default Contact;