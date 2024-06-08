Next.js Course

FullStack react framework
- Next blends frontend + backend(in the same project)
- Advantage: Frontend and backend tasks are part of the same project

File system routes 
- (Routes are configured via the filesystem(folder + files)) 
- Advantage: No code-based configuration or extra packages for routing required

Server-side-rendering
- By default, NextJS(pre-renders all pages on the server)
- Advantage: The finished HTML page(incl. content) is sent to the client (-> great for SEO)

React Server Component (RSC)

- Server components
    - In Next.js all components are Server components by default
    - They have the ability to run tasks like reading files or fetching data from a database
    - However, they don't have the ability to use hooks or handle user interactions
- Client components
    - To create a Client component, it's necessary to add "use client" at the top of the component file
    - Client components can't perform tasks like reading files, but they have the ability to use hooks and manage interactions

https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources

https://github.com/academind/react-complete-guide-course-resources/tree/main

#Routing

- Next.js has a file-system based routing mechanism
- URL paths that users can access in the browser are defined by files and folders in your codebase.
- Routing Conventions
    - All routes must be placed inside the app folder
    - Every file that corresponds to a route must be named page.js or page.tsx
    - Every folder corresponds to a path segment in the browser URL

- Dynamic Routes
- Nested Dynamic Routes
- Catch all Segments
- Not Found Page
- File Colocation


- Private Folders

A private folder indicates that it is a private implementation detail and should not be considered by the routing system.
The folder and all its subfolders are excluded are excluded from routing
To create it prefix the folder name with an underscore
For separating UI logic from routing logic
For consistently organizing internal files across a project
For sorting and grouping files in code editors
And finally, for avoiding potential naming conflicts with future Next.js file conventions

If you want to include an underscore in URL segments, you can prefix the folder name with "%5F," which is the URL-encoded form of an underscore

- Route Groups
Allows us to logically separate group our routes and project files without affecting the URL path structure

- Layouts 
A page is UI that is unique to a route
A layout is UI that is shared between multiple pages in the app

- Nested Layouts

- Route Group Layout
 - Route Group uses:
    To organize your project in manner that doesn't affect the URL
    To selectively apply a layout to certain segments while leaving others unchanged

- Routing Metada

Ensuring proper search engine optimization (SEO) is crucial for increasing visibility and attracting users

- Configuring Metadata
Export a static metadata from object 
Export a dynamic generateMetadata function
 - Metadata rules
 Both layout.tsx and page.tsx files can export metadata.

 - Navigation
 File based routing
 Link component with replace
 
 - Active Links

 - Templates

 Templates are similar to layouts in that they wrap each child layout or page

 But, with templates, when a user navigates between routes that shares a template, a new instance of the component is mounted, DOM elements are recreated, state is not preserved, and effects are re-synchronized 

 A template can be defined by exporting a default React Component from a template.js or template.tsx file
 

 Similar to layouts, templates also should accept a children propr which will render the nested segments in the route.

 - Special Files
 page.tsx
 layout.tsx
 template.tsx
 not-found.tsx
 loading.tsx: this file allows us to create loading states that are displayed to users while a specific route segment's content is loading
 error.tsx


 - Parallel Routes

 Parallel routes are an advanced routing mechanism that allows for the simultaneous rendering of multiple pages within the same layout.

 Parallel routes in Next.js are defined using a feature known as slots.

 Slots help structure our content in a modular fashion

 To define a slot, we use the `@folder` naming convention

 Each slot is then passed as a prop to its corresponing `layout.tsx` file.

 Benefits
 - A clear benefit or parallel routes is their ability to split a single layout into various slots, making the code more manageable

 - Independent route handling
    - Each slot of your layout, such as user analytics or revenue metrics, can have its own loading and error stats
    - This granular control is particularly beneficial in scenarios where different sections of the page load at varying speeds or encounter unique errors.
 - Sub-navigation
    - Each slot of your dashboard can essentially function as a mini-application, complete with its own navigation and state management
    - This is especially useful in a complex application such as our dashboard where different sections serve distinct purposes.

