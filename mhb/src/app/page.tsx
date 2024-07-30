import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="bg-[#CDE6F5] flex flex-col justify-center items-center">
        <div className="h-96 flex flex-col justify-center items-center">
          <h1 className="bg-[#25436C] text-[#8DA7BE] text-5xl py-4 px-8 rounded-3xl">
            Halo Dunia!
          </h1>
        </div>
        <div className="h-96"></div>
      </main>
      <Footer />
    </>
  );
}
