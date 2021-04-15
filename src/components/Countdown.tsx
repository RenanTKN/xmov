import { useContext } from "react";
import { Grid } from "@material-ui/core";

import { CountdownContext } from "../contexts/CountdownContext";

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

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <Grid container>
      <Grid item xs={12} className={styles.countdownContainer}>
        <Grid container justify="center" wrap="nowrap">
          <Grid item>
            <span>{minuteLeft}</span>
            <span>{minuteRight}</span>
          </Grid>
          <Grid item component="span">
            :
          </Grid>
          <Grid item>
            <span>{secondLeft}</span>
            <span>{secondRight}</span>
          </Grid>
        </Grid>
      </Grid>
      {hasFinished ? (
        <button className={styles.countdownButton} disabled>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </Grid>
  );
};