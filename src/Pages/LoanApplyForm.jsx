import React, { useState } from "react";
import {
  FaUser,
  FaMobileAlt,
  FaRupeeSign,
} from "react-icons/fa";

const LoanApplyForm = () => {
  const [formData, setFormData] = useState({
    surname: "Mr.",
    fullName: "",
    state: "",
    mobile: "",
    loanType: "",
    loanAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="flex items-start justify-center min-h-screen px-4 py-8 bg-gradient-to-r from-red-100 via-red-50 to-white">
      <div className="w-full max-w-6xl p-4 md:p-10 lg:p-12">
        <h2 className="mb-8 text-2xl font-bold text-center text-red-700 md:text-4xl">
          APPLY FOR MUDRA LOAN
        </h2>
        <form
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          {/* Surname */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Surname <span className="text-red-600">*</span>
            </label>
            <select
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm transition border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
            >
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>Ms.</option>
            </select>
          </div>

          {/* Full Name */}
          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Full Name <span className="text-red-600">*</span>
            </label>
            <FaUser className="absolute text-red-500 top-9 left-3" />
            <input
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full py-2 pl-10 text-sm transition border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>


          {/* State */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              State <span className="text-red-600">*</span>
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm transition border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
            >
              <option value="">Select State</option>
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
              <option>Andaman and Nicobar Islands</option>
              <option>Chandigarh</option>
              <option>Dadra and Nagar Haveli and Daman and Diu</option>
              <option>Delhi</option>
              <option>Lakshadweep</option>
              <option>Puducherry</option>
              <option>Ladakh</option>
              <option>Jammu and Kashmir</option>
            </select>
          </div>

          {/* Mobile */}
          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Mobile Number <span className="text-red-600">*</span>
            </label>
            <FaMobileAlt className="absolute text-red-500 top-9 left-3" />
            <input
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="w-full py-2 pl-10 text-sm transition border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          {/* Loan Type */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Loan Type <span className="text-red-600">*</span>
            </label>
            <select
              name="loanType"
              value={formData.loanType}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm transition border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
            >
              <option value="">Select Loan Type</option>
              <option>Mudra Loan</option>
              <option>Shishu Loan</option>
              <option>Kishore Loan</option>
              <option>Tarun Loan</option>
              <option>Tarunplus Loan</option>
            </select>
          </div>

          {/* Loan Amount */}
          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Loan Amount <span className="text-red-600">*</span>
            </label>
            <FaRupeeSign className="absolute text-red-500 top-9 left-3" />
            <input
              name="loanAmount"
              type="text"
              value={formData.loanAmount}
              onChange={handleChange}
              placeholder="Required Amount"
              className="w-full py-2 pl-10 text-sm transition border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8 md:col-span-2">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold text-white transition bg-red-700 rounded-md hover:bg-red-800 focus:ring-4 focus:ring-red-300"
            >
              Submit Application →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoanApplyForm;
