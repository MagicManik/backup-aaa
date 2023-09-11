import "./LoaderIOS.css";

const LoaderIOS = () => {
  return (
    // orginal
    <section className="relative h-screen">
      <div className="absolute top-[40%] left-1/2">
        <div className="relative">
          <div className="overlay">
            <div className="spinner-container center">
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoaderIOS;
