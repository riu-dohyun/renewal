import i18n from "@/i18n/i18n";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import flagCn from "src/assets/common/flag_cn.svg";
import flagKo from "src/assets/common/flag_ko.svg";
import flagUsa from "src/assets/common/flag_usa.svg";
import * as commonActions from "src/store/common.store";
import LangItem from "../item/LangItem";

const LangSelect = props => {
  const dispatch = useDispatch();
  const { lang } = props;
  const langRef = useRef(null);
  const [active, setActive] = useState(false);
  const langList = [
    { lang: "en", img: flagUsa },
    { lang: "ko", img: flagKo },
    { lang: "cn", img: flagCn },
  ];

  const showSelectBox = () => {
    setActive(!active);
  };

  const i18nOnChange = e => {
    const target = e.currentTarget;
    const value = target.dataset.lang;
    i18n.changeLanguage();
    dispatch(commonActions.setLang(value));
    setActive(false);
  };

  useEffect(() => {
    function langClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setActive(false);
      }
    }
    document.addEventListener("mousedown", langClickOutside);
    return () => {
      document.removeEventListener("mousedown", langClickOutside);
    };
  }, [active]);

  return (
    <div className="dropdown-container relative flex" ref={langRef}>
      <div
        className="dropdown-control relative flex cursor-pointer flex-wrap items-center justify-between p-1.5 px-1 transition hover:text-gray-900 sm:px-3"
        onClick={showSelectBox}
      >
        <div className="dropdown-value-container relative flex flex-1 flex-wrap items-center overflow-hidden">
          <div className="dropdown-value flex items-center overflow-hidden text-sm font-semibold">
            {lang ? lang.toUpperCase() : langList[0].lang.toUpperCase()}
          </div>
        </div>
        <div className="dropdown-arrow-container flex shrink-0 items-center self-stretch">
          <div aria-hidden="true" className="dropdown-arrow flex">
            <span className="material-symbols-outlined text-[20px]">
              arrow_drop_down
            </span>
          </div>
        </div>
      </div>
      <div
        className={`dropdown-menu absolute top-[100%] z-10 ${
          !active && "hidden"
        } w-16 rounded border bg-white shadow-sm sm:w-full`}
      >
        {langList.map((item, idx) => (
          <LangItem
            key={idx}
            lang={item.lang}
            langImg={item.img}
            onClick={i18nOnChange}
          />
        ))}
      </div>
    </div>
  );
};

export default LangSelect;
