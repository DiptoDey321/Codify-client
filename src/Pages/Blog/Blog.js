import React from 'react'

function Blog() {
  return (
    <div className='blog-height'>
        <div className="flex justify-center">
            <div className='mt-10 mx-10 flex gap-10 flex-wrap'>
                <div className="max-w-[500px] border p-4 rounded">
                    <h2 className='text-[25px] font-semibold'>what is cors?</h2>
                    <p className='text-gray-600 mt-5'>
                    Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.It's a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support
                    </p>
                </div>

                <div className="max-w-[500px] border p-4 rounded">
                    <h2 className='text-[25px] font-semibold'> Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p className='text-gray-600 mt-5'>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.  <br />
                    Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity.
                    more 
                    </p>
                </div>

                <div className="max-w-[500px] border p-4 rounded">
                    <h2 className='text-[25px] font-semibold'>  How does the private route work?</h2>
                    <p className='text-gray-600 mt-5'>
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard
                    </p>
                </div>

                <div className="max-w-[500px] border p-4 rounded">
                    <h2 className='text-[25px] font-semibold'> What is Node? How does Node work?</h2>
                    <p className='text-gray-600 mt-5'>
                    Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog