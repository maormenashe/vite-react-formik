import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
// import EnrollmentForm from "./components/EnrollmentForm";
// import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
// import FormikContainer from "./components/FormikContainer";
// import YoutubeFormFormik from "./components/YoutubeFormFormik";
// import YoutubeFormUseFormikYup from "./components/YoutubeFormUseFormikYup";
// import YoutubeFormUseFormik from "./components/YoutubeFormUseFormik";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <YoutubeFormUseFormik></YoutubeFormUseFormik> */}
        {/* <YoutubeFormUseFormikYup /> */}
        {/* <YoutubeFormFormik /> */}
        {/* <FormikContainer /> */}
        <LoginForm />
        {/* <RegistrationForm /> */}
        {/* <EnrollmentForm /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
