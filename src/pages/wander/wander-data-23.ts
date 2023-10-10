import bitalli from "../../imgs/wander/2023/bitalli.webp";
import ellena from "../../imgs/wander/2023/ellena.webp";
import bitalliMin from "../../imgs/wander-min/2023/bitalli-min.webp";
import ellenaMin from "../../imgs/wander-min/2023/ellena-min.webp";

interface StoriesProp {
  name: string;
  src: string;
  placeholderSrc: string;
  text: string;
  translation: string;
}

const stories: Array<StoriesProp> = [
  {
    name: "bitalli",
    src: bitalli,
    placeholderSrc: bitalliMin,
    text: "",
    translation: "",
  },
  {
    name: "kesya",
    src: "kesya",
    placeholderSrc: "kesya",
    text: "",
    translation: "",
  },
  {
    name: "stepanova",
    src: "stepanova",
    placeholderSrc: "stepanova",
    text: "",
    translation: "",
  },
  {
    name: "ballentin",
    src: "ballentin",
    placeholderSrc: "ballentin",
    text: "",
    translation: "",
  },
  {
    name: "ellena",
    src: ellena,
    placeholderSrc: ellenaMin,
    text: "",
    translation: "",
  },
];

export default stories;
