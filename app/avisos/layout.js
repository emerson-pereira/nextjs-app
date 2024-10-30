import Navbar from "@/components/Navbar";

export default function AvisoLayout({ children }) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        {children}
      </div>
    </>
  );
}
