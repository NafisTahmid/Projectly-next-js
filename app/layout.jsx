import "@/assets/styles/globals.css"

export const metadata = {
    title: "Property Pulse",
    keywords: "property, real-state, rental",
    description: "Find the perfect rental property"
};
const MainLayout = ({children}) => {
    return ( <html>
        <body>
            <main>
               {children}
            </main>
        </body>
    </html> );
}
 
export default MainLayout;