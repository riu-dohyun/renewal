import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BuyerPackagingCreateBottom from "src/components/bottom/BuyerPackagingCreateBottom";
import CategoryList from "src/components/listing/CategoryListing";
import HorizonStepper from "src/components/stepper/HorizonStepper";
import BuyerPackagingCreateTitle from "src/components/title/BuyerPackagingCreateTitle";
import { category } from "src/config/category";
import * as commonConfig from "src/config/common";
import * as containers from "src/containers";
import * as packagingAction from "src/store/packaging.store";
import * as commonUtils from "src/utils/commonUtils";

const PackagingCreateContainer = () => {
  const dispatch = useDispatch();
  const {
    categoryCode,
    subCategoryCode,
    styleCode,
    step,
    selectedSpecification,
  } = useSelector(state => state.packaging);
  const specificationForm = useRef();
  const [submit, setSubmit] = useState(false);

  const commonProps = {
    category,
    step,
    categoryCode,
    subCategoryCode,
    styleCode,
  };
  let list = commonUtils.getCategory(commonProps);

  const updateClick = e => {
    e.preventDefault();
    setSubmit(true);

    setTimeout(() => {
      setSubmit(false);
    }, 0);
  };

  const itemOnClick = async e => {
    const target = e.currentTarget;
    const depth = Number(target.dataset.depth);
    const code = Number(target.dataset.code);

    list = [...list].map(item => {
      if (code === item.code) {
        item.active = true;
      } else {
        item.active = false;
      }

      return item;
    });

    if (depth === commonConfig.categoryDepth.categoryDepth) {
      await dispatch(packagingAction.setCategory(code));
    } else if (depth === commonConfig.categoryDepth.subCategoryDepth) {
      await dispatch(packagingAction.setSubCategory(code));
    } else if (depth === commonConfig.categoryDepth.styleDepth) {
      await dispatch(packagingAction.setStyle(code));
    }
  };

  const getCategoryList = () => {
    const params = [categoryCode, subCategoryCode, styleCode];
    return params;
  };
  const getCategoryObj = () => {
    const params = { categoryCode, subCategoryCode, styleCode };
    return params;
  };

  const changeStepClick = async (e, { type }) => {
    e.preventDefault();
    const categoryList = getCategoryList();
    const categoryObj = getCategoryObj();

    const getStep = await commonUtils.getStep({
      list: categoryList,
      type: type,
      step: step,
    });

    if (getStep === 0) {
      return false;
    }

    const setCategoryNull = await commonUtils.setNullCategory({
      categoryObj: { ...categoryObj },
      step: getStep,
    });
    const params = {
      ...setCategoryNull,
      category,
      step: getStep,
    };

    list = commonUtils.getCategory(params);
    list = [...list].map(item => {
      item.active = false;
      return item;
    });

    if (list.length === 0) {
      const selectedCategory = await commonUtils.getSpecification(params);
      const defaultSpecification = await commonUtils.getDefaultSpecification(
        params
      );
      if (selectedCategory) {
        const specificationObj = {
          specification: selectedCategory.specification,
          defaultSpecification: defaultSpecification,
        };
        await dispatch(packagingAction.setSpecification(specificationObj));
        params.step = commonConfig.createCategoryStep.specificationStep;
        await dispatch(packagingAction.setStep(params));
      } else if (selectedCategory === null) {
        await dispatch(packagingAction.setInitSpecificationAndCategory());
      }
    } else {
      await dispatch(packagingAction.setStep(params));
    }
  };

  const checkSpecification =
    selectedSpecification &&
    !commonUtils.checkObjectEmpty(selectedSpecification);

  // NOTE: 페이지 이동 시 데이터 초기화
  useEffect(() => {
    return () => {
      dispatch(packagingAction.setInitSpecificationAndCategory());
      list = [...list].map(item => {
        item.active = false;
        return item;
      });
    };
  }, []);

  return (
    <form className="flex h-full w-full flex-col" ref={specificationForm}>
      <div className="p-4 lg:p-6 xl:p-8">
        <BuyerPackagingCreateTitle
          step={step}
          changeStepClick={changeStepClick}
        />
        <HorizonStepper step={step} />
        {step < commonConfig.createCategoryStep.specificationStep && (
          <CategoryList list={list} onClick={itemOnClick} />
        )}
        {step === commonConfig.createCategoryStep.specificationStep &&
          checkSpecification && (
            <div className="mx-auto xl:max-w-[1200px]">
              <containers.SpecificationContainer
                specificationForm={specificationForm}
                submit={submit}
              />
            </div>
          )}
      </div>
      <BuyerPackagingCreateBottom
        step={step}
        changeStepClick={changeStepClick}
        updateClick={updateClick}
      />
    </form>
  );
};

export default PackagingCreateContainer;
