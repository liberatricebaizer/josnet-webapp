// src/pages/AboutUs.jsx
import React from "react";
import Layout from "../layout/Layout";

const AboutUs = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">About Us</h2>
          <p className="mt-4 text-xl text-gray-500">
            We are a leading online marketplace, providing customers with a vast
            range of products, delivered right to their doorstep.
          </p>
        </div>

        <div className="mt-10">
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Mission
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Our mission is to provide customers with a convenient and
                reliable shopping experience, while offering high-quality
                products at affordable prices.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Values
              </h3>
              <ul className="mt-4 text-lg text-gray-600 space-y-3">
                <li>Customer Satisfaction</li>
                <li>Integrity and Transparency</li>
                <li>Innovation and Improvement</li>
                <li>Environmental Responsibility</li>
              </ul>
            </div>

            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Vision
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Our vision is to be the go-to online store for people around the
                world, offering unparalleled service and a vast array of
                products.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Meet Our Team
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="mt-4 text-gray-500">
                John has over 20 years of experience in e-commerce and is
                passionate about creating exceptional shopping experiences.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h4>
              <p className="text-gray-600">Chief Marketing Officer</p>
              <p className="mt-4 text-gray-500">
                Jane leads our marketing strategy and ensures that customers
                know about our incredible products and offers.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Emily Davis
              </h4>
              <p className="text-gray-600">Product Manager</p>
              <p className="mt-4 text-gray-500">
                Emily oversees our product offerings and ensures that we provide
                the best selection for our customers.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-900 text-white py-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold">Join Us Today</h2>
            <p className="mt-4 text-lg">
              Ready to shop or join our growing team? Experience convenience and
              quality like never before.
            </p>
            <a
              href="/shop"
              className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md"
            >
              Start Shopping Now
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
