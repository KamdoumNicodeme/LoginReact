import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <body className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
                <header className="max-w-lg mx-auto">
                    <a href="#">
                        <h1 className="text-4xl font bold text-white text-center">Startup</h1>
                    </a>
                </header>
                <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                    <section>
                        <h3 className="font-bold text-2xl"> Welcome to the jungle</h3>
                        <p className="text-gray-600 pt-2">Sign in to your account.</p>
                    </section>
                    <section className="mt-10">
                        <form className="flex flex-col" method="post" action="#">
                            <div className="mb-6 p-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                       htmlFor="email">Email</label>
                                <input type="text"
                                       className="bg-gray-200 rounded w-full text-gray-700 focus-outline:none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                       id="email" required/>
                            </div>
                            <div className="mb-6 p-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                       htmlFor="password">Password</label>
                                <input type="password"
                                       className="bg-gray-200 rounded w-full text-gray-700 focus-outline:none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                       id="password" required/>
                            </div>
                            <div className="flex justify-end">
                                <a href="#"
                                   className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"> Forgot
                                    password ?</a>
                            </div>
                            <button
                                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded shadow-lg hover:shadow-xl transition duratio-200"
                                type="submit">Sign in
                            </button>

                        </form>
                    </section>
                </main>
                <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                    <p className="text-white">Don't have account ? <a href="#"
                                                                      className="font-bold hover:underline"> Sign
                        Up</a></p>

                </div>
                <footer className="max-w-lg mx-auto text-center flex justify-center text-white">
                    <a href="#" className="hover:underline">Contact</a>
                    <span className="mx-3">.</span>
                    <a href="#" className="hover:underline">Privacy</a>

                </footer>

                </body>

            </div>
        );
    }
}

export default Login;