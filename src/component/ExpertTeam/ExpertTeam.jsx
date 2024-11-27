import React from 'react';
import ExpertCard from './ExpertCard';

const ExpertTeam = () => {
  const experts = [
    {
      imageSrc: "https://s3-alpha-sig.figma.com/img/bc5d/14cc/e3e2f57a67fca1ea5606e0825b72750b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kGVG~BrX34rSKvTPQzVM-LzGw0bWnxcP0qHp0kCT8GKPH0q0l2QTsp6eJk2EJ72sCLmMixPLl2gKDoz06P7qcF31OLyNfsPC-mafOdsc89iURQ5dh65IDyBoOVqr8hEZooHsVxmKpLUq~vW3hOMVpegsu0-NingqxYtF0P9QVmTlVQgIT8y554fQKYQAVvtv-ejQkVBg1bgpMa~5mZYQQftTR0JIRCqT2BRWW1uLHFzHFNJKKTxCTy9UOOaHdy4--oAlFX4xA-5q1qFnBqBn5GZGdPqom7gYfrQi87GqwniW4qCQ3xxQ-yxCSw1RD0-FKIYOGPIyUCuaocVcnyPdkw__",
      name: "Vũ Đăng Minh",
      experience: "Kinh nghiệm 07+ năm",
      position: "CTO-NSGEDU",
      stars: 5
    },
    {
      imageSrc: "https://s3-alpha-sig.figma.com/img/e95a/672f/d8b660604ea320cb6678a195f82b411c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hgx5ZWlDL9hGv364FwNQiyWZpp0vFDceLN7y1NKBE7wfGH1okQsr7fQpdSFeK4GOklMMQ5N854N70z4iyc8G~BHwL-6gM0zLTYC5Q-pednQMtUopbXUOxJgY7RfUN9PuiZwl8yToRdn4q2h7gIdGOf9OGtX05Bl792Pohm3XDg8o1mJizdJxi-zTDU1nmymzje6ucyL0vgWqq0tL9cecwNPkdmA~zGOmVfArwBevBnRq9Gr~R8HaBLWGJZyw2qK-yj3aMP2fwjkWSy5AUMO6PrLSGJqha3bfhl5P-rNJ4gjO3sViIyBXK4qpA-mOig2WsQmms~3~uQ~W4MBDs7EpXQ__",
      name: "Lê Mạnh Tuấn",
      experience: "Kinh nghiệm 17+ năm",
      position: "CEO-Xanh House",
      stars: 5
    },
    {
      imageSrc: "https://s3-alpha-sig.figma.com/img/ee44/0ca7/93ee70922f320a616b93ed7b6930d4ed?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L4dpwuHQdFy5m4YFswm7qHNBkGZ0jvwYOr6J8YKeWxRG87qmAQGMh0eQbagjgbEddguhEQ-~RvYeQsq2K9rpQEfbNhNfbaS0Y~lKNf8FRXf4TacmatOzvf~FUKrVEh0X8P4cBq4eeeJn-PB7ACnzsBOuxoF1rRwYyNui80146H-Z6yNtICENN~rvUfEcJ2izDO~zkPve7TJJVkkUtdadCRjEeXL2X1vL3LEYlxdbnuW6RErTrFbd-2a2gOGRyn~ISCK3w4RlUZLS5IBMbjICV9dypg5xnBNTRF6kPSYY1Z-CC2xPiEX9wh1FGVCd-y0kccjmr~2YwlCdFhGIgCw0Gw__",
      name: "Lưu Quốc Tuấn",
      experience: "Kinh nghiệm 17+ năm",
      position: "Chairman-Toprate",
      stars: 5
    }
  ];

  return (
    <section className="flex overflow-hidden flex-col justify-center items-center py-24 bg-gray-50">
      <div className="flex flex-col px-8 w-full max-w-screen-xl max-md:px-5 max-md:max-w-full">
        <header className="flex flex-wrap gap-8 justify-between items-start w-full font-semibold max-md:max-w-full">
          <h1 className="flex flex-col flex-1 shrink max-w-screen-md text-4xl tracking-tighter leading-10 text-gray-900 basis-0 min-w-[320px] max-md:max-w-full">
            Lộ trình học do đội ngũ chuyên gia dày dặn kinh nghiệm thiết kế
          </h1>
          <div className="transition transform hover:bg-blue-100 active:scale-95 flex gap-3 items-start text-base leading-6 text-white">
            <button className="flex overflow-hidden gap-1.5 justify-center items-center px-5 py-3 bg-sky-600 rounded-lg border-2 border-solid shadow-sm border-white border-opacity-10">
              Đăng ký tư vấn ngay!
            </button>
          </div>
        </header>
        <div className="flex flex-col mt-16 w-full max-md:mt-10 max-lg:max-w[600px] max-lg:justify-center max-lg:items-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 w-full max-md:mt-10 max-lg:justify-center max-lg:items-center max-lg:w-[72%] max-lg:p-[30px]">
            {experts.map((expert, index) => (
              <ExpertCard key={index} {...expert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;