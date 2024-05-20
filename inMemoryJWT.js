const inMemoryJWT = () => {
    let inMemoryJWT = null;
    let refreshTimeoutId = null;

    const getToken = () => inMemoryJWT;

    const setToken = (token, expiresIn) => {
        inMemoryJWT = token;
        refreshToken(expiresIn);
    }

    const deleteToken = () => {
        inMemoryJWT = null;
        if (refreshTimeoutId) clearTimeout(refreshTimeoutId);
    }

    const refreshToken = (expiresIn) => {
        const timeoutTrigger = expiresIn - 10000;

        refreshTimeoutId = setTimeout(() => {
            fetch('/refresh', {
                method: 'POST',
            })
                .then((res) => {
                    const { accessToken, expiresIn } = res.data;
                    setToken(accessToken, expiresIn);
                })
                .catch((err) => console.log(err));
        }, timeoutTrigger);
        
    }
    
    return { getToken, setToken, deleteToken, refreshToken };
}

export default inMemoryJWT();