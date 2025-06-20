const mockRequest = async () => {
    return await new Promise((resolve) => setTimeout(resolve, 1000));
}

export { mockRequest }