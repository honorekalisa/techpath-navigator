import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SkillCards from "@/components/SkillCards";
import CareerCards from "@/components/CareerCards";

export default async function Index() {
  return (
    <div className="bg-slate-100 min-h-screen flex">
      <Sidebar />
      <div className="flex flex-col w-5/6">
        <Navbar />
        <SkillCards />
        <CareerCards />
      </div>
    </div>
  );
}
