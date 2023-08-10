import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      <VStack bgColor="white" rounded={10} align="flex-start">
        <Image src={imageSrc} rounded={10} />
        <VStack rounded={10} align="flex-start" >
          <Heading size="sm" color="black" m={2}>{title}</Heading>
          <Text color="gray" fontSize="sm" p={2}>{description}</Text>
        </VStack>
        <HStack p={2}>
          <Text color="black" marginStart="10px" fontSize="xs">See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black"></FontAwesomeIcon>
        </HStack>
      </VStack>
  );
};

export default Card;
