import React from "react";
import FloatingButtonItem from "./FloatingButtonItem";

const buttonItems = [
  { src: "https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/36c04a381021d6ed0dbaec9b8756e3ae47c2ff386521fc4b3daae18efb9d81b1?apiKey=057aab5311cf46f4b038f586fb84e77f&", alt: "First floating button item" },
  { src: "https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/decc96c76405f8db04eb2837b7a568389ad605c8d06228cb80ee35d8c6c8046f?apiKey=057aab5311cf46f4b038f586fb84e77f&", alt: "Second floating button item" },
  { src: "https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/518517873b19fd9baa34299e76deb06faf721dcf13214a8fd5dcd687ab7e27d5?apiKey=057aab5311cf46f4b038f586fb84e77f&", alt: "Third floating button item" },
];

function FloatingButton() {
  return (
    <div aria-label="Floating navigation" 
    className="  flex active:scale-95 flex-col fixed  bottom-16 right-2 z-50 max-w-[50px] w-auto flex-col ">
      {buttonItems.map((item, index) => (
        <FloatingButtonItem
          key={index}
          src={item.src}
          alt={item.alt}
          // className={index > 0 ? "mt-2" : ""}
          // src={item.src}
          // alt={item.alt}
          className={`w-6 h-10 ${index > 0 ? "mt-4" : ""} scale-75 opacity-50 hover:opacity-100 hover:scale-100 transition-transform duration-300 ease-in-out`}
        />
      ))}
    </div>
  );
}

export default FloatingButton;



