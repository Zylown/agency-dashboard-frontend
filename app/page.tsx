import { MdOutlineDashboard } from "react-icons/md";
import Image from "next/image";

export default function Home() {
  return (
    // sidebar
    <div className="w-full max-w-60 h-screen border-r-2 border-[#f0f1f1]">
      <div className="py-4 flex gap-2 border-b-2 border-[#f0f1f1] w-full items-center justify-center">
        <Image
          src="data:image/png;base64,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"
          alt="Logo"
          width={18}
          height={18}
        />
        <p className="font-bold">xdFloww</p>
      </div>
      <div className="p-6">
        <ul className="flex flex-col gap-4 text-lg">
          <li className="flex items-center gap-2 text-[#4a4a4a] font-medium">
            <MdOutlineDashboard />
            <p>Dashboard</p>
          </li>
          <li className="flex items-center gap-2 text-[#4a4a4a] font-medium">
            <MdOutlineDashboard />
            <p>Creadores</p>
          </li>
          <li className="flex items-center gap-2 text-[#4a4a4a] font-medium">
            <MdOutlineDashboard />
            <p>Subscriptores</p>
          </li>
          <li className="flex items-center gap-2 text-[#4a4a4a] font-medium">
            <MdOutlineDashboard />
            <p>Contenido</p>
          </li>
          <li className="flex items-center gap-2 text-[#4a4a4a] font-medium">
            <MdOutlineDashboard />
            <p>Tareas</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
