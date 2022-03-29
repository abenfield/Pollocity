import {
    FormControl,
    FormLabel,
    Input,
    Button,
    InputRightElement,
    InputGroup,
  } from '@chakra-ui/react';
import {Page} from 'components/Page'
import * as Yup from 'yup';
import { 
  Formik,
  Field, 
  Form, 
  ErrorMessage, 
} from 'formik';

import * as lang from '../../utilities/locale/Lang_EN';
import { CenteredCard } from 'components/CenteredCard';
import {useState} from 'react';


const initalValues = {
  email: '',
  password: '',
}

const validationSchema = Yup.object({
  email: Yup.string()
  .email(lang.INVALID_EMAIL_ADDRESS)
  .required(lang.REQUIRED),  
  password: Yup.string()
  .required(lang.REQUIRED),  
});



const LoginPageForm = () => {
const [show, setShow] = useState(false);
const handleClick = () => setShow(!show);

return    (
<Page>           
  <Formik
    initialValues={initalValues}
    validationSchema={validationSchema}
    onSubmit={values => {
    console.log(values);
  }}
  >
    <Form>
      <CenteredCard
        header="Log into your account"
        subHeader="to start listing today!"
      >
      <Field name="email">
        {({field}) => (
          <FormControl>
          <FormLabel>Email</FormLabel>
          <Input 
            {...field}
            placeholder = "Email"
          />
        <ErrorMessage name="email" render=
          {msg => <span style={{color:'red'}}>{msg}</span>} />
        </FormControl>
        )}
      </Field>

      <Field name="password">
        {({field}) => (
          <FormControl>
          <FormLabel>Password</FormLabel>
          <InputGroup size='md'>
          <Input 
            {...field}
            placeholder = "Password"
            type={show ? 'text' : 'password'}
          />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
      </InputRightElement>
      </InputGroup>
        <ErrorMessage name="password" render=
          {msg => <span style={{color:'red'}}>{msg}</span>} />
        </FormControl>
        )}
      </Field>

        <Button
            type = "submit"
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}>
            {lang.SUBMIT}
        </Button>
      </CenteredCard>
    </Form>
  </Formik>
</Page>
)
}

export default LoginPageForm;