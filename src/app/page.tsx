import Image from "next/image";
import { Connect } from "./connect";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Connect />
    </div>
  );
}
