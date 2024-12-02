import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  avatar,
  bigShoe1,
  bigShoe2,
  bigShoe3,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#product", label: "Products" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Monocrystalline Panels",
    price: "$210.20",
  },
  {
    imgURL: shoe5,
    name: "Polycrystalline Panels",
    price: "$220.20",
  },
  {
    imgURL: shoe6,
    name: "Thin-Film Panels",
    price: "$230.20",
  },
  {
    imgURL: shoe7,
    name: "PERC Solar Panels",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Maintenance",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Power-Full Calculator",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Our Support",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: avatar,
    customerName: "Ahmed Adel",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: avatar,
    customerName: "Ahmed Wagih",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Mono Panels", link: "/" },
      { name: "Poly Panels", link: "/" },
      { name: "Thin-Film", link: "/" },
      { name: "PRCE Panels", link: "/" },
      { name: "Mono Super ", link: "/" },
      { name: "Poly High", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@solarlink.com", link: "mailto:customer@solarlink.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
