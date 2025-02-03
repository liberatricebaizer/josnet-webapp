import React from "react";

const CustomerValuePage = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Delivering Unparalleled Value to Our Customers
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          At our company, we are dedicated to providing our customers with an
          exceptional experience that goes beyond mere satisfaction. We strive
          to create lasting value through our innovative solutions and
          personalized service.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Tailored Approach</h2>
            <p className="text-gray-600">
              We understand that every customer is unique, which is why we take
              the time to understand your specific needs and tailor our
              solutions accordingly.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Continuous Improvement</h2>
            <p className="text-gray-600">
              We are constantly seeking ways to enhance our offerings and
              improve the customer experience, ensuring that you always receive
              the highest level of value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerValuePage;
