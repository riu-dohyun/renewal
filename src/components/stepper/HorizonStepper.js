import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const HorizonStepper = props => {
  const { t } = useTranslation();
  const { step } = props;

  const stepList = [
    { step: 1, title: t(`managingPackagingCreate.step1Text`) },
    { step: 2, title: t(`managingPackagingCreate.step2Text`) },
    { step: 3, title: t(`managingPackagingCreate.step3Text`) },
    { step: 4, title: t(`managingPackagingCreate.step4Text`) },
  ];
  return (
    <ol className="mx-auto mb-6 flex gap-3 md:gap-4 lg:mb-12 xl:max-w-[1200px] xl:gap-12">
      {stepList.map(item => (
        <Fragment key={item.step}>
          <li
            className={`w-full border-t-2 border-primary-500 py-3 ${
              item.step <= step ? "" : "opacity-30 grayscale"
            }`}
          >
            <h5 className="mb-1 text-sm text-primary-500 lg:text-base">
              {t(`managingPackagingCreate.step${item.step}`)}
            </h5>
            <p className="text-sm text-gray-700">{item.title}</p>
          </li>
        </Fragment>
      ))}
    </ol>
  );
};

export default HorizonStepper;
