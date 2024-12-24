import React, { useEffect, useState } from "react";
import useMobile from "../../hooks/useMobile";
import Link from "next/link";
import { motion } from "framer-motion";
import { config } from "../../styles/global";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

function Header() {
  return (
    <div className="z-[3] fixed my-0 pxes w-full">
      <nav className="w-full myes md:pt-0 mn:pt-2 flex justify-between items-center">
        <LeftNav />
        <Link href="/">
          <Logo />
        </Link>
        <MobileMenu />
        <RightNav />
      </nav>
      <Podlojka />
    </div>
  );
}

function Podlojka() {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{
        ease: config.animations.speed,
        duration: 1,
        delay: 0.5,
      }}
      className="absolute flex h-[4em] justify-center items-start z-[-1] w-full top-0 right-0 border-t border-wh15 delay-[1.1s] duration-[1s] -translate-x-1/2"
    >
      <div
        style={{
          borderRadius: "0px 0px 60px 60px",
        }}
        className="w-[21em] h-full bg-primary"
      ></div>
    </motion.div>
  );
}

function MobileMenu() {
  return (
    <svg
      className="md:hidden"
      width="56"
      height="16"
      viewBox="0 0 56 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.5283 0.225952H0.52832V2.22595H55.5283V0.225952ZM55.5283 13.6487H0.52832V15.6487H55.5283V13.6487Z"
        fill="white"
      />
    </svg>
  );
}

