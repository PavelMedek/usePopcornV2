// // "use client";

// // import { useState } from "react";
// // import Head from "next/head";

// // export default function Home() {
// //   const [activeIcon, setActiveIcon] = useState(0);

// //   const handleIconClick = (index: any) => {
// //     setActiveIcon(index);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-900 text-white flex">
// //       <Head>
// //         <title>usePopcorn</title>
// //       </Head>
// //       {/* První sloupec (ikony) */}
// //       <div className="w-16 bg-gray-800 pt-16">
// //         <div className="flex flex-col">
// //           <div className="mb-4 relative">
// //             {/* Červený pruh vedle první ikony */}
// //             {activeIcon === 0 && (
// //               <div className="h-10 w-1 bg-red-500 absolute left-0 top-0"></div>
// //             )}
// //             {/* Ikona Netflix */}
// //             <img
// //               src="https://img.icons8.com/color/48/000000/netflix.png"
// //               alt="Netflix"
// //               className={`w-10 h-10 rounded-full cursor-pointer bg-gray-900 ml-3 `}
// //               onClick={() => handleIconClick(0)}
// //             />
// //           </div>
// //           <div className="mb-4 relative">
// //             {/* Červený pruh vedle druhé ikony */}
// //             {activeIcon === 1 && (
// //               <div className="h-10 w-1 bg-red-500 absolute left-0 top-0"></div>
// //             )}
// //             {/* Ikona Netflix */}
// //             <img
// //               src="https://img.icons8.com/color/48/000000/netflix.png"
// //               alt="Netflix"
// //               className={`w-10 h-10 rounded-full cursor-pointer bg-gray-900 ml-3`}
// //               onClick={() => handleIconClick(1)}
// //             />
// //           </div>
// //           <div className="mb-4 relative">
// //             {/* Červený pruh vedle třetí ikony */}
// //             {activeIcon === 2 && (
// //               <div className="h-10 w-1 bg-red-500 absolute left-0 top-0"></div>
// //             )}
// //             {/* Ikona Netflix */}
// //             <img
// //               src="https://img.icons8.com/color/48/000000/netflix.png"
// //               alt="Netflix"
// //               className={`w-10 h-10 rounded-full cursor-pointer bg-gray-900 ml-3`}
// //               onClick={() => handleIconClick(2)}
// //             />
// //           </div>
// //           <div className="mb-4 relative">
// //             {/* Červený pruh vedle čtvrté ikony */}
// //             {activeIcon === 3 && (
// //               <div className="h-10 w-1 bg-red-500 absolute left-0 top-0"></div>
// //             )}
// //             {/* Ikona Netflix */}
// //             <img
// //               src="https://img.icons8.com/color/48/000000/netflix.png"
// //               alt="Netflix"
// //               className={`w-10 h-10 rounded-full cursor-pointer bg-gray-900 ml-3`}
// //               onClick={() => handleIconClick(3)}
// //             />
// //           </div>
// //           {/* Přidej další ikony podle potřeby */}
// //         </div>
// //       </div>
// //       {/* Druhý sloupec (seznam seriálů) */}
// //       <div className="w-1/6 bg-gray-900 p-4 overflow-y-auto">
// //         <h2 className="text-xl font-bold mb-4">Seriály</h2>
// //         <div className="grid grid-cols-1 gap-4">
// //           <div className="bg-gray-800 rounded p-2">
// //             <p className="text-gray-300">Seriál 1</p>
// //           </div>
// //           <div className="bg-gray-800 rounded p-2">
// //             <p className="text-gray-300">Seriál 2</p>
// //           </div>
// //           <div className="bg-gray-800 rounded p-2">
// //             <p className="text-gray-300">Seriál 3</p>
// //           </div>
// //           {/* Přidej další jména seriálů podle potřeby */}
// //         </div>
// //       </div>
// //       {/* Třetí sloupec (náhodný text) */}
// //       <div className="flex-1 bg-gray-800 p-4">
// //         <div className="text-gray-300">
// //           <p>
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
// //             vestibulum massa id eros efficitur, a pretium velit molestie. Sed eu
// //             ante aliquet, blandit nunc sit amet, suscipit lacus.
// //           </p>
// //           <p>
// //             Nulla et nisi in leo tincidunt luctus eu eget leo. Nunc mollis lorem
// //             quis risus consectetur fermentum. Proin rutrum leo sed ligula
// //             hendrerit, eget sollicitudin odio pellentesque.
// //           </p>
// //           <p>
// //             Integer vitae nulla vitae orci posuere consequat sit amet nec neque.
// //             In vehicula leo nec velit finibus, a tempor nulla dapibus. Sed sit
// //             amet libero at nulla convallis ultricies.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // "use client";

