
import Counter from "@/Components/Counter/Counter";
import Redwan from "@/Components/Redwan/Redwan";
import Teampage from "@/Pages/TeamPage/Teampage";
import Link from "next/link";
import error from "./error";


export default function Home() {
//  throw new error()
  return (
    <div>
      <Link  href="/contact"> contact</Link>
    <Counter></Counter>
    <Redwan></Redwan>
    <Teampage></Teampage>
    </div>
 
  );
}
