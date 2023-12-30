import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Icon,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import styles from "./Faq.module.css"

function Faq() {
  return (
    <>
      <h1 className={styles.faqHeading}>FAQ</h1>
      <Box width={"90%"} margin={"auto"}>
        <Accordion allowMultiple>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" color="#12406f">
                      How does an investor gain access to MF utility ?
                    </Box>
                    {isExpanded ? (
                      <Icon
                        as={MinusIcon}
                        fontSize="24px"
                        borderRadius={100}
                        borderWidth="1px"
                        borderColor="#12406f"
                        p={1}
                        backgroundColor={"#12406f"}
                        color={"white"}
                      />
                    ) : (
                      <Icon
                        as={AddIcon}
                        fontSize="24px"
                        p={1}
                        borderRadius={100}
                        borderWidth="1px"
                        borderColor="#12406f"
                        color="#12406f"
                      />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} opacity={0.6}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" color="#12406f">
                      Will investors be able to have multiple Common Account
                      Numbers
                    </Box>
                    {isExpanded ? (
                      <Icon
                        as={MinusIcon}
                        fontSize="24px"
                        p={1}
                        borderRadius={100}
                        borderWidth="1px"
                        borderColor="#12406f"
                        backgroundColor={"#12406f"}
                        color={"white"}
                      />
                    ) : (
                      <Icon
                        as={AddIcon}
                        fontSize="24px"
                        p={1}
                        borderRadius={100}
                        borderWidth="1px"
                        borderColor="#12406f"
                        color="#12406f"
                      />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} opacity={0.6}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" color="#12406f">
                      How does an investor gain access to MF utility ?
                    </Box>
                    {isExpanded ? (
                      <Icon
                        as={MinusIcon}
                        fontSize="24px"
                        borderRadius={100}
                        borderWidth="1px"
                        borderColor="#12406f"
                        p={1}
                        backgroundColor={"#12406f"}
                        color={"white"}
                      />
                    ) : (
                      <Icon
                        as={AddIcon}
                        fontSize="24px"
                        p={1}
                        borderRadius={100}
                        borderWidth="1px"
                        borderColor="#12406f"
                        color="#12406f"
                      />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} opacity={0.6}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
}

export default Faq;
