import MainSlider from "../components/MainSlider/MainSlider";
import SelectMain from "../components/Select/SelectMain";
function Body (){

  return(
    <div>
      <div>
        <MainSlider />
      </div>
      <div style={{ margin: '20px 0'}}>
        <SelectMain />
      </div>
    </div>
  )
}

export default Body;