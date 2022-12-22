import { useEffect, useMemo, useState } from "react";
import PasswordError from "./PasswordError";
import TextField from "./Textfield";
import Typewriter from 'typewriter-effect';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [subEmail, setSubEmail] = useState('');

  // display btn state
  const [displayBtnIn, setDisplayBtnIn] = useState('email');

  // Handle display inputs
  const [showEmail, setShowEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showUsername, setShowUsername] = useState(false);
  const [subscribeEmail, setShowSubscribeEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Handle Error state
  const [isEmailValid, setEmailValid] = useState(false);

  // Check password error
  const passwordError = useMemo(() => {
    if (password.trim() === '') return null;

    if (password.length < 8) return 'Password is too short';
    if (password.length <= 8 && (/\d/.test(password))) return 'Password is strong';
    if (password.length >= 8 && !(/\d/.test(password)) && password.length < 15) return 'Password needs a number and lowercase letter';
    if (password.length >= 15) return 'Password is strong';

  }, [password])


  // Checking is email valid
  useEffect(() => {
    const emailRegex = new RegExp('^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
    setEmailValid(emailRegex.test(email))
  }, [email])

  return <>
    <div className="border-[1px] rounded-md border-[#202637] bg-[#0c162d] p-8 z-10 relative">
      <h1 className="font-mono text-gray-400">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Welcome to GitHub! Let’s begin the adventure')
              .callFunction(() => {
                setShowEmail(true)
                typewriter.stop();
              })
              .start()
          }}
        />
        </h1>
      {showEmail && <TextField
        label="Enter your email"
        displayBtn={displayBtnIn === 'email'}
        onChange={e => setEmail(e.target.value)}
        value={email}
        isValid={isEmailValid}
        type="email"
        onSubmit={() => {
          setShowPassword(true);
          setDisplayBtnIn('password')
        }}
        setDisplayBtnIn={() => setDisplayBtnIn('email')}
      />}

      {/* Password input */}
      {showPassword && <TextField
        label="Create a password"
        displayBtn={displayBtnIn === 'password'}
        onChange={e => setPassword(e.target.value)}
        value={password}
        isValid={passwordError?.toLowerCase().includes('strong')}
        type="password"
        onSubmit={() => {
          setShowUsername(true);
          setDisplayBtnIn('username')
        }}
        setDisplayBtnIn={() => setDisplayBtnIn('password')}
      />}

      {/* Username input */}
      {showUsername && <TextField
        label="Enter a username"
        displayBtn={displayBtnIn === 'username'}
        onChange={e => setUsername(e.target.value)}
        value={username}
        isValid={username !== ''}
        type="text"
        onSubmit={() => {
          setShowSubscribeEmail(true)
          setDisplayBtnIn('subemail')
        }}
        setDisplayBtnIn={() => setDisplayBtnIn('username')}
      />}

      {/* Subscribe email input */}
      {subscribeEmail && <TextField
        label={
          <>
            <p>Would you like to receive product updates and announcements via email?</p>
            <p>Type &quot;y&quot; for yes or &quot;n&quot; for no</p>
          </>
        }
        displayBtn={displayBtnIn === 'subemail'}
        onChange={e => setSubEmail(e.target.value)}
        value={subEmail}
        isValid={subEmail !== ''}
        type="text"
        onSubmit={() => {
          console.log('Line----101 SingupForm.tsx', 'submitted')
          setSubmitted(true)
        }}
        setDisplayBtnIn={() => setDisplayBtnIn('subemail')}
      />}
    </div>

    {displayBtnIn === 'password' && password !== '' && passwordError && <PasswordError passwordError={passwordError} />}

    {submitted && <p className="mt-10 text-center text-xl text-green-600">Woohoo! Your account is created!</p>}
  </>
}