import Image from "next/image";
import { Inter } from "next/font/google";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <AuroraBackground>
      <div className="nani h-[500vh] overflow-hidden">
        <div className="h-[40rem] flex justify-center items-center px-4">
          <div className="text-4xl mx-auto font-normal text-center ">
            Build websites with Aceternity UI
            <br />
            <FlipWords words={words} className="capitalize text-6xl" />
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
