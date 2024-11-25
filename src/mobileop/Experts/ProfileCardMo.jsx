import * as React from "react";
import StarRating from "./StarRating";

const ProfileCardMo = ({ name, experience, role, stars }) => {
  // const stars = [
  //   { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a65fab8636bc75289005dc979465666d40d02bcbf4f8fdf7f17699cf0613aece?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "Rating star 1" },
  //   { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f711616419289b80a79fe0b9b5cc68fe1de203f2262eed7187d5b5b17fc28615?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "Rating star 2" },
  //   { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c613680b22d8d1597ff264104e5105dbd5c17a0e5b7ef9a108482bcc92848ec8?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "Rating star 3" },
  //   { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/81ec87d258c42392261259a6287b6c239f34e6c1ab9a959c61f4d1b5f3c23426?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "Rating star 4" },
  //   { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6803884950b16eb16362b589eee022e1d827ecd4e3ee978e28db33bc318228fb?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "Rating star 5" }
  // ];

  return (
    <article className="flex flex-col gap-0 self-stretch px-14 py-2 border border-solid backdrop-blur-md bg-white bg-opacity-30 border-white border-opacity-30 max-w-[311px]">
      <header className="flex flex-col w-full">
        {/* <div className="flex gap-1 items-center self-start"> */}
          {/* {stars.map((star, index) => ( */}
            <StarRating stars={stars} />
         
        
        <h1 className="mt-4 text-2xl font-semibold leading-8 text-white">
          {name}
        </h1>
      </header>
      <section className="flex flex-col mt-2 w-full text-white">
        <h2 className="text-base font-semibold leading-6">{experience}</h2>
        <p className="text-sm leading-5">{role}</p>
      </section>
    </article>
  );
};

export default ProfileCardMo;
// <article className="flex flex-col gap-2 self-stretch px-4 py-6 border border-solid backdrop-blur-md bg-white bg-opacity-30 border-white border-opacity-30 max-w-[311px]">
//       <header className="flex flex-col w-full">
//         <StarRating stars={stars} />
//         <h1 className="mt-4 text-2xl font-semibold leading-8 text-white">
//           {name}
//         </h1>
//       </header>
//       <section className="flex flex-col mt-2 w-full text-white">
//         <h2 className="text-base font-semibold leading-6">{experience}</h2>
//         <p className="text-sm leading-5">{position}</p>
//       </section>
//     </article>
//   );
// };