export const apiAddress = "http://52.79.123.226/packapi/D";
export const prodApiAddress = "https://api.packposs.com/packapi/V1";

const endPoint = {
  // NOTE: AUTH
  signIn: "/login", // 로그인
  logout: "/logout", // 로그아웃
  signUp: "/signup", // 회원 가입
  getMyInfo: "/getMyInfo", // 내 정보 조회
  sendVerificationCode: "/sendVerificationCode", // 이메일 인증번호 요청
  updateUserPwd: "/updateUserPwd", // 비밀번호 수정
  resetUserPwd: "/resetUserPwd", // 비밀번호 리셋
  updateUserInfo: "/updateUserInfo", // 회원정보 수정
  requestAccountDeletion: "/requestAccountDeletion", // 회원 탈퇴 요청

  // NOTE: packaging
  createItem: "/createItem", // 상품 생성
  getItemList: "/getItemList", // 상품 목록 조회
  updateItem: "/updateItem", // 상품 수정
  deleteItem: "/deleteItem", // 상품 삭제
  createRfq: "/createRfq", // 견적요청 등록

  // NOTE: AWS S3 FILE
  getS3UploadUrl: "/getS3UploadUrl", // 파일 업로드 signed url 요청
  getS3DownloadUrl: "/getS3DownloadUrl", // 파일 업로드 signed url 요청
  completeS3Upload: "/completeS3Upload", // 첨부파일 정보 저장
  deleteS3File: "/deleteS3File", // 첨부파일 정보 저장

  // NOTE: estimate
  getRfqList: "/getRfqList", // 견적요청 목록 조회

  // NOTE: supplier 견적
  getOpportunityList: "/getOpportunityList", // 입찰 진행중인 견적요청 목록 조회
  createQuote: "/createQuote", // Quote 견적 임시 저장
  updateQuote: "/updateQuote", // Quote 견적 수정 후 임시 저장
  submitQuote: "/submitQuote", // Quote 견적 최종 제출
  getQuoteList: "/getQuoteList", // Quote 견적 제출한 견적 요청 목록 조회

  // NOTE: supplier && buyer 공통 API
  getQuotesByRfq: "/getQuotesByRfq", // 견적요청 및 견적 상세 조회 (Buyer && Supplier 공통)

  // NOTE: buyer order 주문 관련 API
  createOrder: "/createOrder",

  // NOTE: TAB API
  getRfqSupplierList: "/getRfqSupplierList", // 추천 생산자 조회 [buyer]
  sendRfqEmail: "/sendRfqEmail", // 선택된 생산자에게 견적 요청 메일 전송
};

export default endPoint;
