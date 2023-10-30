import './globals.css'
import type { Metadata } from 'next'
import { getLocalePartsFrom, locales, ValidLocale, getTranslator } from "@/i18n"

type Props = {
  children: React.ReactNode;
  params: {locale: string};
};

export const metadata: Metadata = {
  title: 'Example',
  description: 'Example',
}

export async function generateStaticParams() {
  return locales.map((locale) => getLocalePartsFrom({ locale }));
}

export default async function RootLayout({
  children,
  params: {locale}
}: Props) {

  return (
    <html lang={locale}>
      <body className={""}>
        {children}
      </body>
    </html>
  )
}
