import { useMemo } from "react"

interface PasswordErrorProps {
  passwordError: string
}

export default function PasswordError({ passwordError }: PasswordErrorProps) {

  const firstMarkColor = useMemo(() => {
    if (passwordError?.toLowerCase().includes('short')) return 'bg-red-600';
    if (passwordError?.toLowerCase().includes('number')) return 'bg-yellow-600';
    if (passwordError?.toLowerCase().includes('strong')) return 'bg-green-600';
  }, [passwordError])

  const secondMarkColor = useMemo(() => {
    if (passwordError?.toLowerCase().includes('number')) return 'bg-yellow-600';
    if (passwordError?.toLowerCase().includes('strong')) return 'bg-green-600';
    return 'bg-white';
  }, [passwordError])

  const thirdMarkColor = useMemo(() => {
    if (passwordError?.toLowerCase().includes('strong')) return 'bg-green-600';
    return 'bg-white';
  }, [passwordError])

  return <div className="mt-5 p-5">
    <div className="flex flex-row gap-3">
      <div className={`w-12 h-1 rounded ${firstMarkColor}`} />
      <div className={`w-12 h-1 rounded ${secondMarkColor}`} />
      <div className={`w-12 h-1 rounded ${thirdMarkColor}`} />
    </div>
    <p className={`mt-1.5 ${passwordError?.toLowerCase().includes('short') ? 'text-red-600' : passwordError?.toLowerCase().includes('number') ? 'text-yellow-600' : 'text-green-600'}`}>{passwordError}</p>
    <p className="text-base mt-1.5 text-[#627597]">Make sure it&apos;s at least 15 characters OR at least 8 characters including a number and a lowercase letter.</p>
  </div>
}