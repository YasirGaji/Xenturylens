import React from "react";
import Image from "next/image";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center pt-10 min-h-screen items-center pb-10">
      <div className="pb-10">
        <Image src="/logo2.png" width={30} height={30} alt="logo" />
      </div>
      <h2 className="text-4l font-bold">Contact Us</h2>

      <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">

        <input id="companyName" name="companyName" type="text" placeholder="Company Name"  required maxLength={128} className="bg-black text-white border-2 border-white rounded-3xl outline-none p-2 mt-10 px-8 w-96" />

        <input id="email" name="email" type="email" placeholder="Email" className="bg-black text-white border-2 border-white rounded-3xl outline-none p-2 mt-10 px-8 w-96 py-2" />

        <textarea id="message" name="message" required maxLength={10485} placeholder="Additional Information" className="bg-black text-white border-2 outline-none border-white rounded-3xl px-8 py-6 mt-10 min-h-[16em]"></textarea>

        <div className="text-center mt-10">
          <button type="submit" className="bg-white text-black rounded-3xl px-8 py-2 mt-10">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ContactUs;