- Unmatched Routes

    - Navigation from the UI
        In the case of navigation within the UI, Next.js retains the previously active state of a slot regardless of changes in the URL.
    
    - Page reload
        Next.js immediately searches for a default.tsx file within each unmatched URL slot

        The presence of this file is critical, as it provides the default content that Next.js will render in the user interface.

        If this default.tsx file is missing in any of the unmatched slots for the current route, 
        Next.js will render a 404 error.

    - default.tsx file
        The `default.tsx` file in Next.js serves as a fallback to render content when the framework
        cannot retrieve a slot's active from the current URL.

        You have complete freedom to define the UI for unmatched routes: you can either 
        mirror the content found in page.tsx or craft an entirely custom view

- Conditional Routes

- Advanced Routing Patterns

    - Parallel routes

    - Intercepting routes

    Intercepting routes allow you to intercept or stop the default routing behaviour to present an alternate view or component when navigating through the UI, while still preserving the intended route for scenarios like page reloads.

    This can be useful if you want to show a route while keeping the context of the current page

    - Intercepting Routes Conventions
        (.) to match segments on the same level
        (..) to match segments one level above
        (..)(..) to match segments two levels above [does not work]
        (...) to match segments from the root app directory

- Parallel Intercepting Routes

- Routes Handlers
    - We've learnt how to route to pages
    - We can also create custom request handlers for our routes using a feature called route handlers
    - Unlike page routes, which respond with HTML content, route handlers allow you to create RESTfull endpoints, giving you full control over the response
    - There is no overhead of having to create and configure a separate server
    - Route handlers are also great for making external API requests
    - Route handlers run server-side, ensuring that sensitive information like private keys remains secure and never gets shipped to the browser
    - Routes handlers are the equivalent of API routes in Page router

- Handling GET Request
- Handling POST Request
- Dynamic Route Handlers
- Handling PATCH Request
- Handling DELETE Request

- URL Query Parameters
- Redirects in Route Handlers

- Headers in Route Handlers
    - HTTP headers represent the metadata associated with an API request and response.
    - We have 2 categories
        - Request Headers
            - These are sent by the client, such as a web browser, to the server. They contain essential information about the request, which helps the server understand and process it correctly.
            - Example:
                - 'User-Agent': which identifies the browser and operating system to the server.
                - 'Accept': which indicates the content types like text, video or image formats that the client can process.
                - 'Authorization': header used by the client to authenticate itself to the server
            - By default request has two headers, user-agent and accept header
        - Response Headers
            - These are sent back from the server to the client. They provide information about the server and the data being sent in the response.
            - Example: 
                - 'Content-Type': header which indicates the media type of the response. It tells the client what the data types of the returned content is, such as text/html for HTML documents, application/json for JSON data, etc.

- Cookies in Route Handlers
    Cookies are small pieces of data that a server sends to a user's web browser
    The browser may store the cookie and send it back ti the same server with later requests

    - Cookies are mainly used for three purposes 
        - Session management like logins and shoppings carts
        - Personalization like user preferences and themes
        - Tracking like recording and analyzing user behavior
- Caching in Route Handlers
    Route Handlers are cached by default when using the GET method with the Response object in Next.js

    How to opt out of caching?
    - dynamic mode in Segment Config Option
    - using the Request object with the GET method
    - employing dynamic functions like headers() and cookies()
    - using any HTTP method other than GET

- Middleware
    Middleware in Next.js is a powerful features that offers a robust way to intercept and control the flow of requests and responses within your applications

    It does this at a global level significantly enhancing features like redirection, URL rewrites, authentication, headers and cookies management, and more.

    Middleware allows us to specify paths where it will be active
        - Custom matcher config
        - Conditional statements
[x] Routing Section Summary

- Route definition
- Pages and layouts
- Dynamic routes
- Route groups
- Linking and Navigation
- Handling errors in routes
- Parallel and Intercepting routes
- Route handlers and middleware


- Rendering
    Rendering is the process that transforms the code you write into user interfaces

    In Next.js, choosing the right time and place to do this rendering is vital for building a performant application

    CSR, SSR and RSCs

    Rendering in React -> Rendering in Next.js

