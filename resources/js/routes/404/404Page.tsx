
import { CenteredCard } from "components/CenteredCard";
import { Page } from "components/Page"
import { Text, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NoMatch = () => (
    <Page>
        <CenteredCard
            header = "404"
            subHeader = "The page you have requested could not be found.">
                <Text 
                    fontSize = "xl"
                    align = "center"> 
                        It's going to be okay!
                </Text>
            <Center>
            <Link
                to="/">
                <img src = "https://i.kym-cdn.com/photos/images/original/001/878/329/dfa.jpg" />
            </Link>
            </Center>
            <Text 
                    fontSize = "xl"
                    align = "center"> 
                        Click anywhere on the crying cat to be redirected home.
                </Text>
        </CenteredCard>
    </Page>
)