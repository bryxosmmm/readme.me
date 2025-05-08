import { Icon } from "solid-heroicons"
import { JSX } from "solid-js/jsx-runtime";
import { Component } from "solid-js";

const Preload: Component = () => {
  return (
    <div class="absolute inset-0 bg-rose-black border border-rose-accent/15 rounded-xl overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-rose-accent/5 via-transparent to-rose-accent/5 animate-glow-pulse"></div>

        <div class="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 border border-rose-accent/10 rounded-full animate-ripple"></div>
        <div class="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 border border-rose-accent/10 rounded-full animate-ripple [animation-delay:2s]"></div>
      </div>

      <div class="relative z-10 flex flex-col items-center justify-center h-full p-8">
        <div class="flex space-x-2">
          <div class="w-3 h-3 bg-rose-accent rounded-full animate-pulse [animation-delay:0ms]"></div>
          <div class="w-3 h-3 bg-rose-accent rounded-full animate-pulse [animation-delay:200ms]"></div>
          <div class="w-3 h-3 bg-rose-accent rounded-full animate-pulse [animation-delay:400ms]"></div>
        </div>
      </div>
    </div>
  );
};

export { Preload };

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


