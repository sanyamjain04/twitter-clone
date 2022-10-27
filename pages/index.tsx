import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import { getProviders, getSession, useSession } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
import Modal from "../components/Modal";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import Widgets from "../components/Widgets";

const Home: NextPage = ({ providers }: any) => {
  
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const trendingResults = [
    {
      heading: "T20 World Cup 2021 · LIVE",
      description:
        "NZvAUS: New Zealand and Australia clash in the T20 World Cup final",
      img: "https://rb.gy/d9yjtu",
      tags: ["#T20WorldCupFinal, ", "Kane Williamson"],
    },
    {
      heading: "Trending in United Arab Emirates",
      description: "#earthquake",
      img: "https://rb.gy/jvuy4v",
      tags: ["#DubaiAirshow, ", "#gessdubai"],
    },
    {
      heading: "Trending in Digital Creators",
      description: "tubbo and quackity",
      img: "",
      tags: ["QUACKITY AND TUBBO,"],
    },
  ];
  const followResults = [
    {
      userImg: "https://rb.gy/urakiy",
      username: "SpaceX",
      tag: "@SpaceX",
    },
    {
      userImg: "https://rb.gy/aluxgh",
      username: "Elon Musk",
      tag: "@elonmusk",
    },
    {
      userImg: "https://rb.gy/zyvazm",
      username: "Tesla",
      tag: "@Tesla",
    },
  ];
  if (!session) {
    return (
      <>
        <Login providers={providers} />
      </>
    );
  }
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto ">
        <Sidebar />
        <Feed />
        <Widgets followResults={followResults} trendingResults={trendingResults} />

        {isOpen && <Modal />}
      </main>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      providers,
      session,
    },
  };
}

export default Home;
