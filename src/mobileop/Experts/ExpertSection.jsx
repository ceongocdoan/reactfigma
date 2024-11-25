import * as React from "react";
import ExpertCard from "./ExpertCard";

const experts = [
  {
    name: "Vũ Đăng Minh",
    experience: "Kinh nghiệm 07+ năm",
    role: "CTO-NSGEDU",
    image: "https://s3-alpha-sig.figma.com/img/bc5d/14cc/e3e2f57a67fca1ea5606e0825b72750b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kGVG~BrX34rSKvTPQzVM-LzGw0bWnxcP0qHp0kCT8GKPH0q0l2QTsp6eJk2EJ72sCLmMixPLl2gKDoz06P7qcF31OLyNfsPC-mafOdsc89iURQ5dh65IDyBoOVqr8hEZooHsVxmKpLUq~vW3hOMVpegsu0-NingqxYtF0P9QVmTlVQgIT8y554fQKYQAVvtv-ejQkVBg1bgpMa~5mZYQQftTR0JIRCqT2BRWW1uLHFzHFNJKKTxCTy9UOOaHdy4--oAlFX4xA-5q1qFnBqBn5GZGdPqom7gYfrQi87GqwniW4qCQ3xxQ-yxCSw1RD0-FKIYOGPIyUCuaocVcnyPdkw__"
  },
  {
    name: "Lê Mạnh Tuấn",
    experience: "Kinh nghiệm 17+ năm",
    role: "CEO-Xanh House",
    image: "https://s3-alpha-sig.figma.com/img/e95a/672f/d8b660604ea320cb6678a195f82b411c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hgx5ZWlDL9hGv364FwNQiyWZpp0vFDceLN7y1NKBE7wfGH1okQsr7fQpdSFeK4GOklMMQ5N854N70z4iyc8G~BHwL-6gM0zLTYC5Q-pednQMtUopbXUOxJgY7RfUN9PuiZwl8yToRdn4q2h7gIdGOf9OGtX05Bl792Pohm3XDg8o1mJizdJxi-zTDU1nmymzje6ucyL0vgWqq0tL9cecwNPkdmA~zGOmVfArwBevBnRq9Gr~R8HaBLWGJZyw2qK-yj3aMP2fwjkWSy5AUMO6PrLSGJqha3bfhl5P-rNJ4gjO3sViIyBXK4qpA-mOig2WsQmms~3~uQ~W4MBDs7EpXQ__"
  },
  {
    name: "Lưu Quốc Tuấn",
    experience: "Kinh nghiệm 17+ năm",
    role: "Chairman-Toprate", 
    image: "https://s3-alpha-sig.figma.com/img/ee44/0ca7/93ee70922f320a616b93ed7b6930d4ed?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L4dpwuHQdFy5m4YFswm7qHNBkGZ0jvwYOr6J8YKeWxRG87qmAQGMh0eQbagjgbEddguhEQ-~RvYeQsq2K9rpQEfbNhNfbaS0Y~lKNf8FRXf4TacmatOzvf~FUKrVEh0X8P4cBq4eeeJn-PB7ACnzsBOuxoF1rRwYyNui80146H-Z6yNtICENN~rvUfEcJ2izDO~zkPve7TJJVkkUtdadCRjEeXL2X1vL3LEYlxdbnuW6RErTrFbd-2a2gOGRyn~ISCK3w4RlUZLS5IBMbjICV9dypg5xnBNTRF6kPSYY1Z-CC2xPiEX9wh1FGVCd-y0kccjmr~2YwlCdFhGIgCw0Gw__"
  }
];

function ExpertSection() {
  return (
    <main className="flex overflow-hidden flex-col py-16 mx-auto w-full bg-gray-50 max-w-[480px]">
      <header className="flex items-start px-4 w-full font-semibold">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
          <h1 className="flex flex-col w-full text-3xl leading-10 text-gray-900">
            Lộ trình học do đội ngũ chuyên gia dày dặn kinh nghiệm thiết kế
          </h1>
          <div className="flex flex-col mt-8 w-full text-base leading-6 text-white">
            <button className="transition transform hover:bg-blue-400 active:scale-95 flex overflow-hidden gap-1.5 justify-center items-center px-5 py-3 w-full bg-sky-600 rounded-lg border-2 border-solid shadow-sm border-white border-opacity-10">
              Đăng ký tư vấn ngay!
            </button>
          </div>
        </div>
      </header>
      <section className="flex flex-col px-4 mt-12 w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full space-y-6">
            {experts.map((expert) => (
             
             <ExpertCard key={expert.name} {...expert} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ExpertSection;