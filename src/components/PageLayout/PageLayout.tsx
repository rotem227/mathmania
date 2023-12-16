import { FC } from "react";
import AppBar from "../AppBar";

const PageLayout: FC<JSX.IntrinsicElements['div']> = ({ children }) => {
    return (
        <div>
            <AppBar />

            <div className="pt-6 px-6 max-w-lg m-auto">
                {children}
            </div>
        </div>
    );
}

export default PageLayout;