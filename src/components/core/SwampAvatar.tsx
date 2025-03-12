import {
    Avatar,
    AvatarProps,
    ChakraProps,
    Icon,
    Image,
  } from '@chakra-ui/react';
  
  type SwampAvatarProps = AvatarProps & {
    src: string | null;
  };
  
  const SwampAvatar = ({ src, ...props }: SwampAvatarProps) => {
    return (
      // <Avatar
      //   size="xs" 
      //   borderRadius={0}
      //   src={src || "/img/logo.png"}
      //   bg={'transparent'}
      //   // icon={<Image objectFit="contain" src="/img/logo.png" />}
      //   {...props}
      // />
      <Image
        {...props}
        src={src || "/img/unknown-logo.png"}
        borderRadius="full"
      />
    );
  };
  
  export default SwampAvatar;
  