

import { showToast } from "@/utils/showToast";
import { Button, Divider, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, InputOtp } from "@heroui/react";
import React from "react";
import Typography from "./ui/typography";
import { PasswordVector, Spinner } from "./ui/icons";
import { Link, useNavigate } from "react-router";

const OtpVerificationModal = ({isOpen, onOpenChange, onVerify} : any) => {
    const [isVerifying, setIsVerifying] = React.useState(false);
    const navigate = useNavigate()

    const onPress = async (onClose: () => void) => {
        setIsVerifying(true)
        try {
            await onVerify()
            showToast("OTP Verification", "OTP Verify Successfully", "default");
            onClose()
            navigate("/update-password")
        } catch (error: any) {
            showToast("Something went wrong", error.message,  "danger");
        }finally{
            setIsVerifying(false)
        }
    }
    return (
        <Modal className="w-[450px] font-figtree  pb-6" isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange} hideCloseButton>
            <ModalContent>
            {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1 items-center font-figtree">
                        <PasswordVector size={140} />
                        <Typography size="lg" className="font-bold text-teal-500 -mt-10">OTP Verification</Typography>
                        <Typography size="sm" className="font-light text-center">Please enter the one-time password (OTP) we sent to your email.</Typography>
                    </ModalHeader>
                    <ModalBody className="flex flex-col gap-1 items-center">
                        <InputOtp
                            containerClassName="flex !gap-4"
                            size="lg"
                            isRequired
                            aria-label="OTP input field"
                            length={6}
                            name="otp_code"
                            placeholder="Enter code"
                        />
                    </ModalBody >
                    <ModalFooter className="flex flex-col gap-1 items-center">
                        <Button 
                            size="lg"
                            radius="sm" 
                            fullWidth
                            isLoading={isVerifying}
                            spinner={<Spinner />}
                            onPress={() => onPress(onClose) }
                            className="bg-gradient-to-bl from-[#2dd4bf] to-[#1f2937]">
                        <Typography size="sm" className="text-white">Confirm</Typography>
                        </Button>
                        <Divider className="mt-7 mb-3" />
                        <Typography size="sm">Didn't received email?
                            <Link to="/login" className="text-blue-500 hover:text-blue-400 active:text-blue-300">&nbsp;Click here</Link>
                        </Typography>
                    </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
    )
}

export default OtpVerificationModal