- Client-side Rendering (CSR)
    This method or rendering, where the component code is transformed into a user interface directly within the browser (the client), is known as client-side rendering(CSR)

    CSR quickly became the standard for SPAs, with widespread adoption

    - Drawbacks of CSR
        - SEO:
            - Generating HTML that mainly contains a single div tag is not optimal for SEO, as it provides little content for search engines to index
        - Performance:
            Having the browser(the client) handle all the work, such as fetching data, computing the UI, and making the HTML interactive, can slow things down. Users might see a blank screen or a loading spinner while the page loads 

            Each new feature added to the application increases the size of the javascript bundle, prolonging the wait time for users to see the UI.

- Server Side Rendering (SSR)
    It significantly improves SEO because search engines can easily index the server-rendered content.

    Users can immediately see the page HTML content, instead of a blank screen or loading spinner.

- Hydration 
    During hydration, React takes control in the browser, reconstructing the component tree in memory based on the static HTML, that was served.

    It carefully plans the placement of interactive elements within this tree. Then, React proceeds to bind the necessary Js logic to these elements

    This involves initializing the application state, attaching event handlers for actions such as clicks and mouseovers, and setting up any other dynamic functionalities required for a fully interactive user experience. 

- Server-side Solutions
    1 - Static Site Generation (SSG)
    2 - Server-Side Rendering (SSR)

    SSG occurs at build time, when the application is deployed on the server. This results in pages that are already rendered and ready to serve. It is ideal for content that doesn't change often, like blog posts.

    SSR, on the other hand, renders pages on-demand in response to user requests.
    It is suitable for personalized content like social media feeds, where the HTML depends on the looged-in user

    Server-Side Rendering (SSR) was a significant improvement over Client-Side Rendering (CSR), providing faster initial page loads and better SEO.

    - Drawbacks of SRR
        1 - You have to fetch everything before you can show anything 
        Components cannot start rendering and then pause or "wait" while data is still being loaded.

        If a component needs to fetch data from a database or another source (Like an API), this fetching must be completed before the server can begin rendering the page.

        This can delay the server's response time to the browser, as the server must finish collecting all necessary data before any part of the page can be sent to the client.
        

        2 - You have to load everything before you can hydrate anything

        For successful hydration, where React adds interactivity to the server-rendered HTML, the component tree in the browser must exactly match the server-generated component tree.

        This means that all the javascript for the components must be loaded on the client before you can start hydrating any of them.

        2 - You have to hydrate everything before you can interact with anything

        React hydrate the component tree in a single pass, meaning once it starts hydrating, it won't stop until it's finished with the entire tree

        As a consequence, all components must be hydrated before you can interact with any of them.

Drawbacks of SSR - All or Nothing Waterfall

1 - Data fetching must be completed before the server can begin rendering HTML
2 - The Javascript required for the components needs to be fully loaded on the client side before the hydration process can start
3 - All components have to be hydrated before they become interactive

These issues contribute to an 'all-or-nothing' waterfall scenario, resulting in inefficiencies, especially if certain parts of your application are slower than others.

- Suspense SSR Architecture

Use the <Suspense> component to unlock two major SSR features:

1. HTML streaming on the server
2. Selective hydration on the client

- HTML streaming on the Server
    You don't to fetch everything before you can show anything
    
    If a particular section delays the initial HTML, it can be seamlessly integrated into the stream later

    This is the essence of how Suspense facilitates server-side HTML streaming

- The other challenge
 
    Until the JavaScript for the main section is loaded, client-side app hydration cannot start

    And if the JavaScript bundle for the main section is large, this could significantly delay the process.

- Code splitting

    Code splitting allows you to mark specific code segments as not immediately necessary for loading, signalling your bundler to segregate them into separate `<script>` tags

    Using `React.lazy` for code splitting enables you to separate the main section's code from the primary Javascript bundle  

    The Javascript containing React and the code for the entire application, excluding the main section, now be downloaded independently by the client, without having to wait for the main section's code

