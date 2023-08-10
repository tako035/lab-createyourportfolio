import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];
const links = [
  {
    title: "Projects",
    url: "/#projects",
    anchor: "projects"
  },
  {
    title: "Contact Me",
    url: "/#contact-me",
    anchor: "contactme"
  },
]

const Header = () => {
  
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);
  const headerBoxRef = useRef();

  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const handleScroll = () => {
    prevScrollY < window.scrollY ? headerBoxRef.current.style.transform = "translateY(-200px)" : headerBoxRef.current.style.transform = "translateY(0px)";
    setPrevScrollY(window.scrollY)
  }
  
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[handleScroll])
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      zIndex={100}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerBoxRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
            {
            socials.map((social) => {
              return( 
              <a href={social.url} key={social.url}>
                <FontAwesomeIcon 
                  icon={social.icon} 
                  size="2x"
                />
              </a>
              )
            })
          }
          </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {links.map((link) => {
                return(
                  <a 
                    href={link.url} 
                    key={link.anchor}
                    onClick={() => handleClick(link.anchor)}
                  >
                    {link.title}
                  </a>)
              })
            }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
