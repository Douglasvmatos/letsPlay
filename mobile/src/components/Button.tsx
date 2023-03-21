import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

interface Props extends IButtonProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={12}
      rounded="sm"
      fontSize="md"
      textTransform="uppercase"
      bg="red.300"
      _loading={{
        _spinner: { color: "black" }
      }}
      {...rest}
    >
      <Text
        fontSize="md"
        fontFamily="heading"

        fontWeight="bold"
      >
        {title}
      </Text>
    </ButtonNativeBase >
  );
}
