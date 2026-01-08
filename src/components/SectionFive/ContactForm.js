import React, { useState } from 'react';

const ContactForm = ({setSubmitted}) => {

    const sendDataToBackend = async (formData) => {
     try {
        const data = formData;
        const response = await fetch('http://localhost:4000/api/v1/ContactUs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      
        if (response.ok) {
          // Data sent successfully
          console.log('Data sent to backend!');
        } else {
          // Handle errors
          console.error('Failed to send data:', response.status, response.statusText);
        }
     } catch (error) {
        
     }
      };
      

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    if (validateForm()) {
      console.log(formData);
      // Reset form fields
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
      // Set form submitted flag

      sendDataToBackend(formData);

      setSubmitted(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  

  return (
    <div className='flex flex-row justify-center items-center h-screen ' id='#contact-me'>
     
    

      <form
        className='bg-[#333333] shadow-md rounded-3xl   w-11/12 md:w-10/12 pt-10 pb-6'
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
      >
      

        <div className='mb-4 w-11/12 md:w-9/12 mx-auto'>
          <label
            className='block text-gray-300 text-sm font-bold mb-2'
            htmlFor='name'
          >
            Name
          </label>
          <input
            className='bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='name'
            type='text'
            placeholder='Enter your name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && (
            <p className='text-red-500 text-xs italic'>{errors.name}</p>
          )}
        </div>
        <div className='mb-4 w-11/12 md:w-9/12 mx-auto'>
          <label
            className='block text-gray-300 text-sm font-bold mb-2'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Enter your email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <p className='text-red-500 text-xs italic'>{errors.email}</p>
          )}
        </div>
        <div className='mb-4 w-11/12 md:w-9/12 mx-auto'>
          <label
            className='block text-gray-300 text-sm font-bold mb-2'
            htmlFor='message'
          >
            Message
          </label>
          <textarea
            className='bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='message'
            placeholder='Enter your message'
            rows='5'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && (
            <p className='text-red-500 text-xs italic'>{errors.message}</p>
          )}
        </div>
        <div className='flex items-center justify-center' >
          <button
            className='bg-gray-600 ring-2 ring-gray-500/50 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline'
            type='submit'
            title='Click to send'>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
