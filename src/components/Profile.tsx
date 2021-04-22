import { useContext } from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { ChallengesContext } from "../contexts/ChallengesContext";
import { UserContext } from "../contexts/UserContext";

import styles from "../styles/components/Profile.module.css";

export const Profile = (): JSX.Element => {
  const { level } = useContext(ChallengesContext);
  const { name, image, logout } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <img src={image} alt={name} />
        <div>
          <strong>{name}</strong>
          <p>
            <img src="icons/level.svg" alt="Level" />
            Level {level}
          </p>
        </div>
      </div>
      <div className={styles.logout}>
        <Tooltip title="Logout">
          <IconButton aria-label="Logout" component="span" onClick={logout}>
            <ExitToAppIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};
