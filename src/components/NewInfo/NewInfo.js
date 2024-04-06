import s from "./NewInfo.module.css";
import cn from "classnames";

const NewInfo = () => {
  return (
    <div className={s.root}>
      <div className={cn(s.dot, "fadeInOut")}></div>
      <div className="mr-4 font-normal text-lg text-[#f0b90b] font-inter-sans">
        Staking
      </div>
    </div>
  );
};

export default NewInfo;
