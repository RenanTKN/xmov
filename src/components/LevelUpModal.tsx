import { useContext } from "react";

import { ChallengesContext } from "../contexts/ChallengesContext";
import { useTranslate } from "../lang/translate";

import styles from "../styles/components/LevelUpModal.module.css";

export const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  const { translate } = useTranslate();

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>{translate("congratulations")}</strong>
        <p>{translate("levelUp")}</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fecahr modal" />
        </button>
      </div>
    </div>
  );
};
