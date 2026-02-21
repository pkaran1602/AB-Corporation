import img1 from "../../assets/Plastic/img1.png";
import img2 from "../../assets/Plastic/img2.png";
import img3 from "../../assets/Plastic/img3.png";
import img4 from "../../assets/Plastic/img4.png";
import img5 from "../../assets/Plastic/img5.png";
import img6 from "../../assets/Plastic/img6.png";
import img7 from "../../assets/Plastic/img7.png";
import img8 from "../../assets/Plastic/img8.png";
import img9 from "../../assets/Plastic/img9.png";
import img10 from "../../assets/Plastic/img10.png";
import img11 from "../../assets/Plastic/img11.png";
import img12 from "../../assets/Plastic/img12.png";
import img13 from "../../assets/Plastic/img13.png";
import img14 from "../../assets/Plastic/img14.png";
import img15 from "../../assets/Plastic/img15.png";
import img16 from "../../assets/Plastic/img16.png";
import img17 from "../../assets/Plastic/img17.png";
import img18 from "../../assets/Plastic/img18.png";
import img_1 from "../../assets/Aluminium/img1.png";
import img_2 from "../../assets/Aluminium/img2.png";
import img_3 from "../../assets/Aluminium/img3.png";
import img_4 from "../../assets/Aluminium/img4.png";
import img_5 from "../../assets/Aluminium/img5.png";
import img_6 from "../../assets/Aluminium/img6.png";
import img__1 from "../../assets/Stainless/img1.png";
import img__2 from "../../assets/Stainless/img2.png";
import img__3 from "../../assets/Stainless/img3.png";
import img__4 from "../../assets/Stainless/img4.png";
import img__5 from "../../assets/Stainless/img5.png";
import img__6 from "../../assets/Stainless/img6.png";
import img__7 from "../../assets/Stainless/img7.png";
import img__8 from "../../assets/Stainless/img8.png";
import img__9 from "../../assets/Stainless/img9.png";
import img__10 from "../../assets/Stainless/img10.png";
import image1 from "../../assets/Copper/img1.png";
import image2 from "../../assets/Copper/img2.png";
import image3 from "../../assets/Copper/img3.png";
import image4 from "../../assets/Copper/img4.png";
import image5 from "../../assets/Copper/img5.png";
import image6 from "../../assets/Copper/img6.png";
import image7 from "../../assets/Copper/img7.png";

export type ProductItem = {
  id: string;
  type: string;
  image: string;
};

export const plasticScrap: ProductItem[] = [
  { id: "plastic-1", type: "Plastic Scrap", image: img1 },
  { id: "plastic-2", type: "Plastic Scrap", image: img2 },
  { id: "plastic-3", type: "Plastic Scrap", image: img3 },
  { id: "plastic-4", type: "Plastic Scrap", image: img4 },
  { id: "plastic-5", type: "Plastic Scrap", image: img5 },
  { id: "plastic-6", type: "Plastic Scrap", image: img6 },
  { id: "plastic-7", type: "Plastic Scrap", image: img7 },
  { id: "plastic-8", type: "Plastic Scrap", image: img8 },
  { id: "plastic-9", type: "Plastic Scrap", image: img9 },
  { id: "plastic-10", type: "Plastic Scrap", image: img10 },
  { id: "plastic-11", type: "Plastic Scrap", image: img11 },
  { id: "plastic-12", type: "Plastic Scrap", image: img12 },
  { id: "plastic-13", type: "Plastic Scrap", image: img13 },
  { id: "plastic-14", type: "Plastic Scrap", image: img14 },
  { id: "plastic-15", type: "Plastic Scrap", image: img15 },
  { id: "plastic-16", type: "Plastic Scrap", image: img16 },
  { id: "plastic-17", type: "Plastic Scrap", image: img17 },
  { id: "plastic-18", type: "Plastic Scrap", image: img18 },
];

export const Stainless_Steel: ProductItem[] = [
  {
    id: "stainless-1",
    type: "Stainless Steel Scrap",
    image: img__1,
  },
  {
    id: "stainless-2",
    type: "Stainless Steel Scrap",
    image: img__2,
  },
  {
    id: "stainless-3",
    type: "Stainless Steel Scrap",
    image: img__3,
  },
  {
    id: "stainless-4",
    type: "Stainless Steel Scrap",
    image: img__4,
  },
  {
    id: "stainless-5",
    type: "Stainless Steel Scrap",
    image: img__5,
  },
  {
    id: "stainless-6",
    type: "Stainless Steel Scrap",
    image: img__6,
  },
  {
    id: "stainless-7",
    type: "Stainless Steel Scrap",
    image: img__7,
  },
  {
    id: "stainless-8",
    type: "Stainless Steel Scrap",
    image: img__8,
  },
  {
    id: "stainless-9",
    type: "Stainless Steel Scrap",
    image: img__9,
  },
  {
    id: "stainless-10",
    type: "Stainless Steel Scrap",
    image: img__10,
  },
];

export const Aluminium_Scrap: ProductItem[] = [
  { id: "aluminium-1", type: "Aluminium Scrap", image: img_1 },
  { id: "aluminium-2", type: "Aluminium Scrap", image: img_2 },
  { id: "aluminium-3", type: "Aluminium Scrap", image: img_3 },
  { id: "aluminium-4", type: "Aluminium Scrap", image: img_4 },
  { id: "aluminium-5", type: "Aluminium Scrap", image: img_5 },
  { id: "aluminium-6", type: "Aluminium Scrap", image: img_6 },
];

export const copperScrap: ProductItem[] = [
  { id: "copper-1", type: "Copper Scrap", image: image1 },
  { id: "copper-2", type: "Copper Scrap", image: image2 },
  { id: "copper-3", type: "Copper Scrap", image: image3 },
  { id: "copper-4", type: "Copper Scrap", image: image4 },
  { id: "copper-5", type: "Copper Scrap", image: image5 },
  { id: "copper-6", type: "Copper Scrap", image: image6 },
  { id: "copper-7", type: "Copper Scrap", image: image7 },
];

export const productCategories = [
  "All",
  "Plastic Scrap",
  "Stainless Steel Scrap",
  "Aluminium Scrap",
  "Copper Scrap",
] as const;

export const allProducts: ProductItem[] = [
  ...plasticScrap,
  ...Stainless_Steel,
  ...Aluminium_Scrap,
  ...copperScrap,
];
