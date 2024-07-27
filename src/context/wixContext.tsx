"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie";
import React, { createContext, useContext, ReactNode } from "react";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const WixClient = createClient({
  modules: {
    products,
    collections,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

export type WixClientType = typeof WixClient;

export const myWixClientContext = createContext<WixClientType | null>(null);

export const MyWixClientContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <myWixClientContext.Provider value={WixClient}>
      {children}
    </myWixClientContext.Provider>
  );
};

export const useWixClient = () => {
  return useContext(myWixClientContext);
};
