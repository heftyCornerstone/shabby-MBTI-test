import pageNotFound from "../assets/pageNotFound.png"

const PageNotFound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img src={pageNotFound} alt="" className="w-5/12" />
    </div>
  );
}

export default PageNotFound