import {
  HStack,
  Image,
  Input,
  InputGroup,
  Spacer,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { CiSearch } from "react-icons/ci";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <InputGroup startElement={<CiSearch />}>
        <Input style={{ borderRadius: "20px" }} placeholder="Search" />
      </InputGroup>
      <Spacer />
      <ColorModeButton padding={"0px 10px"} />
    </HStack>
  );
};

export default NavBar;
