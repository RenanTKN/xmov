import { useContext, useState } from "react";
import {
  Backdrop,
  Button,
  Fade,
  Grid,
  IconButton,
  Modal,
  Tooltip,
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";

import { ChallengesContext } from "../contexts/ChallengesContext";
import { UserContext } from "../contexts/UserContext";

import styles from "../styles/components/Profile.module.css";
import { useTranslate } from "../lang/translate";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& h2": {
        borderBottom: "thin solid rgba(0, 0, 0, 0.25)",
        paddingBottom: 5,
        marginBottom: 15,
      },
      "& button": {
        float: "right",
      },
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "thin solid rgba(0, 0, 0, 0.05)",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(3),
      borderRadius: 5,
    },
  })
);

export const Profile = (): JSX.Element => {
  const { level, challengesCompleted } = useContext(ChallengesContext);
  const { name, image, email, logout } = useContext(UserContext);
  const { translate } = useTranslate();

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

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
        <Tooltip title={translate("settings")}>
          <IconButton aria-label="Logout" component="span" onClick={openModal}>
            <SettingsIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={closeModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">{translate("settings")}</h2>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <p>
                    {name} | {email}
                  </p>
                </Grid>
                <Grid item>
                  <p>Level: {level}</p>
                </Grid>
                <Grid item>
                  <p>
                    {translate("challengesCompleted")}: {challengesCompleted}
                  </p>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<ExitToAppIcon />}
                    onClick={logout}
                  >
                    {translate("logout")}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};
