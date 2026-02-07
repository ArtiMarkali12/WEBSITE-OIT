// import { useLocation } from "react-router-dom";
// import Footer from "../app/sections/common/footer";
// import Header1 from "../app/sections/common/header1";
// import Header2 from "../app/sections/common/header2";
// import Header3 from "../app/sections/common/header3";
// import AppRoutes from "../routing/app-routes";

// function RootLayout() {
//   const { pathname } = useLocation();
//   const useHeader2 =
//     pathname === "/index2" ||
//     pathname.startsWith("/courses") ||
//     pathname.startsWith("/about") ||
//     pathname.startsWith("/blogs") ||
//     pathname.startsWith("/contact");

//   return (
//     <>
//       <div className="page-wraper">
        
//      {useHeader2 ? <Header2 /> : <Header1 />}

//         <div className="page-content">
//           <AppRoutes />
//         </div>

//         <Footer />
//         {/* <!-- BUTTON TOP START --> */}
//         <button className="scroltop">
//           <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
//         </button>
//       </div>
//     </>
//   );
// }

// export default RootLayout;



import Footer from "../app/sections/common/footer";
import Header2 from "../app/sections/common/header2";
import AppRoutes from "../routing/app-routes";

function RootLayout() {
  return (
    <>
      <div className="page-wraper">
        {/* ✅ ONLY HEADER2 */}
        <Header2 />

        <div className="page-content">
          <AppRoutes />
        </div>

        <Footer />

        {/* Scroll to top */}
        {/* <button className="scroltop">
          <span className="fa fa-angle-up relative" id="btn-vibrate"></span>
        </button> */}
      </div>
    </>
  );
}

export default RootLayout;
