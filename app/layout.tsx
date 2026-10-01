import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-mulish',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Codingtron | Cloud, DevOps, Automation & Software Company',
  description:
    'Codingtron delivers secure, scalable cloud, DevOps, automation, and software solutions that help businesses simplify complex technology.',
  keywords: [
    'Codingtron',
    'Cloud Migration',
    'DevOps Solutions',
    'Kubernetes Orchestration',
    'AWS Migration',
    'Azure Cloud Solutions',
    'Infrastructure as Code',
    'CI/CD Pipeline',
    'High Availability Architecture',
    'Disaster Recovery',
    'Compute Universe',
  ],
  authors: [{ name: 'Ghulam Mujtaba' }, { name: 'Codingtron Engineering' }],
  openGraph: {
    title: 'Codingtron | Cloud, DevOps, Automation & Software Company',
    description:
      'Secure, scalable cloud, DevOps, automation, and software solutions for businesses.',
    url: 'https://codingtron.com',
    siteName: 'Codingtron - Cloud, DevOps and Automation Service Provider',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codingtron | Cloud, DevOps, Automation & Software Company',
    description:
      'Secure, scalable cloud, DevOps, automation, and software solutions for businesses.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mulish.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-black antialiased selection:bg-black selection:text-white" suppressHydrationWarning>
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
