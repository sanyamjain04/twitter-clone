import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import { getProviders, getSession, useSession } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
import Modal from "../components/Modal";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

const Home: NextPage = ({ trendingResults, followResults, providers }: any) => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
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
        {/* Widgets */}

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
