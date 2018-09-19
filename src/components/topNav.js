// import React from 'react'
// import { Button } from '../components/elements/elements'
// import { EnglishIcon } from '../components/icons/englishIcon'
// import { DanishIcon } from '../components/icons/danishIcon'
// import { WindowHelper } from '../components/helpers'
// import Logo from '../img/logox400.png'
// import { topNav } from '../../navData'

// const styles = {
//   hamburger: {
//     backgroundColor: '#333',
//     width: '22px',
//     height: '2px',
//     borderRadius: '1px',
//     margin: '4px 0',
//   },
// }

// const TopNav = ({ links, staticHeader }) => {
//   return (
//     <WindowHelper>
//       {window => (
//         <nav
//           id="nav"
//           className={
//             !staticHeader && window.scrollY <= 10 ? '' : 'scroll-header'
//           }
//           style={{
//             top: '0',
//             width: '100%',
//             display: 'flex',
//             position: 'fixed',
//             justifyContent: 'space-between',
//             zIndex: '999',
//             transition: 'all 0.5s',
//             padding: '15px 5%',
//           }}
//         >
//           <a href="/da">
//             <img
//               src={Logo}
//               alt="Logo"
//               style={{
//                 margin: '0',
//                 maxWidth: '160px',
//                 maxHeight: '70px',
//               }}
//             />
//           </a>

//           <div
//             id="navDiv"
//             style={{
//               padding: '0',
//               transition: 'all .25s',
//               ...(window.width > 980
//                 ? { margin: '10px' }
//                 : {
//                     // opacity: '0',
//                     // visibility: 'hidden',
//                     transform: 'translateX(100%)',
//                     position: 'absolute',
//                     textAlign: 'center',
//                     top: '75px',
//                     right: '-140px',
//                     width: '80%',
//                     maxWidth: '250px',
//                     alignItems: 'baseline',
//                     background: '#f5f5f5',
//                     boxShadow: '0 3px 5px rgba(60,60,60,.03)',
//                   }),
//             }}
//           >
//             <a
//               style={{
//                 ...(window.width < 980
//                   ? {
//                       paddingBottom: '10px',
//                       display: 'block',
//                       marginTop: '30px',
//                     }
//                   : {}),
//               }}
//               href="/event"
//             >
//               <Button
//                 style={{
//                   margin: '-11px auto',
//                   padding: '8px 13px',

//                   borderRadius: '2px',
//                   cursor: 'pointer',
//                   fontSize: '13px',
//                   textAlign: 'center',
//                   fontWeight: '400',
//                 }}
//               >
//                 create event
//               </Button>
//             </a>
//             {console.log(links)}
//             {links.map(linkData => {
//               console.log(linkData)
//               linkData.type === 'gatsbyLink' ? (
//                 <a
//                   style={{
//                     textDecoration: 'none',

//                     transition: 'all 0.5s',

//                     ...(window.width > 980
//                       ? {
//                           fontWeight: '500',
//                           marginLeft: '16px',
//                           fontSize: '13px',
//                           color: '#f7f7f7',
//                           marginLeft: '8px',
//                           padding: '0 10px',
//                         }
//                       : {
//                           marginLeft: '0',
//                           padding: '15px 20px',
//                           fontSize: '15px',
//                           fontWeight: '600',
//                           color: '#333',
//                           display: 'block',
//                         }),
//                   }}
//                   href={linkData.link}
//                 >
//                   bla
//                 </a>
//               ) : (
//                 <li
//                   style={{
//                     textDecoration: 'none',
//                     transition: 'all 0.5s',
//                     cursor: 'pointer',
//                     display: 'inline-block',
//                     ...(window.width > 980
//                       ? {
//                           marginLeft: '16px',
//                           fontSize: '13px',
//                           color: '#f7f7f7',
//                           marginLeft: '8px',
//                           fontWeight: '500',
//                           padding: '0 10px',
//                         }
//                       : {
//                           marginLeft: '21px',
//                           padding: '15px 20px',
//                           fontSize: '15px',
//                           fontWeight: '600',
//                           color: '#333',
//                           display: 'block',
//                         }),
//                   }}
//                 >
//                   <div
//                     onMouseOver={() => {
//                       document
//                         .getElementById('danishDiv')
//                         .classList.toggle('visible')
//                     }}
//                   >
//                     EN
//                     <span>
//                       <EnglishIcon
//                         style={{ height: '20px', marginLeft: '-27px' }}
//                       />
//                     </span>
//                   </div>

//                   <div
//                     id="danishDiv"
//                     style={{
//                       cursor: 'pointer',
//                       ...(window.width > 980
//                         ? {
//                             opacity: '0',
//                             visibility: 'hidden',
//                             position: ' absolute',
//                             display: 'inline-block',
//                             padding: '3px 15px',
//                             transform: 'translate(-50%)',
//                             cursor: 'pointer',
//                             boxShadow: ' 0 1px 7px 2px rgba(0,0,0,.2)',
//                             top: '65px',
//                             right: '4.8%',
//                             background: '#fff',
//                             transition: 'all .25s',
//                           }
//                         : {
//                             marginLeft: '-33px',
//                             padding: '15px 20px',
//                             fontSize: '15px',
//                             fontWeight: '600',
//                             color: '#333',
//                             display: 'block',
//                             marginTop: '10px',
//                           }),
//                     }}
//                   >
//                     <span
//                       style={{
//                         whiteSpace: 'nowrap',
//                         display: 'block',
//                         padding: '5px 0',
//                       }}
//                     >
//                       <span style={{ color: 'black', marginRight: '6px' }}>
//                         DA
//                       </span>
//                       <DanishIcon
//                         style={{
//                           display: 'inline-block',

//                           width: '30px',
//                           height: '20px',
//                         }}
//                       />
//                     </span>
//                   </div>
//                 </li>
//               )
//             })}
//           </div>
//           <div
//             style={{
//               backgroundColor: '#ddd',
//               borderRadius: '4px',
//               padding: '5px 10px',
//               cursor: 'pointer',
//               position: 'fixed',
//               right: '15px',
//               ...(window.width > 980
//                 ? {
//                     marginTop: '6px',
//                     display: 'none',
//                   }
//                 : window.width > 450
//                   ? {
//                       marginTop: '6px',
//                     }
//                   : {
//                       marginTop: '5px',
//                       display: 'block',
//                     }),
//             }}
//             onClick={() => {
//               document.getElementById('navDiv').classList.toggle('menuVisible')
//             }}
//           >
//             <div style={styles.hamburger} />
//             <div style={styles.hamburger} />
//             <div style={styles.hamburger} />
//           </div>
//         </nav>
//       )}
//     </WindowHelper>
//   )
// }

// export default TopNav
