import { InputHTMLAttributes, useState } from "react"
import EyeCloseIcon from "../svg/EyeCloseIcon";
import OpenEyeIcon from "../svg/EyeOpenIcon";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | any,
  isValid?: boolean,
  onSubmit: Function | any;
  displayBtn: boolean,
  setDisplayBtnIn?: Function | any
}

export default function TextField({ label, isValid, onSubmit, displayBtn, setDisplayBtnIn, ...props }: TextFieldProps) {
  const [customType, setCustomType] = useState(props.type);

  return <div className="mt-5" onMouseDown={() => setDisplayBtnIn()}>
    <div className="font-mono text-[#00cfc8]">{label}</div>
    <div className="group flex flex-row">
      {
        isValid ? <span className="after:content-['✓'] text-green-500" />
          : <span className="after:content-['→'] text-red-500" />
      }
      <input
        className="w-full font-mono text-white ml-2 p-0 focus:border-blue-500 focus:border-[1px] outline-0 bg-transparent"
        {...props}
        type={customType}
        autoFocus
        autoComplete="off"
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            e.preventDefault();
            if (isValid) onSubmit()
          }
        }}
      />
      {props.type === 'password' && displayBtn &&
        <button onClick={() => setCustomType(customType === 'password' ? 'text' : 'password')}>
          {customType === 'password' ? <OpenEyeIcon /> : <EyeCloseIcon />}
        </button>
      }

      <button
        className={`ml-2 ${displayBtn ? 'visible' : 'invisible'} ${isValid ? 'border-green-700 text-green-700' : 'border-slate-700 text-slate-700'} border-[1px] py-1 px-4 rounded`}
        onClick={isValid ? () => onSubmit() : () => { }}
      >
        Continue
      </button>
    </div>
  </div>
}