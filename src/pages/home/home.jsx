import { useEffect, useState } from "react";


export const HomePage = () => {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem("token");

        if(token){
            setIsLogin(true);
        }
    });

    return (
        <div style={{color: "white"}}>
            <h2>TEST IT'S WORKING?????</h2>
        </div>
    );
};