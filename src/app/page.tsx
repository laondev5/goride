import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      <h1>hello everyone</h1>
    </div>
  )
}
