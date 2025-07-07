import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import {
  FaPhoneAlt,
  FaTelegramPlane,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [entryId, setEntryId] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (success || errorMsg) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setErrorMsg('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, errorMsg]);

 const validate = () => {
  const errors = {};

  // Name
  if (!formData.name.trim()) {
    errors.name = 'Name is required.';
  } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name)) {
    errors.name = 'Please enter a valid name using only letters.';
  }

  // Phone
  if (!formData.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^\d{7,15}$/.test(formData.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }

  // Email
  if (!formData.email.trim()) {
    errors.email = 'Email is required.';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    errors.email = 'Please enter a valid email address.';
  }

  // Message
  if (!formData.message.trim()) {
    errors.message = 'Message is required.';
  }

  return errors;
};


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: '' }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setErrorMsg('');
    setSuccess(false);

    const { data, error } = await supabase.from('nsda').insert([formData]).select();

    if (error) {
      setErrorMsg('❌ Something went wrong. Please try again later.');
    } else {
      setSuccess(true);
      setEntryId(data[0].id);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }
  };

  return (
    <section className="min-h-screen bg-[#FAF7F4] px-4 py-10 md:py-20 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10">
        {/* LEFT */}
        <div className="md:w-1/2 flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-bold text-[#025176] leading-tight">
            Become Part of <br /> Something Great
          </h2>
          <p className="mt-4 text-sm text-gray-700">
            We’re excited to connect with passionate individuals and forward-thinking teams.
            Let’s collaborate, innovate, and build something truly impactful together.
          </p>

          {/* Mobile Form */}
          <div className="block md:hidden mt-8 bg-[#E4B340] p-6 rounded-lg">
            <FormBlock
              formData={formData}
              formErrors={formErrors}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              success={success}
              errorMsg={errorMsg}
            />
          </div>

          {/* Contact Info */}
          <div className="mt-10">
            <div className="mt-4 flex items-start gap-3">
              <MdEmail className="text-xl text-[#033D54]" />
              <div>
                <p className="font-semibold text-sm text-[#E4B340]">Email</p>
                <p className="text-sm text-gray-800">examplea@gmail.com</p>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <FaPhoneAlt className="text-sm mt-1 text-[#033D54]" />
              <div>
                <p className="font-semibold text-sm text-[#E4B340]">Phone</p>
                <p className="text-sm text-gray-800">+251 594 791 9764</p>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <FaTelegramPlane className="text-xl text-[#033D54]" />
              <div>
                <p className="font-semibold text-sm text-[#E4B340]">Telegram</p>
                <p className="text-sm text-gray-800">NSDA/t.me</p>
              </div>
            </div>
            <div className="w-1/2 h-[2px] bg-[#033D54] my-6" />
            {/* Socials */}
<p className="text-sm text-[#FF9B00] font-medium text-center md:text-left">Our Socials</p>
<div className="flex gap-4 mt-3 justify-center md:justify-start">
  <FaTiktok className="text-xl cursor-pointer hover:text-[#033D54]" />
  <FaInstagram className="text-xl cursor-pointer hover:text-[#033D54]" />
  <FaFacebookF className="text-xl cursor-pointer hover:text-[#033D54]" />
  <FaLinkedinIn className="text-xl cursor-pointer hover:text-[#033D54]" />
</div>

          </div>
        </div>

        {/* RIGHT (Desktop Form) */}
        <div className="hidden md:block md:w-1/2 bg-[#E4B340] p-6 md:p-10 rounded-lg">
          <FormBlock
            formData={formData}
            formErrors={formErrors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            success={success}
            errorMsg={errorMsg}
          />
        </div>
      </div>
    </section>
  );
}

// ✅ Reusable Form Component with Validation
function FormBlock({ formData, formErrors, handleChange, handleSubmit, success, errorMsg }) {
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col w-full">
          <label className="text-sm font-bold text-[#033D54]">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="mt-1 p-2 rounded-md bg-[#F4D891] outline-none"
          />
          {formErrors.name && <p className="text-sm text-red-600">{formErrors.name}</p>}
        </div>
        <div className="flex flex-col w-full">
          <label className="text-sm font-bold text-[#033D54]">Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="text"
            className="mt-1 p-2 rounded-md bg-[#F4D891] outline-none"
          />
          {formErrors.phone && <p className="text-sm text-red-600">{formErrors.phone}</p>}
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-bold text-[#033D54]">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          className="mt-1 p-2 rounded-md bg-[#F4D891] outline-none"
        />
        {formErrors.email && <p className="text-sm text-red-600">{formErrors.email}</p>}
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-bold text-[#033D54]">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="mt-1 p-2 rounded-md bg-[#F4D891] outline-none"
        ></textarea>
        {formErrors.message && <p className="text-sm text-red-600">{formErrors.message}</p>}
      </div>
      <button
        type="submit"
        className="w-fit px-5 py-2 mt-2 text-white bg-[#033D54] rounded-md text-sm font-medium hover:bg-[#025176]"
      >
        Get in Touch
      </button>
      {success && (
        <div className="mt-4 p-3 rounded-md bg-green-100 text-green-800 font-semibold flex items-center gap-2">
          ✅ Message sent!
        </div>
      )}
      {errorMsg && (
        <div className="mt-4 p-3 rounded-md bg-red-100 text-red-700 font-semibold flex items-center gap-2">
          {errorMsg}
        </div>
      )}
    </form>
  );
}
