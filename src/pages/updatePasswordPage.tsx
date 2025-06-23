import { BrandLogo } from '@/components/ui/icons'
import { PasswordToggleButton } from '@/components/ui/passwordToggleButton'
import Typography from '@/components/ui/typography'
import { mockRequest } from '@/service/apiRequestService'
import { showToast } from '@/utils/showToast'
import { Button, Form, Input, Spacer, Spinner } from '@heroui/react'
import React from 'react'
import { useNavigate } from 'react-router'




const useUpdatePassword = () => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = React.useState(false);
    const [isRequesting, setIsRequesting] = React.useState(false);

    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
    const toggleConfirmPasswordVisibility = () => setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    const navigate = useNavigate()
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsRequesting(true);
        try {
            await mockRequest()
            showToast("Success", "Password Updates Successfully", "default");
            navigate('/login')
        } catch (error: any) {
            showToast("Something went wrong", error.message,  "danger");
        } finally {
            setIsRequesting(false)
        }

    }

    return { isPasswordVisible, isRequesting, isConfirmPasswordVisible, togglePasswordVisibility, toggleConfirmPasswordVisibility, onSubmit }
}

const UpdatePasswordPage = () => {

    const { isPasswordVisible, isRequesting, isConfirmPasswordVisible, togglePasswordVisibility, toggleConfirmPasswordVisibility, onSubmit } = useUpdatePassword();

  return (
    <section className="flex items-center justify-center w-full h-screen">
        <Form className="flex w-[450px] flex-col items-center px-8 pb-12 pt-5 border rounded-lg shadow-medium font-figtree" 
            onSubmit={onSubmit}
        >
            <BrandLogo size={80} />
            <Typography size="lg" className="font-bold !text-teal-500">Create New Password</Typography>
            <Typography size="sm" className="font-light text-center">Your new password must be different from any of your previous passwords.</Typography>
            <Spacer y={2} />
            <Input 
                size="sm"
                fullWidth
                variant="bordered" 
                label="New Password"
                type={isPasswordVisible ? "text" : "password"}
                endContent={
                    <PasswordToggleButton toggleVisibility={togglePasswordVisibility} isVisible={isPasswordVisible} />
                }
            />
            <Spacer y={2} />
            <Input 
                size="sm"
                fullWidth
                variant="bordered" 
                label="Confirm Password"
                type={isConfirmPasswordVisible ? "text" : "password"}
                endContent={
                    <PasswordToggleButton toggleVisibility={toggleConfirmPasswordVisibility} isVisible={isConfirmPasswordVisible} />
                }
            />
            <Spacer y={2} />
            <Button 
                className="bg-gradient-to-bl from-[#2dd4bf] to-[#1f2937]"
                fullWidth 
                type="submit"
                isLoading={isRequesting}
                spinner={<Spinner />}
                radius="sm" 
                size="lg" 
            >
                <Typography size="sm" className="text-white">Update Password</Typography>
            </Button>
        </Form>
    </section>
  )
}

export default UpdatePasswordPage