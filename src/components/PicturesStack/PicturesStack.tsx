import Image from "next/image";
import PictureFrame from "../PictureFrame/PictureFrame";

export default function PicturesStack() {
  return (
    <div className="flex flex-row items-center justify-center gap-48">
      <div className="flex flex-col items-center justify-center gap-24 mt-7">
        <PictureFrame
          width={231}
          height={290}
          path="/images/1.png"
          text="when i was a young gangsta"
          rotateLeft={true}
          rotateRight={false}
        />
        <PictureFrame
          width={248}
          height={202}
          path="/images/4.png"
          text="with the boys"
          rotateLeft={true}
          rotateRight={false}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-24">
        <PictureFrame
          width={231}
          height={290}
          path="/images/2.png"
          text="at a super hidden r&d lab"
          rotateLeft={false}
          rotateRight={false}
        />
        <PictureFrame
          width={248}
          height={202}
          path="/images/5.png"
          text="at the louvre"
          rotateLeft={false}
          rotateRight={false}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-24 mt-7">
        <PictureFrame
          width={231}
          height={290}
          path="/images/3.png"
          text="drinking coconut water in turkey"
          rotateLeft={false}
          rotateRight={true}
        />
        <PictureFrame
          width={248}
          height={202}
          path="/images/6.png"
          text="at the birthplace of silicon valley"
          rotateLeft={false}
          rotateRight={true}
        />
      </div>
    </div>
  );
}
