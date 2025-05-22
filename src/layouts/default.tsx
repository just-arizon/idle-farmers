import FooterSection from "@/components/footer";
// import { Navbar } from "@/components/navbar";





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
