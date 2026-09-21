import type {Metadata} from "next";
import {Inter,Space_Grotesk} from "next/font/google";
import "./globals.css";
const inter=Inter({subsets:["latin"],variable:"--font-inter"});
const space=Space_Grotesk({subsets:["latin"],variable:"--font-space"});
export const metadata:Metadata={title:"ATELIER / Engineering Experiences",description:"Architecture, engineering and construction for spaces that matter."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={inter.variable+" "+space.variable}>{children}</body></html>}