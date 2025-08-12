import Image from "next/image";

interface PictureFrameProps {
  width: number;
  height: number;
  path: string;
  text: string;
  rotateLeft:boolean;
  rotateRight:boolean;
}

export default function PictureFrame({ width, height, path, text, rotateLeft, rotateRight }: PictureFrameProps) {
  return (
    <div className={`${rotateLeft ? "rotate-[-14deg]" : ""} ${rotateRight ? "rotate-[14deg]" : ""} text-black`}>
      <Image
        src={path}
        alt="Picture Frame"
        width={width}
        height={height}
        className="rounded-lg shadow-lg"
      />
      <p className="mt-4 text-[15px] text-center">{text}</p>
    </div>
  );
}
