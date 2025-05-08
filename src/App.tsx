// import { createSignal } from 'solid-js'
// import './App.css'
// import Stars from './components/Stars'
// import InLove from './components/InLove'
import { createSignal, Show } from 'solid-js';
import Info, { Bottom } from './components/Info'
import Readme from './components/Readme'

function App() {
  const [visible, setVisible] = createSignal(false);
  const toggle = () => setVisible(!visible());

  return (
    <>
      <div class="h-screen">
        <div class="flex w-full h-[94%] pb-4 pr-4">
          <div
            class={`transition-all duration-300 ease-in-out ${visible() ? 'w-[30%]' : 'w-0'
              }`}
          >
            <Show when={visible()}>
              <Readme visible={visible} />
            </Show>
          </div>
          <div class="flex-1 h-[calc(100%-16px)] pr-4">
            <Info toggle={toggle} />
          </div>
        </div>
        <div class="bottom-bar h-[6%]"><Bottom /></div>
      </div>
    </>
  )
}

export default App
