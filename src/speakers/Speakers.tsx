import React from "react";
import { Box, Flex, Image, Text } from "@mantine/core";
import "./Speakers.css";


const speakersData = [
    {
      name: "John Doe",
      subheading: "CEO, Tech Innovations",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Jane Smith",
      subheading: "AI Researcher, Future Labs",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Alex Johnson",
      subheading: "Founder, StartUp Co.",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Sarah Brown",
      subheading: "CTO, InnovateTech",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
];
  
function Speakers() {
  return (
    <Box className="speakers-container" style={{ backgroundColor: '#1F1F1F', padding: '40px 0' }}>
      <Box className="billboard" style={{ 
        backgroundColor: '#FCF8F5', 
        borderRadius: '10px', 
      }}>
        <Text className="header_text">Speakers</Text>
        <Box style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '10px', 
          background: 'repeating-linear-gradient(45deg, #1F1F1F, #1F1F1F 10px, #FCF8F5 10px, #FCF8F5 20px)'
        }} />
        <Flex className="speaker-panes" style={{ gap: '20px', padding: '20px' }}>
          {speakersData.map((speaker, index) => (
            <Box key={index} className="speaker-pane" style={{ 
              backgroundColor: '#2A2A2A',
              padding: '15px',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '20px'
            }}>
              <Box className="speaker-image-placeholder"/>
              <Text className="body_textspeaker">{speaker.name}</Text>
              <Text className="sub_textspeaker">{speaker.subheading}</Text>
              <Text className="sub_textspeakercontent">{speaker.content}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default Speakers;