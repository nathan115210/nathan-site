import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-screen h-screen mt-40 bg-slate-50 text-black">
      {children}
    </div>
  );
};

export default Layout;
