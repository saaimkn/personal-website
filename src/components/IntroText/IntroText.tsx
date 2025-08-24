"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import PictureFrame from "../PictureFrame/PictureFrame";
import Link from "next/link";

type IntroTextProps = {
  sentences: string[];
};

export default function IntroText({ sentences }: IntroTextProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  // Base signature path
  const basePathSaaim = "M63.1152 8.87684C55.3662 8.87684 45.6956 10.2709 45.5852 19.2969C45.5452 22.566 44.8274 26.6399 47.0266 29.4171C49.0671 31.994 53.069 33.2804 56.1032 34.3648C63.4401 36.9869 66.6212 37.7406 66.6212 45.9843C66.6212 56.2265 58.9706 58.9798 49.4029 60.0027C46.2919 60.3353 39.8303 60.9225 38.0278 57.4539C37.6866 56.7972 42.4902 52.3512 42.7025 52.1314C52.6504 41.8374 62.3685 31.3392 72.6204 21.321C74.7121 19.2769 80.7115 15.0294 81.3075 11.8754C81.696 9.81941 81.9148 7.81109 82.2035 5.72832C82.3432 4.71994 82.7488 -0.37035 82.7488 3.32945C82.7488 11.5357 82.4055 19.6162 81.3464 27.7679C80.5797 33.6695 79.0768 39.5003 78.5416 45.4221C78.2475 48.6769 78.6577 58.0522 77.1392 55.13C74.6119 50.2665 80.2481 40.0634 82.2035 36.1265C87.2998 25.8652 94.4702 14.5265 103.317 6.77783C104.089 6.10169 107.338 4.39572 107.174 4.52889C101.182 9.38392 94.5294 13.3747 88.2026 17.7976C87.1308 18.5469 78.7373 22.5656 82.8657 23.7573C88.8438 25.4829 94.6964 28.6351 100.279 31.2913C100.598 31.443 107.375 34.3689 107.174 34.8521C106.894 35.5252 103.93 35.1608 103.668 35.1519C92.8936 34.7882 82.3589 34.4273 71.6075 35.8641C56.9056 37.8288 42.6638 41.7546 28.6006 46.2092C20.6281 48.7346 12.3231 51.0064 4.64289 54.3054C-5.85278 58.8138 18.288 54.206 18.4721 54.1555C37.1936 49.0194 55.438 41.9084 73.5553 35.1145C89.7956 29.0244 105.991 22.7399 121.743 15.5487C122.877 15.0311 139.681 6.00155 135.261 12.1753C127.507 23.005 119.272 33.5095 113.368 45.4596C112.413 47.3917 110.797 53.5212 110.797 51.3818";

  useEffect(() => {
    const jitterAmount = 1.5; // Slightly reduced jitter for the smaller signature

    // First set of jitter values
    const jitter1Array = [
      0.32223999929101554, 0.8845336201368651, 0.22921091813498595,
      0.0017554576884134532, 0.9479366282275687, 0.4798838533481584,
      0.6135571102495486, 0.637314947752873, 0.5450136315541483,
      0.5317519458510618, 0.7971071971875309, 0.37201453516110516,
      0.6356675855499409, 0.876859917303353, 0.8230629639994627,
      0.47754100363383745, 0.594783805645347, 0.29858335034149186,
      0.5722006886933407,
    ];

    // Second set of jitter values
    const jitter2Array = [
      0.7589632145874563, 0.1236547896321458, 0.6325874569874123,
      0.4568712395684712, 0.2158794561238974, 0.8956321478965412,
      0.3256987456321459, 0.1589632147856987, 0.7458963214589632,
      0.6321458796321458, 0.4563214789632145, 0.8796541238965412,
      0.2365478965412389, 0.1258974563214789, 0.7412589632145896,
      0.3698745632145896, 0.8965412389654123, 0.5632145896541238,
      0.2145896541238965,
    ];

    const getJitteredPath = (base: string, jitterValues: number[]) => {
      // Parse the path string into segments
      const segments = base.match(/[A-Za-z][^A-Za-z]*/g) || [];

      return segments
        .map((segment, i) => {
          const commandType = segment.charAt(0);
          const values = segment
            .substring(1)
            .trim()
            .split(/[\s,]+/)
            .map(Number);

          // For C (cubic bezier) commands, we need to handle 6 parameters
          if (commandType === "C") {
            const jitteredValues = [];
            for (let j = 0; j < values.length; j++) {
              const jitterIndex = (i * values.length + j) % jitterValues.length;
              const jitterValue = jitterValues[jitterIndex];
              jitteredValues.push(
                values[j] + (jitterValue - 0.5) * jitterAmount
              );
            }
            return commandType + jitteredValues.join(" ");
          } else {
            const jitteredValues = values.map((value, j) => {
              const jitterIndex = (i * values.length + j) % jitterValues.length;
              const jitterValue = jitterValues[jitterIndex];
              return value + (jitterValue - 0.5) * jitterAmount;
            });
            return commandType + jitteredValues.join(" ");
          }
        })
        .join("");
    };

    // Generate two different jittered paths
    const jitteredPath1 = getJitteredPath(basePathSaaim, jitter1Array);
    const jitteredPath2 = getJitteredPath(basePathSaaim, jitter2Array);

    // Calculate path length for drawing animation
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${pathLength}`;
      pathRef.current.style.strokeDashoffset = `${pathLength}`;
    }

    // Create drawing animation
    const drawingTl = gsap.timeline({
      delay: 0,
      immediateRender: true,
    });

    // Drawing animation
    drawingTl.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.inOut",
      immediateRender: true,
    });

    // Set up the jittering animation
    const jitterTl = gsap.timeline({
      repeat: -1,
      yoyo: false,
      defaults: { duration: 0.3, ease: "sine.inOut" },
      delay: 0,
    });

    // Six-state animation sequence
    jitterTl
      .to(svgRef.current, {
        duration: 0.25,
        ease: "sine.inOut",
        onStart: () => {
          gsap.set(pathRef.current, { attr: { d: basePathSaaim } });
        },
        rotation: 0,
        transformOrigin: "center center",
      })
      .to(svgRef.current, {
        duration: 0.25,
        ease: "sine.inOut",
        onStart: () => {
          gsap.set(pathRef.current, { attr: { d: jitteredPath1 } });
        },
        rotation: -0.5, // Reduced rotation for smaller signature
        transformOrigin: "center center",
      })
      .to(svgRef.current, {
        duration: 0.25,
        ease: "sine.inOut",
        onStart: () => {
          gsap.set(pathRef.current, { attr: { d: jitteredPath2 } });
        },
        rotation: 0,
        transformOrigin: "center center",
      })
      .to(svgRef.current, {
        duration: 0.25,
        ease: "sine.inOut",
        onStart: () => {
          gsap.set(pathRef.current, { attr: { d: basePathSaaim } });
        },
        rotation: 0.5,
        transformOrigin: "center center",
      })
      .to(svgRef.current, {
        duration: 0.25,
        ease: "sine.inOut",
        onStart: () => {
          gsap.set(pathRef.current, { attr: { d: jitteredPath1 } });
        },
        rotation: 0,
        transformOrigin: "center center",
      })
      .to(svgRef.current, {
        duration: 0.25,
        ease: "sine.inOut",
        onStart: () => {
          gsap.set(pathRef.current, { attr: { d: jitteredPath2 } });
        },
        rotation: -0.5,
        transformOrigin: "center center",
      })
      .repeatDelay(0.3);

    // Master timeline to sequence the animations
    const masterTl = gsap.timeline({
      delay: 0,
      paused: false,
      immediateRender: true,
    });

    masterTl.add(drawingTl).add(jitterTl, ">");

    return () => {
      masterTl.kill();
    };
  }, []);

  const quickTimeline = [
    "- 9 - started wing chun (kung fu)",
    "- 10 - started a blog called 'things you should know', sharing interesting things i was learning",
    "- 11 - started playing games ... a lot",
    "- 12 - coded my first project - a basic website in html and css",
    "- 13 - began cold emailing random internet people. also started going to drama school",
    "- 14 - started playing the piano",
    "- 15 - did some home servicing and selling stuff at school",
    "- 16 - editing videos for a youtuber with 250k subs",
    "- 17 - cooking and baking - thought i would become a chef lol (i can't wait to host dinners in sf eventually)",
    "- 18 - joined unilever as an analyst in a <1% acceptance apprenticeship",
    "- 20 - employee #1 at an education startup - left after a month as i had a different vision to the founders. soon after, i joined an early stage b2b startup called shape - this was amazing - our ceo gave me tons of freedom and agency - i worked on hiring, sales, partnerships, and more",
    "-  21 - moved to sf and started spidey with jaivin. we were turning learning into a game, bringing the worlds best gaming mechanics to education. we gave up far too quickly and this still haunts me. after sf, i went back to the uk and joined a legal tech startup. i very quickly got fired for the first time ever, because of a disagreement with my manager. that was rough and ultimately i came to the conclusion: i'm unemployable",
    "- 22 - back in sf :)",
  ];

  return (
    <div className="flex flex-col items-start justify-start self-start text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 pt-3 sm:pt-4 md:pt-6 lg:pt-8 xl:pt-10 w-full max-w-none font-manrope px-4 sm:px-6 md:px-8 lg:px-0">
      {sentences.slice(0, 4).map((sentence, idx) => (
        <p key={idx} className="leading-relaxed">{sentence}</p>
      ))}
      
      <p className="leading-relaxed">
        currently, i'm building an ai toy that encourages limitless and open
        ended play. our goal is to create the most fun toy children have ever
        played with - a toy i wish i'd had growing up - we're still very early
        but you can check it our{" "}
        <Link
          href="https://www.lumo.so/"
          className="underline cursor-pointer transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </Link>
        ... i'm beyond grateful if you could order one or share with a friend
      </p>

      {/* 2 pictures - responsive layout */}
      <div className="flex flex-col sm:flex-row w-full items-center sm:items-start justify-between gap-4 sm:gap-2 md:gap-4">
        <PictureFrame
          width={{ mobile: 280, tablet: 200, desktop: 297 }}
          height={{ mobile: 228, tablet: 163, desktop: 242 }}
          path="/images/7.png"
          text=""
          rotateLeft={false}
          rotateRight={false}
        />
        <PictureFrame
          width={{ mobile: 280, tablet: 200, desktop: 297 }}
          height={{ mobile: 228, tablet: 163, desktop: 242 }}
          path="/images/8.png"
          text=""
          rotateLeft={false}
          rotateRight={false}
        />
        <div className="hidden sm:block">
          <PictureFrame
            width={{ mobile: 280, tablet: 200, desktop: 297 }}
            height={{ mobile: 228, tablet: 163, desktop: 242 }}
            path=""
            text=""
            rotateLeft={false}
            rotateRight={false}
          />
        </div>
      </div>

      {sentences.slice(5, sentences.length).map((sentence, idx) => (
        <p key={idx} className="leading-relaxed">{sentence}</p>
      ))}

      {/* Contact Information */}
      <div className="flex flex-col gap-1">
        <p className="leading-relaxed">
          ok, before i share some random info, if you'd like to chat, here are
          my deets:
        </p>
        <p className="leading-relaxed">- me@saa.im</p>
        <p className="leading-relaxed">
          - <Link
          href="https://x.com/saaimkn"
          className="underline cursor-pointer transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >saaimkn</Link> on x
        </p>
      </div>

      <p className="leading-relaxed">if you're still reading, here's a quick timeline of my journey:</p>
      
      {/* Quick Timeline */}
      <div className="flex flex-col gap-1">
        {quickTimeline.slice(0, 11).map((sentence, idx) => (
          <p key={idx} className="leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px]">{sentence}</p>
        ))}
        <p className="leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px]">
          - 21 - moved to sf and started spidey with{" "}
          <Link
            href="https://x.com/jaivinwylde"
            className="underline cursor-pointer transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            jaivin
          </Link>
          . we were turning learning into a game, bringing the worlds best gaming
          mechanics to education. we gave up far too quickly and this still
          haunts me. after sf, i went back to the uk and joined a legal tech
          startup. i very quickly got fired for the first time ever, because of
          a disagreement with my manager. that was rough and ultimately i came
          to the conclusion: i'm unemployable
        </p>
        {quickTimeline.slice(11).map((sentence, idx) => (
          <p key={idx} className="leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px]">{sentence}</p>
        ))}
      </div>

      <p className="leading-relaxed">
        some parts are missing - some i've forgotten, some i'll never share
      </p>

      {/* 3 Pictures - responsive grid */}
      <div className="flex flex-col sm:flex-row w-full items-center sm:items-start justify-between gap-4 sm:gap-2 md:gap-4">
        <PictureFrame
          width={{ mobile: 280, tablet: 180, desktop: 297 }}
          height={{ mobile: 228, tablet: 146, desktop: 242 }}
          path="/images/9.png"
          text="at the birthplace of silicon valley"
          rotateLeft={false}
          rotateRight={false}
        />
        <PictureFrame
          width={{ mobile: 280, tablet: 180, desktop: 297 }}
          height={{ mobile: 228, tablet: 146, desktop: 242 }}
          path="/images/10.png"
          text="at the louvre 'holding' a sword"
          rotateLeft={false}
          rotateRight={false}
        />
        <PictureFrame
          width={{ mobile: 280, tablet: 180, desktop: 297 }}
          height={{ mobile: 228, tablet: 146, desktop: 242 }}
          path="/images/11.png"
          text="ran out of photos tbh - me at 4 y/o"
          rotateLeft={false}
          rotateRight={false}
        />
      </div>

      <p className="leading-relaxed">lots of love. see you around,</p>

      <p className="leading-relaxed">saaim khan</p>
      
      {/* Animated signature */}
      <div className="w-full max-w-[138px]">
        <svg
          ref={svgRef}
          className="w-full h-auto max-w-[138px] max-h-[63px]"
          viewBox="0 0 138 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d={basePathSaaim}
            stroke="black"
            strokeWidth="3.6413"
            strokeLinecap="round"
            style={{
              visibility: "visible",
              strokeDasharray: "1000",
              strokeDashoffset: "1000",
            }}
          />
        </svg>
      </div>
    </div>
  );
}