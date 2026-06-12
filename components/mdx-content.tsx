import { lazy, Suspense } from 'react'

const MDXMap = {
  work1: lazy(() => import('@/app/experience/PTW.mdx')),
  work2: lazy(() => import('@/app/experience/PTC.mdx')),
  work3: lazy(() => import('@/app/experience/MAP.mdx')),
}

export type MDXId = keyof typeof MDXMap

export function MDXContent({ id }: { id: MDXId }) {
  const Component = MDXMap[id]

  if (!Component) {
    return <p className="text-zinc-500">Konten tidak ditemukan</p>
  }

  return (
    <Suspense fallback={<p className="text-zinc-500">Loading...</p>}>
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <Component />
      </div>
    </Suspense>
  )
}
