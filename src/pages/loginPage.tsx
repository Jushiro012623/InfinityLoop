import { BrandLogo, GoogleLogo, Spinner } from "@/components/ui/icons";
import { PasswordToggleButton } from "@/components/ui/passwordToggleButton";
import Typography from "@/components/ui/typography";
import { mockRequest } from "@/service/apiRequestService";
import { showToast } from "@/utils/showToast";
import { Button, Divider, Input, Spacer } from "@heroui/react";
import React from "react";
import { Form, Link, useNavigate } from "react-router";


const useLogin = () => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const [isRequesting, setIsRequesting] = React.useState(false);
    const navigate = useNavigate()
    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsRequesting(true);

        try {
            await mockRequest()
            showToast("Success", "Login Successfully", "default");
            navigate("/")
        } catch (error: any) {
            showToast("Something went wrong", error.message,  "danger");
        } finally {
            setIsRequesting(false)
        }

    }

    return { isPasswordVisible, isRequesting, togglePasswordVisibility, onSubmit }
}

const LoginPage = () => {

    const { isPasswordVisible, isRequesting, togglePasswordVisibility, onSubmit } = useLogin();

    return (
        <section className="flex items-center justify-center w-full h-screen">
            <Form className="flex min-w-[450px] flex-col items-center px-8 pb-12  pt-5 border rounded-lg shadow-medium font-figtree" 
                onSubmit={onSubmit}
            >
                <BrandLogo size={80} />
                <Typography size="lg" className="font-bold text-teal-500">Log in to your Account</Typography>
                <Spacer y={2} />
                <Typography size="sm" className="font-light">Welcome back. Please enter your details to login.</Typography>
                <Spacer y={6} />
                <Input 
                    size="sm"
                    fullWidth 
                    variant="bordered" 
                    label="Email or Username" 
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
                <Button 
                    className="bg-gradient-to-bl from-[#2dd4bf] to-[#1f2937]"
                    fullWidth 
                    type="submit"
                    isLoading={isRequesting}
                    spinner={<Spinner />}
                    radius="sm" 
                    size="lg" 
                >
                    <Typography size="sm" className="text-white">Login</Typography>
                </Button>
                <Spacer y={2} />
                <Typography size="sm" className="self-end">
                    <Link to="/forgot-password" className="text-blue-500 hover:text-blue-400 active:text-blue-300"> Forgot Password? </Link>
                </Typography>
                <Divider className="mt-5 mb-7" />
                <Button 
                    startContent={<GoogleLogo size={25}/>}
                    fullWidth 
                    variant="bordered" 
                    radius="sm" 
                    size="lg" 
                >
                    <Typography size="sm">Continue with Google</Typography>
                </Button>
                <Spacer y={5} />
                <Typography size="sm">Don't have an account?
                    <Link to="/register" className="text-blue-500 hover:text-blue-400 active:text-blue-300">&nbsp;Sign Up </Link>
                </Typography>
            </Form>
        </section>
    );
};


export default LoginPage;
