import { useContext } from "react";
import { Container, Grid } from "@material-ui/core";

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { UserContext } from "../contexts/UserContext";
import { Login } from "../components/Login";

export default function App() {
  const { isAuthenticated } = useContext(UserContext);

  return isAuthenticated ? (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ExperienceBar />
        </Grid>
        <Grid item xs={12}>
          <CountdownProvider>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </Grid>
              <Grid item md={6} xs={12}>
                <ChallengeBox />
              </Grid>
            </Grid>
          </CountdownProvider>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <Login />
  );
}
