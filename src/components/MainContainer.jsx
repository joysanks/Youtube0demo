import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer =()=>{

    return (
        <>
            <div className="col-span-11"> 
                Main Container
                <ButtonList/>
                <VideoContainer/>
            </div>
        </>
    );
} 

export default MainContainer;