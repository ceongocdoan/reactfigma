import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const universityPartners = [
  { id: 1, src: "https://s3-alpha-sig.figma.com/img/a066/e346/abe5e629b4d25bfccda83ef8f99ea2b3?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YPhTwJIQtIl3zg89Jkh4gjndupohLRSlzfFpe8OaXxxqyZ0mvssB1IPH2uotTOZyUOTZ1SVrD9Q~O7sS0obbxy5W1GmknK~veQ~FWVq-3xSJGI6DXDxfHZUi9yHp425Uc~aBOk7ZPEmJWvFdEUx6n-Yw6XJysr8jxq760ko10LCykr-wp09YxLudEMHjZJlnmeoDnqDsxI8guz-WKj6mphMoROeyw73nkvbXzPeNkwGfaVNvEzFCgWORD077mIhVVeeraeMLLswpG1aL9aH1zhIzDQ7yQz2OX4poVdnBTV-R-bTNERPKQY4sp8aBHrove-tkMOXq0WS-F9wULDhPYA__", alt: "University Partner 1" },
  { id: 2, src: "https://s3-alpha-sig.figma.com/img/85c8/1e8f/1b13627261fe2a01da6c0ea19e1523cc?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JuTw6tAsftQ8ikW3yT5Qe~ttuB4PZyzEBpHiw69MRYa6p9HcNG0Ow9kKPRPxQ~XXqjZf8kn-bkllv4g5wgVGj3NsQlwpn8taBEKGvy3u73XLG2gm38QcA~1jCcs6p0SirX8ly34LOIOPTfPg-oVZKMyU6NxPBO-Y~jzQZWaPJLEYczZIHu-JIPOwt57gAj2hUq9n30EK4FD5jZGY21vk4UGlw514W6VNsNY6ZmHNQvnti-TTyylbXelc8v0~W~i0tjc0lcUGrT7ieyHTG1trY8smSNHmQPV5DCNVHmd0x4XgJ0qQNCL9rI2aoWLkZ~6MjTnI997g1swrtFoN0gjNXA__", alt: "University Partner 2" },
  { id: 3, src: "https://s3-alpha-sig.figma.com/img/6362/4cb9/1df79fd6d40df5bddf58910d476fa0fd?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=puH9NWTomJdWxb1CM~fLoYNBqc-sNF0CCWzglvr6~dhuJmMS2beUx1Mcz4aXq83oeRQtcmMjEHyoCwGSPc86dHCRFRFKYsZRRFCiEMvG-VRNOyWOImmAntt8KmORyEd0r8nQ6l~dBJwhjgnOm2ZdeZpm31u-su8lelawRkGTzX-kdYQ5~GtyqbO6OZJLYQWmr3p8YrpYLySDgQHs6tBr~BF3brTd8iYNGdg97v969i6vooAaoppJnNlnylIK9X2l1EleYC0EGwI1ykH72Q3RD0905W~-HpZNMGjJOfnS0MaRXrKNnNGUwkQFsnv8xXYh61QuCOP9RuHIMV5sKxf3eg__", alt: "University Partner 3" },
  { id: 4, src: "https://s3-alpha-sig.figma.com/img/336a/49bc/245a41af5b1af0c734eaf23810919fc5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WRNiz40OvgdpC0QqpRjWsETDjY19PJYD2t-L2gWO6kaFaZ8Wb8hNLHAWlrJEkuuJLEvp5a5Whpy~6vBcAMnB-ErcN16qPxsRFKP6LKAW1aJDMRBMdkd0cJJs5xU7XV9lH6W~M1u7J1vJXK-ghAu~a6gTeBsRuI8vtb2d1lC5JA-HY2OeymVg9FcIuZ1E6brmQJvaJfIcQYsnpKs0oJCBjapkys41XbbiBYIhgjSQQUPSEpJUp-3xmsLakp~JeU2kWyZX2oviJvjOcY1cWUJgQ63CEbGh6on8zNLGvFwFS-KF0uVIH47jkGDjxL37UwlLR45jph7vS9azw3ItMkur8Q__", alt: "University Partner 4" },
  { id: 5, src: "https://s3-alpha-sig.figma.com/img/8d7c/53e6/6ad7029d9a0106b8d811b439983fad63?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l~x7zOYzuGZqeQod5U4CFTw4jxGGuIYjYGBWiQfTLu-~UBeNLodTPh4g6UAB64ZePW--w2FG9~PD8ngW9A9qaJHARPJ4hguHaJcKChiYoW9Avt~F5W7ke22C-d8s1L-DL-xIz1hAADqGt5GpR8zkxn0W2QE99l4v7Z8blkLald3rA3ukM~Vdv0RLrjUdQoiTIvP8zP3Wd9MOwIJEOWFYo2EvYAsHOh4AhK9RIw~kWyf7nohbQQBjP6cAsKkP1MI8pjfMHi8xm4BnVwWomd9IByHZ-M4TcLN-k9IYkamYlDHYuc5QnjYqXxzvmNzfPUQZsSD5xZ0aCyz-hzWBz44alA__", alt: "University Partner 5" },
];

