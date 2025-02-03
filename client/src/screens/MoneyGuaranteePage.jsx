import React from "react";

const MoneyGuaranteePage = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Your Satisfaction, Guaranteed
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          At our company, we stand behind the quality of our services with an
          unwavering commitment to your satisfaction. We believe that you
          deserve nothing less than the best, which is why we offer a money-back
          guarantee on all of our offerings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Risk-Free Assurance</h2>
            <p className="text-gray-600">
              With our money-back guarantee, you can rest assured that your
              investment in our services is protected. If you're not completely
              satisfied, we'll refund your money, no questions asked.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Confidence in Our Work</h2>
            <p className="text-gray-600">
              Our commitment to your satisfaction is a testament to the quality
              of our work. We are confident in our ability to deliver
              exceptional results, and we stand behind every service we provide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyGuaranteePage;
