import { Box, Button, Container, Flex, Heading, Image, Link, SimpleGrid, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaDog, FaEnvelope, FaPhoneAlt, FaPaw, FaPlus } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10}>
        <Header />
        <MainContent />
        <Footer />
      </VStack>
    </Container>
  );
};

const Header = () => (
  <Flex as="header" width="full" align="center" justifyContent="space-between">
    <Heading as="h1" size="xl" letterSpacing={"tighter"}>
      Memphis XL Bully Kennel
    </Heading>
    <Stack direction="row" spacing={4}>
      <Button leftIcon={<FaDog />} colorScheme="teal" variant="solid">
        Available Puppies
      </Button>
      <Button leftIcon={<FaPaw />} colorScheme="teal" variant="outline">
        Sires & Dams
      </Button>
      <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="ghost">
        Contact Us
      </Button>
    </Stack>
  </Flex>
);

const MainContent = () => {
  const cardBgColor = useColorModeValue("white", "gray.800");

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      <ContentCard title="Available Puppies" text="Explore our adorable and healthy XL American Bully puppies ready for adoption." icon={<FaPlus />} />
      <ContentCard title="Sires & Dams" text="Meet the proud parents of our bully kennel, with strong pedigrees and championship lineage." icon={<FaPaw />} />
      <ContentCard title="Contact" text="Get in touch with us to learn more about our kennel or to schedule a visit." icon={<FaEnvelope />} />
    </SimpleGrid>
  );
};

const ContentCard = ({ title, text, icon }) => {
  const cardBgColor = useColorModeValue("white", "gray.800");

  return (
    <VStack bg={cardBgColor} boxShadow={"lg"} rounded={"md"} p={6} spacing={4} align={"start"}>
      <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
        {icon}
        <Heading size="md" ml={2}>
          {title}
        </Heading>
      </Box>
      <Text>{text}</Text>
      <Link color={"blue.400"}>Learn More</Link>
    </VStack>
  );
};

const Footer = () => (
  <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: "4", md: "8" }}>
    <Stack>
      <Text fontSize="sm" alignSelf={"center"}>
        &copy; {new Date().getFullYear()} Memphis XL Bully Kennel. All rights reserved.
      </Text>
    </Stack>
  </Box>
);

export default Index;
