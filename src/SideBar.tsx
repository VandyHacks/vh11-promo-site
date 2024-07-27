import { Flex, Text, Image } from "@mantine/core";
import Checker from "./assets/checkerbg.png";
import Instagram from "./assets/instagram.png";
import Facebook from "./assets/facebook.png";
import Youtube from "./assets/youtube.png";
import Discord from "./assets/discord.png";
import React from "react";

function SideBar() {
  return (
    <div style={{ width: "20%" }}>
      <Flex
        direction={"column"}
        style={{
          fontFamily: "DM Sans",
          fontSize: "16px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <Flex style={{ backgroundColor: "#1F1F1F" }} justify={"center"}>
          <Text
            style={{
              fontFamily: "Formula1",
              fontWeight: "900",
              fontSize: "36px",
              color: "white",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            VHACKS XI
          </Text>
        </Flex>
        <Flex
          justify={"center"}
          style={{
            backgroundImage: `url(${Checker})`,
            backgroundSize: "cover", // You can also use 'contain', 'auto', or a specific size like '50%'
            backgroundRepeat: "no-repeat", // Options are 'repeat', 'repeat-x', 'repeat-y', 'no-repeat'
            backgroundPosition: "center", // Options are 'left', 'right', 'top', 'bottom', 'center', or specific positions like '50% 50%'
          }}
        >
          <Text
            style={{
              fontSize: "21px",
              fontWeight: "700",
              color: "white",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            12:00:00
          </Text>
        </Flex>
        <Flex justify={"center"}>
          <Text
            style={{
              fontWeight: "500",
              fontSize: "18px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            Nashville, TN
          </Text>
        </Flex>
      </Flex>

      <Flex
        style={{
          marginTop: "32px",
          backgroundColor: "#FCF8F5",
          borderRadius: "20px",
          overflow: "hidden",
          padding: "24px",
        }}
        direction={"column"}
      >
        <Flex direction={"column"} style={{ width: "100%", gap: "6px" }}>
          <Text
            style={{
              border: "1px solid #C2C7CF",
              textAlign: "center",
              paddingBottom: "6px",
              paddingTop: "6px",
              borderRadius: "100px",
              fontWeight: "500",
              cursor: "pointer",
            }}
            className="hoverEffectSidebar"
          >
            About Us
          </Text>
          <Text
            style={{
              border: "1px solid #C2C7CF",
              textAlign: "center",
              paddingBottom: "6px",
              paddingTop: "6px",
              borderRadius: "100px",
              fontWeight: "500",
              cursor: "pointer",
            }}
            className="hoverEffectSidebar"
          >
            Schedule
          </Text>
          <Text
            style={{
              border: "1px solid #C2C7CF",
              textAlign: "center",
              paddingBottom: "6px",
              paddingTop: "6px",
              borderRadius: "100px",
              fontWeight: "500",
              cursor: "pointer",
            }}
            className="hoverEffectSidebar"
          >
            FAQ
          </Text>
          <Text
            style={{
              border: "1px solid #C2C7CF",
              textAlign: "center",
              paddingBottom: "6px",
              paddingTop: "6px",
              borderRadius: "100px",
              fontWeight: "500",
              cursor: "pointer",
            }}
            className="hoverEffectSidebar"
          >
            Speakers
          </Text>
          <Text
            style={{
              border: "1px solid #C2C7CF",
              textAlign: "center",
              paddingBottom: "6px",
              paddingTop: "6px",
              borderRadius: "100px",
              fontWeight: "500",
              cursor: "pointer",
            }}
            className="hoverEffectSidebar"
          >
            Sponsors
          </Text>
        </Flex>
        <Flex gap={"16px"} justify={"center"} style={{ marginTop: "48px" }}>
          <Flex direction={"column"} align={"start"} gap={"16px"}>
            <Flex justify={"center"} align={"center"} gap={"6px"}>
              <Image src={Instagram} width={24} height={24}></Image>
              <Text style={{ fontSize: "12px" }}>Instagram</Text>
            </Flex>
            <Flex justify={"center"} align={"center"} gap={"6px"}>
              <Image src={Youtube} width={24} height={24}></Image>
              <Text style={{ fontSize: "12px" }}>YouTube</Text>
            </Flex>
          </Flex>
          <Flex direction={"column"} align={"start"} gap={"16px"}>
            <Flex justify={"center"} align={"center"} gap={"6px"}>
              <Image src={Facebook} width={24} height={24}></Image>
              <Text style={{ fontSize: "12px" }}>Facebook</Text>
            </Flex>
            <Flex justify={"center"} align={"center"} gap={"6px"}>
              <Image src={Discord} width={24} height={24}></Image>
              <Text style={{ fontSize: "12px" }}>Discord</Text>
            </Flex>
          </Flex>
        </Flex>
        <Text
          style={{
            backgroundColor: "#1F1F1F",
            color: "white",
            fontWeight: "700",
            textAlign: "center",
            borderRadius: "100px",
            fontSize: "18px",
            paddingTop: "8px",
            paddingBottom: "8px",
            marginLeft: "12px",
            marginRight: "12px",
            marginTop: "32px",
          }}
        >
          JOIN NOW
        </Text>
      </Flex>
    </div>
  );
}

export default SideBar;
