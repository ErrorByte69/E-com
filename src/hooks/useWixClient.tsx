"use client"

import { myWixClientContext } from "@/context/wixContext";
import { useContext } from "react";

export const useWixClient = ()=>{
return useContext(myWixClientContext);
};