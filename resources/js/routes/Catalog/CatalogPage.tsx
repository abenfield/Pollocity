import { ListingPreviewCard } from 'components/ListingPreviewCard';
import { SimpleGrid } from '@chakra-ui/react';
import { Page } from 'components/Page';

export default function () {
  return  (
  <Page>
    <SimpleGrid columns={3} spacing={20}>
      <ListingPreviewCard></ListingPreviewCard>
    </SimpleGrid>
  </Page>
  )}
