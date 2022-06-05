import {
  Box,
  Button,
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
          <Box display='flex' flexDirection='column' sx={{ width: '50%' }}>
            {/* Single Image Upload */}
            <Typography
                  className="textLarge"
                  textAlign='center'
                  variant='h1'
                  component='h1'
                  gutterBottom
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
      <Container maxWidth={false} className='background'>
        <Box
          display='flex'
          flexDirection='column'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
            <Typography
                  className="text"
                  textAlign='left'
                  variant='h4'
                  component='h1'
                  gutterBottom
                  fontFamily='Poppins'
                >
                  Faster Better Smaller
            </Typography>
            <Typography
                  className="holder2"
                  textAlign='left'
                  fontFamily='Poppins'
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

                <FileUpload limit={3} multiple name='images' />
                <Button
                  variant='contained'
                  type='submit'
                  fullWidth
                  sx={{ py: '0.8rem', my: 2 }}
                >
                  Submit Images
                </Button>
              </Box>
            </FormProvider>
          </Box>
        </Box>
      </Container>
      <Container maxWidth={false} className='background' style={{paddingTop: '50px', paddingBottom: '50px'}}>
        <Box
          display='flex'
          flexDirection='column'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
              <img
                src={diagram}
                alt='file upload' 
              /> 
        </Box>
          
      </Container>
      <Container maxWidth={false} className='background' style={{paddingTop: '10px', paddingBottom: '50px'}}>
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
        <Box
          display='flex'
          flexDirection='column'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '70vh',
          }}
        >
              <img
                src={histogram}
                alt='file upload' 
              /> 
        </Box>
          
      </Container>
      <Container maxWidth={false} className='background' style={{paddingTop: '0px', paddingBottom: '20px'}}>
        <Box
          display='flex'
          flexDirection='column'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '60vh',
          }}
        >
              <img
                src={auto}
                alt='file upload' 
              /> 
        </Box>
          
      </Container>
      <Container maxWidth={false} className='background'>
        <Box
          display='flex'
          flexDirection='column'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
          }}
        >
          <Box display='flex' flexDirection='column' sx={{ width: '30%' }}>
            {/* Single Image Upload */}
            <FormProvider {...methods}>
              <Box
                component='form'
                noValidate
                autoComplete='off'
                onSubmit={methods.handleSubmit(onSubmitHandler)}
              >
                <Button
                  variant='contained'
                  type='submit'
                  fullWidth
                  sx={{ py: '0.8rem', my: 2 }}
                  href="https://mumbai.polygonscan.com/address/0x177F8A18cEf0cdDdaa7F5BB28a0FBcB38FA4699c"
                >
                  MINT NOW
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
