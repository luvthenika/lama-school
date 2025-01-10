import Logo from "../components/Logo/Logo";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/NavBar/Navbar";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen w-screen flex bg-gray-100 overflow-auto">
            <div className="w-[22%] bg-white">
                <Logo />
                <Menu />
            </div>
            <div className="w-full bg-gray-100">
                <Navbar />
                {children}
            </div>
        </div>
    );
}