// // import { useState } from "react";
// // import Head from "next/head";

// // export default function Home() {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [activeIcon, setActiveIcon] = useState(0);

// //   const handleIconClick = (index) => {
// //     setActiveIcon(index);
// //   };

// //   const toggleMenu = () => {
// //     setMenuOpen(!menuOpen);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row">
// //       <Head>
// //         <title>usePopcorn</title>
// //       </Head>
// //       {/* Menu Icon for mobile view */}
// //       <div className="lg:hidden flex justify-end p-4 ">
// //         <button onClick={toggleMenu}>
// //           <img
// //             src="https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png"
// //             alt="Menu Icon"
// //             className="w-8 h-8"
// //           />
// //         </button>
// //       </div>
// //       <div
// //         className={`lg:flex ${
// //           menuOpen ? "flex" : "hidden"
// //         } flex-row w-full lg:w-auto`}
// //       >
// //         {/* První sloupec (ikony) */}
// //         <div className="w-16 bg-gray-800 pt-16 lg:pt-0 lg:w-16 h-screen">
// //           <div className="flex flex-col h-full">
// //             <div className="mb-4 relative">
// //               {activeIcon === 0 && (
// //                 <div className="h-10 w-1 bg-red-500 absolute left-0 top-0"></div>
// //               )}
// //               <img
// //                 src="https://img.icons8.com/color/48/000000/netflix.png"
// //                 alt="Netflix"
// //                 className={`w-10 h-10 rounded-full cursor-pointer bg-gray-900 ml-3`}
// //                 onClick={() => handleIconClick(0)}
// //               />
// //             </div>
// //             <div className="mb-4 relative">
// //               {activeIcon === 1 && (
// //                 <div className="h-10 w-1 bg-red-500 absolute left-0 top-0"></div>
// //               )}
// //               <img
// //                 src="https://img.icons8.com/color/48/000000/netflix.png"
// //                 alt="Netflix"
// //                 className={`w-10 h-10 rounded-full cursor-pointer bg-gray-900 ml-3`}
// //                 onClick={() => handleIconClick(1)}
// //               />
// //             </div>
// //             <div className="mb-4 relative">
// //               {activeIcon === 2 && (
// //                 <div className="h-10 w-1 bg-red-500 absolute left-0 top-0"></div>
// //               )}
// //               <img
// //                 src="https://img.icons8.com/color/48/000000/netflix.png"
// //                 alt="Netflix"
// //                 className={`w-10 h-10 rounded-full cursor-pointer bg-gray-900 ml-3`}
// //                 onClick={() => handleIconClick(2)}
// //               />
// //             </div>
// //             <div className="mb-4 relative">
// //               {activeIcon === 3 && (
// //                 <div className="h-10 w-1 bg-red-500 absolute left-0 top-0"></div>
// //               )}
// //               <img
// //                 src="https://img.icons8.com/color/48/000000/netflix.png"
// //                 alt="Netflix"
// //                 className={`w-10 h-10 rounded-full cursor-pointer bg-gray-900 ml-3`}
// //                 onClick={() => handleIconClick(3)}
// //               />
// //             </div>
// //             {/* Přidej další ikony podle potřeby */}
// //           </div>
// //         </div>
// //         {/* Druhý sloupec (seznam seriálů) */}
// //         <div className="flex-1 w-44 bg-gray-900 p-4 overflow-y-auto">
// //           <h2 className="text-xl font-bold mb-4">Seriály</h2>
// //           <div className="grid grid-cols-1 gap-4">
// //             <div className="bg-gray-800 rounded p-2">
// //               <p className="text-gray-300">Seriál 1</p>
// //             </div>
// //             <div className="bg-gray-800 rounded p-2">
// //               <p className="text-gray-300">Seriál 2</p>
// //             </div>
// //             <div className="bg-gray-800 rounded p-2">
// //               <p className="text-gray-300">Seriál 3</p>
// //             </div>
// //             {/* Přidej další jména seriálů podle potřeby */}
// //           </div>
// //         </div>
// //       </div>
// //       {/* Třetí sloupec (náhodný text) */}
// //       <div
// //         className={`flex-1 bg-gray-800 p-4 ${menuOpen ? "hidden" : "block"}`}
// //       >
// //         <div className="text-gray-300">
// //           <p>
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
// //             vestibulum massa id eros efficitur, a pretium velit molestie. Sed eu
// //             ante aliquet, blandit nunc sit amet, suscipit lacus.
// //           </p>
// //           <p>
// //             Nulla et nisi in leo tincidunt luctus eu eget leo. Nunc mollis lorem
// //             quis risus consectetur fermentum. Proin rutrum leo sed ligula
// //             hendrerit, eget sollicitudin odio pellentesque.
// //           </p>
// //           <p>
// //             Integer vitae nulla vitae orci posuere consequat sit amet nec neque.
// //             In vehicula leo nec velit finibus, a tempor nulla dapibus. Sed sit
// //             amet libero at nulla convallis ultricies.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // "use client";

