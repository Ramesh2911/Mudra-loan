import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [formData, setFormData] = useState({
        surname: 'Mr.',
        fullName: '',
        state: '',
        mobile: '',
        loanType: '',
        loanAmount: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmptyField = Object.values(formData).some((val) => val.trim() === '');
        if (isEmptyField) {
            alert('Please fill in all required fields.');
            return;
        }
        console.log('Form Data Submitted:', formData);
        alert('Form submitted successfully!');
        setFormData({
            surname: 'Mr.',
            fullName: '',
            state: '',
            mobile: '',
            loanType: '',
            loanAmount: ''
        });
    };

    const loanOptions = [
        { title: 'Shishu', icon: '💰', description: 'Loans Upto ₹50,000/-' },
        { title: 'Kishore', icon: '💰', description: '₹50,000 to ₹5 Lakh' },
        { title: 'Tarun', icon: '💰', description: '₹5 Lakh to ₹10 Lakh' },
        { title: 'Tarunplus', icon: '💰', description: '₹10 Lakh to ₹20 Lakh' },
    ];

    return (
        <div className="relative w-full overflow-hidden bg-orange-50">
            {/* Wave Background */}
            <div className="absolute inset-0 z-0">
                {/* Mobile Waves */}
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="block w-full h-[200px] sm:hidden">
                    <path fill="#ffedd5" d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,250.7C1120,256,1280,224,1360,208L1440,192L1440,0L0,0Z" />
                    <path fill="#fdba74" fillOpacity="0.9" d="M0,128L80,133.3C160,139,320,149,480,149.3C640,149,800,139,960,149.3C1120,160,1280,192,1360,208L1440,224L1440,0L0,0Z" />
                    <path fill="#f97316" fillOpacity="0.6" d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,160C1120,160,1280,192,1360,208L1440,224L1440,0L0,0Z" />
                </svg>
                {/* Desktop Waves */}
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="hidden w-full h-[700px] sm:block">
                    <path fill="#ffedd5" d="M0,224L80,213.3C160,203,320,181,480,197.3C640,213,800,267,960,261.3C1120,256,1280,192,1360,160L1440,128L1440,0L0,0Z" />
                    <path fill="#fdba74" fillOpacity="0.9" d="M0,160L80,165.3C160,171,320,181,480,170.7C640,160,800,128,960,138.7C1120,149,1280,203,1360,234.7L1440,267L1440,0L0,0Z" />
                    <path fill="#f97316" fillOpacity="0.6" d="M0,96L80,122.7C160,149,320,203,480,202.7C640,203,800,149,960,149.3C1120,149,1280,203,1360,229.3L1440,256L1440,0L0,0Z" />
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col w-full px-4 pt-6 pb-12 mx-auto space-y-10 sm:px-10 max-w-7xl sm:pt-10 sm:pb-20 lg:flex-row lg:space-y-0 lg:space-x-6">
                {/* Left */}
                <div className="flex-1 -mb-6 text-left sm:text-left sm:mt-28">
                    <h4 className="mb-2 text-xs font-bold tracking-wide text-gray-900 uppercase sm:text-sm">Atmanirbhar Bharat Abhiyan</h4>
                    <h1 className="mb-4 text-2xl font-bold leading-snug text-gray-900 sm:text-4xl">
                        Get Mudra Loan Yojna at <br className="hidden sm:block" />
                        attractive interest rates
                    </h1>
                    <p className="max-w-md mx-auto mb-6 text-sm text-gray-700 sm:text-base sm:mx-0">
                        Mudra loan is extended for a variety of purposes which provides income generation and employment creation in Manufacturing, Services, Retail and Agri. Allied Activities.
                    </p>
                    <Link to="/apply" className="inline-block px-6 py-2 text-sm font-semibold text-white bg-orange-700 rounded hover:bg-orange-900">
                        Apply For Mudra Loan →
                    </Link>
                </div>

                {/* Right Form */}
                <div className="flex-1 w-full max-w-lg p-6 mx-auto bg-white rounded-lg shadow-md sm:p-10">
                    <h4 className="text-xs font-medium text-center text-gray-500 sm:text-sm">WELCOME TO MUDRA LOAN YOJNA</h4>
                    <h2 className="mb-4 text-lg font-bold text-center text-gray-800 sm:text-xl">APPLY FOR MUDRA LOAN</h2>
                    <form className="grid grid-cols-1 gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
                        {/* Surname */}
                        <div>
                            <label className="text-sm font-medium">Surname<span className="text-red-500">*</span></label>
                            <select name="surname" value={formData.surname} onChange={handleChange} className="w-full p-2 mt-1 text-sm border border-gray-300 rounded">
                                <option>Mr.</option>
                                <option>Mrs.</option>
                                <option>Ms.</option>
                            </select>
                        </div>
                        {/* Full Name */}
                        <div>
                            <label className="text-sm font-medium">Full Name<span className="text-red-500">*</span></label>
                            <input name="fullName" type="text" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="w-full p-2 mt-1 text-sm border border-gray-300 rounded" />
                        </div>
                        {/* State */}
                        <div className="sm:col-span-2">
                            <label className="text-sm font-medium">State<span className="text-red-500">*</span></label>
                            <select name="state" value={formData.state} onChange={handleChange} className="w-full p-2 mt-1 text-sm border border-gray-300 rounded">
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
                        <div>
                            <label className="text-sm font-medium">Mobile Number<span className="text-red-500">*</span></label>
                            <input name="mobile" type="tel" value={formData.mobile} onChange={handleChange} placeholder="+91 9876543210" className="w-full p-2 mt-1 text-sm border border-gray-300 rounded" />
                        </div>
                        {/* Loan Type */}
                        <div>
                            <label className="text-sm font-medium">Loan Type<span className="text-red-500">*</span></label>
                            <select name="loanType" value={formData.loanType} onChange={handleChange} className="w-full p-2 mt-1 text-sm border border-gray-300 rounded">
                                <option value="">Select Loan Type</option>
                                <option>Mudra Loan</option>
                                <option>Shishu Loan</option>
                                <option>Kishore Loan</option>
                                <option>Tarun Loan</option>
                                <option>Tarunplus Loan</option>
                            </select>
                        </div>
                        {/* Loan Amount */}
                        <div className="sm:col-span-2">
                            <label className="text-sm font-medium">Loan Amount<span className="text-red-500">*</span></label>
                            <input name="loanAmount" type="text" value={formData.loanAmount} onChange={handleChange} placeholder="₹ Amount" className="w-full p-2 mt-1 text-sm border border-gray-300 rounded" />
                        </div>
                        {/* Submit */}
                        <div className="mt-4 text-center sm:col-span-2">
                            <button type="submit" className="w-full px-4 py-2 text-sm text-white bg-red-700 rounded hover:bg-red-900">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Loan Cards (scrollable on mobile) */}
            <div className="px-4 py-10 -mt-20 bg-orange-50">
                <div className="flex flex-col space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
                    {loanOptions.map((loan, index) => (
                        <div
                            key={index}
                            className="p-4 text-white transition rounded-lg shadow-md bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 hover:from-red-600 hover:via-orange-500 hover:to-yellow-400"
                        >
                            <div className="mb-2 text-4xl text-center sm:text-4xl">{loan.icon}</div>
                            <h3 className="mt-1 text-base font-bold text-center sm:text-lg">{loan.title}</h3>
                            <p className="mt-1 text-sm text-center sm:text-base">{loan.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
