import { useContext } from "react";

import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import { useTranslate } from "../lang/translate";

import styles from "../styles/components/ChallengeBox.module.css";

export const ChallengeBox = () => {
  const { activeChallenge, completeChallenge, resetChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);
  const { translate } = useTranslate();

  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountdown();
  };

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  };

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>
            {translate("getXp")} {activeChallenge.amount} xp
          </header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>{translate("newChallenge")}</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              className={styles.challengeFailButton}
              onClick={handleChallengeFailed}
            >
              {translate("failed")}
            </button>
            <button
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              {translate("completed")}
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>{translate("getNewChallenge")}</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            {translate("completeToLevelUp")}
          </p>
        </div>
      )}
    </div>
  );
};
