import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LoadingProvider } from '@/hooks/use-loading';
import { LoadingTransition } from '@/components/ui/loading-transition';
import { ThemeProvider } from '@/components/theme-provider';
import { AppShell } from '@/components/app-shell';

export const metadata = {
  title: 'AidFast - Your Quick First Aid Guide',
  description: 'Fast, reliable, and easy-to-follow first aid instructions.',
};

export default function RootLayout(props) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <LoadingProvider>
            <LoadingTransition />
            <AppShell>
              {children}
            </AppShell>
            <Toaster />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
