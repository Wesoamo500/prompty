import '@styles/globals.css';

export const metadata = {
    title: 'Prompty',
    description: 'Discover and share AI generated prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'></div>
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout