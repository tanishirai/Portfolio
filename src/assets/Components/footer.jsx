import React from "react";

const Footer = () => {
  return (
    <footer className="bg-headingB text-white py-2">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Tanishi's Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
