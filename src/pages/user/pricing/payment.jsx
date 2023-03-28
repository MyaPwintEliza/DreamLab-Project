import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import PremiumIcon from "../../../assets/premiumIcon.svg";
import { Link, useParams } from "react-router-dom";
import {
  useSubscriptionData,
  useUserSubscribe,
} from "../../../hooks/useSubscriptions";
import { ClimbingBoxLoader, ClipLoader } from "react-spinners";
import AYAPAY from "../../../assets/AYAPAY.png";
import WAVEPAY from "../../../assets/WAVEPAY.png";
import KBZ from "../../../assets/KBZ.png";
import KBZPAY from "../../../assets/KBZPAY.png";
import AYA from "../../../assets/AYA.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputForm from "../../../components/form/InputForm";
import { IoMdImages } from "react-icons/io";
import ImageUpload from "../../../components/form/imageUpload";

const SupscriptionSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email(),
  phone: yup.string().required(),
});

const payment = () => {
  const userSubscriptionMutation = useUserSubscribe();
  const bankCards = [
    {
      img: KBZPAY,
      name: "DreamLab",
      phone: "09123456789",
    },
    {
      img: WAVEPAY,
      name: "DreamLab",
      phone: "09123456789",
    },
    {
      img: AYAPAY,
      name: "DreamLab",
      phone: "09123456789",
    },
    {
      img: KBZ,
      name: "DreamLab",
      phone: "09123456789",
    },
    {
      img: AYA,
      name: "DreamLab",
      phone: "09123456789",
    },
  ];

  const [bankSlip, setBankSlip] = useState(null);

  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: subscriptionData,
  } = useSubscriptionData(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SupscriptionSchema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("id", id);
    console.log(bankSlip[0], bankSlip[0].name);
    // formData.append("name", data.name);
    // formData.append("email", data.email);
    // formData.append("phone", data.phone);
    formData.append("bankSlip", bankSlip[0], bankSlip[0].name);
    userSubscriptionMutation.mutate(formData);
  };

  return (
    <section className="h-full flex flex-row">
      {/* left */}
      <div className="basis-[55%] bg-dreamLabColor4 ">
        <div className="flex flex-col pl-[15%]   text-white">
          <Link
            to="/pricing"
            className="mt-20 flex items-center hover:underline">
            <BsArrowLeft />
            <p className="ml-3">Back to Dream Lab Pricing Page</p>
          </Link>

          <h2 className="flex items-center text-3xl font-semibold tracking-wide mt-20">
            Complete Purchase
            <span className="ml-4 text-gradient ">
              <img src={PremiumIcon} alt="Premium Icon" />
            </span>
          </h2>

          <div className="flex flex-row justify-between w-1/2 bg-[#3B4B72] mt-16 rounded-md h-auto">
            <div className="left flex flex-col p-5">
              <p className="mb-8 ">Select Plan</p>
              {isLoading ? (
                <div className="flex justify-center">
                  <ClipLoader color="white" size={20} />
                </div>
              ) : (
                <span className="font-semibold text-2xl">
                  {subscriptionData?.name}
                </span>
              )}
            </div>
            <div className="right flex flex-col p-5">
              <p className="mb-8">Total Price</p>
              {isLoading ? (
                <div className="flex justify-center">
                  <ClipLoader color="white" size={20} />
                </div>
              ) : (
                <span className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#F0C63A] to-[#C08D0B]">
                  {subscriptionData?.salePrice} Ks
                </span>
              )}
            </div>
          </div>

          <div className="mt-20 ">
            <h2 className="text-2xl font-semibold tracking-wide">
              Bank Information
            </h2>

            <div className="bank-card-wrapper grid grid-cols-2 gap-7 w-3/4">
              {bankCards.map((bankCard, bankIdx) => {
                return (
                  <div
                    key={bankIdx}
                    className="bank-card bg-[#3B4B72] flex p-7 rounded-md mt-8">
                    <img src={bankCard.img} alt="bank card photo" />
                    <div className="flex flex-col ml-10">
                      <p className="text-xl font-semibold">{bankCard.name}</p>
                      <p>{bankCard.phone}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xl w-3/4 my-16 leading-[3rem] font-semibold  ">
              * ငွေလွှဲပြီးသွားပြီဆိုရင်တော့ “ငွေလွှဲပြေစာ မှတဆင့် ငွေလွှဲထားတဲ့
              Screen Shoot လေးကို” ထည့်သွင်း၍ ပေးပို့အတည်ပြုနိုင်ပါတယ်။
              အကူညီလိုအပ်ပါက 09794461888 သို့ ဆက်သွယ်နိုင်ပါသည်။ (Office Hour:
              9:00 AM to 8:00 PM)
            </p>
          </div>
        </div>
      </div>
      <div className="basis-[45%] h-full ">
        <div className="flex flex-col pl-[10%] mx-14">
          <h3 className="mt-20 text-2xl tracking-wide font-semibold mb-14">
            Enter Payment Details
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-10">
              <InputForm
                title="Name"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                register={register}
                errors={errors}
              />
            </div>

            <div className="mb-10">
              <InputForm
                title="Email (if you have)"
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                register={register}
                errors={errors}
              />
            </div>

            <div className="mb-10">
              <InputForm
                title="Phone Number"
                id="phone"
                name="phone"
                placeholder="Enter Your Phone Number"
                register={register}
                errors={errors}
              />
            </div>

            <div className="w-full py-14">
              <label htmlFor="ငွေလွှဲပြေစာ" className="font-semibold">
                ငွေလွှဲပြေစာ
              </label>
              <ImageUpload
                uplaodImage={bankSlip}
                setUploadImage={setBankSlip}
                label="Upload your bank slip here"
              />
            </div>
            {userSubscriptionMutation.isError ?? (
              <p className="text-red-400">
                {userSubscriptionMutation.error.message}
              </p>
            )}
            <button
              type="submit"
              className="mt-14  w-full btn bg-dreamLabColor2 p-3 rounded-md font-semibold text-center">
              {userSubscriptionMutation.isLoading && (
                <ClipLoader color="white" size={20} />
              )}
              Buy Now
            </button>
            {userSubscriptionMutation.isSuccess && (
              <p className="text-green-400">
                Your request was sent successfully
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default payment;
