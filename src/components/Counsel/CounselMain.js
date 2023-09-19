import CounselImg from "./CounselImg";
import CounselText from "./CounselText";

function CounselMain(){

  return(
    <div style={{
      height: '300px',
      display: 'flex',
      justifyContent:'space-between'
    }}
    >
    <CounselText />
    <CounselImg />
    </div>
  )
}
export default CounselMain;