"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { RiEqualLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import { usePathname, useRouter } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  {
    name: "Services",
    href: "/services",
    subMenus: [
      {
        name: "Robotic Process Automation & AI",
        href: "/services/robotic-process-automation-artificial-intelligence",
      },
      {
        name: "Digitial Transformation",
        href: "/services/digital-transformation",
      },
      {
        name: "Business Consultuing",
        href: "/services/business-consulting",
      },
      {
        name: "Delivering Leadership",
        href: "/services/delivery-leadership",
      },
      {
        name: "Technology Consulting",
        href: "/services/technology-consulting",
      },
      {
        name: "GDPR compliance Services",
        href: "/services/gdpr-compliance-services",
      },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navUrl = usePathname();
  const router = useRouter();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollThreshold = 100; // Adjust this threshold as needed

    setIsScrolled(scrollTop > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed top-0 z-50 w-full flex justify-between md:px-16 ${
        isScrolled ? "p-1" : "p-2"
      } items-center bg-white`}
    >
      <Image
        src={"/logo.png"}
        width={150}
        height={100}
        alt={"logo"}
        className={`
        ${
          isScrolled
            ? "w-[20%] md:w-[8%] lg:w-[6%] transition-all duration-200 ease-in-out  "
            : "w-1/1 transition-all duration-200 ease-in-out "
        }
      
      `}
      />

      {isMobile && (
        <div className="md:hidden transition-all  ">
          <button onClick={toggleMenu} className="pr-1">
            <RiEqualLine
              className={`text-[2em] ${
                isMenuOpen ? "animate-bounce duration-300" : ""
              }`}
            />
          </button>
        </div>
      )}

      <div
        className={`${
          isMenuOpen
            ? "absolute top-0 left-0 w-full h-screen bg-white z-50 flex flex-col gap-4 justify-center items-center"
            : "md:flex hidden"
        } gap-4 md:flex    `}
      >
        <button
          onClick={toggleMenu}
          className="p-1 inline md:hidden absolute top-4 right-4"
        >
          <AiOutlineClose
            className={`text-[2em] ${
              isMenuOpen ? "animate-bounce duration-300" : ""
            }`}
          />
        </button>

        {navigation.map((link) => {
          const isActive =
            (link.href === "/" && navUrl === "/") ||
            (link.href !== "/" && navUrl.includes(link.href));
          return (
            <div
              className={`relative flex-col items-center justify-center  ${
                link.subMenus && showSubMenu && "text-center  mb-8 md:mb-0"
              }`}
              key={link.name}
            >
              <div
                onClick={() => {
                  router.push(link.href);
                  link.subMenus ? toggleSubMenu() : setIsMenuOpen(false);
                }}
                className={`text-base font-semibold text-primary  hover:font-bold  flex gap-x-2 items-center cursor-pointer   hover:text-secondary px-4 py-2 ${
                  isActive && "underline font-bold text-secondary"
                }`}
              >
                <span>{link.name}</span>
                {link.subMenus && !showSubMenu ? (
                  <CgChevronDown />
                ) : link.subMenus && showSubMenu ? (
                  <CgChevronUp />
                ) : null}
              </div>

              {link.subMenus && showSubMenu && (
                <div className="relative md:absolute top-8 backdrop-brightness-50 rounded-md  flex flex-col w-full md:w-[15em]">
                  {link.subMenus.map((item) => (
                    <Link
                      href={item.href}
                      passHref
                      key={item.name}
                      onClick={() => {
                        isMobile && toggleMenu();
                        toggleSubMenu();
                      }}
                    >
                      <p
                        className={`text-base font-semibold text-secondary  hover:font-bold  hover:text-white px-4 py-2 `}
                      >
                        {item.name}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;

// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { RiEqualLine } from "react-icons/ri";
// import { AiOutlineClose } from "react-icons/ai";
// import { usePathname, useSearchParams } from "next/navigation";
// import Link from "next/link";
// import { CgChevronDown, CgChevronUp } from "react-icons/cg";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "About Us", href: "/about-us" },
//   {
//     name: "Services",
//     href: "/services",
//     subMenus: [
//       {
//         name: "Robotic Process Automation & AI",
//         href: "/services/robotic-process-automation-artificial-intelligence",
//       },
//       {
//         name: "Digitial Transformation",
//         href: "/services/digital-transformation",
//       },
//       {
//         name: "Business Consultuing",
//         href: "/services/robotic-process-automation-artificial-intelligence",
//       },
//       {
//         name: "Delivering Leadership",
//         href: "/services/robotic-process-automation-artificial-intelligence",
//       },
//       {
//         name: "Technology Consulting",
//         href: "/services/robotic-process-automation-artificial-intelligence",
//       },
//       {
//         name: "GDPR compliance Services",
//         href: "/services/robotic-process-automation-artificial-intelligence",
//       },
//     ],
//   },
//   { name: "Blog", href: "/blog" },
//   { name: "Contact Us", href: "#" },
// ];

// const Header = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   const [isScrolled, setIsScrolled] = useState(false);
//   const navUrl = usePathname();

//   const showSubMenu = useSearchParams().get("showSubMenu") ;
//   const isMenuOpen = useSearchParams().get("showNavMenu");

//   const handleScroll = () => {
//     const scrollTop = window.scrollY;
//     const scrollThreshold = 100; // Adjust this threshold as needed

//     setIsScrolled(scrollTop > scrollThreshold);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const showMenu = isMenuOpen && isMobile;

//   return (
//     <div
//       className={`fixed top-0 z-50 w-full flex justify-between md:px-16 ${
//         isScrolled ? "p-1" : "p-2"
//       } items-center bg-white`}
//     >
//       <Image
//         src={"/logo.png"}
//         width={150}
//         height={100}
//         alt={"logo"}
//         className={`
//         ${
//           isScrolled
//             ? "w-[20%] md:w-[8%] lg:w-[6%] transition-all duration-200 ease-in-out  "
//             : "w-1/1 transition-all duration-200 ease-in-out "
//         }

//       `}
//       />

//       {isMobile && (
//         <div className="md:hidden transition-all  ">
//           <Link
//             href={
//               isMenuOpen
//                 ? "?showNavMenu=true?showSubMenu=false"
//                 : "?showNavMenu=false?showSubMenu=false"
//             }
//             passHref
//           >
//             <button className="pr-1">
//               <RiEqualLine
//                 className={`text-[2em] ${
//                   isMenuOpen ? "animate-bounce duration-300" : ""
//                 }`}
//               />
//             </button>
//           </Link>
//         </div>
//       )}

//       <div
//         className={`${
//           isMenuOpen
//             ? "absolute top-0 left-0 w-full h-screen bg-white z-50 flex flex-col gap-4 justify-center items-center"
//             : "md:flex hidden"
//         } gap-4 md:flex    `}
//       >
//         <Link
//           href={isMenuOpen ? "?showNavMenu=true" : "?showNavMenu=false"}
//           passHref
//         >
//           <button className="p-1 inline md:hidden absolute top-4 right-4">
//             <AiOutlineClose
//               className={`text-[2em] ${
//                 isMenuOpen ? "animate-bounce duration-300" : ""
//               }`}
//             />
//           </button>
//         </Link>

//         {navigation.map((link) => {
//           const isActive =
//             (link.href === "/" && navUrl === "/") ||
//             (link.href !== "/" && navUrl.includes(link.href));
//           return (
//             <div
//               className={`relative flex-col items-center justify-center  ${
//                 link.subMenus && showSubMenu && "text-center  mb-8 md:mb-0"
//               }`}
//               key={link.name}
//             >
//               <Link href={link.subMenus ? "?showSubMenu=true" : ""} passHref>
//                 <div
//                   className={`text-base font-semibold text-primary  hover:font-bold  flex gap-x-2 items-center   hover:text-secondary px-4 py-2 ${
//                     isActive && "underline font-bold text-secondary"
//                   }`}
//                 >
//                   <span>{link.name}</span>
//                   {link.subMenus && !showSubMenu ? (
//                     <CgChevronDown />
//                   ) : link.subMenus && showSubMenu ? (
//                     <CgChevronUp />
//                   ) : null}
//                 </div>
//               </Link>
//               {link.subMenus && showSubMenu && (
//                 <div className="relative md:absolute top-8 backdrop-brightness-50 rounded-md  flex flex-col w-full md:w-[15em]">
//                   {link.subMenus.map((item) => (
//                     <a
//                       href={item.href}
//                       className={`text-base font-semibold text-secondary  hover:font-bold  hover:text-white px-4 py-2 `}
//                       key={item.name}
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* {isMobile ? (
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-1"
//             >
//               <RiEqualLine className={`text-[2em] ${isMenuOpen ? 'animate-bounce duration-300' : ''}`} />
//             </button>
//           </div>
//         ) : (
//           <div className={`${isMenuOpen ? "flex flex-col items-center bg-primary " : "flex"} gap-4 md:flex `}>
//             {navigation.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-base font-semibold text-primary hover:text-gray-900"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div> */}
//       {/* )} */}
//     </div>
//   );
// };

// export default Header;
