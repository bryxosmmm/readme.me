import { Icon } from "solid-heroicons"
import { JSX } from "solid-js/jsx-runtime";


export const Preload = () => {
  return (
    <>
      <div class="readme flex animate-pulse space-x-4">
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 rounded bg-rose-overlay"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="col-span-2 h-2 rounded bg-rose-overlay"></div>
              <div class="col-span-1 h-2 rounded bg-rose-overlay"></div>
            </div>
            <div class="h-2 rounded bg-rose-overlay"></div>
          </div>
        </div>
      </div>
    </>
  )
}

type BadgeProps = {
  icon: { path: JSX.Element; outline: boolean; mini: boolean; },
  text: string,
  onclick?: () => void,
}
export const Badge = ({ icon, text, onclick }: BadgeProps) => {
  return (
    <>
      <div class="badge" onclick={onclick}><Icon path={icon} class="badge-icon h-10 w-10" /><div class="badge-content"><a>{text}</a></div></div>
    </>
  )
}


