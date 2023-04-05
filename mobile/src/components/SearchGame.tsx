import { Box, Center, Divider, Heading, Icon, VStack } from "native-base";
import { Input } from "./Input";

export function SearchGame() {
  return (
        <VStack maxW="300px" w={230} marginRight={3} >
          <Input
            borderWidth={1} h={16 }borderColor='white'
            placeholder="Digite o CEP ou cidade" 
            borderRadius="4" 
            fontSize="lg" />
        </VStack>
  )
}
