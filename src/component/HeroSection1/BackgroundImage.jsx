// import React from 'react';

// function BackgroundImage() {
//   return (
//     <img 
//       loading="lazy" 
//       src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1ee5ae8a2ebbbe9cb465534014d58862db34a7dd8ad281d5a27ff97f06acd14?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" 
//       className="absolute inset-0 size-full w-full" 
//       alt=""
//     />
//   );
// }

// export default BackgroundImage;

import React from 'react';

function BackgroundImage() {
  return (
    <img 
      loading="lazy" 
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1ee5ae8a2ebbbe9cb465534014d58862db34a7dd8ad281d5a27ff97f06acd14?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" 
      className="absolute inset-0 w-full h-full object-cover" 
      alt="Background"
    />
  );
}

export default BackgroundImage;
