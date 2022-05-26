import React, { useState, useEffect, useRef } from "react";
import "./ContactMe.css";
import Swal from 'sweetalert2';
import emailjs from "@emailjs/browser";
import ContactMeData from "./ContactMeData";

export default function ContactMe() {
  const form = useRef();
  const initialValues = { fullname: "", email: "", subject: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ing, setIng] = useState("");

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  useEffect(() => {
    window.addEventListener('beforeunload', alertUser)
    window.addEventListener('unload', handleTabClosing)
    return () => {
        window.removeEventListener('beforeunload', alertUser)
        window.removeEventListener('unload', handleTabClosing)
    }
})
    const handleTabClosing = () => {
      window.close()
    }

    const alertUser = (event) => {
      if(initialValues !== undefined){
        event.preventDefault()
        event.returnValue = ''
      }   
    }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit ? sendEmail() : "") {
    }
  }, [formErrors]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if(e.target !== ""){
      setIsSubmit(false)
      setFormErrors(e => e ="")
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const sendEmail = (e) => {
    setLoading(true);
    setIng("ing");
    // emailjs.sendForm(
    //     "service_r3c2acf",
    //     "gmail_template",
    //     form.current,
    //     "GXerigEHG4Y5D03xO"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    setTimeout(() => {
      setFormValues(initialValues);
      Toast.fire({
      icon: 'success',
      title: 'You have successfully sent an email'
    })
      setLoading(false);
      setIng("");
    }, 3000);
  };

  const validate = (values) => {
    const errors = {};
    const validName = /^[a-zA-Z\s.]*$/;
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.fullname) {
      errors.fullname = "Please enter your name!";
      Toast.fire({
        icon: 'error',
        title: 'Empty Fields, Please try again'
      })
    } else if (!validName.test(values.fullname)) {
      errors.fullname = "This is not a valid name";
    }
    if (!values.email) {
      errors.email = "Email is required!";
      Toast.fire({
        icon: 'error',
        title: 'Empty Fields, Please try again'
      })
    } else if (!validEmail.test(values.email)) {
      errors.email = "Please provide a valid email format!";
    }
    if (!values.subject) {
      errors.subject = "Subject is required!";
      Toast.fire({
        icon: 'error',
        title: 'Empty Fields, Please try again'
      })
    }
    if (!values.message) {
      errors.message = "Message is required!";
      Toast.fire({
        icon: 'error',
        title: 'Empty Fields, Please try again'
      })
    }
    return errors;
  };
  
  return (
    <ContactMeData
      form={form}
      handleSubmit={handleSubmit}
      formValues={formValues}
      handleChange={handleChange}
      formErrors={formErrors}
      ing={ing}
      loading={loading}
    />
  );
}
