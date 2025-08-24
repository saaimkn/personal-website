import IntroText from "@/components/IntroText/IntroText";
import PictureFrame from "@/components/PictureFrame/PictureFrame";
import PicturesStack from "@/components/PicturesStack/PicturesStack";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const sentences = [
    "hey, i’m saaim (pronounced like time, but with an s)",
    "i recently moved from the uk to san francisco with my co founder to build our company ...",
    "with $1300",
    "not the smartest idea lol. i’m now facing the consequences: living off soylent, crashing on friends’ couches, and skating the edge of homelessness ... i’ve never been more stressed. yet somehow, i’ve never felt more bullish.",
    "here’s the couch i’m crashing on and the boxes of soylent we’re surviving on",
    // ///////
    "all things considered, life is pretty great rn and i’m having a ton of fun",
    "ok ... moving on ...",
    "i believe there are two founder archetypes: magicians and opportunists. magicians aim to make life more delightful through products and experiences, while opportunists focus on solving practical problems, driving utility and efficiency, and unlocking new forms of value. i guess there’s also a third archetype which is a hybrid (a magical opportunist lol) - founders blending delight with value creation and progress acceleration",
    "beyond these, there are sub-archetypes. for example, a warrior - founders who treat business like war. warriors tend to align more with the opportunist archetype since they’re often in a race to derive those new forms of value. another is a pioneer - founders driven more by the exploration of discoveries than by value creation. ultimately, pioneers are tethered to value creation because if they fail to create value, their oxygen (funding) will be cut off. others include surfers (ride waves), flippers (build to exit), fraudsters, and gods (create religions)",
    "time will tell where i fall, but for now i see myself more as a magician than an opportunist. i want to make life more joyful through experiential products, which is why i decided to name our company magic",
  ];
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white text-black py-8 sm:py-16 lg:py-28  px-4 sm:px-8 lg:px-16 xl:px-36 pb-10">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-im-fell-dw text-center mb-8 sm:mb-14">
        saaim khan
      </h1>
      <p className="text-xs md:text-lg mb-2 font-manrope">a worthwhile 3 min read ... i promise</p>

      <IntroText sentences={sentences} />

     
    </div>
  );
}
