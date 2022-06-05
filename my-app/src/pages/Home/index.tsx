import {
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Stack,
  Typography,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { array, object, TypeOf, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FileUpload from '../FileUpload';
import theme from '../../theme';
import { useUploadImageMutation } from '../../redux/uploadAPI';
import './style.css'
import diagram from '../../../src/assets/diagram.png';
import histogram from '../../../src/assets/histogram.png';
import monk24 from '../../../src/assets/monk-24.png';
import monk202 from '../../../src/assets/monk-202.png';
import monk250 from '../../../src/assets/monk-250.png';
import monk24comp from '../../../src/assets/monk-24comp.png';
import monk202comp from '../../../src/assets/monk-202comp.png';
import monk250comp from '../../../src/assets/monk-250comp.png';
import beaker from '../../../src/assets/beaker.png';

import code from '../../../src/assets/code.png';
import { useState } from 'react'

import auto from '../../../src/assets/auto.png';

const imageUploadSchema = object({
  imageCover: z.instanceof(File),
  images: array(z.instanceof(File)),
});

type IUploadImage = TypeOf<typeof imageUploadSchema>;

function Home() {
  const [uploadImage] = useUploadImageMutation();

  const methods = useForm<IUploadImage>({
    resolver: zodResolver(imageUploadSchema),
  });

  const onSubmitHandler: SubmitHandler<IUploadImage> = (values) => {
    const formData = new FormData();
    formData.append('imageCover', values.imageCover);

    if (values.images.length > 0) {
      values.images.forEach((el) => formData.append('images', el));
    }

    console.log(values);

    // Call the Upload API
    uploadImage(formData);
  };
  const [submitClick, setSubmitClick] = useState(false)
  const handleClick = () => {

      setTimeout(() => {
          window.location.href = "https://mumbai.polygonscan.com/token/0x5852e2b1a614e2fa3140a59f9ab35e0c20a34cc5"
      }, 20000);
      setSubmitClick(true)
  }
  console.log({submitClick})

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false} className='background'>
        <Box
          display='flex'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Box display='flex' flexDirection='column' sx={{ width: '100%' }}>
            {/* Single Image Upload */}
            <Typography
                  className="textLarge"
                  textAlign='center'
                  gutterBottom
                  fontSize='150px'   
                  fontWeight='500'
                  letterSpacing='4px'
                  fontFamily='Poppins'
                  sx={{
                    fontWeight: 500
                  }}
                >
                  DSTL
            </Typography>
            <FormProvider {...methods}>
              <Box
                component='form'
                noValidate
                autoComplete='off'
                onSubmit={methods.handleSubmit(onSubmitHandler)}
              >
              </Box>
            </FormProvider>
          </Box>
        </Box>
      </Container>
      <CssBaseline />
     
      <Container maxWidth={false} className='background' style={{paddingTop: '50px', paddingBottom: '50px'}}>
        <Box
          display='flex'
          flexDirection='column'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            paddingTop:'100px',
          }}
        >
              <img
                src={diagram}
                alt='file upload'
                width='1300px'
              /> 
        </Box>
          
      </Container>
      <Container maxWidth={false} className='background'>
      <Typography
                  className="text"
                  textAlign='center'
                  variant='h2'
                  component='h1'
                  gutterBottom
                  fontFamily='Poppins'
                >
                  Image Compression Results
            </Typography>
            <Typography
                  className="reg"
                  textAlign='center'
                  gutterBottom
                  marginTop='20px'
                  fontSize='20px'
                  paddingBottom='100px'

                >
                  Hella Compressed Pictures of Animals and Stuffs
            </Typography>
        <Box
          display='flex'
          flexDirection='column'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '70vh',
            paddingTop: '50px'
          }}
        >
              <img
                src={histogram}
                alt='file upload' 
                width='1300px'
              /> 
        </Box>
          
      </Container>
      <Container maxWidth={false} className='background' style={{paddingTop: '100px', paddingBottom: '50px'}}>
      <Typography
                  className="text"
                  textAlign='center'
                  variant='h2'
                  component='h1'
                  gutterBottom
                  fontFamily='Poppins'
                  marginTop='200px'
                >
                  Deep auto encoder image compressor
            </Typography>
            {/* <Typography
                  className="text"
                  textAlign='center'
                  variant='h5'
                  component='h1'
                  gutterBottom
                  marginTop='20px'

                >
                  Hella Compressed Pictures of Animals and Stuffs
            </Typography> */}
        <Box
          display='flex'
          flexDirection='column'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '60vh',
            paddingTop: '400px'
          }}
        >
              <img
                src={auto}
                alt='file upload' 
                width='1500px'
              /> 
        </Box>
          
      </Container>
      <Container maxWidth={false} className='background' style={{paddingTop: '300px'}}>
        <Box
          display='flex'
          flexDirection='row'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '40vh',
            paddingTop: '100px'
          }}
        >
              <Box sx={{width: '20%'}}>
              <img
                src={monk24}
                alt='file upload' 
              /> 
              </Box>
              <Box sx={{width: '20%'}}>
                <img
                src={monk202}
                alt='file upload' 
              />
              </Box>
              <Box sx={{width: '20%'}}>
                <img
                src={monk250}
                alt='file upload' 
                width='1300px'
              />  

              </Box>
        </Box>
          
      </Container>
      <Container maxWidth={false} className='background' style={{paddingTop: '30px', paddingBottom: '10px'}}>
        <Box
          display='flex'
          flexDirection='row'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '30vh',
            paddingTop: '5px'
          }}
        >
              <Box sx={{width: '20%'}}>
              <img
                src={monk24comp}
                alt='file upload' 
              /> 
              </Box>
              <Box sx={{width: '20%'}}>
                <img
                src={monk202comp}
                alt='file upload' 
              />
              </Box>
              <Box sx={{width: '20%'}}>
                <img
                src={monk250comp}
                alt='file upload' 
                width='1300px'
              />  

              </Box>
        </Box>
          
      </Container>
      <Container maxWidth={false} className='background'style={{paddingTop: '20px', paddingBottom: '50px'}} >
      <Box
          display='flex'
          flexDirection='column'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '70vh',
            paddingTop: '400px'
          }}
        >
              <img
                src={code}
                alt='file upload' 
                width='1500px'
              /> 
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '120vh',
            paddingTop: '800px',
            paddingBottom: '300px',
            width: '100%',
          }}
        >
            <Typography
                  className="text"
                  textAlign='left'
                  variant='h1'
                  component='h1'
                  gutterBottom
                  fontFamily='Poppins'
                >
                  Faster. Better. Smaller.
            </Typography>
            <Typography
                  className="holder2"
                  textAlign='center'
                  fontFamily='Poppins'
                  variant='h5'
                  gutterBottom
                  sx={{
                    marginBottom: '60px'
                  }}
                >
                   Distill your NFT collection images to their core with DSTL. Hyper-compress your images to 10% of the PNG size for faster and cheaper storage and more responsive UI for all things NFTs.
            </Typography>
          <Box display='flex' flexDirection='column' sx={{ width: '30%' }}>
            {/* Single Image Upload */}
            <FormProvider {...methods}>
              <Box
                component='form'
                noValidate
                autoComplete='off'
                onSubmit={methods.handleSubmit(onSubmitHandler)}
              >

                <FileUpload limit={10} multiple name='images' />
                <Button
                  type="submit"
                  onClick={handleClick}
                  variant='contained'
                  fullWidth
                  sx={{ py: '0.8rem', my: 2 }}
                >
                  {submitClick ? <CircularProgress color="success" /> : 'submit'}
                </Button>
              </Box>
            </FormProvider>
          </Box>
        </Box>
      </Container>
      
    </ThemeProvider>
  );
}

export default Home;
