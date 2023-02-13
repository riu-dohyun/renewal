const LangItem = props => {
  const { lang, langImg, onClick } = props;
  return (
    <span
      className="dropdown-item flex w-full cursor-pointer items-center px-2 py-1 text-sm font-semibold hover:bg-gray-100"
      data-lang={lang}
      onClick={onClick}
    >
      <img src={langImg} className="mr-2 w-4" alt={lang} />
      {lang.toUpperCase()}
    </span>
  );
};

export default LangItem;
