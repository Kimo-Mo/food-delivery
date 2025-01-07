import "./AppDownload.css"
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <h1 className="text-capitalize">
        for better experience download <br /> tomato app{" "}
      </h1>
      <div className="app-download-platforms mt-5">
        <img src='/imgs/app_store.png' alt="app store" />
        <img src='/imgs/play_store.png' alt="play store" />
      </div>
    </div>
  );
}

export default AppDownload