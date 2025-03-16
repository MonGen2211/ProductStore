import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setnewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log("success: ", success);
    console.log("message: ", message);
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8} Size={"21"} text-align={"center"} mb={8}>
        <Heading ass={"h1"}>Create New Product</Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.8--")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placehoolder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setnewProduct({ ...newProduct, name: e.target.value })
              }
            />

            <Input
              placehoolder="Product Price"
              name="price"
              value={newProduct.price}
              onChange={(e) =>
                setnewProduct({ ...newProduct, price: e.target.value })
              }
            />

            <Input
              placehoolder="Product Image"
              name="Image"
              value={newProduct.image}
              onChange={(e) =>
                setnewProduct({ ...newProduct, image: e.target.value })
              }
            />

            <Button colorSchema="blue" onClick={handleAddProduct} w={"full"}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
