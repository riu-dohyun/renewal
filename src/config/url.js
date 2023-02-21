export const prefix = {
  packaging: "/packaging",
  service: "/service",
  myTransaction: "/my-transaction",
};

const url = {
  home: "/",
  auth: {
    signIn: "/sign-in",
    signUp: "/sign-up",
    passwordReset: "/password-reset",
    myAccount: "/my-account",
  },
  buyer: {
    managingOrder: "/managing-order",
    packagingCreate: `${prefix.packaging}/create`,
    packagingList: `${prefix.packaging}/list`,
    packagingInProgress: `${prefix.packaging}/in-progress`,
    packagingRequest: `${prefix.packaging}/request`,
    packagingInProgressDetail: `${prefix.packaging}/in-progress/detail`,
  },
  supplier: {
    newOpportunities: "/new-opportunities",
    openOpportunities: "/open-opportunities",
    quoteRegister: "/quote-register",
    quoteView: "/quote-view",

    myTransaction: `${prefix.myTransaction}/all`,
    inProgress: `${prefix.myTransaction}/in-progress`,
    submitted: `${prefix.myTransaction}/submitted`,
    ordered: `${prefix.myTransaction}/ordered`,
    declined: `${prefix.myTransaction}/declined`,
    unSubmitted: `${prefix.myTransaction}/un-submitted`,
  },
  service: {
    termsOfUse: `${prefix.service}/terms-of-use`,
    privacyPolicy: `${prefix.service}/privacy-policy`,
  },
};

export default url;