- Selective Hydration on the client

    By wrapping the main section within `Suspense`, you've indicated to React that it should not prevent the rest of the page from not just streaming but also from hydrating.

    This feature, called selective hydration allows for the hydration of sections as they become available, before the rest of the HTML and the javascript code are fully downloaded.

    even those don't need interactivity?

    The Evolution of React

    CSR -> SSR -> Suspense for SSR

    Suspense for SSR brought us closer to a seamless rendering experience

    Challenges

    - Increased bundle sizes leading to excessive downloads for users.
    - Unnecessary hydration delaying interactivity
    - Extensive client-side processing that could result in poor performance

React Server Components (RSC)

Client Components 

    Client components have access to the client environment, such as the browser, allowing them to use state, effects, and event listeners to handle interactivity and also access browser-exclusive APIs like geolocation or localStorage, allowing you to build UI for specific use cases.

Server Components

    Server components represent a new type of React component specifically designed to operate exclusively on the server

    And unlike client components, their code stays on the server and is never downloaded to the client.

    - Benefits os Server Components

        Server components do not send code to the client, allowing large dependencies to remain server-side

        This benefits users with slower internet connections or less capable devices by eliminating the need to download, parse, and execute javascript for these components.

        - Direct Access to Server-side Resources

            By having direct access to server-side resources like databases or file systems, Server Components enable efficient data fetching and rendering without needing additional client-side processing.

        - Enhanced Security

            Server components' exclusive server-side execution enhances security by keeping sensitive information data and logic, including tokens and API keys, away from the client-side

        - Improved Data Fetching

            Server components enhance data fetching efficiency

            Typically, when fetching data on the client-side using useEffect, a child component cannot begin loading its data until the parent component has finished loading its own

            This sequential fetching of data often leads to poor performance

            The main issue is not the round trips themselves, but that these round trips are made from the client to the server

            Server Components enable applications to shift these sequential round trips to the server side

            By moving this logic to the server, request latency is reduced and overall performance is improved eliminating client-server "waterfalls"

        - Caching 

            Rendering on the server enables caching of the results, which can be reused in subsequent and across different users.

            This approach can significantly improve performance and reduce costs by minimizing the amount of rendering and data fetching required for each request

        - Faster Initial Page Load and First Contentful Paint 

            Are significantly improved with Server Components

            By generating HTML on the server, pages become immediately visible to users without the delay of downloading, parsing, and executing javascript

        - Improved SEO

            Regarding Search Engine Optimization (SEO), the server-rendered HTML is fully accessible to search engine bots, enhancing the indexability of your pages
        
        - Efficient Streaming

- Server and Client Components

    By default, every component in a Next.js app is considered a server component

- Server Rendering Strategies

    - Static rendering
    - Dynamic rendering
    - Stratified 

- Static rendering
    
    is a server rendering strategy where we generate HTML pages at the time of building our application

    This approach allows the page to be built once, cached by a CDN, and served to the client almost instantly.

 - Prefetching 

    Prefeching is a technique used to preload a route in the background before the user navigate to it.   

    Routes are automatically prefetched as they become visible in the user's viewport, either when the page first loads or ass it comes into view through scrolling

- Dynamic Rendering 

    Dynamic rendering is a server rendering strategy where routes are rendered for each user at request time.

    - How to dynamically render

        During rendering, if a dynamic function is discovered, Next.js will switch to dynamically rendering the whole route

        In Next.js, these dynamic functions are: cookies(), headers(), and searchParams

        Using any of these will opt the whole route into dynamic rendering at request time. 

As a developer, you do not need to choose between dynamic rendering and static rendering. Next.js will automatically choose the best rendering strategy for each route based on the features and API used.

- Streaming

    Is a strategy that allows for progressive UI rendering from the server.

    Work is divided into chucks and streamed to the client as soon as it's ready

    This enables users to see parts of the page immediately, before the entire content has finished rendering.

    Streaming significantly improves both the initial pages loading performance and the rendering of UI elements that rely on slower data fetches, which would otherwise block the rendering of the entire route.

    Streaming is integrated into the Next.js App Router by default.

