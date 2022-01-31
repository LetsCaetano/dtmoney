import { Header } from "../Header";
import { Summary } from "../Summary";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <>
            <Header/>
            <Container>
                <Summary/>
            </Container>
        </>
    )
}