import Head from "next/head";
import { GetServerSideProps } from "next";
import { Container, Grid } from "@material-ui/core";

import { ChallengesProvider } from "../contexts/ChallengesContext";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Head>
        <title>Início | xmov</title>
      </Head>
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
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
