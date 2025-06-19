import { BrandLogo, GoogleLogo, Spinner } from "@/components/ui/icons";
import { PasswordToggleButton } from "@/components/ui/passwordToggleButton";
import Typography from "@/components/ui/typography";
import { showToast } from "@/utils/showToast";
import { Button, Divider, Input, Link, Spacer } from "@heroui/react";
import React from "react";
import { Form } from "react-router";


const LoginPage = () => {

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isRequesting, setIsRequesting] = React.useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  const passwordTogglerButton = <PasswordToggleButton toggleVisibility={togglePasswordVisibility} isVisible={isPasswordVisible} />

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsRequesting(true);
    try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        showToast("Login Successfully", "Success", "success");
    } catch (error) {
        showToast("Something went wrong", "Error", "danger");
    } finally {
        setIsRequesting(false)
    }
  }
  return (
    <section className="flex items-center justify-center w-full h-screen">
        <Form className="flex min-w-[450px] flex-col items-center px-8 pb-12 pt-5 border rounded-lg shadow-medium font-figtree" 
            onSubmit={onSubmit}
        >
            <BrandLogo size={80} />
            <Typography size="lg" className="font-bold ">Log in to your Account</Typography>
            <Spacer y={2} />
            <Typography size="sm">Welcome back. Please enter your details to login.</Typography>
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
                endContent={passwordTogglerButton}
            />
            <Spacer y={5} />
            <Button 
                className="bg-gradient-to-r from-[#0f172a]  to-[#334155]  shadow-lg"
                fullWidth 
                type="submit"
                isLoading={isRequesting}
                spinner={<Spinner />}
                radius="sm" 
                size="lg" 
            >
                <Typography size="sm" className="text-white">Login</Typography>
            </Button>
            <Divider className="my-7" />
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
            <Typography size="sm">Don't have and account?
                <Link href="#" size="sm">&nbsp; Sign Up</Link>
            </Typography>
        </Form>
    </section>
  );
};

export default LoginPage;
