import Image from "next/image";
import cnImg from "src/assets/common/flag_cn.svg";
import koImg from "src/assets/common/flag_ko.svg";
import usaImg from "src/assets/common/flag_usa.svg";
import { country } from "src/config/common";

const CountryImageItem = props => {
  const { national } = props;
  let nationalFlag;

  if (national === country.ko) {
    nationalFlag = koImg;
  } else if (national === country.usa) {
    nationalFlag = usaImg;
  } else if (national === country.cn) {
    nationalFlag = cnImg;
  } else {
    nationalFlag = usaImg;
  }

  return <Image src={nationalFlag} className="w-4" alt="" />;
};

export default CountryImageItem;
