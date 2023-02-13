import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CategoryItem = props => {
  const { item, onClick } = props;
  const { t } = useTranslation();
  const [depthName, setDepthName] = useState(null);
  const depth = item.depth;

  useEffect(() => {
    if (depth === 1) {
      setDepthName("category");
    } else if (depth === 2) {
      setDepthName("subCategory");
    } else if (depth === 3) {
      setDepthName("style");
    }
  }, [depth]);
  return (
    <div
      className={`cursor-pointer overflow-hidden rounded bg-white text-center ${
        item.active
          ? "shadow ring ring-primary-500 transition-all hover:shadow-lg"
          : "transition-all hover:shadow-lg"
      }`}
    >
      <div
        className="relative w-full"
        data-depth={item.depth}
        data-code={item.code}
        onClick={onClick}
      >
        <img src={item.image} alt={item.name} className="w-full" />
        <div
          className={`absolute top-2 left-2 flex rounded-full border-2 border-white ${
            item.active ? "bg-primary-500" : "bg-gray-300"
          } p-0.5 text-white`}
        >
          <span className="material-symbols-outlined text-[20px]">check</span>
        </div>
        <h5 className="p-2 text-sm md:p-3 lg:text-base">
          {t(`${depthName}.${item.name}`)}
        </h5>
      </div>
    </div>
  );
};

export default CategoryItem;
