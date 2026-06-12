'use client'

import { XIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { Spotlight } from '@/components/ui/spotlight'
import { MDXContent } from '@/components/mdx-content'
import type { WorkExperience } from '@/app/data'

type WorkExperienceDialogProps = {
  job: WorkExperience
}

export function WorkExperienceDialog({ job }: WorkExperienceDialogProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger className="w-full">
        <div className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30">
          <Spotlight
            className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
            size={64}
          />
          <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors duration-200 cursor-pointer">
            <div className="relative flex w-full flex-row justify-between">
              <div>
                <h4 className="font-normal dark:text-zinc-100">
                  {job.title}
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {job.company}
                </p>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm whitespace-nowrap ml-4">
                {job.start} - {job.end}
              </p>
            </div>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative w-full max-w-3xl rounded-2xl bg-zinc-50 p-6 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50 max-h-[80vh] overflow-y-auto">
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold dark:text-zinc-100">
                {job.title}
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                {job.company}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">
                {job.start} - {job.end}
              </p>
            </div>
            
            {job.mdxPath && (
              <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4">
                <MDXContent id={job.id as any} />
              </div>
            )}

            {job.link && job.link !== '#' && (
              <div>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 transition-colors duration-200"
                >
                  Kunjungi Website
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1 dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-200 z-50"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
