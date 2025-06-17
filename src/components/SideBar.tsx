import { Button, List, Spacer, Text } from "@chakra-ui/react";

interface yearProps {
  year: number;
  onClick: (year: number) => void;
}

const SideBar = ({ year, onClick }: yearProps) => {
  console.log(year);
  return (
    <>
      <List.Root gapY={"10px"} textAlign={"center"} textStyle={"2xl"}>
        <Spacer></Spacer>
        <Text textStyle="2xl" textAlign={"center"}>
          Year of release
        </Text>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2025);
            }}>
            2025
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2024);
            }}>
            2024
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2023);
            }}>
            2023
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2022);
            }}>
            2022
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2021);
            }}>
            2021
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2020);
            }}>
            2020
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2019);
            }}>
            2019
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2018);
            }}>
            2018
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2017);
            }}>
            2017
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2016);
            }}>
            2016
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2015);
            }}>
            2015
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2014);
            }}>
            2014
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2013);
            }}>
            2013
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2012);
            }}>
            2012
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2011);
            }}>
            2011
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2010);
            }}>
            2010
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2009);
            }}>
            2009
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2008);
            }}>
            2008
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2007);
            }}>
            2007
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2006);
            }}>
            2006
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2005);
            }}>
            2005
          </Button>
        </List.Item>
        <List.Item>
          <Button
            variant={"plain"}
            textStyle={"xl"}
            onClick={() => {
              onClick(2004);
            }}>
            2004
          </Button>
        </List.Item>
      </List.Root>
    </>
  );
};

export default SideBar;
