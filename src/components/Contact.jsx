import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending…");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-neutral-100"
      id="Contact"
      style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl px-8 py-12">
        <h1 className="text-4xl font-semibold text-neutral-900 mb-2 text-center tracking-tight">
          Contact <span className="font-light underline decoration-neutral-300 underline-offset-8">Us</span>
        </h1>
        <p className="text-neutral-500 text-lg mb-10 text-center">
          Let's help you find your dream home
        </p>
        <form onSubmit={onSubmit} className="space-y-8">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <div className="flex-1">
              <label className="block text-neutral-700 text-sm mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full bg-neutral-100 border border-neutral-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-neutral-300 transition"
                type="text"
                placeholder="Your Name"
                name="Name"
                id="name"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-neutral-700 text-sm mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                className="w-full bg-neutral-100 border border-neutral-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-neutral-300 transition"
                type="email"
                placeholder="Your Email"
                name="email"
                id="email"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-neutral-700 text-sm mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full bg-neutral-100 border border-neutral-200 rounded-lg py-3 px-4 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-neutral-300 transition"
              name="Message"
              id="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-neutral-900 hover:bg-neutral-800 text-white text-base font-medium py-3 px-10 rounded-lg shadow transition"
              type="submit"
            >
              {result ? result : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact