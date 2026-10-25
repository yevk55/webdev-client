import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./kambaz.css";


export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
  <div className="flex">
    <KambazNavigation />
    <div className="flex-1 md:ml-[130px]">{children}</div>
  </div>
  );
}