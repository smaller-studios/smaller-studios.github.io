import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Benefits with Smaller Studios",
  desc: "Some of the reasons to choose Smaller Studios",
  image: benefitOneImg,
  bullets: [
    {
      title: "We Understand your customers",
      desc: "",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "We try to Improve acquisition",
      desc: "",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "We Drive customer retention",
      desc: "",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "some design benefits with smaller studios",
  desc: "we love design it is what we do",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Design",
      desc: "",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Performance",
      desc: "",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
