import { supabase } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTelegramPlane, FaTiktok } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// Accept 'id' as a prop here
export default function ContactSection({ id }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setErrorMsg('');

    // Ensure supabase is correctly configured and 'nsda' table exists
    const { data, error } = await supabase.from('nsda').insert([formData]).select();

    if (error) {
      console.error("Supabase insert error:", error); // Log the actual error for debugging
      setErrorMsg('❌ Something went wrong. Please try again later.');
    } else {
      setSuccess(true);
      setEntryId(data[0].id);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }
  };

  return (
    // Apply the 'id' prop to the outermost section element
    <section id={id} className="min-h-screen bg-[#FAF7F4] px-2 py-5 md:py-10 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10">
        {/* LEFT: Title, Paragraph, Form (mobile), Contact Info */}
        <div className="md:w-1/2 flex flex-col justify-start">
          {/* Title + Description */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#025176] leading-tight">
            Become Part of <br /> Something Great
          </h2>
          <p className="mt-4 text-sm text-gray-700">
            We’re excited to connect with passionate individuals and forward-thinking teams.
            Let’s collaborate, innovate, and build something truly impactful together.
          </p>

          {/* Mobile Form Only */}
          <div className="block md:hidden mt-8 bg-[#E4B340] p-6 rounded-lg">
            <FormBlock
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              success={success}
              errorMsg={errorMsg}
            />
          </div>

          {/* Contact Info */}
          <div className="mt-10">
            {/* Email */}
            <div className="mt-4 flex items-start gap-3">
              <MdEmail className="text-xl text-[#033D54]" />
              <div>
                <p className="font-semibold text-sm text-[#E4B340]">Email</p>
                <p className="text-sm text-gray-800">examplea@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="mt-4 flex items-start gap-3">
              <FaPhoneAlt className="text-sm mt-1 text-[#033D54]" />
              <div>
                <p className="font-semibold text-sm text-[#E4B340]">Phone</p>
                <p className="text-sm text-gray-800">+251 594 791 9764</p>
              </div>
            </div>

            {/* Telegram */}
            <div className="mt-4 flex items-start gap-3">
              <FaTelegramPlane className="text-xl text-[#033D54]" />
              <div>
                <p className="font-semibold text-sm text-[#E4B340]">Telegram</p>
                <p className="text-sm text-gray-800">NSDA/t.me</p>
              </div>
            </div>

            {/* Line above socials */}
            <div className="w-1/2 h-[2px] bg-[#033D54] my-6" />

            {/* Socials */}
            <p className="text-sm text-[#FF9B00] font-medium">Our Socials</p>
            <div className="flex gap-4 mt-3">
              <FaTiktok className="text-xl cursor-pointer hover:text-[#033D54]" />
              <FaInstagram className="text-xl cursor-pointer hover:text-[#033D54]" />
              <FaFacebookF className="text-xl cursor-pointer hover:text-[#033D54]" />
              <FaLinkedinIn className="text-xl cursor-pointer hover:text-[#033D54]" />
            </div>
          </div>
        </div>

        {/* RIGHT (Desktop Only Form) */}
        <div className="hidden md:block md:w-1/2 bg-[#E4B340] p-6 md:p-10 rounded-lg">
          <FormBlock
            formData={formData}
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

// ✅ Extracted Form Block Component
function FormBlock({ formData, handleChange, handleSubmit, success, errorMsg }) {
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {/* Name & Phone */}
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
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label className="text-sm font-bold text-[#033D54]">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          className="mt-1 p-2 rounded-md bg-[#F4D891] outline-none"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label className="text-sm font-bold text-[#033D54]">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="mt-1 p-2 rounded-md bg-[#F4D891] outline-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-fit px-5 py-2 mt-2 text-white bg-[#033D54] rounded-md text-sm font-medium hover:bg-[#025176]"
      >
        Get in Touch
      </button>

      {/* Success or Error */}
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
