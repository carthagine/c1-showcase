import { Inter } from "next/font/google";
import ProjectDashboard from '../components/ProjectDashboard';
import Carthagine from "carthagine";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <div className={inter.className}>
            Let's do some magic!
            <ProjectDashboard />
        </div>
    </>
  );
}
