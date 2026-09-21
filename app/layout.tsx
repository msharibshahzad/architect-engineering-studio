import type {Metadata} from "next";
import {Inter,Space_Grotesk} from "next/font/google";
import "./globals.css";
const inter=Inter({subsets:["latin"],variable:"--font-inter"});
const space=Space_Grotesk({subsets:["latin"],variable:"--font-space"});
export const metadata:Metadata={
 title:"Marina Associate | Designer & Builders",
 description:"Marina Associate — architecture, engineering, construction and building consultancy in Lalamusa, Gujrat, Pakistan.",
 keywords:["Marina Associate","architecture","engineering","construction","designer builders","Lalamusa","Gujrat","Pakistan"]
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={inter.variable+" "+space.variable}>{children}</body></html>}