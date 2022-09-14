import React from "react";
import Image from "next/image";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center pt-10 min-h-screen items-center pb-10">
      <div className="pb-10">
        <Image src="/assets/logo.png" width={30} height={30} alt="logo" />
      </div>
      <h2 className="text-4l font-bold">Contact Us</h2>
    </div>
  )
}

export default ContactUs;