// // import { useState } from "react";
// // import Head from "next/head";

// // export default function Home() {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [activeIcon, setActiveIcon] = useState(0);

// //   const handleIconClick = (index) => {
// //     setActiveIcon(index);
// //   };

// //   const toggleMenu = () => {
// //     setMenuOpen(!menuOpen);
// //     if (!menuOpen) {
// //       document.body.style.overflow = "hidden"; // Disable scroll when menu is open
// //     } else {
// //       document.body.style.overflow = ""; // Re-enable scroll when menu is closed
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row relative">
// //       <Head>
// //         <title>usePopcorn</title>
// //       </Head>
// //       {/* Ikona menu */}
// //       <div className="absolute top-0 right-0 p-4 z-50">
// //         <button onClick={toggleMenu}>
// //           <img
// //             src="https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png"
// //             alt="Menu Icon"
// //             className="w-8 h-8"
// //           />
// //         </button>
// //       </div>
// //       {/* První sloupec (ikony) */}
// //       <div
// //         className={`lg:relative fixed top-0 left-0 w-16 lg:bg-gray-800 pt-16 h-screen ${
// //           menuOpen ? "h-screen bg-gray-800" : ""
// //         }`}
// //       >
// //         <div
// //           className={`flex flex-col h-full pt-12 lg:pt-0 ${
// //             menuOpen ? "block" : "hidden lg:block"
// //           }`}
// //         >
// //           <div className="mb-4 relative">
// //             {activeIcon === 0 && (
// //               <div className="h-10 w-1 bg-red-500 absolute left-0 top-0"></div>
// //             )}
// //             <img
// //               src="https://img.icons8.com/color/48/000000/netflix.png"
// //               alt="Netflix"
// //               className={`w-10 h-10 rounded-full cursor-pointer bg-gray-900 ml-3`}
// //               onClick={() => handleIconClick(0)}
// //             />
// //           </div>
// //           <div className="mb-4 relative">
// //             {activeIcon === 1 && (
// //               <div className="h-10 w-1 bg-red-500 absolute left-0 top-0"></div>
// //             )}
// //             <img
// //               src="https://img.icons8.com/color/48/000000/netflix.png"
// //               alt="Netflix"
// //               className={`w-10 h-10 rounded-full cursor-pointer bg-gray-900 ml-3`}
// //               onClick={() => handleIconClick(1)}
// //             />
// //           </div>
// //           <div className="mb-4 relative">
// //             {activeIcon === 2 && (
// //               <div className="h-10 w-1 bg-red-500 absolute left-0 top-0"></div>
// //             )}
// //             <img
// //               src="https://img.icons8.com/color/48/000000/netflix.png"
// //               alt="Netflix"
// //               className={`w-10 h-10 rounded-full cursor-pointer bg-gray-900 ml-3`}
// //               onClick={() => handleIconClick(2)}
// //             />
// //           </div>
// //           <div className="mb-4 relative">
// //             {activeIcon === 3 && (
// //               <div className="h-10 w-1 bg-red-500 absolute left-0 top-0"></div>
// //             )}
// //             <img
// //               src="https://img.icons8.com/color/48/000000/netflix.png"
// //               alt="Netflix"
// //               className={`w-10 h-10 rounded-full cursor-pointer bg-gray-900 ml-3`}
// //               onClick={() => handleIconClick(3)}
// //             />
// //           </div>
// //           {/* Přidej další ikony podle potřeby */}
// //         </div>
// //       </div>
// //       <div
// //         className={`lg:flex ${
// //           menuOpen ? "flex absolute top-0 left-16" : "hidden"
// //         } flex-row w-full lg:w-auto`}
// //       >
// //         {/* Druhý sloupec (seznam seriálů) */}
// //         <div className="flex-1 bg-gray-900 p-4 overflow-y-auto">
// //           <h2 className="text-xl font-bold mb-4">Seriály</h2>
// //           <div className="grid grid-cols-1 gap-4">
// //             <div className="bg-gray-800 rounded p-2">
// //               <p className="text-gray-300">Seriál 1</p>
// //             </div>
// //             <div className="bg-gray-800 rounded p-2">
// //               <p className="text-gray-300">Seriál 2</p>
// //             </div>
// //             <div className="bg-gray-800 rounded p-2">
// //               <p className="text-gray-300">Seriál 3</p>
// //             </div>
// //             {/* Přidej další jména seriálů podle potřeby */}
// //           </div>
// //         </div>
// //       </div>
// //       {/* Třetí sloupec (náhodný text) */}
// //       <div
// //         className={`flex-1 bg-gray-800 p-4 ${menuOpen ? "hidden" : "block"}`}
// //       >
// //         <div className="text-gray-300">
// //           <p>
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
// //             vestibulum massa id eros efficitur, a pretium velit molestie. Sed eu
// //             ante aliquet, blandit nunc sit amet, suscipit lacus.
// //           </p>
// //           <p>
// //             Nulla et nisi in leo tincidunt luctus eu eget leo. Nunc mollis lorem
// //             quis risus consectetur fermentum. Proin rutrum leo sed ligula
// //             hendrerit, eget sollicitudin odio pellentesque.
// //           </p>
// //           <p>
// //             Integer vitae nulla vitae orci posuere consequat sit amet nec neque.
// //             In vehicula leo nec velit finibus, a tempor nulla dapibus. Sed sit
// //             amet libero at nulla convallis ultricies.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import Head from "next/head";
// import { ScrollArea } from "@/components/ui/scroll-area";

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeIcon, setActiveIcon] = useState(0);

