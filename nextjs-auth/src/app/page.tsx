import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className=" text-2xl">
    <h1 className="text-4xl text-center">Welcome to my portfolio</h1>
    <Link className={buttonVariants()} href='/admin'>open my admin</Link>
   </div>
  );
}
