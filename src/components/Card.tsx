import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  name: string;
};

export function Card({ image, name }: Props) {
  return (
    <div className="flex flex-col items-center p-1 w-[158px] sm:w-[178px]">
      <Image
        alt="tv show image"
        src={image}
        width={160}
        height={250}
        className="h-[210px] sm:h-[237px] w-full bg-gray-300 transition-all"
      />
      <p className=" text-left py-2 font-semibold">{name}</p>
    </div>
  );
}

//////LOADING PLACEHOLDER FOR EACH FILM ///////

// export function CardLoading() {
//   return (
//     <div className="animate-pulse flex flex-col items-center p-1 w-[158px] sm:w-[178px]">
//       <div className="h-[210px] sm:h-[237px] w-full bg-gray-300 transition-all" />
//       <p className=" text-left py-2 font-semibold bg-gray-300" />
//       <p className=" text-left py-2 font-semibold bg-gray-300" />
//     </div>
//   );
// }
