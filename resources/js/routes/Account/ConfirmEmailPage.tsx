import { CenteredCard } from "components/CenteredCard";
import { Page } from "components/Page"
import { Text, Center, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DefaultSerializer } from "v8";

const ConfirmEmailPage = () => (
    <Page>
        <CenteredCard
            header = "Please verify your email">
            <Text>
                To finish signing up for Market, you must verify your e-mail address. 
            </Text>    
            <Center>
                <Image
                src='https://i.imgur.com/N8Dl0us.png'
                alt='' 
                boxSize='200px'
                />
            </Center>
            <Text>
                If you are having trouble finding your email, you can request a new one.
            </Text>

            <Button>
                Resend Email
            </Button>

        </CenteredCard>
    </Page>
)


export default ConfirmEmailPage;