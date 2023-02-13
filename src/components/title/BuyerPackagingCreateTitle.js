import { useTranslation } from "react-i18next";
import * as commonConfig from "src/config/common";

const BuyerPackagingCreateTitle = props => {
  const { t } = useTranslation();
  const { step } = props;
  let text = "";
  const styleStep =
    step === commonConfig.createCategoryStep.categoryStep ||
    step === commonConfig.createCategoryStep.subCategoryStep ||
    step === commonConfig.createCategoryStep.styleStep;
  if (styleStep) {
    text = t("managingPackagingCreate.step1TitleText");
  } else if (step === commonConfig.createCategoryStep.specificationStep) {
    text = t("managingPackagingCreate.step4TitleText");
  }

  return (
    <>
      <div className="relative mb-6 flex items-center justify-center xl:mb-8">
        <h2 className="text-xl xl:text-2xl">{text}</h2>
      </div>
    </>
  );
};

export default BuyerPackagingCreateTitle;