const technologyPartners = [
  { id: 1, src: "https://s3-alpha-sig.figma.com/img/6521/080f/b00b3aa41b4270f9f385000653ac7a89?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k0Ly~5VLf6BWsME2lZPx96K6adpJEBp7E510qsl7MorW7r6AheqgXycid8Q9eG8fgOgRnPNNNYoBoUFzeYIMKXU70F35sTyAu-NjFJnE3438pLyekV6eqzZbyhQove8Cvv7dVeSCBJOj2UIYik2kKCnluNHnlc3r0zIUZo4DAccVO8FotaavvsUaKDA7MzXsAdIxSX1Y5yZAWrjM-q8C1b1rpmfd4U8aWPI3O-8jnwJW1ASYllkbcMuFpElFnNJIA03pMtcONAnrWqB-GWF74miIPmNzk8dHUr5CapWyJDdwRKurGWrrhlMvDwiKPiL7-PHzU7rYdhPahu8YV87sHQ__", alt: "Technology Partner 1" },
  { id: 2, src: "https://s3-alpha-sig.figma.com/img/a5d4/8c09/960bea9ea99638282e277cc1005671f7?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fGpNzIL6EulTh8m7hkbj7f1fY-aI9p7t5jxIiJ40AcXszrTMGuU0blhb0XbE0RV1N-VuqvWEWuVIOBdtyXOljS4KniKWGp143ZarHBxEohgMAM0UXnLIRdP9R33SOu7Jfp5dDSZXr8jw9tfNFXaABhFfOokbuO6Qf6jNqVxLUa-ofgETMOs8mdOeDWkSwK7oGWG3QeCxIrTpePcUu-HpM1U8GJjP~oM4gmcSkJukY7IrprZUPeZW6xu6Mfe7HtdwVUcNXBrwbOTsh7eOc27X4Cn2kGOVqg5yF-wikX~43emXYg47AsuWRXFx6345NQ1sRVUEwLKNsbryIFFa6KXN8A__", alt: "Technology Partner 2" },
  { id: 3, src: "https://s3-alpha-sig.figma.com/img/c675/f1eb/5b65ac3af40cb0a5987d4a654eb40bb0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UdJd-xkJlfY1gZKhPCNszrzQBquUAMGfUwFTvefHVnqKH03dtdme1QQUBtQhWX4XOUHMqjuk34kIEDHd7vi8p0jjDDx6jZVYEoedf-C7aqiKEsZdJXnYrUVeJ9RVby7gPEwFkyYO1SXYKHm2cdEWNcv9HwXRqjDg2Cv4ayAZoeVA~pN-lB4cSx5oBV5RBx~Y-zOki6RqGNhkxal39VwJT9U80ysGVFvSsXuj5K0~EwtOYfxoffrIi4RTiQOOxV3Q2VopBg7lWoVZ-iAhC-aFuHUdr7t4e7qjFAN8qrC0jf0qjC-18ga8EPDIuAYdTXU~QRcHPYdlJ8AoaB3~XsEEjw__", alt: "Technology Partner 3" },
  { id: 4, src: "https://s3-alpha-sig.figma.com/img/c8d4/1038/8e9dc511e440e046527527448d53e769?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yl9DPpHJSj2B~C9Frc9CbhrhSQKGPDhhntQiyi4SirPbrQ6bbV-Ov3FOxPRNwgRh6SH9gMVnlHQAgz806apL2fSGHjHaQhW5GDCSUwJLEnTtqwLnsb10SdbaSfzSan~htQWpahHIvnEKMxDMBDy3J9Bq3PKbkDapCVkdhCu3lzDmTKu5ARQEptqC0PS9-rv4ft4Xjqcsl05N-2uMAAGcN7aueWPqX2oMyrbnzemQfB7vD-w1gQ7R~MACsmiRZo~FAj1LvI6qhVKBypWX01hDcSD8kELKOMJa0L2fyoFB7gYcYUyoV1kaQiglyV7b45KoRrJuKi~0d295HU2UIUS9JQ__", alt: "Technology Partner 4" },
  { id: 5, src: "https://s3-alpha-sig.figma.com/img/88c6/3659/c178db917468a2f953558ea665a43486?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdTIqLdlxWV0PVIIGaezPGzveifzJek5JuHDB3HCwkBGYlOtRa88gb8ezpUcdT1AOPbkNMIch7AvME1Vhc5TZr544yNHCvzhexIfV4ZwzvxJCMSHuPvuJP6XkxIPZtmFVM4DDmoZG5o-sf8wgJBg7EA2KaSHHPA2BlC5OkBsjDxL7H3rhWDDEcs-p-xSUYl5zVggM0rbrCR~9dQ7xY674Qf2UMUWm8Q6m-8o5ELuhwdSLFGLUjj2BoqFnUIGm857n2W9kulWP0yTOOSP1oYBroMGZcP0hsVxX7eY9TIZeIqn4Euvb-nkcGoJ~q~3EoKCIGrP2mq6Ke0coRW7zKCTmw__", alt: "Technology Partner 5" },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function UniversityPartnersMobile() {
  return (
    <section className="px-4 py-8 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-4">Đối tác trường đại học</h2>
      <Slider {...sliderSettings}>
        {universityPartners.map((partner) => (
          <div key={partner.id} className="p-4">
            <img src={partner.src} alt={partner.alt} className="mx-auto w-48 h-auto object-contain" />
          </div>
        ))}
      </Slider>

      <h2 className="text-2xl font-semibold text-center mt-12 mb-4">Đối tác công ty công nghệ</h2>
      <Slider {...sliderSettings}>
        {technologyPartners.map((partner) => (
          <div key={partner.id} className="p-4">
            <img src={partner.src} alt={partner.alt} className="mx-auto w-48 h-auto object-contain" />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default UniversityPartnersMobile;
