import Header from "./Header";

const Layout = function Layout({children}){
    return (
        <div>
            <Header/>
            <main>{children}</main>
        </div>
    )
} 

export default Layout;