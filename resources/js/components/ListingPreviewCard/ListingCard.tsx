import { 
         Box, 
         Image,
          Badge,
         } from '@chakra-ui/react'

export function PreviewCard() {
    const property = {
      imageUrl: "https://images.craigslist.org/00L0L_23Y1w7h0pUzz_0CI0t2_600x450.jpg",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Yamaha Grizzly",
      formattedPrice: "$6,0000",
      reviewCount: 34,
      rating: 4,
    }
  
    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={property.imageUrl} alt={property.imageAlt} />
  
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
                Centerton, Arkansas
            </Box>
          </Box>
  
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>
  
          <Box>
            {property.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
            </Box>
          </Box>
  
          <Box d="flex" mt="2" alignItems="center">
          </Box>
        </Box>
      </Box>
    )
  }
  
  export default PreviewCard;