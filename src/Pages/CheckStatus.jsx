import React, { useState } from "react";

const CheckStatusCard = () => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
    console.log("Mobile submitted:", mobile);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-slate-800">
      <div className="w-full max-w-md p-8 text-white border shadow-2xl bg-gradient-to-tr from-[#1d2b64] via-[#3a2b71] via-40% to-[#f8cdda] to-80% bg-white/10 backdrop-blur-md rounded-2xl border-white/30">
        <h2 className="mb-6 text-3xl font-bold tracking-wide text-center">
          🔍 Application Status
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium">
              Registered Mobile Number
            </label>
            <input
              type="tel"
              placeholder="e.g. 9876543210"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-2 text-white placeholder-white border rounded-md bg-white/20 border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
            {error && <p className="mt-1 text-sm text-red-300">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white transition bg-pink-500 rounded-md shadow-md hover:bg-pink-600"
          >
            Check Status
          </button>
        </form>

        {submitted && !error && (
          <p className="mt-6 text-center text-green-200">
            ✅ Status check submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckStatusCard;
