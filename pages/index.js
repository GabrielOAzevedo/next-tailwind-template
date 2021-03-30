import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen w-screen justify-center items-center flex-col">
        <h1 className="font-bold">This is the tailwind-next template.</h1>
        <p className="text-blue-600">Is it useful? Maybe, but at least it saves some time.</p>
      </main>
    </div>
  )
}
