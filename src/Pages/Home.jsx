import { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Stack,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import HomeTop from "../HomeComponents/HomeTop";
import HomeServices from "../HomeComponents/HomeService";
import HomeDoctor from "../HomeComponents/HomeDoctor";
import Sliding from "../HomeComponents/Sliding";
import { HomeFAQ } from "../HomeComponents/HomeFAQ";

function Home() {
  const redirectTo = () => {
    window.location.href = "/services";
  };

  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchBinanceData = async () => {
      const response = await fetch(
        "https://api.binance.com/api/v3/ticker/price?symbol=BNBBTC"
      );
      try {
        const data = await response.json();
        console.log("price of data", data.price);
        setPrice(data.price);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBinanceData();
  }, []);

  return (
    <>
      <Text>BNB: {price}</Text>
      <Box
        maxWidth="100%"
        mx="auto"
        w={"full"}
        overflow="hidden"
        position="relative"
      >
        <Box position="absolute" top={0} left={0} right={0} w="50%" />
        <Box>
          <Box position="relative" height="100%">
            <Box>
              <Flex>
                <Sliding />
                <Box position="absolute" zIndex={5} left={0} right={0} p={4}>
                  <Stack
                    maxW={"2xl"}
                    align={"flex-start"}
                    spacing={6}
                    alignSelf={"flex-start"}
                    textAlign={"left"}
                    mt={200}
                  >
                    <Text
                      color={"white"}
                      fontWeight={"semibold"}
                      lineHeight={1.2}
                      fontSize={useBreakpointValue({ base: "1xl", md: "1xl" })}
                    >
                      WE GIVE YOU THE BEST
                    </Text>
                    <Text
                      color={"#13d6a8"}
                      fontWeight={700}
                      lineHeight={1.2}
                      fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
                    >
                      Care Better Together
                    </Text>
                    <Stack
                      direction={{ base: "column", sm: "column", md: "row" }}
                    >
                      <Button
                        onClick={redirectTo}
                        borderRadius={0}
                        color={"white"}
                        bg="rgba(1, 213, 162, 1)"
                        variant="solid"
                        opacity={1}
                        size={"lg"}
                        fontSize={"xs"}
                      >
                        SEE OUR SERVICES
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>

        <Box>
          <HomeTop />
        </Box>
        <Box>
          <HomeServices />
        </Box>
        <Box padding={10}>
          <HomeDoctor />
        </Box>
        <Box>
          <HomeFAQ />
        </Box>
      </Box>
    </>
  );
}

export default Home;
