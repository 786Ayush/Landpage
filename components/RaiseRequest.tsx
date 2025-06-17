"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function RaiseRequest() {
  // State for all form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timeFrame: "",
    size: "",
    quantity: "",
    projectDesc: "",
  });

  // State for showing toast message
  const [toastMessage, setToastMessage] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation: check required fields (name, email, phone)
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      setToastMessage(
        "Please fill in all required fields (Name, Email, Phone)."
      );
      clearToast();
      return;
    }

    // If validation passes, show success toast
    setToastMessage("Quote request submitted successfully!");
    clearToast();

    // Reset form (optional)
    setFormData({
      name: "",
      email: "",
      phone: "",
      timeFrame: "",
      size: "",
      quantity: "",
      projectDesc: "",
    });
  };

  // Clear toast after 3 seconds
  const clearToast = () => {
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  return (
    <div className="p-10 flex flex-col justify-center items-center">
      <div className="max-w-[100%]">
        <div className="text-2xl font-semibold mb-8 text-center text-gray-800">
          Raise a Quote
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-[0.5px] border-[#9F9F9F] bg-[#F4F4F4] w-full max-w-[535px] h-[46px] rounded-[6px] px-3"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-[0.5px] border-[#9F9F9F] bg-[#F4F4F4] w-full max-w-[535px] h-[46px] rounded-[6px] px-3"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-[0.5px] border-[#9F9F9F] bg-[#F4F4F4] w-full max-w-[535px] h-[46px] rounded-[6px] px-3"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label
              htmlFor="timeFrame"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Time Frame
            </label>
            <input
              type="time"
              id="timeFrame"
              value={formData.timeFrame}
              onChange={handleChange}
              className="border border-[0.5px] border-[#9F9F9F] bg-[#F4F4F4] w-full max-w-[535px] h-[46px] rounded-[6px] px-3"
            />
          </div>

          <div>
            <label
              htmlFor="size"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Size
            </label>
            <select
              id="size"
              value={formData.size}
              onChange={handleChange}
              className="bg-[#F4F4F4] w-full max-w-[535px] h-[46px] border border-[#9F9F9F] rounded-[6px] px-3 text-sm text-gray-700"
            >
              <option value="">Select Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Quantity
            </label>
            <select
              id="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="bg-[#F4F4F4] w-full max-w-[535px] h-[46px] border border-[#9F9F9F] rounded-[6px] px-3 text-sm text-gray-700"
            >
              <option value="">Select Quantity</option>
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>

          <div className="md:col-span-2 w-full">
            <label
              htmlFor="projectDesc"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Please Describe your project
            </label>
            <textarea
              rows={6}
              id="projectDesc"
              value={formData.projectDesc}
              onChange={handleChange}
              placeholder="Please Describe your project..."
              className="border border-[0.5px] border-[#9F9F9F] bg-[#F4F4F4] w-full rounded-[6px] p-2"
            />
          </div>

          <div className="md:col-span-2 text-center py-4">
            By submitting this form you agree to our{" "}
            <span className="underline cursor-pointer">Terms of Service</span>{" "}
            and{" "}
            <span className="underline cursor-pointer">Privacy Policy.</span>
          </div>

          <div className="md:col-span-2 w-full flex justify-center py-4">
            <button
              type="submit"
              className="bg-[#1959AC] shadow-[0px_4px_20px_0px_#00000026] text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-[#154e8a] transition"
            >
              Submit <FaArrowRight />
            </button>
          </div>
        </form>

        {/* Toast Message */}
        {toastMessage && (
          <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow-lg">
            {toastMessage}
          </div>
        )}
      </div>
    </div>
  );
}
