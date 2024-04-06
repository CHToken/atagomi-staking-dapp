import s from "./StakingPage.module.css";
import NewInfo from "../../components/NewInfo/NewInfo";
import Cards from "../../components/Cards/Cards";

function StakingPage() {
  return (
    <div className={s.root}>
      <NewInfo />
      <Cards />
    </div>
  );
}

export default StakingPage;
