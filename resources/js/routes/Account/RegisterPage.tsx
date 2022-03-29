import { 
     Formik,
     Field, 
     Form,  
     ErrorMessage,
  } from 'formik';
import { Page } from 'components/Page';
import * as Yup from 'yup';
import { CenteredCard } from 'components/CenteredCard';
import { useState } from 'react';
import {  
          FormControl,
          FormLabel,
          Button,
          Input,
          InputGroup,
          InputRightElement,
  } from '@chakra-ui/react';
import * as lang from '../../utilities/locale/Lang_EN';
import { 
  submitForm,
  useAxios,
} from '../../utilities/Http';

const initalValues = {
  first_name: '',
  last_name: '',
  email: '',
}

const validationSchema = Yup.object({
  first_name: Yup.string()
    .max(35, lang.MUST_BE_35_CHARACTERS_OR_LESS)
    .required(lang.REQUIRED),
  last_name: Yup.string()
    .max(20, lang.MUST_BE_35_CHARACTERS_OR_LESS)
    .required(lang.REQUIRED),
  email: Yup.string()
  .email(lang.INVALID_EMAIL_ADDRESS)
  .required(lang.REQUIRED),
  password: Yup.string()
    .required(lang.REQUIRED)
  });

const onSubmit = async (values, actions) => {
           let response = await submitForm({url:'users', formData:values});
           if (response.errors) {

            let errorObj = {};

           for (const [field, error] of Object.entries(response.errors)) {          
              errorObj[field] = error[0]; 
            }

              if (Object.keys(errorObj).length > 0) {
                actions.setErrors( errorObj );
              }
            
           }
}
  const RegisterPageForm = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
  <Page>           
    <Formik
      initialValues={initalValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <CenteredCard
          header="Register your account"
          subHeader="to start listing today!"
        >
  
          <Field name="first_name">
            {({field}) => (
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input 
                  {...field}
                  placeholder = "First Name"
                />
                <ErrorMessage name="first_name" render=
                  {msg => <span style={{color:'red'}}>{msg}</span>} />
            </FormControl>
            )}
          </Field>

        <Field name="last_name">
          {({field}) => (
            <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input 
              {...field}
              placeholder = "Last Name"
            />
          <ErrorMessage name="last_name" render=
            {msg => <span style={{color:'red'}}>{msg}</span>} />
          </FormControl>
          )}
        </Field>
        
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
    );
  }
  
 export default RegisterPageForm;