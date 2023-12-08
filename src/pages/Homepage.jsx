import LeftColumn from "../componets/leftColumn";
import MainColumn from "../componets/mainColumn";
import Navbar from "../componets/navbar";
import RightColumn from "../componets/rightColumn";

export default function Homepage(){
    return(
        <div>
            <Navbar/>
            <div className="container">
                <LeftColumn/>
                <MainColumn/>
                <RightColumn/>
            </div>
        </div>
    )
}