import { useContext } from "react";
import { Grid } from "@material-ui/core";

import { CountdownContext } from "../contexts/CountdownContext";
import { TranslateContext } from "../contexts/TranslateContext";

import styles from "../styles/components/Countdown.module.css";

export const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);
  const { translate } = useContext(TranslateContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <Grid container>
      <Grid item xs={12} className={styles.countdownContainer}>
        <Grid container justify="center" wrap="nowrap">
          <Grid item>
            <div>
              <div>{minuteLeft}</div>
            </div>
            <div>
              <div>{minuteRight}</div>
            </div>
          </Grid>
          <Grid item component="span">
            :
          </Grid>
          <Grid item>
            <div>
              <div>{secondLeft}</div>
            </div>
            <div>
              <div>{secondRight}</div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      {hasFinished ? (
        <button className={styles.countdownButton} disabled>
          {translate("finishedCycle")}
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              {translate("cancelCycle")}
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              {translate("newCycle")}
            </button>
          )}
        </>
      )}
    </Grid>
  );
};
