import { useContext } from "react";
import { Paper } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { Button, ButtonGroup } from "@material-ui/core";

import { UserContext } from "../contexts/UserContext";
import { TranslateContext } from "../contexts/TranslateContext";

import styles from "../styles/components/Login.module.css";

export const Login = (): JSX.Element => {
  const { setName, setImage, setEmail, setIsAuthenticated } = useContext(
    UserContext
  );
  const { translate, setLanguage, languages } = useContext(TranslateContext);

  const successResponse = (response) => {
    const { email, name, imageUrl } = response.profileObj;

    setEmail(email);
    setName(name);
    setImage(imageUrl);
    setIsAuthenticated(true);
  };

  const failResponse = () => {
    console.log("fail");
  };

  return (
    <div className={styles.container}>
      <Paper elevation={1}>
        <h1 className={styles.title}>xmov</h1>
        <div className={styles.body}>
          <p>{translate("login")}</p>
          <div className={styles.buttonContainer}>
            <GoogleLogin
              clientId="961352676016-046aq85r52gr2p410ls1ddu2eb4c49lr.apps.googleusercontent.com"
              buttonText="Google"
              onSuccess={successResponse}
              onFailure={failResponse}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
        <div className={styles.lang}>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            {languages.map((l) => (
              <Button
                size="small"
                key={l}
                variant="outlined"
                color="primary"
                onClick={() => {
                  setLanguage(l);
                }}
              >
                {l}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </Paper>
    </div>
  );
};
