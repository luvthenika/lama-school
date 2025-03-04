'use client'
import '@/app/ui/globals.css'
import { theme } from './theme';
import { ThemeProvider } from '@emotion/react';
import Head from 'next/head';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
        <html>
          <body>
          <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
          {children}
          </body>
        </html>
  </ThemeProvider>

  );
}