import withHero from "@/components/hoc/withHero";
import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-gray-900">Contact Us</h1>
    </div>
  );
};

export default withHero(ContactUs, {
  title: "Welcome to ContactUs",
  description: "We provide top-notch services to help you grow.",
  bgGradient: "linear-gradient(to top, #29DBD8, #141A6B)",
});
