import { Roboto, Cantarell } from "next/font/google";
import DesktopWrapper from "@/app/components/mainBackground";
import MainContent from "@/app/components/mainContent";
import Panel from "@/app/components/panel/main";
import Dock from "./components/dock/main";
const cantarellFont = Cantarell({
  weight: ["400", "700"],
  subsets: ["latin"], // Specify the subset(s) you want to use
});
export default function Home() {
  return (
    <main className={`${cantarellFont.className} `}>
      <DesktopWrapper >
        <Panel />
        <MainContent />
        <Dock />
      </DesktopWrapper >
    </main>
  );
}
