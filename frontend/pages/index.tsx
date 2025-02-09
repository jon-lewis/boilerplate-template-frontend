import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>React Boilerplate Template</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
          <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div className="mx-auto max-w-md">
              <div className="divide-y divide-gray-300/50">
                <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                  <p>An advanced frontend part of React Boilerplate Template including Next.js and Tailwind CSS</p>
                  <p>Next steps:</p>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                      </svg>
                      <p className="ml-4">
                      Start by editing&nbsp;
                        <code className="text-sm font-bold text-gray-900">pages/index.tsx</code>&nbsp;file
                      </p>
                    </li>

                    <li className="flex items-center">
                      <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                      </svg>
                      <p className="ml-4">
                      Customizing your&nbsp;
                        <code className="text-sm font-bold text-gray-900">tailwind.config.js</code>&nbsp;file
                      </p>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                      </svg>
                      <p className="ml-4">
                      Extracting classes with&nbsp;
                        <code className="text-sm font-bold text-gray-900">@apply</code>
                      </p>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                      </svg>
                      <p className="ml-4">Code completion with instant preview</p>
                    </li>
                  </ul>
                  <p>Perfect for learning how the frontend part of templates works.</p>
                </div>

                <div className="pt-8 text-base font-semibold leading-7">
                  <p className="text-gray-900">Find in-depth information about Next.js features and&nbsp;API.</p>
                  <p>
                    <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
                  </p>

                  <p className="text-gray-900">Want to dig deeper into Tailwind?</p>
                  <p>
                    <a href="https://tailwindcss.com/docs" className="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
