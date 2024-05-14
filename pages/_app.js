import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ProgressBar from "./components/ProgressBar";
import { useProgress } from "./hooks/useProgress";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const progress = useProgress();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      progress.start();
    });
    router.events.on("routeChangeComplete", () => {
      progress.done();
    });
  }, [])
  
  return (
    <>
    <ProgressBar progress={progress} />
      <Component {...pageProps} />
    </>
  );
}
