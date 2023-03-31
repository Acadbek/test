// import React from "react";
// import useId from "../hooks/useId";
// import Signin from "../pages/Register";
// import Favourite from "../pages/Favourite";
// import MyProfile from "../pages/MyProfile";
// import AddNewHouse from "../pages/AddNewHouse";

// const HomePage = React.lazy(() => import("../pages/Home"));
// const Properties = React.lazy(() => import("../pages/Properties"));
// const HoumeItem = React.lazy(() => import("../pages/HouseItem"));

// export const sidebar = [
//   {
//     id: useId,
//     element: (
//       <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
//         <HomePage />{" "}
//       </React.Suspense>
//     ),
//     title: "Home",
//     path: "/home",
//     private: false,
//     hidden: false,
//   },
//   {
//     id: useId,
//     element: (
//       <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
//         <Properties />
//       </React.Suspense>
//     ),
//     title: "Properties",
//     path: "/properties",
//     private: false,
//     hidden: false,
//   }
// ];
