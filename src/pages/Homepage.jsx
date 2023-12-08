import LeftColumn from "../componets/leftColumn";
import MainColumn from "../componets/mainColumn";
import MainNavbar from "../componets/navbar";
import RightColumn from "../componets/rightColumn";

export default function Homepage(){
    return(
        <div>
            <MainNavbar/>
            <div className="main-container">
                <LeftColumn/>
                <MainColumn/>
                <RightColumn/>
            </div>
        </div>
    )
}