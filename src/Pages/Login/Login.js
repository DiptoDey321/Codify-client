import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


function Login() {
    const {prodiverLogin} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn =() =>{
        prodiverLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        }).catch(error => console.log(error))
    }

    const HandleLoginForm = (event) =>{
        event.preventDefault();
        
    }

  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-[30rem] xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <div className="flex items-center justify-between">
                            <button onClick={handleGoogleSignIn}  className='flex items-center gap-x-3 border pl-2 pr-3 py-1.5 rounded-md'>
                                <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg"
                                    aria-label="Google" role="img"
                                    viewBox="0 0 512 512"><rect
                                    width="512" height="512"
                                    rx="15%"
                                    fill="#fff"/><path fill="#4285f4" d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"/><path fill="#34a853" d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"/><path fill="#fbbc02" d="M153 292c-8-25-8-48 0-73l-63-49c-23 46-30 111 0 171z"/><path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"/>
                                </svg>
                                <span className='text-sm'>Login with Google</span>
                            </button>  
                            <button className='flex items-center gap-x-3 border px-3 py-2.5 rounded-md'>
                                    <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/   2000/svg">
                                    <path fill="#555" d="M20,10.2504514 C20,12.4838397 19.3641493,14.4925545 18.0924479,16.2765957 C16.8207465,18.060637 15.1779514,19.2952291 13.1640625,19.9803721 C12.9296875,20.0248619 12.7582465,19.9937191 12.6497396,19.8869435 C12.5412326,19.780168 12.4869791,19.6466986 12.4869792,19.4865353 L12.4869792,16.6703305 C12.4869792,15.8072283 12.2612847,15.175473 11.8098958,14.7750648 C12.3046875,14.721677 12.749566,14.6415953 13.1445312,14.5348198 C13.5394965,14.4280442 13.9474826,14.254534 14.3684896,14.0142891 C14.7894965,13.7740441 15.141059,13.4781869 15.4231771,13.1267174 C15.7052951,12.7752479 15.9353298,12.308105 16.1132812,11.7252885 C16.2912326,11.1424721 16.3802083,10.4729005 16.3802083,9.71657375 C16.3802083,8.63992043 16.0373264,7.72343042 15.3515625,6.9671037 C15.6727431,6.15738922 15.6380208,5.24979717 15.2473958,4.24432755 C15.0043403,4.1642459 14.6527778,4.21318469 14.1927083,4.39114391 C13.7326389,4.56910313 13.3333333,4.76485827 12.9947917,4.97840935 L12.5,5.29873596 C11.6927083,5.06738897 10.859375,4.95171547 10,4.95171547 C9.14062499,4.95171547 8.30729166,5.06738897 7.5,5.29873596 C7.36111111,5.20085839 7.1766493,5.08073592 6.94661458,4.93836854 C6.71657986,4.79600116 6.35416667,4.62471541 5.85937499,4.42451127 C5.36458332,4.22430714 4.99131943,4.1642459 4.73958333,4.24432755 C4.35763889,5.24979719 4.32725695,6.15738923 4.6484375,6.9671037 C3.96267361,7.72343042 3.61979167,8.63992043 3.61979167,9.71657375 C3.61979167,10.4729005 3.70876737,11.1402476 3.88671876,11.7186151 C4.06467015,12.2969825 4.29253473,12.7641255 4.57031251,13.120044 C4.84809028,13.4759624 5.19748264,13.7740441 5.61848959,14.0142891 C6.03949654,14.254534 6.44748265,14.4280443 6.84244791,14.5348198 C7.23741317,14.6415953 7.68229165,14.721677 8.17708333,14.7750648 C7.82986111,15.0953914 7.6171875,15.5536364 7.5390625,16.1497998 C7.35677083,16.2387794 7.16145833,16.3055141 6.95312499,16.3500039 C6.74479166,16.3944937 6.49739583,16.4167386 6.21093751,16.4167386 C5.92447919,16.4167386 5.64019099,16.3210856 5.35807291,16.1297794 C5.07595483,15.9384732 4.83506942,15.6604119 4.63541668,15.2955955 C4.47048612,15.0108607 4.25998265,14.7795137 4.00390626,14.6015545 C3.74782986,14.4235953 3.53298612,14.3168197 3.35937501,14.2812279 L3.09895833,14.2411871 C2.91666667,14.2411871 2.79079861,14.2612075 2.72135418,14.3012483 C2.65190974,14.3412891 2.63020835,14.3924524 2.65625001,14.4547382 C2.68229166,14.5170239 2.72135416,14.5793096 2.77343751,14.6415953 C2.82552085,14.7038811 2.88194446,14.7572688 2.94270833,14.8017586 L3.03385416,14.8684934 C3.22482639,14.957473 3.41362848,15.1265342 3.60026042,15.3756771 C3.78689236,15.62482 3.92361111,15.8517181 4.01041667,16.0563712 L4.14062501,16.3633509 C4.25347222,16.7014734 4.44444444,16.9750857 4.71354167,17.1841878 C4.98263889,17.3932899 5.2734375,17.5267593 5.58593749,17.584596 C5.89843749,17.6424328 6.20008679,17.6735757 6.49088542,17.6780246 C6.78168404,17.6824736 7.02256946,17.6669022 7.21354167,17.6313103 L7.51302084,17.5779226 C7.51302084,17.9160451 7.51519097,18.3120044 7.51953125,18.7658004 C7.52387152,19.2195964 7.52604166,19.4598414 7.52604166,19.4865353 C7.52604166,19.6466986 7.46961805,19.780168 7.35677083,19.8869435 C7.24392362,19.9937191 7.07031251,20.024862 6.8359375,19.9803721 C4.8220486,19.2952291 3.17925347,18.060637 1.90755209,16.2765957 C0.635850712,14.4925545 0,12.4838397 0,10.2504514 C0,8.39077752 0.447048612,6.67569548 1.34114584,5.10520531 C2.23524306,3.53471514 3.4483507,2.29122504 4.98046876,1.37473503 C6.51258682,0.458245009 8.1857639,0 10,0 C11.8142361,0 13.4874132,0.458245009 15.0195312,1.37473503 C16.5516493,2.29122504 17.7647569,3.53471514 18.6588542,5.10520531 C19.5529514,6.67569548 20,8.39077752 20,10.2504514 Z"/>
                                </svg>
                                <span className='text-sm'>Login with Github</span>
                            </button>          
                        </div>

                        <div className="flex justify-center">
                           <div className="">
                                <span>-----</span>
                                <span className='text-slate-600'> Or </span>
                                <span>-----</span>
                           </div>
                        </div>
                        <form onSubmit={HandleLoginForm} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <Link href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?
                            <Link to='/register' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Login