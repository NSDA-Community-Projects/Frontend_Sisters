import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient'; // ✅ import Supabase
import { FaPhoneAlt, FaTelegramPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaTiktok, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function ContactSection() {
  // ✅ Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [entryId, setEntryId] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Auto-clear messages after 5 seconds
  useEffect(() => {
    if (success || errorMsg) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setErrorMsg('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, errorMsg]);

  // ✅ Input handler
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setErrorMsg('');

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
    <section className="min-h-screen bg-[#FAF7F4] flex flex-col items-center justify-center px-4 py-10 md:py-20">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#033D54] leading-tight">
            Become Part of <br /> Something Great
          </h2>
          <p className="mt-4 text-sm text-gray-700">
            We’re excited to connect with passionate individuals and forward-thinking teams. Let’s collaborate, innovate, and build something truly impactful together.
          </p>

          {/* Email */}
          <div className="mt-8 flex items-start gap-3">
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

          {/* BLUE LINE ABOVE "Our Socials" */}
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

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 bg-[#E4B340] p-6 md:p-10 rounded-lg">
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

            {/* Submit */}
            <button
              type="submit"
              className="w-fit px-5 py-2 mt-2 text-white bg-[#033D54] rounded-md text-sm font-medium hover:bg-[#025176]"
            >
              Get in Touch
            </button>

            {/* Success message */}
            {success && (
              <div className="mt-4 p-3 rounded-md bg-green-100 text-green-800 font-semibold flex items-center gap-2">
                ✅ Message sent!
              </div>
            )}

            {/* Error message */}
            {errorMsg && (
              <div className="mt-4 p-3 rounded-md bg-red-100 text-red-700 font-semibold flex items-center gap-2">
                {errorMsg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
