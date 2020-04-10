// import React, { useContext } from "react"
// import { ParallaxProvider, Parallax } from "react-scroll-parallax"
// import FirebaseContext from "../../firebase/context"
// import Scroller from "../Scroller"

// import "../../style/section.css"

// const SectionBonus = ({ section }) => {
//   const { appContext } = useContext(FirebaseContext)

//   if (section) {
//     return (
//       <div className={`section sectionBonus`}>
//         <div className={appContext.isChanging ? "change isChanging" : "change"}>
//           <ParallaxProvider>
//             <div className='trapezoid'>
//               <div>{section.title}</div>
//               <Parallax className='custom-class' y={[30, 40]} tagOuter='figure'>
//                 <h3>Mon super text ici</h3>
//               </Parallax>
//               <Parallax
//                 className='custom-class'
//                 y={[300, 80]}
//                 tagOuter='figure'
//               >
//                 {" "}
//                 <p>
//                   Du text un peu long pour faire comme si c'était une
//                   description on va bien voir le rendu
//                 </p>
//               </Parallax>
//             </div>
//           </ParallaxProvider>
//         </div>
//       </div>
//     )
//   } else {
//     return null
//   }
// }

// export default SectionBonus
