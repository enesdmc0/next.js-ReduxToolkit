import Link from "next/link";
import Basket from "@/components/basket";
import ProfileBar from "@/components/profile-bar"


const Header = () => {
    return (
        <header>
            <Link href="/">Logo</Link>
            <ProfileBar/>
            <Basket/>
        </header>
    );
};

export default Header;
