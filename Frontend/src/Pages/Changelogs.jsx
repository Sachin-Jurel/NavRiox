import React from "react";
import { motion } from "framer-motion";
import { Calendar, Sparkles, Bug, Rocket } from "lucide-react";

const changelogs = [
  {
    version: "v2.1.0",
    date: "February 2026",
    updates: [
      { type: "feature", text: "AI Form Auto-Fill accuracy improved by 25%." },
      { type: "feature", text: "Added real-time document validation system." },
      { type: "improvement", text: "Performance optimization for large image uploads." },
    ],
  },
  {
    version: "v2.0.0",
    date: "January 2026",
    updates: [
      { type: "feature", text: "Launched Workflow Automation module." },
      { type: "feature", text: "Introduced AI Photo Enhancement tools." },
      { type: "improvement", text: "Redesigned dashboard UI for better usability." },
    ],
  },
  {
    version: "v1.5.2",
    date: "December 2025",
    updates: [
      { type: "fix", text: "Fixed OCR extraction issue with low-quality scans." },
      { type: "fix", text: "Resolved API timeout bug for bulk processing." },
      { type: "improvement", text: "Enhanced system security and encryption." },
    ],
  },
];

const getIcon = (type) => {
  switch (type) {
    case "feature":
      return <Rocket className="w-5 h-5 text-green-400" />;
    case "improvement":
      return <Sparkles className="w-5 h-5 text-blue-400" />;
    case "fix":
      return <Bug className="w-5 h-5 text-red-400" />;
    default:
      return null;
  }
};

const Changelog = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Changelog
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest improvements, new features, and bug fixes.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-16">
          {changelogs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-white">
                  {log.version}
                </h2>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  {log.date}
                </div>
              </div>

              <div className="space-y-4">
                {log.updates.map((update, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-gray-800/60 p-4 rounded-xl border border-gray-700"
                  >
                    {getIcon(update.type)}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {update.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Changelog;