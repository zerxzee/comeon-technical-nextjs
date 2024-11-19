import { useSession } from "next-auth/react";
import Header from "./Header";

const Layout = ({ children }) => {
    const { data: sessionData } = useSession();

    return (
        <div>
            {sessionData && sessionData.user ? <Header /> : null}
            {children}
        </div>
    );
};

export default Layout;
