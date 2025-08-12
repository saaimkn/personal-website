import IntroText from "@/components/IntroText/IntroText";
import PictureFrame from "@/components/PictureFrame/PictureFrame";
import PicturesStack from "@/components/PicturesStack/PicturesStack";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white text-black py-8 sm:py-16 lg:py-28 gap-8 sm:gap-12 lg:gap-20 px-4 sm:px-8 lg:px-16 xl:px-36">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-im-fell-dw text-center">saaim khan</h1>

      {/* Buttons Row */}
      <div className="flex gap-4 sm:gap-6">
        {/* Twitter (X) Button */}
        <a
          href="https://x.com/saaimkn"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-black bg-black text-white hover:bg-white hover:text-black transition-colors"
        >
          <FaXTwitter size={16} className="sm:w-5 sm:h-5" />
        </a>

        {/* Email Button */}
        <a
          href="mailto:saaimkhan28@gmail.com"
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-black bg-black text-white hover:bg-white hover:text-black transition-colors"
        >
          <MdEmail size={18} className="sm:w-[22px] sm:h-[22px]" />
        </a>
      </div>

      <PicturesStack />
      <IntroText />
    </div>
  );
}