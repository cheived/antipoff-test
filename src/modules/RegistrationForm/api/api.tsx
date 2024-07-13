async function register(regData: { email: string, password: string }) {
    try {
        const res: { id: number, token: string } = await fetch("https://reqres.in/api/register",
            {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(regData)
            }
        )
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            })
        console.log(res)
        return res
    } catch (error) {
        console.error(error)
    }
}

export { register }