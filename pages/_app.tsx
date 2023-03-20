import GlobalStyle from "@/GlobalStyle.styled";
import Layout from "@/components/layout/Layout";
import type { AppProps } from "next/app";
import { useState } from "react";
import { AppContext } from "@/helpers/Helpers";

//*THIS IS THE PARENT COMPONENT OF EVERYTHING

export default function App({ Component, pageProps }: AppProps) {

  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [user, setUser] = useState<any>(null)

  //Function to get current user from backend
  const getCurrentUser = (id: string) => {
    fetch(`http://localhost:7000/api/users/${id}`).then(res => res.json()).then(res => {
      console.log(user)
      setUser(res.user)
    }).catch((err) => {
      console.log(err)
    })
  };

  
  return (
    <AppContext.Provider value={{ isAuth, user, setUser, getCurrentUser }}>
      <GlobalStyle />
        <Component {...pageProps} />
    </AppContext.Provider>
  );
}