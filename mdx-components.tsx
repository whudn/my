import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
    table: ({ children, ...props }: ComponentPropsWithoutRef<'table'>) => (
      <div className="overflow-x-auto my-6">
        <table
          className="w-full border-collapse rounded-lg overflow-hidden shadow-sm bg-white dark:bg-zinc-900"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }: ComponentPropsWithoutRef<'thead'>) => (
      <thead className="bg-zinc-50 dark:bg-zinc-800" {...props}>
        {children}
      </thead>
    ),
    th: ({ children, ...props }: ComponentPropsWithoutRef<'th'>) => (
      <th
        className="border-b border-zinc-200 dark:border-zinc-700 px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-100 text-sm"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }: ComponentPropsWithoutRef<'td'>) => (
      <td
        className="border-b border-zinc-200 dark:border-zinc-700 px-4 py-3 text-zinc-800 dark:text-zinc-300 text-sm"
        {...props}
      >
        {children}
      </td>
    ),
  }
}
