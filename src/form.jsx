import {React, useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {  FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom"


const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('')
  
 
    const handleSubmit = async (values, { setSubmitting }) => {
      setIsLoading(true);
    setErrorMessage('');

    const fullName = values.name || "";
    const [firstName = "", lastName = ""] = fullName.trim().split(" ");
  


    const requestBody =  {
      firstName,
      lastName,
      email: values.email,
      project_description: values.project
    };

    try {
      const response = await fetch (import.meta.env.VITE_SUBMIT_CONTACT_FORM, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      const result = await response.json();

      if (response.ok) {
setSuccessMessage ('Form Submitted! We will get in touch.' )
setTimeout(() => {
  setSuccessMessage('');
  // onClose();
}, 4000);
} else {
  const message = result.message;
  setErrorMessage(`Form not submitted: ${message}`);
}
} catch (error) {
  setErrorMessage (`${error.message}`)
} finally {
  setIsLoading(false)
}
}

  return (
    <div className="container bg-[#FFFAFA] mx-auto px-5 lg:px0 py-5">
<div className="flex flex-wrap  mt-3">

        
       
 <div className="w-full md:w-[30%] flex flex-col justify-center h-[50%]">
 <div className="bg-gradient-to-b from-purple-300 to-purple-200 m-6 rounded-3xl text-white p-8 shadow-lg w-full h-[50%]">
 <h1 className="text-center text-3xl font-bold  leading-tight mb-6">
              Get in Touch!
            </h1>

            {/* Formik Form */}
            <Formik
              initialValues={{ email: "", name: "", project: "" }}
              validationSchema={Yup.object({
                email: Yup.string().email("Invalid email").required("Required"),
                name: Yup.string().min(2, "Too Short!").required("Required"),
                project: Yup.string().min(10, "Please describe more").required("Required"),
              })}
              onSubmit={ handleSubmit }
               
            >
              {({ isSubmitting, }) => (
                <Form className="space-y-4">
                  <div>
                    <Field
                      type="email"
                      name="email"
                      
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-600 rounded-lg text-white"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field
                      type="text"
                      name="name"
                      
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-600 rounded-lg  text-white"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field
                      as="textarea"
                      name="project"
                      
                      placeholder="Briefly describe your project"
                    //   className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white h-32 resize-none"
                      className="w-full p-3 border rounded-lg  text-white min-h-[120px]"

/>
                    <ErrorMessage name="project" component="div" className="text-red-500 text-sm" />
                  </div>
                  {successMessage && (
                          <div className="item-added-box border border-green-100 bg-green-100 rounded-lg p-3 mt-4 text-orange-700 max-w-md mx-auto shadow-md">
                            <p className="mt-2 text-lightBlue font-bold">{successMessage}</p>
                          </div>
                        )}
                  <button
                    type="submit"
                     className="mt-4 w-full bg-purple-500 text-white py-2 rounded-full hover:bg-purple-700"
                    // onClick={handleSubmit}
                    disabled={isLoading}>
                  {isLoading ? 'Submitting...' : 'Submit'}
                  
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <div className="pt-7 w-full lg:w-[60%]">
          <div className="ml-20 overflow-hidden rounded-lg min-h-[600px] md:h-[500px] relative">
            <h2 className="text-3xl font-bold text-gray-400 leading-tight">
             Powerful Backends, Seamless Performance
              <br />
              <span className="bg-gradient-to-r from-[#D8BFD8] to-purple-500 text-transparent bg-clip-text">
              For Scalable APIs & Clean Architecture, <br /> Get In Touch With Queen_Codes!
              </span>
            </h2>
          
             <h3 className="px-2 text-2xl  font-bold text-gray-400">Follow Me</h3>
            <p className=" px-2 text-gray-400 mt-2">
              Don't be a stranger! Connect with me on LinkendIn. 
              <br/>You can also check out my Github.
            </p> 

            {/* Social Media Icons */}
            <div className="flex px-8 gap-6 mt-4">
            <a 
  href="https://github.com/queentifee" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="bounce-text p-5 bg-[#D8BF] rounded-full hover:bg-purple-400 transition"
>
  <FaGithub className="text-white" />
</a>

              <a href="http://linkedin.com/in/queen-samuell" 
              target="_blank" 
  rel="noopener noreferrer"
              className="bounce-text p-5 bg-[#D8BF] rounded-full hover:bg-purple-400 transition">
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ContactForm;
