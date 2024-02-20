import Lottie from "lottie-react";
import Logo from "../../assets/Aaban Logo.png";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import instagrm from "../../assets/instagram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import availableAnima from "../../assets/green active.json";

const FixedCard = () => {
  return (
    <>
      <section className="bg-[#1C1C1C] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl text-center w-[21.5625rem] border-[#464646] border-[.0938rem]">
        {/*  START  ----------------------------- Image ----------------------------------- */}
        <section className=" p-[1.875rem]">
          <img src={Logo} alt="" className="mx-auto" />
        </section>
        {/*  END  ----------------------------- Image ----------------------------------- */}

        {/*  START  ----------------------------- Aaban  ----------------------------------- */}
        <p className="text-[#fff] font-jakarta text-[1.875rem] font-medium leading-[2.4375rem] pb-[1.5625rem]">
          Aaban Nayeem
        </p>
        {/*  END  ----------------------------- Aaban ----------------------------------- */}

        {/*  START  ----------------------------- Available ----------------------------------- */}
        <section className="pb-[1.5625rem]">
          <div className="flex justify-center items-center py-1 w-[12rem] mx-auto rounded-3xl bg-[#272727]">
            <Lottie animationData={availableAnima} />
            <p className="text-[#0ED05C] pr-1">Available for new work</p>
          </div>
        </section>
        {/*  END  ----------------------------- Available ----------------------------------- */}

        {/*  START  ----------------------------- Name + social ----------------------------------- */}
        <section className="px-[1.875rem]">
          <div className="flex justify-center gap-5 pb-[3.125rem]">
            <a href="#">
              <img
                src={linkedin}
                className="w-[35px] bg-[#272727] p-2 rounded-md border border-[#464646]"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src={facebook}
                className="w-[35px] bg-[#272727] p-2 rounded-md border border-[#464646]"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src={instagrm}
                className="w-[35px] bg-[#272727] p-2 rounded-md border border-[#464646]"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src={whatsapp}
                className="w-[35px] bg-[#272727] p-2 rounded-md border border-[#464646]"
                alt=""
              />
            </a>
          </div>
        </section>
        {/*  END  ----------------------------- Name + social ----------------------------------- */}

        {/*  START  ----------------------------- Button ----------------------------------- */}
        <span className="">
          <a href="#">
            <button className="px-[37.8px] py-[1.5625rem] border-[#464646] border-t-[.0938rem] border-r-[.0938rem] text-white font-jakarta leading-[1.3125rem] hover:bg-[white] hover:text-black hover:rounded-bl-3xl">
              Contact Us
            </button>
          </a>
          <a href="#">
            <button className="px-[37.9px] py-[1.5625rem] border-t-[.0938rem] border-[#464646] text-white font-jakarta leading-[1.3125rem] hover:bg-[white] hover:text-black hover:rounded-br-3xl">
              Download Me
            </button>
          </a>
        </span>
        {/*  END  ----------------------------- Button ----------------------------------- */}
      </section>
    </>
  );
};

export default FixedCard;
