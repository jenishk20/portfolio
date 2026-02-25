import './globals.css';
import ThemeProvider from '../components/ThemeProvider';

export const metadata = {
  title: 'Jenish Kothari | Software Engineer',
  description:
    'Portfolio of Jenish Kothari — ex-Adobe & Dell SWE Intern, AI/ML engineer, Competitive Programmer, and Full-Stack Developer based in Boston, MA.',
  keywords: [
    'Software Engineer',
    'Full Stack',
    'AI ML',
    'React',
    'Next.js',
    'Boston',
    'Adobe',
    'Dell',
    'Competitive Programmer',
  ],
  openGraph: {
    title: 'Jenish Kothari | Software Engineer',
    description: 'Building at the intersection of AI and software engineering.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
