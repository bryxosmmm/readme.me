// import { createSignal } from 'solid-js'
// import './App.css'
// import Stars from './components/Stars'
// import InLove from './components/InLove'
import { createSignal, Show } from 'solid-js';
import Info from './components/Info'
import Readme from './components/Readme'

function App() {
  const [visible, setVisible] = createSignal(false);
  const toggle = () => setVisible(!visible());

  return (
    <div class="h-screen">
      <div class="flex w-full h-full pb-4 pr-4">
        <div
          class={`transition-all duration-300 ease-in-out ${visible() ? 'w-[30%]' : 'w-0'
            }`}
        >
          <Show when={visible()}>
            <Readme visible={visible} />
          </Show>
        </div>
        <div class="flex-1 h-[calc(100%-16px)] pr-4">
          <Info stars={0} repo="bryxosmmm/calc-rs" toggle={toggle} />
        </div>
      </div>
    </div>
  )
}

export default App
