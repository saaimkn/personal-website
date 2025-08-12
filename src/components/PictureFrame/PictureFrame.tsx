import Image from "next/image";

interface PictureFrameProps {
  width: { mobile: number; tablet: number; desktop: number };
  height: { mobile: number; tablet: number; desktop: number };
  path: string;
  text: string;
  rotateLeft: boolean;
  rotateRight: boolean;
}

export default function PictureFrame({ 
  width, 
  height, 
  path, 
  text, 
  rotateLeft, 
  rotateRight 
}: PictureFrameProps) {
  return (
    <div className={`
      ${rotateLeft ? "rotate-[-8deg] sm:rotate-[-10deg] lg:rotate-[-14deg]" : ""} 
      ${rotateRight ? "rotate-[8deg] sm:rotate-[10deg] lg:rotate-[14deg]" : ""} 
      text-black
    `}>
      {/* Mobile Image */}
      <div className="block sm:hidden">
        <Image
          src={path}
          alt="Picture Frame"
          width={width.mobile}
          height={height.mobile}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Tablet Image */}
      <div className="hidden sm:block lg:hidden">
        <Image
          src={path}
          alt="Picture Frame"
          width={width.tablet}
          height={height.tablet}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Desktop Image */}
      <div className="hidden lg:block">
        <Image
          src={path}
          alt="Picture Frame"
          width={width.desktop}
          height={height.desktop}
          className="rounded-lg shadow-lg"
        />
      </div>

      <p className="mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm lg:text-[15px] text-center px-2">{text}</p>
    </div>
  );
}