function LeftNav() {
  const leftSide = [
    { name: "Projects", link: "/", id: uuidv4() },
    { name: "Portfolio", link: "/portfolio", id: uuidv4() },
    { name: "Service", link: "/service", id: uuidv4() },
  ];

  const route = useRouter();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentPath = route.asPath;

    const active = leftSide.find((obj) => obj.link === currentPath);
    if (active) {
      setActiveLink(active.link);
    } else {
      setActiveLink("");
    }
  }, [route.asPath]);

  return (
    <>
      <ul className="mn:hidden md:flex h-fit flex-1 gap-8">
        {leftSide.map((obj, id) => (
          <li key={id} className="overflow-hidden h-fit">
            <Link href={obj.link}>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  ease: config.animations.speed,
                  duration: 1,
                  delay: 1.7 + id * -0.1,
                }}
              >
                <span className={`${activeLink === obj.link ? "" : "hover"} `}>
                  {obj.name}
                </span>
                {activeLink === obj.link && (
                  <div className="w-full translate-y-[-.1em] h-[1px] bg-white" />
                )}
              </motion.div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
function RightNav() {
  const rightSide = [
    { name: "About us", link: "/about", id: uuidv4() },
    { name: "Jobs with", link: "/jobs", id: uuidv4() },
    { name: "Contacts", link: "/contacts", id: uuidv4() },
  ];

  const route = useRouter();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentPath = route.asPath;

    const active = rightSide.find((obj) => obj.link === currentPath);
    if (active) {
      setActiveLink(active.link);
    } else {
      setActiveLink("");
    }
  }, [route.asPath]);

  return (
    <ul className="mn:hidden h-fit md:flex flex-1 gap-8 justify-end">
      {rightSide.map((obj, id) => (
        <li key={id} className="overflow-hidden h-fit">
          <Link href={obj.link}>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                ease: config.animations.speed,
                duration: 1,
                delay: 1.7 + id * -0.1,
              }}
            >
              <span className={`${activeLink === obj.link ? "" : "hover"} `}>
                {obj.name}
              </span>
              {activeLink === obj.link && (
                <div className="w-full translate-y-[-.1em] h-[1px] bg-white" />
              )}
            </motion.div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Logo() {
  const mobile = useMobile();
  return (
    <motion.svg
      initial={{ y: "-200%" }}
      animate={{ y: 0 }}
      exit={{ y: "-200%" }}
      transition={{
        ease: config.animations.speed,
        duration: 1,
        delay: 2.5,
      }}
      width={mobile ? "13em" : "16em"}
      viewBox="0 0 255 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7819 26.5651C10.973 26.5651 8.55334 26.0006 6.52283 24.8716C4.49232 23.729 2.92714 22.1511 1.82728 20.138C0.72742 18.1113 0.17749 15.7649 0.17749 13.0989C0.17749 10.256 0.769722 7.86206 1.95419 5.91695C3.15557 3.97184 4.77998 2.5028 6.82741 1.50984C8.89176 0.503281 11.2099 0 13.7819 0C17.183 0 19.9157 0.686911 21.9801 2.06073C24.0614 3.42095 25.4912 5.19603 26.2695 7.38598L22.0055 8.0797C21.3456 6.48824 20.288 5.22324 18.8328 4.28469C17.3945 3.33254 15.7109 2.85646 13.7819 2.85646C12.1067 2.85646 10.5585 3.24412 9.13711 4.01944C7.73268 4.78117 6.59898 5.92375 5.73601 7.44719C4.87304 8.97064 4.44156 10.8545 4.44156 13.0989C4.44156 15.1392 4.77998 16.9551 5.45681 18.5466C6.15057 20.138 7.18275 21.3894 8.55334 22.3008C9.94086 23.2121 11.6837 23.6678 13.7819 23.6678C16.3031 23.6678 18.2998 23.1237 19.7719 22.0355C21.2609 20.9474 22.0055 19.5191 22.0055 17.7508H26.3203C26.3203 19.5871 25.7957 21.165 24.7467 22.4844C23.6976 23.7902 22.2254 24.7968 20.3303 25.5041C18.4521 26.2114 16.2693 26.5651 13.7819 26.5651ZM35.8645 25.096C37.9457 26.0754 40.3062 26.5651 42.9459 26.5651C45.5855 26.5651 47.946 26.0822 50.0273 25.1164C52.1085 24.1507 53.7499 22.6884 54.9512 20.7297C56.1526 18.7574 56.7533 16.2818 56.7533 13.3029C56.7533 10.3377 56.1526 7.86886 54.9512 5.89655C53.7499 3.92423 52.1085 2.44839 50.0273 1.46904C47.946 0.489679 45.5855 0 42.9459 0C40.3062 0 37.9457 0.489679 35.8645 1.46904C33.7832 2.43479 32.1419 3.90383 30.9405 5.87614C29.7391 7.83486 29.1384 10.3105 29.1384 13.3029C29.1384 16.2546 29.7391 18.7166 30.9405 20.6889C32.1419 22.6476 33.7832 24.1167 35.8645 25.096ZM50.0273 20.995C48.3013 22.7496 45.9409 23.627 42.9459 23.627C39.9847 23.627 37.6242 22.7564 35.8645 21.0154C34.1216 19.2607 33.2502 16.6899 33.2502 13.3029C33.2502 9.9568 34.1216 7.37918 35.8645 5.57009C37.6242 3.761 39.9847 2.85646 42.9459 2.85646C45.9409 2.85646 48.3013 3.761 50.0273 5.57009C51.7701 7.36558 52.6415 9.92959 52.6415 13.2621C52.6415 16.6627 51.7701 19.2403 50.0273 20.995ZM94.5001 25.6469C96.2768 26.259 98.2312 26.5651 100.363 26.5651C102.918 26.5651 105.076 26.2386 106.835 25.5857C108.595 24.9328 109.924 24.0555 110.82 22.9537C111.734 21.8519 112.191 20.6209 112.191 19.2607C112.191 17.506 111.523 16.0778 110.186 14.976C108.866 13.8742 107.064 13.0173 104.78 12.4052L98.1804 10.5689C96.6068 10.1336 95.4477 9.64395 94.7032 9.09986C93.9756 8.54217 93.6118 7.79405 93.6118 6.8555C93.6118 5.71292 94.1955 4.76757 95.3631 4.01944C96.5306 3.27133 98.1635 2.89727 100.262 2.89727C102.326 2.89727 103.917 3.23052 105.033 3.89703C106.167 4.54993 106.861 5.46808 107.115 6.65147H111.023C110.753 4.62474 109.704 3.01288 107.876 1.81589C106.049 0.605298 103.511 0 100.262 0C96.7591 0 94.0517 0.6257 92.1397 1.8771C90.2445 3.1285 89.2969 4.74716 89.2969 6.73308C89.2969 8.50136 89.9738 9.87518 91.3275 10.8545C92.6811 11.8339 94.6778 12.7044 97.3175 13.4662L102.952 15.0576C104.577 15.4793 105.803 16.0302 106.632 16.7103C107.462 17.3768 107.876 18.2541 107.876 19.3423C107.876 20.1176 107.563 20.8317 106.937 21.4846C106.328 22.1239 105.456 22.6408 104.323 23.0353C103.189 23.4298 101.852 23.627 100.312 23.627C98.8911 23.627 97.5797 23.4434 96.3783 23.0761C95.177 22.6952 94.2125 22.1239 93.4849 21.3622C92.7573 20.5869 92.3935 19.6007 92.3935 18.4037H88.5355C88.5693 20.1856 89.1277 21.6819 90.2107 22.8925C91.2936 24.1031 92.7234 25.0212 94.5001 25.6469ZM128.817 26.5651C126.177 26.5651 123.817 26.0754 121.736 25.096C119.654 24.1167 118.013 22.6476 116.812 20.6889C115.61 18.7166 115.01 16.2546 115.01 13.3029C115.01 10.3105 115.61 7.83486 116.812 5.87614C118.013 3.90383 119.654 2.43479 121.736 1.46904C123.817 0.489679 126.177 0 128.817 0C131.457 0 133.817 0.489679 135.899 1.46904C137.98 2.44839 139.621 3.92423 140.822 5.89655C142.024 7.86886 142.625 10.3377 142.625 13.3029C142.625 16.2818 142.024 18.7574 140.822 20.7297C139.621 22.6884 137.98 24.1507 135.899 25.1164C133.817 26.0822 131.457 26.5651 128.817 26.5651ZM128.817 23.627C131.812 23.627 134.173 22.7496 135.899 20.995C137.641 19.2403 138.513 16.6627 138.513 13.2621C138.513 9.92959 137.641 7.36558 135.899 5.57009C134.173 3.761 131.812 2.85646 128.817 2.85646C125.856 2.85646 123.496 3.761 121.736 5.57009C119.993 7.37918 119.121 9.9568 119.121 13.3029C119.121 16.6899 119.993 19.2607 121.736 21.0154C123.496 22.7564 125.856 23.627 128.817 23.627ZM151.028 0.448847H147.069V16.8123C147.069 18.9614 147.568 20.7637 148.566 22.2191C149.565 23.661 150.969 24.7491 152.78 25.4837C154.607 26.2046 156.748 26.565 159.201 26.565C161.655 26.565 163.787 26.2046 165.597 25.4837C167.408 24.7491 168.804 23.661 169.785 22.2191C170.784 20.7637 171.283 18.9614 171.283 16.8123V0.448847H167.323V16.8123C167.323 19.2199 166.57 20.9609 165.064 22.0355C163.575 23.0965 161.621 23.627 159.201 23.627C156.765 23.627 154.793 23.0965 153.287 22.0355C151.781 20.9609 151.028 19.2199 151.028 16.8123V0.448847ZM173.258 26.0753L184.223 0.448847H189.045L199.756 26.0753H195.593L192.903 19.5055H180.212L177.42 26.0753H173.258ZM181.228 17.0163H191.888L186.558 4.32547L181.228 17.0163ZM207.342 23.3005V0.448847H203.382V26.0753H221.555V23.3005H207.342ZM225.999 26.0753V0.448847H229.959V26.0753H225.999ZM234.647 26.0753V0.448847H254.039V3.18288H238.607V11.7114H252.973V14.4455H238.607V26.0753H234.647ZM61.1983 0.448847H65.9192L81.7572 21.0829V0.448847H85.7167V26.0753H81.3003L65.1578 5.07706V26.0753H61.1983V0.448847ZM135.291 29.5651H118.925V33.202H135.291V29.5651Z"
        fill="white"
      />
    </motion.svg>
  );
}

export default Header;
