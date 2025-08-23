import Image from "next/image";

interface PictureFrameProps {
  width: { mobile: number; tablet: number; desktop: number };
  height: { mobile: number; tablet: number; desktop: number };
  path?: string; // optional
  text: string;
  rotateLeft?: boolean;
  rotateRight?: boolean;
}

export default function PictureFrame({
  width,
  height,
  path,
  text,
  rotateLeft,
  rotateRight,
}: PictureFrameProps) {
  const rotationClasses = `
    ${rotateLeft ? "rotate-[-8deg] sm:rotate-[-10deg] lg:rotate-[-14deg]" : ""} 
    ${rotateRight ? "rotate-[8deg] sm:rotate-[10deg] lg:rotate-[14deg]" : ""} 
    text-black
  `;

  return (
    <div className={rotationClasses}>
      {/* Mobile */}
      <div className="block sm:hidden">
        {path ? (
          <Image
            src={path}
            alt="Picture Frame"
            width={width.mobile}
            height={height.mobile}
          />
        ) : (
          // hidden placeholder for mobile
          <div className="hidden" />
        )}
      </div>

      {/* Tablet */}
      <div className="hidden sm:block lg:hidden">
        {path ? (
          <Image
            src={path}
            alt="Picture Frame"
            width={width.tablet}
            height={height.tablet}
          />
        ) : (
          <div
            style={{
              width: `${width.tablet}px`,
              height: `${height.tablet}px`,
            }}
            className="bg-none"
          />
        )}
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        {path ? (
          <Image
            src={path}
            alt="Picture Frame"
            width={width.desktop}
            height={height.desktop}
          />
        ) : (
          <div
            style={{
              width: `${width.desktop}px`,
              height: `${height.desktop}px`,
            }}
            className="bg-none"
          />
        )}
      </div>

      <p className="mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm lg:text-[15px] text-center px-2">
        {text}
      </p>
    </div>
  );
}
