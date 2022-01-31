import { Header } from "../Header";
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <>
            <Header/>
            <Container>
                <Summary/>
                <TransactionTable/>
            </Container>
        </>
    )
}