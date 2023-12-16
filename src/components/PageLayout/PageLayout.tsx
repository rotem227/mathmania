import { ReactNode } from "react";
import Navbar from "../Navbar";

type Props = {
    children: ReactNode;
}

function PageLayout({ children }: Props) {
    return (
        <div>
            <Navbar />

            <div className="pt-6 px-6">
                {children}
            </div>
        </div>
    );
}

export default PageLayout;