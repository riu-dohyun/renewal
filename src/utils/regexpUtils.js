export const regexpEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
export const regexpPassword =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
export const regexpStringNotOnly = /[^A-Za-z\s]/g;
export const regexpNumberNotOnly = /[^0-9]/g;
export const regexpNumberAndDotNotOnly = /[^0-9||\\.]/g;
export const regexpRejectPortalEmail =
  /(gmail\.com|yahoo\.com|bing\.com|naver\.com|daum\.net|baidu\.com)/gi;

export const regexpEmailTest = email => {
  return regexpEmail.test(email);
};
export const regexpPasswordTest = password => {
  return regexpPassword.test(password);
};
export const regexpStringNotOnlyTest = value => {
  return regexpStringNotOnly.test(value);
};

export const regexpRejectPortalEmailTest = value => {
  return regexpRejectPortalEmail.test(value);
};

export const regexpStringNotOnlyReplace = value =>
  value.replace(regexpStringNotOnly, "");

export const regexpNumberNotOnlyReplace = value =>
  value.replace(regexpNumberNotOnly, "");

export const regexpNumberAndDotNotOnlyReplace = value =>
  value.replace(regexpNumberAndDotNotOnly, "");
