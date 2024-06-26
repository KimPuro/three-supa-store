export default function Page() {
  return (
    <>
      <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]">
        <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
          <a href="/">
            <span className="sr-only">KimPuro</span>
            <img
              className="h-10 w-auto sm:h-12"
              src="/icon/mr-egg-sushi-trans.png"
              alt=""
            />
          </a>
        </header>
        <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className="max-w-lg">
            <p className="text-base font-semibold leading-8 text-cyan-500">Welcome!</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">감사합니다!</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              입력하신 이메일로 인증 메일을 전송했습니다.<br/> 메일을 인증하셔야만 로그인이 가능합니다.
            </p>
            <div className="mt-10">
              <a href="/" className="text-sm font-semibold leading-7 text-cyan-500">
                <span aria-hidden="true">&larr;</span> Back to home
              </a>
            </div>
          </div>
        </main>
        <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
          <img
            src="https://images.unsplash.com/photo-1650468911688-7ab7ffd4d6d4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Thank you image"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  )
}
