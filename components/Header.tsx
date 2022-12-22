import GithubIcon from "../svg/GithubIcon";

export default function Header() {
  return <header className="py-3 w-full relative z-[1]">
    <div className="flex flex-row items-center m-auto justify-between px-4 md:px-10 max-w-5xl">
      <a href="https://github.com/signup" className="text-white">
        <GithubIcon />
      </a>
      <div className="flex flex-row items-center">
        <p className="text-slate-500 mr-1">Already have an account?</p>
        <button className="text-white hover:underline hover:underline-offset-1">Sign in →</button>
      </div>
    </div>
  </header>
}