import * as React from "react";
import ImageCarousel from "./ImageCarousel";
import CarouselDots from "./CarouselDots";

const universityPartners = [
  { src: "https://s3-alpha-sig.figma.com/img/a066/e346/abe5e629b4d25bfccda83ef8f99ea2b3?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YPhTwJIQtIl3zg89Jkh4gjndupohLRSlzfFpe8OaXxxqyZ0mvssB1IPH2uotTOZyUOTZ1SVrD9Q~O7sS0obbxy5W1GmknK~veQ~FWVq-3xSJGI6DXDxfHZUi9yHp425Uc~aBOk7ZPEmJWvFdEUx6n-Yw6XJysr8jxq760ko10LCykr-wp09YxLudEMHjZJlnmeoDnqDsxI8guz-WKj6mphMoROeyw73nkvbXzPeNkwGfaVNvEzFCgWORD077mIhVVeeraeMLLswpG1aL9aH1zhIzDQ7yQz2OX4poVdnBTV-R-bTNERPKQY4sp8aBHrove-tkMOXq0WS-F9wULDhPYA__", alt: "University Partner Logo 1" },
  { src: "https://s3-alpha-sig.figma.com/img/85c8/1e8f/1b13627261fe2a01da6c0ea19e1523cc?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JuTw6tAsftQ8ikW3yT5Qe~ttuB4PZyzEBpHiw69MRYa6p9HcNG0Ow9kKPRPxQ~XXqjZf8kn-bkllv4g5wgVGj3NsQlwpn8taBEKGvy3u73XLG2gm38QcA~1jCcs6p0SirX8ly34LOIOPTfPg-oVZKMyU6NxPBO-Y~jzQZWaPJLEYczZIHu-JIPOwt57gAj2hUq9n30EK4FD5jZGY21vk4UGlw514W6VNsNY6ZmHNQvnti-TTyylbXelc8v0~W~i0tjc0lcUGrT7ieyHTG1trY8smSNHmQPV5DCNVHmd0x4XgJ0qQNCL9rI2aoWLkZ~6MjTnI997g1swrtFoN0gjNXA__5", alt: "University Partner Logo 2" },
  { src: "https://s3-alpha-sig.figma.com/img/6362/4cb9/1df79fd6d40df5bddf58910d476fa0fd?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=puH9NWTomJdWxb1CM~fLoYNBqc-sNF0CCWzglvr6~dhuJmMS2beUx1Mcz4aXq83oeRQtcmMjEHyoCwGSPc86dHCRFRFKYsZRRFCiEMvG-VRNOyWOImmAntt8KmORyEd0r8nQ6l~dBJwhjgnOm2ZdeZpm31u-su8lelawRkGTzX-kdYQ5~GtyqbO6OZJLYQWmr3p8YrpYLySDgQHs6tBr~BF3brTd8iYNGdg97v969i6vooAaoppJnNlnylIK9X2l1EleYC0EGwI1ykH72Q3RD0905W~-HpZNMGjJOfnS0MaRXrKNnNGUwkQFsnv8xXYh61QuCOP9RuHIMV5sKxf3eg__", alt: "University Partner Logo 3" },
  { src: "https://s3-alpha-sig.figma.com/img/336a/49bc/245a41af5b1af0c734eaf23810919fc5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WRNiz40OvgdpC0QqpRjWsETDjY19PJYD2t-L2gWO6kaFaZ8Wb8hNLHAWlrJEkuuJLEvp5a5Whpy~6vBcAMnB-ErcN16qPxsRFKP6LKAW1aJDMRBMdkd0cJJs5xU7XV9lH6W~M1u7J1vJXK-ghAu~a6gTeBsRuI8vtb2d1lC5JA-HY2OeymVg9FcIuZ1E6brmQJvaJfIcQYsnpKs0oJCBjapkys41XbbiBYIhgjSQQUPSEpJUp-3xmsLakp~JeU2kWyZX2oviJvjOcY1cWUJgQ63CEbGh6on8zNLGvFwFS-KF0uVIH47jkGDjxL37UwlLR45jph7vS9azw3ItMkur8Q__", alt: "University Partner Logo 4" },
  { src: "https://s3-alpha-sig.figma.com/img/8d7c/53e6/6ad7029d9a0106b8d811b439983fad63?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l~x7zOYzuGZqeQod5U4CFTw4jxGGuIYjYGBWiQfTLu-~UBeNLodTPh4g6UAB64ZePW--w2FG9~PD8ngW9A9qaJHARPJ4hguHaJcKChiYoW9Avt~F5W7ke22C-d8s1L-DL-xIz1hAADqGt5GpR8zkxn0W2QE99l4v7Z8blkLald3rA3ukM~Vdv0RLrjUdQoiTIvP8zP3Wd9MOwIJEOWFYo2EvYAsHOh4AhK9RIw~kWyf7nohbQQBjP6cAsKkP1MI8pjfMHi8xm4BnVwWomd9IByHZ-M4TcLN-k9IYkamYlDHYuc5QnjYqXxzvmNzfPUQZsSD5xZ0aCyz-hzWBz44alA__", alt: "University Partner Logo 5" }
];

const techPartners = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9b9f812afbc4839b40ac0fb454bd274830e367bc93831d3c111a5ac2a03f3e9?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "Tech Partner Logo 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/89aa1cec59298541110001843a5ef7f7786e69c6e0ca4bc3279f37ae3f8c8b6a?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "Tech Partner Logo 2" },
  { src: "https://s3-alpha-sig.figma.com/img/c8d4/1038/8e9dc511e440e046527527448d53e769?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yl9DPpHJSj2B~C9Frc9CbhrhSQKGPDhhntQiyi4SirPbrQ6bbV-Ov3FOxPRNwgRh6SH9gMVnlHQAgz806apL2fSGHjHaQhW5GDCSUwJLEnTtqwLnsb10SdbaSfzSan~htQWpahHIvnEKMxDMBDy3J9Bq3PKbkDapCVkdhCu3lzDmTKu5ARQEptqC0PS9-rv4ft4Xjqcsl05N-2uMAAGcN7aueWPqX2oMyrbnzemQfB7vD-w1gQ7R~MACsmiRZo~FAj1LvI6qhVKBypWX01hDcSD8kELKOMJa0L2fyoFB7gYcYUyoV1kaQiglyV7b45KoRrJuKi~0d295HU2UIUS9JQ__", alt: "Tech Partner Logo 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "Tech Partner Logo 4" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "Tech Partner Logo 5" }
];

function PartnerSection() {
  return (
    <main className="flex flex-col justify-center px-4 max-w-[375px]">
      <section className="flex flex-col w-full">
        <h2 className="w-full text-2xl font-semibold tracking-tight leading-10 text-center text-gray-900">
          Đối tác trường đại học
        </h2>
        <ImageCarousel images={universityPartners} />
        <CarouselDots count={5} activeIndex={0} />
      </section>

      <section className="flex flex-col mt-8 w-full">
        <h2 className="w-full text-2xl font-semibold   tracking-tight leading-10 text-center text-gray-900">
          Đối tác công ty công nghệ
        </h2>
        <ImageCarousel images={techPartners} />
        <CarouselDots count={5} activeIndex={0} />
      </section>
    </main>
  );
}

export default PartnerSection;