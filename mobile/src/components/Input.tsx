import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base';

type Props = IInputProps & {
    errorMessage?: string | null;
} 

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
    const invalid = !!errorMessage || isInvalid;

  return (
      <FormControl mb={4} isInvalid={invalid} >
            <NativeBaseInput
            bg="gray.800"
            h={'16'}
            px={4}
            borderColor="gray.600"
            fontSize="xl"
            isInvalid={invalid}
            fontFamily="body"
            color="white"
            placeholderTextColor="gray.300"
            _focus={{
                bg: "gray.400",
                borderColor: "green.600",
                borderWidth: 2
            }}
            {...rest}
            _invalid={{
                
            }}
            />
            <FormControl.ErrorMessage>
                {errorMessage}
            </FormControl.ErrorMessage>
    </FormControl>
  );
}