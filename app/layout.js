import './globals.css'
import Header from '@/components/header';
import {Rubik} from 'next/font/google';
import {store} from "@/stores";
import {fetchUser} from "@/stores/userStore";
import {StoreProvider} from "@/stores/store-provider";

const rubik = Rubik({
    subsets: ["latin"]
})
const Layout =async ({ children }) => {
    await store.dispatch(fetchUser());
    const {user} = store.getState().user
  return (
    <html lang="en" className={rubik.className}>
      <body>
      <StoreProvider preloadedState={{
          user: {
              user
          }
      }}>
          <Header/>
          <main>{children}</main>
      </StoreProvider>
      </body>
    </html>
  )
}

export default Layout;
