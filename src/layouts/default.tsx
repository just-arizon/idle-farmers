import FooterSection from "@/components/footer";
import { Link } from "@heroui/link";



export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      {/* <Navbar /> */}
      <main className="">
        {children}
      </main>

      <FooterSection />
    </div>
  );
}
