import {
    Card,
    CardTitle,
    CardBody,
    CardSubtitle,
    CardText,
    } from 'reactstrap';

    // import '/public/logo192.png';


function HomePage() {
    return (
        <div>
            <Card
            style={{
                width: '18rem',
            }}
            >
            {/* <img alt='BadBank Logo' src='./public/logo192'/> */}
            <CardBody>
                <CardTitle tag='h5'>BadBank</CardTitle>
                <CardSubtitle className='mb-2 text-muted' tag='h6'>
                Greetings!
                </CardSubtitle>
                <CardText>
                Deposit and withdraw all your moneys here. Whether it's NFTs or government bonds, BadBank will be here for you (Terms and Conditions apply).
                </CardText>
            </CardBody>
            </Card>
        </div>
    );
}

export default HomePage;
