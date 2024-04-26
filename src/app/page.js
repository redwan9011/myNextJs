"use client"
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <Link  href="/contact"> contact</Link>
      <h2>Counter: {counter}</h2>
     <button className="btn btn-primary " onClick={()=> setCounter(counter +1)}>Increase</button>
     <button className="btn btn-primary" onClick={()=> setCounter(counter-1)}>Decrease</button>
    </div>
 
  );
}