- Server and Client Composition Patterns

    - Server components
        [] - Fetching data
        [] - Directly accessing backend resources
        [] - protecting sensitive information (like access tokens and API keys) on the server
        [] - Keeping large dependencies server-side, which helps in reducing client-side javascript.
    - Client Component
        - Adding Interactivity 
        - Handling event listeners (Such as onClick(), onChange(), etc)
        - Managing state and lifecycle effects (using hooks like useState(), useReducer(), useEffect())
        - Using browser-exclusive APIs
        - Using custom hooks
        - Using React Class Components

- Server-only Code
    Provide a build-time error if developers accidentally import one of these modules into a client component.

- Third-party Packages

    Third-party packages in the ecosystem are gradually adapting, beginning to add the "use client" directive to components that rely on client-only features, marking a clear distinction in their execution environment.

    Many components from npm packages, which traditionally leverage client-side features, haven't yet integrated this directive.

- Context Providers

- Client-only code
    Typically interact with browser-specific features like the DOM, the window object, localStorage etc which are not available on the sever

    Ensuring that such code is executed only on the client side prevents errors during server-side rendering 

    To prevent unintended server side usage of client side code, we can use a package called client-only

- Client Component Placement

    To compensate for server components not being able to manage state and handle interactivity, you need to create client components

    It's recommended to position these client components lower in your component tree

- Interleaving Server and Client Components

    - Include client component inside server component is an pattern not supported in Next.js

- Rendering Section Summary

    CSR
    SSR
    Suspense for SSR
    RSCs
    Server and client components
    RSC rendering lifecycle
    Static and dynamic rendering
    Streaming
    Server and client composition patterns

- Data Fetching

    - Section 1: Routing
    - Section 2: Rendering
    - Section 3: Data Fetching

- Data Fetching in App Router

    Server components support various configurations for caching, revalidating, and optimizing data fetching.

    On the client side, data fetching is typically managed through third-party libraries such as TanStack Query which offers its own robust APIs.

- Fetching data with server components

    The RSC architecture in the app router introduces support for async and await keywords in Server Components.

- Loading and Error States

- Caching Data

    - By default, Next.js automatically caches the returned values of fetch in the Data Cache on the server

    Data Cache
        - What is data cache?
            It is a server-side cache that persists the result of data fetches across incoming server requests and deployments
        - Why is it required 
            The data cache improves app performance and reduces costs by eliminating the need to re-fetch data from your data source with every request
        - How does it work?

    - Opting Out of Caching

        - For individual data fetches, you can opt out of caching by setting the cache option to no-store.

        - Once you specify the no-store option for a fetch request, subsequent fetch requests will also not be cached

        - By default, Next.js will cache fetch() request that occurs before any dynamic function (cookies(), headers(), searchParams() are used any will not cache requests found after dynamic functions)

- Request Memorization

    Request memorization is a technique that deduplicates requests for the same data within a single render pass

    This approach allows for re-use of data in a React Component tree, prevents redundant network calls and enhances performance

    For the initial request, data is fetched from an external source and the result is stored in memory

    Subsequent requests for the same data within the same render pass retrieve the result from memory, bypassing the need to make the request again.

    This optimization not only enhances performance but also simplifies data fetching within a component tree.

    When the same data is needed across different components in a route (e.g., in a Layout, Page, and multiple components), it eliminates the need to fetch data at the top of the tree and pass props between components.

    Request memorization is a React feature, not specifically a Next.js feature 
    
    Memorization only applies to the GET method in fetch requests

    Memorization only applies within the React Component tree. It does not extend to fetch requests in Route Handlers as they are not part of the React component tree.

    For cases where fetch is not suitable (e.g., some database clients, CMS clients, or GraphQL clients), you can use the React cache function to memoize functions

- Time based Data Revalidation

    Caching in Next.js

    By default, Next.js caches all fetch requests in the data cache, which is persistent HTTP cache on the server.

    Revalidation 
        Is the process of purging the Data Cache and re-fetching the latest data.

        Time-based revalidation
            Next.js automatically revalidate data after a certain amount of time has passed.

- Client-side Data Fetching

    