/// ULTERIORE FILE LAYOUT PER UTILIZZARE REACT QUERY NEL LAYOUT.TSX ORIGINALE ///

"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

//  Qui bisogna fare questa cosa per via di Typescript, ovvero definire il tipo che sarà "children"

type Props = {
  children: React.ReactNode;
};

// poi bisogna inserire "children" dentro la funzione come un props e poi dentro il contenuto della funzione

export default function LayoutContainer({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
