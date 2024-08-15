// d:/Projects/code/novels-syiemlieh/src/app/page.tsx

import Enlopment from "@/components/Enlopment";
import Featured from "@/components/Featured";
import Landing from "@/components/Landing";
import PhotographerSection from "@/components/PhotographerSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Landing />
      <Enlopment />
      <Featured />
    </>
  );
}
