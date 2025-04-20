import { PropsWithChildren } from "react";
import { Navbar } from "./navbar";
import {Footer} from "@/app/(home)/footer";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className="flex-1">
                {children}
            </div>
            <Footer/>
        </div>
    );
}