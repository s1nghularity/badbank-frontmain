import { Outlet } from "react-router-dom";
import { 
    Card, 
    CardHeader,
    CardBody, 
} from "reactstrap";

function Deposit() {
    
    return (
        <Card className="text-center" style={{width: '18rem'}}>

        <CardHeader>Account Balance: $$$</CardHeader>
        <CardBody>
                <p>Please input your deposit amount and click submit!</p>
        </CardBody>
        <Outlet />
    </Card>
    );
}

export default Deposit;