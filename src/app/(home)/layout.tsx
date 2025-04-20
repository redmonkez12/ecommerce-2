import { PropsWithChildren } from "react";
import { Navbar } from "./navbar";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            {children}
        </div>
    );
}