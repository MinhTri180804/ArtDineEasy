interface IArrowDownIcon {
  strokeColor?: string;
}
const ArrowDownIcon = ({ strokeColor = '#1E1E1E' }: IArrowDownIcon) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.625 6.1875L9 11.8125L3.375 6.1875"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { ArrowDownIcon };
