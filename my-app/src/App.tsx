import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"


import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./pages/Results"
import Layout from "./Layouts"
import Home from "./pages/Home";



export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="results" element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
