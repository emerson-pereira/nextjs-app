"use client"

import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap-theme.css";
import "./globals.css";
import { FormProvider } from "./contexts/formContext";
import { useEffect } from "react";

const robotoRegular = localFont({
  src: "./fonts/Roboto-Regular.woff",
  variable: "--font-roboto-regular",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, []);

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
