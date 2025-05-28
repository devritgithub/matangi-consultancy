'use client';

import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';
import dreatCapital from '../assets/dream-capital-2.png'

const DreamCapitalForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm('service_bjufnfl', 'template_3wxtpr3', form.current, 'LFc3EHYxA0iXYS2hA')
      .then(() => {
        toast.success('Form submitted successfully!');
        form.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        toast.error('Something went wrong. Try again!');
      });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <div className="flex items-center space-x-6">
        <img
          src={dreatCapital}
          alt="Dream Capital Logo"
          className="h-24 w-auto"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">Welcome to Dream Capital</h1>
          <p className="text-gray-600">Let’s get to know you better so we can help you invest smarter.</p>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="full_name" placeholder="Full Name" required className="border p-2 rounded" />
          <input name="age" placeholder="Your Age" required className="border p-2 rounded" />
          <input name="city" placeholder="City You Live In" required className="border p-2 rounded" />
          <input name="email" type="email" placeholder="Email Address (if any)" className="border p-2 rounded" />
        </div>

        {/* Investment Duration */}
        <div>
          <label className="block font-semibold">How long do you want to keep your money invested?</label>
          <select name="investment_duration" required className="w-full border p-2 rounded">
            <option>Less than a year</option>
            <option>1-3 years</option>
            <option>3-5 years</option>
            <option>5-10 years</option>
          </select>
        </div>

        {/* Monthly Income */}
        <div>
          <label className="block font-semibold">Monthly Income Range</label>
          <select name="income_range" required className="w-full border p-2 rounded">
            <option>Below ₹50,000</option>
            <option>₹50,000–1,00,000</option>
            <option>₹1,00,000–2,20,000</option>
            <option>Above ₹2,00,000</option>
          </select>
        </div>

        {/* Loan Info */}
        <div>
          <label className="block font-semibold">Any Loans or EMIs?</label>
          <textarea name="loan_info" placeholder="Yes (home/car/personal), or No" className="w-full border p-2 rounded" />
        </div>

        {/* Investment Amount */}
        <div>
          <label className="block font-semibold">Investment Amount (for now)</label>
          <select name="investment_amount" required className="w-full border p-2 rounded">
            <option>Under ₹1 lakh</option>
            <option>₹1–5 lakhs</option>
            <option>₹5–10 lakhs</option>
            <option>Over ₹10 lakhs</option>
          </select>
        </div>

        {/* Risk Preference */}
        <div>
          <label className="block font-semibold">Risk Preference</label>
          <select name="risk_preference" required className="w-full border p-2 rounded">
            <option>I prefer to play safe (low risk)</option>
            <option>I'm okay with a little up & down (medium risk)</option>
            <option>I like taking bold bets (high risk)</option>
          </select>
        </div>

        {/* Previous Investments */}
        <div>
          <label className="block font-semibold">Previous Investments</label>
          <textarea name="previous_investments" placeholder="Stocks, Mutual Funds, Startups, etc." className="w-full border p-2 rounded" />
        </div>

        <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DreamCapitalForm;
