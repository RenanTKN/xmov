import { useContext } from "react";

import { ChallengesContext } from "../contexts/ChallengesContext";
import { useTranslate } from "../lang/translate";

import styles from "../styles/components/CompletedChallenges.module.css";

export const CompletedChallenges = (): JSX.Element => {
  const { challengesCompleted } = useContext(ChallengesContext);
  const { translate } = useTranslate();

  return (
    <div className={styles.completedChallengesContainer}>
      <span>{translate("challengesCompleted")}</span>
      <span>{challengesCompleted}</span>
    </div>
  );
};
