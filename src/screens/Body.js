import MainSlider from "../components/MainSlider/MainSlider";
import SelectMain from "../components/Select/SelectMain";
import CounselMain from "../components/Counsel/CounselMain"
import MediaMain from "../components/Media/MediaMain"
function Body (){

  return(
    <div>
      <div>
        <MainSlider />
      </div>
      <div style={{ padding: '160px 0'}}>
        <SelectMain />
      </div>
      <div style={{ padding: '140px 0', height: '760px', backgroundColor: '#faf3ef'}}>
        <CounselMain />
      </div>
      <div>
        <MediaMain />
      </div>
    </div>
  )
}

export default Body;