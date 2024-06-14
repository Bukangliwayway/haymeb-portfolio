import Image from "next/image";
import { Inter } from "next/font/google";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import HeroSection from "./HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    // <AuroraBackground>
    <div className="overflow-hidden">
      <section>
        <HeroSection />
      </section>
    </div>
    // </AuroraBackground>
  );
}
