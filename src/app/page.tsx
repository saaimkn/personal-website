import IntroText from "@/components/IntroText/IntroText";
import PictureFrame from "@/components/PictureFrame/PictureFrame";
import PicturesStack from "@/components/PicturesStack/PicturesStack";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white text-black py-28 gap-20 px-36">
      <h1 className="text-6xl font-im-fell-dw">saaim khan</h1>

      {/* Buttons Row */}
      <div className="flex gap-6">
        {/* Twitter (X) Button */}
        <a
          href="https://x.com/saaimkn"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-black bg-black text-white hover:bg-white hover:text-black transition-colors"
        >
          <FaXTwitter size={20} />
        </a>

        {/* Email Button */}
        <a
          href="mailto:saaimkhan28@gmail.com"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-black bg-black text-white hover:bg-white hover:text-black transition-colors"
        >
          <MdEmail size={22} />
        </a>
      </div>

      <PicturesStack />
      <IntroText />
    </div>
  );
}
