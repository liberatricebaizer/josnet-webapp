import React from "react";

const QuickResponsePage = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Prompt Assistance at Your Fingertips
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          At our company, we pride ourselves on our unwavering commitment to
          providing swift and efficient support. Our team of dedicated
          professionals is always ready to address your needs with the utmost
          urgency, ensuring that your concerns are swiftly resolved.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Streamlined Processes</h2>
            <p className="text-gray-600">
              Our streamlined processes and well-trained staff enable us to
              respond to your inquiries with lightning-fast efficiency,
              minimizing any disruptions to your operations.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Personalized Attention</h2>
            <p className="text-gray-600">
              We understand that every client is unique, which is why we tailor
              our approach to ensure that your specific needs are met with the
              utmost care and attention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickResponsePage;
