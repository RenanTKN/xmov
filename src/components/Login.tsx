import { Paper } from "@material-ui/core";
import { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { UserContext } from "../contexts/UserContext";

import styles from "../styles/components/Login.module.css";

export const Login = (): JSX.Element => {
  const { setName, setImage, setEmail, setIsAuthenticated } = useContext(
    UserContext
  );

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
          <p>Faça login para acessar o xmov</p>
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
      </Paper>
    </div>
  );
};
