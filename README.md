## To run this project locally:

    - npm install
    - npm run start

## What I have learned from this project:

    - I can use React Native Navigation to create Stack Navigation where I can use one screen and back option to navigate between screens, but I can expand that and use bottom navigation to render new screens.

        "Using stack navigation to manage different screens and their back navigation is a common and effective approach. It mimics the way users expect navigation to work in most mobile apps.

        Additionally, using a bottom tab navigation is also a great idea. Bottom tabs are a common UI pattern in mobile apps where you can navigate between different sections or categories of content. It allows users to quickly switch between major sections of the app without having to navigate through a hierarchy of screens."

    - I can use React Native Tailwind, which would transcribes tailwind classes to css and json files, and still using style attributes in components. To use it I need to set Tailiwnd Provider in App.js and useTailwind hook

    - React Native Elements UI library - gives me freedom of using differnet Icons specifing their type and name, Images, Inputs and other elements, easy to use.

        "There are other UI libraries like NativeBase, Ant Design, UI Kitten, and Paper from the React Native Paper team. Each has its own set of features, design philosophy, and community support."

    - useLayoutEffect which is hook allowing to make changes to layout before the elements going to be "painted" for client

        "The useLayoutEffect hook in React allows you to perform actions immediately after the DOM has been updated but before the browser's layout engine runs. It's quite similar to the useEffect hook, but it's fired synchronously after all DOM mutations. This makes it suitable for tasks that need to be executed before the browser repaints the screen, such as measuring DOM nodes or making layout changes."

    - instead of (item) => setItem(item) I can just write setItem

    - StepZen to create GraphQL backend interface

    - Apollo Client is a state management library that simplifies managing remote and local data with GraphQL

    - In React Navigation, when you use the navigation.navigate() function to navigate to a screen and pass parameters, you can access those parameters in the target screen component using the useRoute() hook

## Technologies Used

    React 18.2.0
    React Native 0.72.3
    Typescript 5.1.3
    Expo 49.0.7
    Apollo Client 3.8.1
    Tailwind React Native 4.2.0
    GraphQL 15.8.0
    Stepzen
