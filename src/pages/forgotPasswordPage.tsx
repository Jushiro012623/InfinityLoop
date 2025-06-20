import OtpVerificationModal from "@/components/otVerificationModal";
import { BrandLogo, Spinner } from "@/components/ui/icons";
import Typography from "@/components/ui/typography";
import { mockRequest } from "@/service/apiRequestService";
import { showToast } from "@/utils/showToast";
import { Button, Divider, Input, Spacer, useDisclosure } from "@heroui/react";
import React from "react";
import { Form, Link } from "react-router";


const useForgotPassword = () => {

    const [isRequesting, setIsRequesting] = React.useState(false);
    const {onOpen, isOpen, onOpenChange} = useDisclosure();
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsRequesting(true);
        try {
            await mockRequest()
            showToast("Success", "Email Sent Successfully", "default");
            onOpen()
        } catch (error: any) {
            showToast("Something went wrong", error.message,  "danger");
        } finally {
            setIsRequesting(false)
        }

    }

    const onVerify = async (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
        await mockRequest();
    }
    return { isRequesting, onVerify, onSubmit, onOpen, isOpen, onOpenChange }
}

const ForgotPassword = () => {

    const { onVerify, isRequesting, onSubmit, onOpen, isOpen, onOpenChange } = useForgotPassword();

    return (
        <section className="flex items-center justify-center w-full h-screen">
            <Form className="flex w-[450px] flex-col items-center px-8 pb-12 pt-5 border rounded-lg shadow-medium font-figtree" 
                onSubmit={onSubmit}
            >
                <BrandLogo size={80} />
                <Typography size="lg" className="font-bold text-teal-500">Forgot your Password?</Typography>
                <Spacer y={2} />
                <Typography size="sm" className="font-light text-center"> We’ll send a one-time password (OTP) to your email to reset your account.</Typography>
                <Spacer y={6} />
                <Input 
                    size="sm"
                    type="email"
                    fullWidth 
                    variant="bordered" 
                    label="Email" 
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
                    <Typography size="sm" className="text-white">Send Email</Typography>
                </Button>
                <Divider className="mt-7 mb-3" />
                 <Typography size="sm">Remember password?
                    <Link to="/login" className="text-blue-500 hover:text-blue-400 active:text-blue-300">&nbsp;Login </Link>
                </Typography>
            </Form>
            <OtpVerificationModal onOpen={onOpen} isOpen={isOpen} onOpenChange={onOpenChange} onVerify={onVerify} />
        </section>
    );
};


export default ForgotPassword;
