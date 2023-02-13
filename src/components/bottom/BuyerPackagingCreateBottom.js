import * as commonConfig from "src/config/common";

const BuyerPackagingCreateBottom = props => {
  const { step, changeStepClick, updateClick } = props;
  return (
    <div className="sticky bottom-0 mt-auto text-center">
      <div className="flex justify-between bg-white md:items-center md:p-4 md:shadow-[0_-10px_15px_-10px_rgba(0,0,0,0.1)] xl:px-6">
        {step > commonConfig.createCategoryStep.categoryStep && (
          <button
            onClick={e => {
              changeStepClick(e, { type: "prev" });
            }}
            className="flex w-full items-center justify-center bg-gray-500 p-4 font-bold text-white focus:bg-gray-600 md:w-auto md:rounded-full md:py-2 md:px-10"
          >
            <span className="material-symbols-outlined mr-2 text-sm">
              arrow_back_ios_new
            </span>
            Back
          </button>
        )}

        {step < commonConfig.createCategoryStep.specificationStep && (
          <button
            onClick={e => {
              changeStepClick(e, { type: "next" });
            }}
            className="flex w-full items-center justify-center bg-primary-500 p-4 font-bold text-white focus:bg-primary-600 md:ml-auto md:w-auto md:rounded-full md:py-2 md:px-10"
          >
            Next
            <span className="material-symbols-outlined ml-2 text-sm">
              arrow_forward_ios
            </span>
          </button>
        )}
        {step === commonConfig.createCategoryStep.specificationStep && (
          <button
            onClick={updateClick}
            className="flex w-full items-center justify-center bg-primary-500 p-4 font-bold text-white focus:bg-primary-600 md:ml-auto md:w-auto md:rounded-full md:py-2 md:px-10"
          >
            Create
          </button>
        )}
      </div>
    </div>
  );
};

export default BuyerPackagingCreateBottom;
