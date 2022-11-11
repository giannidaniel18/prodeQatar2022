import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  position,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import "./NavBar.css";

const MENUITEMS = [
  { id: "home", title: "Home", href: "/" },
  { id: "prode", title: "Prode", href: "/prode" },
  { id: "rank", title: "Ranking", href: "/ranking" },
];

const NavLink = ({ children, href }) => (
  <Link
    as={ReactRouterLink}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    to={href}
  >
    {children}
  </Link>
);

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} className="navStick" zIndex={2}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Stack direction={"row"}>
          {MENUITEMS.map((item) => (
            <NavLink key={item.id} href={item.href}>
              {item.title}
            </NavLink>
          ))}
        </Stack>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>

            <Menu>
              <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                <Avatar size={"sm"} src={"https://avatars.dicebear.com/api/male/username.svg"} />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar size={"2xl"} src={"https://avatars.dicebear.com/api/male/username.svg"} />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
