import Head from 'next/head';
import { jwt, userInfo } from '@/utils/state';
import Link from 'next/link'
import { useRouter } from 'next/router';


export default function Login() {
    const router = useRouter();

    async function LoginToApplication() {
        let data = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };
    
        console.log(data);
    
        let result = await fetch('http://localhost:5005/api/users/login', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            credentials: 'include'
        });
        console.log(result);
        let response = await result.json();
        console.log(response.accessToken);
        jwt.accessToken = response.accessToken;
        userInfo.id = response.id;
        router.push('/dashboard/');        
    }

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <div>
                <button onClick={LoginToApplication}>Submit</button>
            </div>
            <Link href="/">Home</Link>
        </>
    )
}