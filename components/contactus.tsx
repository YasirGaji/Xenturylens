import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import axios from "axios";

const ContactUs: React.FC = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })

  const [inputs, setInputs] = useState({
    companyName: '',
    email: '',
    message: '',
  })

  const handleOnChange = useCallback((e: { persist: () => void; target: { id: any; value: any; }; }) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }, [])

  const handleServerResponse = useCallback((ok: any, msg: any) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })

      setInputs({
        companyName: '',
        email: '',
        message: '',
      })

    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      })
    }
  }, [])

  const handleSubmit =  useCallback((e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: "POST",
      url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, "Thanks! Your Message Has Been Sent.")
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
        console.log(error.response.data.error)
      })
  }, [inputs, handleServerResponse])

  return (
    <div className="bg-black text-white flex flex-col justify-center pt-10 min-h-screen items-center pb-10">
      <div className="flex-1 flex flex-col items-center justify-center pt-10 lg:pt-6">
        <div className="pb-10">
          <Image src="/logo2.png" width={30} height={30} alt="logo" />
        </div>
        <h2 className="text-4l font-bold">Contact Us</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-16 py-10 lg:mt-20 min-w-full lg:min-w-[500px]">

          {status.info.error && (
            <div className="">
              <strong className="font-bold">Error</strong>{' '}
              <span className="block sm:inline">{status.info.msg}</span>
            </div>
          )}

          {status.submitted ? (
            <div className="text-white text-xl font-bold px-4 py-3 rounded relative" role="alert">
              Your message has been successfully sent. we will contact you very soon 
            </div>
          ) : ( 
            <>
              <input id="companyName" name="companyName" type="text" placeholder="Company Name"  required maxLength={128} className="bg-black text-white border-2 border-white rounded-3xl outline-none p-3 mt-10" onChange={handleOnChange} value={inputs.companyName} />

              <input id="email" name="email" type="email" placeholder="Email" className="bg-black text-white border-2 border-white rounded-3xl outline-none p-3 mt-10  py-2" onChange={handleOnChange} value={inputs.email} />

              <textarea id="message" name="message" required maxLength={10485} placeholder="Additional Information" className="bg-black text-white border-2 outline-none border-white rounded-3xl px-8 py-6 mt-10 min-h-[16em]" onChange={handleOnChange} value={inputs.message} ></textarea>

              <div className="text-center mt-10">
                <button type="submit" className="bg-white text-black rounded-3xl px-8 py-2 ">
                  {!status.submitting ? !status.submitted ? 'Submit' : 'Submitted' : 'Submitting...'}
                </button>
              </div>
            </>
          )}
          
        </form>
      </div>
    </div>
  )
}

export default ContactUs;
