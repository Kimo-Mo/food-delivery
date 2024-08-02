import { assets } from "../../assets/assets"
import "./AppDownload.css"
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <h1 className="text-capitalize">
        for better experience download <br /> tomato app{" "}
      </h1>
      <div className="app-download-platforms mt-5">
        <img src={assets.app_store} alt="app store" />
        <img src={assets.play_store} alt="play store" />
      </div>
    </div>
  );
}

export default AppDownload