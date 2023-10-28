import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import { Layout } from '@/Components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component { ...pageProps } />
    </Layout>
  )
}
