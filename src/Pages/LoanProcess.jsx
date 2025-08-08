import React from 'react';
import { FaRupeeSign, FaFileAlt, FaHandHoldingUsd } from 'react-icons/fa';

const steps = [
  {
    number: '01',
    title: 'Choose loan Amount',
    icon: <FaRupeeSign className="text-[32px] text-white" />,
    bgColor: 'from-cyan-500 to-teal-500',
  },
  {
    number: '02',
    title: 'Document Verification',
    icon: <FaFileAlt className="text-[32px] text-white" />,
    bgColor: 'from-yellow-400 to-yellow-500',
  },
  {
    number: '03',
    title: 'Approved Your Loan',
    icon: <FaHandHoldingUsd className="text-[32px] text-white" />,
    bgColor: 'from-green-400 to-green-500',
  },
];

const LoanProcess = () => {
  return (
    <div className="bg-[#f4f8fb] py-12 px-4 md:px-24 text-center relative overflow-hidden">
      {/* Process Label */}
      <p className="mb-2 text-sm font-semibold tracking-widest text-orange-500 uppercase">
        Process
      </p>

      {/* Main Heading */}
      <h2 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl">
        How Does it Work?
      </h2>
      <p className="mb-12 text-base text-gray-500">
        We have a fast and easy application process.
      </p>

      {/* Step Cards */}
      <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative px-6 pt-16 pb-8 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-2 group"
          >
            {/* Orange Step Number */}
            <div className="absolute z-20 flex items-center justify-center text-sm font-bold text-white -translate-x-1/2 bg-orange-500 rounded-full shadow-md -top-6 left-1/2 w-14 h-14 ring-4 ring-white">
              {step.number}
            </div>

            {/* Gradient Icon Circle */}
            <div
              className={`w-20 h-20 bg-gradient-to-r ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-md`}
            >
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 transition duration-300 group-hover:text-orange-500">
              {step.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanProcess;
