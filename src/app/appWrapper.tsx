// app/AppWrapper.tsx
"use client";

import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";
import { AppProvider } from "@context/app-context";
import StyledContext from "@context/StyledContext";
import NProgressBar from "@component/NProgress";
import StyledComponentsRegistry from "@lib/registry";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ApolloProvider client={client}>
        <AppProvider>
          <StyledContext>
            {children}
            <NProgressBar />
          </StyledContext>
        </AppProvider>
      </ApolloProvider>
    </StyledComponentsRegistry>
  );
}
