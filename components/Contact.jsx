import React from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
export default function Contact(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    window.location.href = `mailto:yuliuskevin66@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}, ${data.message}. 
        From : ${data.email}`;
    console.log(data);
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 uppercase tracking-[15px] text-gray-500 text-2xl">Contact</h3>

      <div className="flex flex-col space-y-5">
        <h4 className="text-3xl font-semibold text-center">
          Contact me if you&apos;re{" "}
          <span className="decoration-[#F7AB0A]/50 underline inline">
            interested
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <div className="text-xl">{props.pageInfo.phoneNumber}</div>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <div className="text-xl">{props.pageInfo.email}</div>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <div className="text-xl">{props.pageInfo.address}</div>
          </div>
        </div>
        <form className="flex flex-col space-y-2 w-fit mx-auto" onSubmit={handleSubmit(onSubmit)} >
          <div className="flex space-x-2">
            <input
              className="contactInput"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            <input
              className="contactInput"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="contactInput"
            {...register("subject")}
          />

          <textarea
            placeholder="Message"
            className="contactInput"
            {...register("message")}
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
