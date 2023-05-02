import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import Providers from '@/components/Providers'
import { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Maneki Neko'
}

export default (props: {
  children: React.ReactNode
}) => {
  return (
    <Providers>
      <html lang='en'>
        <head>
          <link rel="icon" href="head.svg" />
        </head>

        <body>
          <Header />
          <NavBar />

          <main className={`w-full flex flex-col items-center`}>
            {props.children}
          </main>

          <Footer />
        </body>
      </html>
    </Providers>
  )
}
