import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap-theme.css";
import "./globals.css";
import { FormProvider } from "./contexts/formContext";

const robotoRegular = localFont({
  src: "./fonts/Roboto-Regular.woff",
  variable: "--font-roboto-regular",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoRegular.variable}`}>
        <FormProvider>
          {children}
        </FormProvider>
      </body>
    </html>
  );
}
