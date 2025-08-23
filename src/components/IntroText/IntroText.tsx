import React from "react";
import PictureFrame from "../PictureFrame/PictureFrame";
import Link from "next/link";

type IntroTextProps = {
  sentences: string[];
};

export default function IntroText({ sentences }: IntroTextProps) {
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
        some parts are missing - some i've forgotten, some i'll never share,
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
      
      {/* Responsive signature */}
      <div className="w-full max-w-[138px]">
        <svg
          className="w-full h-auto max-w-[138px] max-h-[63px]"
          viewBox="0 0 138 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M63.1152 8.87684C55.3662 8.87684 45.6956 10.2709 45.5852 19.2969C45.5452 22.566 44.8274 26.6399 47.0266 29.4171C49.0671 31.994 53.069 33.2804 56.1032 34.3648C63.4401 36.9869 66.6212 37.7406 66.6212 45.9843C66.6212 56.2265 58.9706 58.9798 49.4029 60.0027C46.2919 60.3353 39.8303 60.9225 38.0278 57.4539C37.6866 56.7972 42.4902 52.3512 42.7025 52.1314C52.6504 41.8374 62.3685 31.3392 72.6204 21.321C74.7121 19.2769 80.7115 15.0294 81.3075 11.8754C81.696 9.81941 81.9148 7.81109 82.2035 5.72832C82.3432 4.71994 82.7488 -0.37035 82.7488 3.32945C82.7488 11.5357 82.4055 19.6162 81.3464 27.7679C80.5797 33.6695 79.0768 39.5003 78.5416 45.4221C78.2475 48.6769 78.6577 58.0522 77.1392 55.13C74.6119 50.2665 80.2481 40.0634 82.2035 36.1265C87.2998 25.8652 94.4702 14.5265 103.317 6.77783C104.089 6.10169 107.338 4.39572 107.174 4.52889C101.182 9.38392 94.5294 13.3747 88.2026 17.7976C87.1308 18.5469 78.7373 22.5656 82.8657 23.7573C88.8438 25.4829 94.6964 28.6351 100.279 31.2913C100.598 31.443 107.375 34.3689 107.174 34.8521C106.894 35.5252 103.93 35.1608 103.668 35.1519C92.8936 34.7882 82.3589 34.4273 71.6075 35.8641C56.9056 37.8288 42.6638 41.7546 28.6006 46.2092C20.6281 48.7346 12.3231 51.0064 4.64289 54.3054C-5.85278 58.8138 18.288 54.206 18.4721 54.1555C37.1936 49.0194 55.438 41.9084 73.5553 35.1145C89.7956 29.0244 105.991 22.7399 121.743 15.5487C122.877 15.0311 139.681 6.00155 135.261 12.1753C127.507 23.005 119.272 33.5095 113.368 45.4596C112.413 47.3917 110.797 53.5212 110.797 51.3818"
            stroke="black"
            strokeWidth="3.6413"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}