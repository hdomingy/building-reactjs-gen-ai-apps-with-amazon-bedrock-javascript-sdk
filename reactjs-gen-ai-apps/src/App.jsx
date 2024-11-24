import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { withAuthenticator } from '@aws-amplify/ui-react'
import './App.css'
import Menu from "./Menu"
import Layout from './Layout'
import Prompts from "./Prompts"
import PromptNew from "./PromptNew"
import Prompt from "./Prompt"
import BedrockKBAndGenerate from "./BedrockKBAndGenerate"
import BedrockKBRetrieve from "./BedrockKBRetrieve"

import BedrockAgent from "./BedrockAgent"
import MultiModalLLM from "./MultiModalLLM"

const App = ({ signOut, user }) => {

  const router = createBrowserRouter([

    {
      path: "/",
      errorElement: <div>something went wrong!</div>,
      element: <Struct signOut={signOut}  {...user} />,
      children: [
        { path: "bedrockagent", element: <BedrockAgent /> },

      ]
    }
  ])

  return (<RouterProvider router={router} />)
}

const Struct = ({ signOut, ...user }) =>
  [
    <Menu key={1} signOut={signOut} {...user}></Menu>,
    <Layout key={2} ></Layout>
  ]

export default withAuthenticator(App, {
  hideSignUp: true
})