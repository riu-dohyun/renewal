import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import MaterialRadioListing from "src/components/listing/MaterialRadioListing";
import SpecCommonCheckBoxListing from "src/components/listing/SpecCommonCheckBoxListing";
import SpecCommonRadioListing from "src/components/listing/SpecCommonRadioListing";
import SizeSpec from "src/components/spec/SizeSpec";
import * as commonConfig from "src/config/common";
import * as packagingAction from "src/store/packaging.store";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";
import * as toastUtils from "src/utils/toastUtils";
import SpecCommonContainer from "./SpecCommonContainer";

const SpecificationContainer = props => {
  const { t } = useTranslation();
  const { updateStatus = false, specificationForm, submit } = props;
  const navigate = useRouter();
  const dispatch = useDispatch();
  const {
    selectedSpecification,
    selectedSpecificationDefault,
    categoryCode,
    subCategoryCode,
    styleCode,
    documentsList,
    itemId,
  } = useSelector(state => state.packaging);
  const { uid } = useSelector(state => state.user);
  const {
    sizeImage,
    sizeUnit,
    sizeSpec,
    material,
    wrappingPaper,
    printColor,
    coating,
    finish,
    extras,
    printSurface,
    easyCut,
    zipper,
  } = selectedSpecification;

  // NOTE: specification init value
  const specificationInitialValue = commonUtils.getSpecificationInitialValue(
    selectedSpecificationDefault
  );
  const specificationInitialValueIndex =
    commonUtils.getSpecificationInitialValueIndex(selectedSpecificationDefault);
  // NOTE: form onSubmit event
  const onSubmit = async () => {
    const form = specificationForm.current;

    // NOTE: require list in object 가져오기
    const requireSpecList = commonUtils.getRequireSpecList(
      selectedSpecification
    );

    // NOTE: input require check && processing
    const processingRequireSpecList =
      commonUtils.createProcessingRequireSpecList({ requireSpecList, form });

    const check = processingRequireSpecList.sizeSpec.filter(
      item => Number(item.value) < 1
    );

    if (check.length > 0) {
      toastUtils.errorToast(
        `${t("specificationContent.toast.sizeSpecErrorToast")}`
      );
      return false;
    }

    // NOTE: error 처리
    const errors = processingRequireSpecList.error;
    const errorLength = errors.length;
    if (errorLength > 0) {
      errors.map(item => {
        toastUtils.errorToast(
          `\`${t(`specificationContent.${item}`)}\` ${t(
            "specificationContent.toast.errorRequiredPrefix"
          )}`
        );
      });

      return false;
    }

    // NOTE: error 필요 없는 부분 객체 삭제
    delete processingRequireSpecList.error;

    if (!documentsList || documentsList.length === 0) {
      toastUtils.errorToast(`${t("specificationContent.toast.errorToast1")}`);
      return false;
    }

    // NOTE: common specification check
    if (!form.itemName.value || form.itemName.value.trim() === "") {
      toastUtils.errorToast(
        `\`${t("specificationContent.nickname")}\` ${t(
          "specificationContent.toast.errorRequiredPrefix"
        )}`
      );
      return false;
    }

    if (!form.contents.value || form.contents.value.trim() === "") {
      toastUtils.errorToast(
        `\`${t("specificationContent.whatDoYouPack")}\` ${t(
          "specificationContent.toast.errorRequiredPrefix"
        )}`
      );
      return false;
    }

    // NOTE: 공통 params 적용
    const params = {
      uid,
      buyerUid: uid,
      category: categoryCode,
      subCategory: subCategoryCode,
      style: styleCode,
      itemName: form.itemName.value,
      notes: form.notes.value,
      contents: form.contents.value,
      documents: documentsList ? documentsList : JSON.stringify([]),
      spec: JSON.stringify({ ...processingRequireSpecList }),
    };

    if (updateStatus === false) {
      // NOTE: CREATE
      const createParams = {
        ...params,
        navigate,
      };
      await dispatch(packagingAction.itemCreateTrigger(createParams));
    } else if (updateStatus === true) {
      // NOTE: UPDATE
      const updateParams = {
        ...params,
        itemId,
      };
      await dispatch(packagingAction.itemUpdateTrigger(updateParams));
    }
  };

  useEffect(() => {
    dispatch(packagingAction.setDefaultInit(specificationInitialValue));
  }, []);

  useEffect(() => {
    if (submit) {
      onSubmit();
    }
  }, [submit]);

  const divWrappingClass = "flex flex-col gap-4 border-b py-6";
  const radioWrappingClass =
    "grid grid-cols-2 gap-3 md:grid-cols-3 md:flex-row";

  return (
    <>
      <div
        className={`${
          updateStatus
            ? "flex flex-col pb-16 lg:px-6"
            : "flex flex-col rounded-lg bg-white px-3 py-6 shadow lg:py-12 lg:px-6"
        }`}
      >
        <div className="flex flex-col gap-4 border-b py-6 pt-0">
          <h4>
            {stringUtils.firstCharToUpperCase(
              t("managingPackagingCreate.size")
            )}
          </h4>
          {sizeImage && (
            <div className="mb-3 w-full self-start overflow-hidden rounded-lg">
              <Image
                src={sizeImage}
                className={`mx-auto w-full ${
                  updateStatus ? "max-w-[300px]" : "max-w-[500px]"
                }`}
                alt=""
              />
            </div>
          )}
          <div className="flex flex-col">
            <SizeSpec
              sizeUnit={sizeUnit}
              sizeSpec={sizeSpec}
              specificationInitialValue={specificationInitialValue}
            />
          </div>
        </div>
        {material && (
          <div className={divWrappingClass}>
            <h4>
              {stringUtils.firstCharToUpperCase(
                t("managingPackagingCreate.material")
              )}
            </h4>
            <MaterialRadioListing
              list={material.list}
              defaultValue={specificationInitialValue?.material}
              defaultValueIndex={
                specificationInitialValueIndex?.material?.index
              }
              name={commonConfig.specFormName?.material}
              selectedName={commonConfig.specFormName?.grammage}
              innerOptionDefaultValue={specificationInitialValue?.grammage}
            />
          </div>
        )}
        {wrappingPaper && (
          <div className={divWrappingClass}>
            <h4>
              {stringUtils.firstCharToUpperCase(
                t("managingPackagingCreate.wrapping paper")
              )}
            </h4>
            <MaterialRadioListing
              list={wrappingPaper.list}
              defaultValue={specificationInitialValue.wrappingPaper}
              defaultValueIndex={
                specificationInitialValueIndex?.wrappingPaper?.index
              }
              name={commonConfig.specFormName?.wrappingPaper}
              selectedName={commonConfig.specFormName?.chipBoard}
              innerOptionDefaultValue={specificationInitialValue?.chipBoard}
            />
          </div>
        )}
        {printColor && (
          <div className={divWrappingClass}>
            <h4>
              {stringUtils.firstCharToUpperCase(
                t("managingPackagingCreate.print color")
              )}
            </h4>
            <div className={radioWrappingClass}>
              <SpecCommonRadioListing
                list={printColor.list}
                defaultValue={specificationInitialValue?.printColor}
                name={commonConfig.specFormName.printColor}
              />
            </div>
          </div>
        )}
        {coating && (
          <div className={divWrappingClass}>
            <h4>
              {stringUtils.firstCharToUpperCase(
                t("managingPackagingCreate.coating")
              )}
            </h4>
            <div className={radioWrappingClass}>
              <SpecCommonRadioListing
                list={coating.list}
                defaultValue={specificationInitialValue?.coating}
                name={commonConfig.specFormName.coating}
              />
            </div>
          </div>
        )}
        {finish && (
          <div className={divWrappingClass}>
            <h4>
              {stringUtils.firstCharToUpperCase(
                t("managingPackagingCreate.finish")
              )}
            </h4>
            <div className={radioWrappingClass}>
              <SpecCommonRadioListing
                list={finish.list}
                defaultValue={specificationInitialValue?.finish}
                name={commonConfig.specFormName.finish}
              />
            </div>
          </div>
        )}
        {extras && (
          <div className={divWrappingClass}>
            <div className="flex items-center">
              <h4>
                {stringUtils.firstCharToUpperCase(
                  t("managingPackagingCreate.extras")
                )}
              </h4>
              <span className="ml-2 text-sm text-slate-400">
                (
                {stringUtils.firstCharToUpperCase(
                  t("managingPackagingCreate.duplicate selection available")
                )}
                )
              </span>
            </div>
            <div className={radioWrappingClass}>
              <SpecCommonCheckBoxListing
                list={extras.list}
                name={commonConfig.specFormName.extras}
                defaultValue={specificationInitialValue.extras}
              />
            </div>
          </div>
        )}
        {printSurface && (
          <div className={divWrappingClass}>
            <h4>
              {stringUtils.firstCharToUpperCase(
                t("managingPackagingCreate.print surface")
              )}
            </h4>
            <div className={radioWrappingClass}>
              <SpecCommonRadioListing
                list={printSurface.list}
                defaultValue={specificationInitialValue?.printSurface}
                name={commonConfig.specFormName.printSurface}
              />
            </div>
          </div>
        )}
        {easyCut && (
          <div className={divWrappingClass}>
            <h4>
              {stringUtils.firstCharToUpperCase(
                t("managingPackagingCreate.easy cut")
              )}
            </h4>
            <div className={radioWrappingClass}>
              <SpecCommonRadioListing
                list={easyCut.list}
                defaultValue={specificationInitialValue?.easyCut}
                name={commonConfig.specFormName.easyCut}
              />
            </div>
          </div>
        )}
        {zipper && (
          <div className={divWrappingClass}>
            <h4>
              {stringUtils.firstCharToUpperCase(
                t("managingPackagingCreate.zipper")
              )}
            </h4>
            <div className={radioWrappingClass}>
              <SpecCommonRadioListing
                list={zipper.list}
                defaultValue={specificationInitialValue?.zipper}
                name={commonConfig.specFormName.zipper}
              />
            </div>
          </div>
        )}
        <SpecCommonContainer
          defaultValues={specificationInitialValue}
          updateStatus={updateStatus}
        />
      </div>
    </>
  );
};

export default SpecificationContainer;
