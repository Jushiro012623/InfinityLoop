import { BrandLogo, Spinner } from "@/components/ui/icons";
import { PasswordToggleButton } from "@/components/ui/passwordToggleButton";
import Typography from "@/components/ui/typography";
import { mockRequest } from "@/service/apiRequestService";
import { showToast } from "@/utils/showToast";
import { Button, Divider, Input, Spacer } from "@heroui/react";
import React from "react";
import { Form, Link, useNavigate } from "react-router";


const useRegister = () => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = React.useState(false);
    const [isRequesting, setIsRequesting] = React.useState(false);
    const navigate = useNavigate()
    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
    const toggleConfirmPasswordVisibility = () => setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsRequesting(true);
        try {
            await mockRequest()
            showToast("Success", "Sign Up Sucessfully", "default");
            navigate("/login")
        } catch (error: any) {
            showToast("Something went wrong", error.message,  "danger");
        } finally {
            setIsRequesting(false)
        }
    }

    return { isPasswordVisible, isRequesting, isConfirmPasswordVisible, togglePasswordVisibility, toggleConfirmPasswordVisibility, onSubmit }
}

const RegisterPage = () => {

    const { isPasswordVisible, isRequesting, isConfirmPasswordVisible, togglePasswordVisibility, toggleConfirmPasswordVisibility, onSubmit } = useRegister();

    return (
        <section className="flex items-center justify-center w-full h-screen">
            <Form className="flex min-w-[450px] flex-col items-center px-8 pb-12 pt-5 border rounded-lg shadow-medium font-figtree" 
                onSubmit={onSubmit}
            >
                <BrandLogo size={80} />
                <Typography size="lg" className="font-bold !text-teal-500">Create New Account</Typography>
                <Spacer y={2} />
                <Typography size="sm" className="font-light">Welcome! Let’s get you set up with a new account.</Typography>
                <Spacer y={6} />
                <Input 
                    size="sm"
                    fullWidth 
                    variant="bordered" 
                    label="Firstname" 
                />
                <Spacer y={6} />
                <Input 
                    size="sm"
                    fullWidth 
                    variant="bordered" 
                    label="Lastname" 
                />
                <Spacer y={6} />
                <Input 
                    size="sm"
                    fullWidth 
                    variant="bordered" 
                    label="Email" 
                />
                <Spacer y={6} />
                <Input 
                    size="sm"
                    fullWidth
                    variant="bordered" 
                    label="Password"
                    type={isPasswordVisible ? "text" : "password"}
                    endContent={
                        <PasswordToggleButton toggleVisibility={togglePasswordVisibility} isVisible={isPasswordVisible} />
                    }
                />
                <Spacer y={5} />
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
                <Spacer y={5} />
                <Button 
                    className="bg-gradient-to-bl from-[#2dd4bf] to-[#1f2937]"
                    fullWidth 
                    type="submit"
                    isLoading={isRequesting}
                    spinner={<Spinner />}
                    radius="sm" 
                    size="lg" 
                >
                    <Typography size="sm" className="text-white">Sign Up</Typography>
                </Button>
                <Divider className="mt-7 mb-3" />
                <Typography size="sm">Already have and account?
                    <Link to="/login" className="text-blue-500 hover:text-blue-400 active:text-blue-300">&nbsp;Login </Link>
                </Typography>
            </Form>
        </section>
    );
};

export default RegisterPage;
