export default function ProgressBar({ progtWidth, contWidth, className='' }) {
  const progressPercent = (progtWidth / contWidth) * 100;

  return (
    <div className={`w-[287px] md:w-[604px] bg-[#0E464F] rounded-[5px] md:mt-5 h-1  ${className}`}>
      <div
        className="bg-[#24A0B5] h-1 rounded-[5px]"
        style={{ width: `${progressPercent}%` }}
      ></div>
    </div>
  );
}




