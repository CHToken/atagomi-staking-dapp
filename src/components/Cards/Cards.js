import { SvgArbitrum } from "../../assets/svg";
import s from "./Cards.module.css";
import cn from "classnames";
import { useState } from "react";
import TextField from "@mui/material/TextField";

const Cards = () => {
  const [period, setPeriod] = useState(3);
  const [amount, setAmount] = useState("0.00");
  const doublePattern = /^[0-9]*\.?[0-9]*$/;

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (doublePattern.test(value) || value === "") {
      setAmount(value);
    }
  };
  return (
    <div className={s.root}>
      <div className={s.cardsWrapper}>
        <div className={cn(s.card, s.bnbCard)}>
          <div className={cn(s.cardTop, "bgFadeInOut", s.bnb)}>
            <div className="flex justify-start gap-1">
              <div className="bg-[#2c374b] rounded-[4px] p-[3px] text-sm tracking-wide">
                <SvgArbitrum />
              </div>
              <div className="bg-[#2c374b40] rounded-[4px] p-[8px] text-sm tracking-wide border border-[#2c374b]">
                Arbitrum
              </div>
            </div>
          </div>
          <div className={s.cardContent}>
            <div className={cn(s.svgIcon, "bg-[#2c374b]")}>
              <img src="assets/png/atagomi1.png" alt="Atagomi" />
            </div>
            <div className="my-4 text-3xl">ATAGOMI</div>
            <div className="w-full flex items-center justify-between">
              <div className="text-lg">Staking Period</div>
              <div className="flex items-center gap-[3px] border-solid border-[2px] border-[#2c374b] rounded-[20px] bg-[#141520]">
                <div
                  className={cn(
                    "text-md p-[2px] rounded-[20px]",
                    period === 3 && "bg-[#2c374b]"
                  )}
                  onClick={() => setPeriod(3)}
                >
                  90D
                </div>
                <div
                  className={cn(
                    "text-md p-[2px] rounded-[20px]",
                    period === 6 && "bg-[#2c374b]"
                  )}
                  onClick={() => setPeriod(6)}
                >
                  180D
                </div>
                <div
                  className={cn(
                    "text-md p-[2px] rounded-[20px]",
                    period === 12 && "bg-[#2c374b]"
                  )}
                  onClick={() => setPeriod(12)}
                >
                  360D
                </div>
              </div>
            </div>
            <div className="my-2 w-full flex items-center justify-between">
              <div className="text-lg">Total Staked</div>
              <div className="text-lg">0</div>
            </div>
            <div className="my-2 w-full flex items-center justify-between">
              <div className="text-lg">You Staked</div>
              <div className="text-lg">0</div>
            </div>
            <div className="my-2 w-full flex items-center justify-between">
              <div className="text-lg">Claimable Reward</div>
              <div className="text-lg">0</div>
            </div>
            <div className="mt-4 mb-2 w-full flex items-center justify-between">
              <TextField
                variant="outlined"
                placeholder="Enter an amount"
                onChange={handleInputChange}
                value={amount}
                className={s.amountInput}
                inputProps={{
                  pattern: "[0-9]*\\.?[0-9]*", // Pattern attribute for input element
                  inputMode: "numeric", // Input mode for virtual keyboards (optional)
                  maxLength: 10, // Maximum length of input (optional)
                }}
              />
            </div>
            <div className="my-2 w-full flex items-center justify-between">
              <div className={s.connectWallet}>CONNECT WALLET</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
