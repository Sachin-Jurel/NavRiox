import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, HelpCircle, FileText } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Support Center
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Need help? We're here to support you with quick answers, technical guidance, and personalized assistance.
          </p>
        </motion.div>

        {/* Support Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* Email Support */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-8 text-center space-y-6 hover:border-purple-500/60 transition">
            <Mail className="w-10 h-10 mx-auto text-purple-400" />
            <h3 className="text-xl font-semibold">Email Support</h3>
            <p className="text-gray-400 text-sm">
              Reach out to our support team for technical or account-related assistance.
            </p>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition">
              support@navriox.ai
            </button>
          </div>

          {/* Live Chat */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-8 text-center space-y-6 hover:border-blue-500/60 transition">
            <MessageSquare className="w-10 h-10 mx-auto text-blue-400" />
            <h3 className="text-xl font-semibold">Live Chat</h3>
            <p className="text-gray-400 text-sm">
              Chat with our AI assistant or connect with a human agent in real-time.
            </p>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition">
              Start Chat
            </button>
          </div>

          {/* Documentation */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-8 text-center space-y-6 hover:border-purple-500/60 transition">
            <FileText className="w-10 h-10 mx-auto text-purple-400" />
            <h3 className="text-xl font-semibold">Documentation</h3>
            <p className="text-gray-400 text-sm">
              Explore detailed guides, API references, and tutorials.
            </p>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition">
              View Docs
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "How does AI form auto-fill work?",
                answer:
                  "Our AI extracts text from uploaded images or documents and automatically maps the data into structured form fields.",
              },
              {
                question: "Is my data secure?",
                answer:
                  "Yes. We use end-to-end encryption and industry-standard security protocols to protect your data.",
              },
              {
                question: "Can I integrate this with my existing system?",
                answer:
                  "Absolutely. We provide API access and workflow automation tools for seamless integration.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-gray-400 text-sm">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;