import React from 'react';

const Blog = () => {
    return (
        <div className='mt-8 font-mono'>
            <h1 className='text-4xl font-bold text-center underline my-4'>Blog</h1>
            <p className='text-xl font-bold italic'>Some important questions and answers</p>
            <article className='mx-8'>
                <div className='shadow-lg p-5 my-3 border-2'>
                    <h1 className='font-bold text-2xl my-2 border-2 border-yellow-500'>
                        1. What Is The Purpose Of React Router?
                    </h1>
                    <p>
                        <span className='font-bold text-xl underline'>Answer:</span> <br />
                        React Router is a JavaScript library used to handle client and server-side routing in React applications. It allows the creation of single-page web or mobile apps that allows navigation without the page refreshing. React Router also gives us access to browser history features while maintaining the correct view of the application.

                        React Router uses a component-based approach to routing. It provides different routing components as needed by the application.
                    </p>
                </div>
                <div className='shadow-lg p-5 my-3 border-2'>
                    <h1 className='font-bold text-2xl my-2 border-2 border-yellow-500'>
                        2. How Does Context Api Work?
                    </h1>
                    <p>
                        <span className='font-bold text-xl underline'>Answer:</span> <br />
                        Before know the working process, its important to know <strong>what is context api?</strong><br />
                        TContext is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component: class App extends React. <br />

                        <strong>How Does it work?</strong> <br />
                        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.

                    </p>
                </div>
                <div className='shadow-lg p-5 my-3 border-2'>
                    <h1 className='font-bold text-2xl my-2 border-2 border-yellow-500'>
                        3. What is useRef Hook,write details about it?
                    </h1>
                    <p>
                        <span className='font-bold text-xl underline'>Answer:</span> <br />

                        <p>
                            The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
                        </p>
                        <br />
                        <code>
                            const refContainer = useRef(initialValue);
                        </code>
                        <br />
                        <p>
                            The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                        </p>
                    </p>
                </div>

            </article>
        </div>
    );
};

export default Blog;