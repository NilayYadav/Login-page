import Header from "../components/Header";
import SignupForm from "../components/SingupForm";
import StarBackground from "../components/StarBackground";
import TermsCondition from "../components/TermsCondition";

export default function Home() {
  return (
    <div className="bg-black h-full min-h-screen relative bg-[url('https://github.githubassets.com/images/modules/site/home/hero-glow.svg')] bg-center bg-[length:200%_250%]">
      <Header />
      <main className="overflow-hidden">
        <StarBackground />
        <div className="pt-32 max-w-xl mx-10 sm:m-auto md:w-full min-h-[calc(100vh-128px)]">
          <SignupForm />
        </div>
      </main>
      <TermsCondition />
    </div>
  )
}
