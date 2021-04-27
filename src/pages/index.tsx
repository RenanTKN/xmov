import Head from "next/head";
import { GetServerSideProps } from "next";

import App from "../components/App";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { UserProvider } from "../contexts/UserContext";
import { TranslateProvider } from "../contexts/TranslateContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  email: string;
  image: string;
  name: string;
  isAuthenticated: boolean;
}

export default function Home(props: HomeProps) {
  return (
    <TranslateProvider>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <Head>
          <title>Início | xmov</title>
        </Head>
        <UserProvider
          email={props.email}
          name={props.name}
          image={props.image}
          isAuthenticated={props.isAuthenticated}
        >
          <App />
        </UserProvider>
      </ChallengesProvider>
    </TranslateProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    email,
    image,
    name,
    level,
    currentExperience,
    challengesCompleted,
  } = ctx.req.cookies;

  if (!!email && !!name && !!image) {
    return {
      props: {
        isAuthenticated: true,
        level: Number(level),
        currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted),
        email,
        name,
        image,
      },
    };
  } else {
    return {
      props: {
        isAuthenticated: false,
      },
    };
  }
};
