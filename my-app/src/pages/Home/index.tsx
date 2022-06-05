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
        >x
          <Box display='flex' flexDirection='column' sx={{ width: '50' }}>
            {/* Single Image Upload */}
            <Typography
                  className="text"
                  textAlign='left'
                  variant='h4'
                  component='h1'
                  gutterBottom
                  fontFamily='Poppins'
                >
                  Multiple Image Upload
                </Typography>
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
    </ThemeProvider>
  );
}

export default Home;
