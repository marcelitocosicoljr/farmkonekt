import Image from "next/image";
import Sidebar from "./components/layout/Sidebar";
import Greetings from "./components/views/services/Greetings";
import Services from "./components/views/services/Services";
import IconTextBtn from "./components/ui/button/IconTextBtn";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-4 ">
      <Sidebar />
      <div className="flex flex-col w-full px-8 pt-8 pb-5 gap-8">
        <Greetings />
        <Services />
        <div className="flex-1" />
        <div className="w-full justify-end flex gap-6 font-semibold text-fk-grey">
          <Link href="tel:+63 (48) 7173627" target="_blank">
            <IconTextBtn name="Call Us" icon="material-symbols:call" />
          </Link>
          <p className="text-grey text-sm"> | </p>
          <Link href="mailto:admin@farmkonekt.com" target="_blank">
            <IconTextBtn name="Contact Us" icon="ic:baseline-email" />
          </Link>
        </div>
      </div>
    </main>
  );
}
