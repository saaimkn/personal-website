import Image from "next/image";
import PictureFrame from "../PictureFrame/PictureFrame";

export default function PicturesStack() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-24 xl:gap-48 w-full">
      {/* First Column */}
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-24 lg:mt-7">
        <PictureFrame
          width={{ mobile: 160, tablet: 200, desktop: 231 }}
          height={{ mobile: 200, tablet: 251, desktop: 290 }}
          path="/images/1.png"
          text="when i was a young gangsta"
          rotateLeft={true}
          rotateRight={false}
        />
        <PictureFrame
          width={{ mobile: 170, tablet: 215, desktop: 248 }}
          height={{ mobile: 138, tablet: 175, desktop: 202 }}
          path="/images/4.png"
          text="with the boys"
          rotateLeft={true}
          rotateRight={false}
        />
      </div>

      {/* Second Column */}
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-24">
        <PictureFrame
          width={{ mobile: 160, tablet: 200, desktop: 231 }}
          height={{ mobile: 200, tablet: 251, desktop: 290 }}
          path="/images/2.png"
          text="at a super hidden r&d lab"
          rotateLeft={false}
          rotateRight={false}
        />
        <PictureFrame
          width={{ mobile: 170, tablet: 215, desktop: 248 }}
          height={{ mobile: 138, tablet: 175, desktop: 202 }}
          path="/images/5.png"
          text="at the louvre"
          rotateLeft={false}
          rotateRight={false}
        />
      </div>

      {/* Third Column */}
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-24 lg:mt-7">
        <PictureFrame
          width={{ mobile: 160, tablet: 200, desktop: 231 }}
          height={{ mobile: 200, tablet: 251, desktop: 290 }}
          path="/images/3.png"
          text="drinking coconut water in turkey"
          rotateLeft={false}
          rotateRight={true}
        />
        <PictureFrame
          width={{ mobile: 170, tablet: 215, desktop: 248 }}
          height={{ mobile: 138, tablet: 175, desktop: 202 }}
          path="/images/6.png"
          text="at the birthplace of silicon valley"
          rotateLeft={false}
          rotateRight={true}
        />
      </div>
    </div>
  );
}