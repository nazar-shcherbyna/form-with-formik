import { useFormik } from 'formik'
import React from 'react'
import { EmailIcon, LockIcon } from '../../assets/icons'
import { 
    FormInputSC, 
    FormInputWrapperSC, 
    FormLabelSC, 
    FormNav, 
    FormSubmitSC, 
    FormSubmitWrapperSC, 
    SignInFormSC, 
    SignInSC 
} from './styled'
import * as Yup from 'yup'

const SignIn = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .min(5)
                .max(40)
                .email()
                .required(),
            password: Yup.string()
                .min(4)
                .max(30)
                .required(),
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <SignInSC>
            <h4>Welcome!</h4>
            <h2>Join The Community</h2>
            <SignInFormSC onSubmit={formik.handleSubmit}>
                <FormLabelSC>E-Mail or Username</FormLabelSC>
                <FormInputWrapperSC>
                    {EmailIcon}
                    <FormInputSC
                        placeholder='e.g.: elonmusk@mars.com'
                        id='email'
                        type="text" 
                        name='email'
                        value={formik.values.email} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isTouched={formik.touched.email} 
                        isValid={!formik.errors.email}
                    />
                </FormInputWrapperSC>
                <FormLabelSC>Password</FormLabelSC>
                <FormInputWrapperSC>
                    {LockIcon}
                    <FormInputSC
                        placeholder='e.g.: X Æ A-12'
                        id='password'
                        type="password" 
                        name='password'
                        value={formik.values.password} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isTouched={formik.touched.password} 
                        isValid={!formik.errors.password}
                    />
                </FormInputWrapperSC>
                <FormSubmitWrapperSC>
                    <FormSubmitSC type="submit"><span>Sign Up</span></FormSubmitSC>
                </FormSubmitWrapperSC>
            </SignInFormSC>
            <FormNav>
                <span>Already a member?</span>
                <a href='/'>Login here →</a>
            </FormNav>
        </SignInSC>
    )
}

export default SignIn
