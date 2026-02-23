import { useState } from "react";
import { motion } from "framer-motion";

const PassportEditor = () => {
  const [photo, setPhoto] = useState(null);
  const [coatColor, setCoatColor] = useState("black");
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ photo, coatColor, backgroundColor });
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 py-30">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Upload Passport Photo
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">
              Create Your Passport Photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="w-full text-gray-300 bg-gray-700 border border-white/20 rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Select Coat Color
            </label>
            <select
              value={coatColor}
              onChange={(e) => setCoatColor(e.target.value)}
              className="w-full bg-gray-700 border border-white/20 rounded-lg p-3 text-gray-300"
            >
              <option value="black">Black</option>
              <option value="navy">Navy Blue</option>
              <option value="gray">Gray</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Select Background Color
            </label>
            <select
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="w-full bg-gray-700 border border-white/20 rounded-lg p-3 text-gray-300"
            >
              <option value="white">White</option>
              <option value="blue">Light Blue</option>
              <option value="gray">Light Gray</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg hover:scale-105 transition"
          >
            Generate Passport Photo
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default PassportEditor;