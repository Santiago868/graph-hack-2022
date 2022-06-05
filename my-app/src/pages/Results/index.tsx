import { Center, Heading, Container, Button, Spinner, ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const theme = extendTheme({
    colors: {
      purple: {
        100: "#7b3fe4",
      },
    },
  })

const Results = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Dstl VS Others',
            },
        },
    };

    const labels = ['PNG', 'JPEG', 'SVG']
    
    const data = {
        labels,
        datasets: [
            {
                label: 'Others',
                data: [ 6,
                    12,
                    4],
                backgroundColor: 'rgba(128,128,128)',
            },
            {
                label: 'DSTL',
                data: [ 1,
                    2,
                    .5],
                backgroundColor: 'rgba(51,255,51)',
            },
        ]
    }

    return (
        <ChakraProvider theme={theme}>

        <>
                <Container
                    display="block"
                >
                <Center>
                    <Heading>
                        INSERT TAGLINE
                    </Heading>
                </Center>
            
                
                <Container
                    maxW='container.md' 
                >
                    <Bar
                        options={options}
                        data={data}
                    />
                </Container>


                <Container>
                    <Button 
                            color='white'
                            backgroundColor='purple.100'
                            colorScheme='primary'
                    >
                        Mint Now
                    </Button>
                </Container>
            </Container>
            
            <Container
                    display='none'
                >
                <Center>
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='purple.100'
                        size='xl'
                    />
                </Center>

            </Container>
        </>

        </ChakraProvider>

    )
};


export default Results;