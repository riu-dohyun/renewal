import Image from "next/image";
import { useEffect, useState } from "react";
import cnImg from "src/assets/common/flag_cn.svg";
import koImg from "src/assets/common/flag_ko.svg";
import usaImg from "src/assets/common/flag_usa.svg";
import { country } from "src/config/common";

const CountryImageItem = props => {
  const { national } = props;
  const [nationalFlag, setNationalFlag] = useState(null);
  useEffect(() => {
    if (national === country.ko) {
      setNationalFlag(koImg);
    } else if (national === country.usa) {
      setNationalFlag(usaImg);
    } else if (national === country.cn) {
      setNationalFlag(cnImg);
    } else {
      setNationalFlag(usaImg);
    }
  }, []);
  return <Image src={nationalFlag} className="w-4" alt="" />;
};

export default CountryImageItem;
