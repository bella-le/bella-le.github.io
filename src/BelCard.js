import { Card, Image, Text, Grid, Link } from '@geist-ui/core'
import headshot from './static/bella-headshot.png';
import pdf from './static/Bella_Le_Resume.pdf';

var ucsdLink = <Link color underline target="_blank" href="https://ucsd.edu/">UC San Diego</Link>;
var netflixLink = <Link color underline target="_blank" href="https://netflix.com/">Netflix</Link>;
var liLink = <Link color underline target="_blank" href="https://www.linkedin.com/">LinkedIn</Link>;
var quoraLink = <Link color underline target="_blank" href="https://quora.com/">Quora</Link>;

const BelCard = () => (
    <Card width="100%" shadow type='cyan'> 
        <Grid.Container gap={2} justify="center" wrap='wrap-reverse'>
            {/* Greeting */}
            <Grid xs={24} md={12}>
                <p>
                <Text h3>✨ hi i'm Bella!</Text>
                <Text small>full-stack developer who likes cats, keyboards, tea, and lame jokes</Text>
                <p>
                <i>currently</i> →<br />
                ⊹ software engineer @ {netflixLink} 🍿
                </p>
                <p>
                <i>formerly</i> →<br />
                ⊹ ex-{liLink} and {quoraLink}<br />
                ⊹ computer science @ {ucsdLink}
                </p>
                <p>
                </p>
                </p>
            </Grid>
            {/* Headshot */}
            <Grid md={10} justify='center'><Image width="300px" height="300px" src={headshot} /></Grid>
        </Grid.Container>
        <Card.Footer>
        <Link color target="_blank" href={pdf}>my resume 🌸</Link>
      </Card.Footer>
    </Card>
)
export default BelCard;