//   const handleIconClick = (index) => {
//     setActiveIcon(index);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//     if (!menuOpen) {
//       document.body.style.overflow = "hidden"; // Disable scroll when menu is open
//     } else {
//       document.body.style.overflow = ""; // Re-enable scroll when menu is closed
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row relative">
//       <Head>
//         <title>usePopcorn</title>
//       </Head>
//       {/* Ikona menu */}
//       <div className="absolute top-0 right-0 p-4 z-50 lg:hidden">
//         <button onClick={toggleMenu}>
//           <img
//             src="https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png"
//             alt="Menu Icon"
//             className="w-8 h-8"
//           />
//         </button>
//       </div>
//       {/* První sloupec (ikony) */}
//       <div
//         className={`lg:relative fixed top-0 left-0 w-16 lg:bg-gray-800 pt-16 h-screen ${
//           menuOpen ? "h-screen bg-gray-800" : ""
//         }`}
//       >
//         <div
//           className={`flex flex-col h-full pt-12 lg:pt-0 ${
//             menuOpen ? "block" : "hidden lg:block"
//           }`}
//         >
//           <div className="mb-4 relative">
//             {activeIcon === 0 && (
//               <div className="h-10 w-1 bg-red-500 absolute left-0 top-0"></div>
//             )}
//             <img
//               src="https://img.icons8.com/color/48/000000/netflix.png"
//               alt="Netflix"
//               className={`w-10 h-10 rounded-full cursor-pointer bg-gray-900 ml-3`}
//               onClick={() => handleIconClick(0)}
//             />
//           </div>
//           <div className="mb-4 relative">
//             {activeIcon === 1 && (
//               <div className="h-10 w-1 bg-red-500 absolute left-0 top-0"></div>
//             )}
//             <img
//               src="https://img.icons8.com/color/48/000000/netflix.png"
//               alt="Netflix"
//               className={`w-10 h-10 rounded-full cursor-pointer bg-gray-900 ml-3`}
//               onClick={() => handleIconClick(1)}
//             />
//           </div>
//           <div className="mb-4 relative">
//             {activeIcon === 2 && (
//               <div className="h-10 w-1 bg-red-500 absolute left-0 top-0"></div>
//             )}
//             <img
//               src="https://img.icons8.com/color/48/000000/netflix.png"
//               alt="Netflix"
//               className={`w-10 h-10 rounded-full cursor-pointer bg-gray-900 ml-3`}
//               onClick={() => handleIconClick(2)}
//             />
//           </div>
//           <div className="mb-4 relative">
//             {activeIcon === 3 && (
//               <div className="h-10 w-1 bg-red-500 absolute left-0 top-0"></div>
//             )}
//             <img
//               src="https://img.icons8.com/color/48/000000/netflix.png"
//               alt="Netflix"
//               className={`w-10 h-10 rounded-full cursor-pointer bg-gray-900 ml-3`}
//               onClick={() => handleIconClick(3)}
//             />
//           </div>
//           {/* Přidej další ikony podle potřeby */}
//         </div>
//       </div>
//       <div
//         className={`lg:flex ${
//           menuOpen ? "flex absolute top-0 left-16" : "hidden"
//         } flex-row w-full lg:w-auto`}
//       >
//         {/* Druhý sloupec (seznam seriálů) */}
//         <div className="flex-1 bg-gray-900 p-4 w-80 overflow-y-auto">
//           <h2 className="text-xl font-bold mb-4">Seriály</h2>
//           <div className="grid grid-cols-1 gap-4">
//             <div className="bg-gray-800 rounded p-2">
//               <p className="text-gray-300">Seriál 1</p>
//             </div>
//             <div className="bg-gray-800 rounded p-2">
//               <p className="text-gray-300">Seriál 2</p>
//             </div>
//             <div className="bg-gray-800 rounded p-2">
//               <p className="text-gray-300">Seriál 3</p>
//             </div>
//             {/* Přidej další jména seriálů podle potřeby */}
//           </div>
//         </div>
//       </div>
//       {/* Třetí sloupec (náhodný text) */}
//       <ScrollArea className="lg:max-h-screen lg:max-w-full">
//         <div
//           className={`flex-1 bg-gray-800 p-4 ${menuOpen ? "hidden" : "block"}`}
//         >
//           <div className="text-gray-300">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//               vestibulum massa id eros efficitur, a pretium velit molestie. Sed
//               eu ante aliquet, blandit nunc sit amet, suscipit lacus.
//             </p>
//             <p>
//               Nulla et nisi in leo tincidunt luctus eu eget leo. Nunc mollis
//               lorem quis risus consectetur fermentum. Proin rutrum leo sed
//               ligula hendrerit, eget sollicitudin odio pellentesque.
//             </p>
//             <p>
//               Integer vitae nulla vitae orci posuere consequat sit amet nec
//               neque. In vehicula leo nec velit finibus, a tempor nulla dapibus.
//               Sed sit amet libero at nulla convallis ultricies.
//             </p>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//               vestibulum massa id eros efficitur, a pretium velit molestie. Sed
//               eu ante aliquet, blandit nunc sit amet, suscipit lacus.
//             </p>
//             <p>
//               Nulla et nisi in leo tincidunt luctus eu eget leo. Nunc mollis
//               lorem quis risus consectetur fermentum. Proin rutrum leo sed
//               ligula hendrerit, eget sollicitudin odio pellentesque.
//             </p>
//             <p>
//               Integer vitae nulla vitae orci posuere consequat sit amet nec
//               neque. In vehicula leo nec velit finibus, a tempor nulla dapibus.
//               Sed sit amet libero at nulla convallis ultricies.
//             </p>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//               vestibulum massa id eros efficitur, a pretium velit molestie. Sed
//               eu ante aliquet, blandit nunc sit amet, suscipit lacus.
//             </p>
//             <p>
//               Nulla et nisi in leo tincidunt luctus eu eget leo. Nunc mollis
//               lorem quis risus consectetur fermentum. Proin rutrum leo sed
//               ligula hendrerit, eget sollicitudin odio pellentesque.
//             </p>
//             <p>
//               Integer vitae nulla vitae orci posuere consequat sit amet nec
//               neque. In vehicula leo nec velit finibus, a tempor nulla dapibus.
//               Sed sit amet libero at nulla convallis ultricies.
//             </p>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//               vestibulum massa id eros efficitur, a pretium velit molestie. Sed
//               eu ante aliquet, blandit nunc sit amet, suscipit lacus.
//             </p>
//             <p>
//               Nulla et nisi in leo tincidunt luctus eu eget leo. Nunc mollis
//               lorem quis risus consectetur fermentum. Proin rutrum leo sed
//               ligula hendrerit, eget sollicitudin odio pellentesque.
//             </p>
//             <p>
//               Integer vitae nulla vitae orci posuere consequat sit amet nec
//               neque. In vehicula leo nec velit finibus, a tempor nulla dapibus.
//               Sed sit amet libero at nulla convallis ultricies.
//             </p>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//               vestibulum massa id eros efficitur, a pretium velit molestie. Sed
//               eu ante aliquet, blandit nunc sit amet, suscipit lacus.
//             </p>
//             <p>
//               Nulla et nisi in leo tincidunt luctus eu eget leo. Nunc mollis
//               lorem quis risus consectetur fermentum. Proin rutrum leo sed
//               ligula hendrerit, eget sollicitudin odio pellentesque.
//             </p>
//             <p>
//               Integer vitae nulla vitae orci posuere consequat sit amet nec
//               neque. In vehicula leo nec velit finibus, a tempor nulla dapibus.
//               Sed sit amet libero at nulla convallis ultricies.
//             </p>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//               vestibulum massa id eros efficitur, a pretium velit molestie. Sed
//               eu ante aliquet, blandit nunc sit amet, suscipit lacus.
//             </p>
//             <p>
//               Nulla et nisi in leo tincidunt luctus eu eget leo. Nunc mollis
//               lorem quis risus consectetur fermentum. Proin rutrum leo sed
//               ligula hendrerit, eget sollicitudin odio pellentesque.
//             </p>
//             <p>
//               Integer vitae nulla vitae orci posuere consequat sit amet nec
//               neque. In vehicula leo nec velit finibus, a tempor nulla dapibus.
//               Sed sit amet libero at nulla convallis ultricies.
//             </p>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//               vestibulum massa id eros efficitur, a pretium velit molestie. Sed
//               eu ante aliquet, blandit nunc sit amet, suscipit lacus.
//             </p>
//             <p>
//               Nulla et nisi in leo tincidunt luctus eu eget leo. Nunc mollis
//               lorem quis risus consectetur fermentum. Proin rutrum leo sed
//               ligula hendrerit, eget sollicitudin odio pellentesque.
//             </p>
//             <p>
//               Integer vitae nulla vitae orci posuere consequat sit amet nec
//               neque. In vehicula leo nec velit finibus, a tempor nulla dapibus.
//               Sed sit amet libero at nulla convallis ultricies.
//             </p>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//               vestibulum massa id eros efficitur, a pretium velit molestie. Sed
//               eu ante aliquet, blandit nunc sit amet, suscipit lacus.
//             </p>
//             <p>
//               Nulla et nisi in leo tincidunt luctus eu eget leo. Nunc mollis
//               lorem quis risus consectetur fermentum. Proin rutrum leo sed
//               ligula hendrerit, eget sollicitudin odio pellentesque.
//             </p>
//             <p>
//               Integer vitae nulla vitae orci posuere consequat sit amet nec
//               neque. In vehicula leo nec velit finibus, a tempor nulla dapibus.
//               Sed sit amet libero at nulla convallis ultricies.
//             </p>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//               vestibulum massa id eros efficitur, a pretium velit molestie. Sed
//               eu ante aliquet, blandit nunc sit amet, suscipit lacus.
//             </p>
//             <p>
//               Nulla et nisi in leo tincidunt luctus eu eget leo. Nunc mollis
//               lorem quis risus consectetur fermentum. Proin rutrum leo sed
//               ligula hendrerit, eget sollicitudin odio pellentesque.
//             </p>
//             <p>
//               Integer vitae nulla vitae orci posuere consequat sit amet nec
//               neque. In vehicula leo nec velit finibus, a tempor nulla dapibus.
//               Sed sit amet libero at nulla convallis ultricies.
//             </p>
//             <p>Ahoj</p>
//           </div>
//         </div>
//       </ScrollArea>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Head from "next/head";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState(0);

  const handleIconClick = (index) => {
    setActiveIcon(index);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "" : "hidden";
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row relative">
      <Head>
        <title>usePopcorn</title>
      </Head>
      {/* Ikona menu */}
      <div className="fixed top-0 right-0 p-4 z-50 lg:hidden">
        <button onClick={toggleMenu}>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png"
            alt="Menu Icon"
            className="w-8 h-8"
          />
        </button>
      </div>
      {/* První sloupec (ikony) */}
      <div
        className={`lg:relative fixed top-0 left-0 w-16 lg:bg-gray-800 pt-16 h-screen ${
          menuOpen ? "h-screen bg-gray-800" : ""
        }`}
      >
        <div
          className={`flex flex-col h-full pt-12 lg:pt-0 ${
            menuOpen ? "block" : "hidden lg:block"
          }`}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="mb-4 relative" key={index}>
              {activeIcon === index && (
                <div className="h-10 w-1 bg-red-500 absolute left-0 top-0"></div>
              )}
              <img
                src="https://img.icons8.com/color/48/000000/netflix.png"
                alt="Netflix"
                className="w-10 h-10 rounded-full cursor-pointer bg-gray-900 ml-3"
                onClick={() => handleIconClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`lg:flex ${
          menuOpen
            ? "flex absolute top-0 left-16 w-10/12 sm:w-11/12 md: "
            : "hidden"
        } flex-row lg:w-auto`}
      >
        {/* Druhý sloupec (seznam seriálů) */}
        <div className="flex-1 bg-gray-900 p-4 w-80 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Seriály</h2>
          <div className="grid grid-cols-1 gap-4">
            {["Seriál 1", "Seriál 2", "Seriál 3"].map((serial, index) => (
              <div className="bg-gray-800 rounded p-2" key={index}>
                <p className="text-gray-300">{serial}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Třetí sloupec (náhodný text) */}
      <ScrollArea className="lg:max-h-screen lg:max-w-full">
        <div
          className={`flex-1 bg-gray-800 p-4 ${menuOpen ? "hidden" : "block"}`}
        >
          <div className="text-gray-300 max-h-full">
            {[...Array(50)].map((_, index) => (
              <p key={index}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum massa id eros efficitur, a pretium velit molestie.
                Sed eu ante aliquet, blandit nunc sit amet, suscipit lacus.
              </p>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
