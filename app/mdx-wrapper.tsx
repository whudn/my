'use client'

import { MDXProvider } from '@mdx-js/react'
import { useMDXComponents } from '@/mdx-components'
import { ReactNode } from 'react'

export function MDXWrapper({ children }: { children: ReactNode }) {
  const components = useMDXComponents({})
  return <MDXProvider components={components}>{children}</MDXProvider>
}
