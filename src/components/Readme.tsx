import hljs from "highlight.js";
import "highlight.js/styles/rose-pine-moon.css";

import { marked, Tokens } from "marked";
import { Accessor, createResource, Show } from "solid-js"
import { Preload } from "./utils";
import { fetchRecentRepo } from "./Repo";

type ReadmeProps = {
  visible: Accessor<boolean>,
}


const toHtml = async (content: string) => {
  const renderer = new marked.Renderer();
  renderer.code = (token: Tokens.Code): string => {
    const code = token.text;
    const lang = token.lang || '';
    let highlighted: string;

    if (lang && hljs.getLanguage(lang)) {
      highlighted = hljs.highlight(code, { language: lang }).value;
    } else {
      highlighted = hljs.highlightAuto(code).value;
    }
    return `<pre><code class="hljs ${lang ? `language-${lang}` : ''}">${highlighted}</code></pre>`;
  };
  marked.setOptions({
    renderer,
    gfm: true,
    breaks: true,
  })
  const html = await marked.parse(content);

  return html
}

const fetchReadme = async (username: string) => {
  const repo = await fetchRecentRepo(username);
  const data = await fetch(`https://raw.githubusercontent.com/bryxosmmm/${repo}/master/README.md`, { headers: { 'Accept': "application/vnd.github.v3.raw" } });

  const content = await data.text()

  const rendered = toHtml(content);

  console.log(rendered)
  return rendered
}

function Readme({ visible }: ReadmeProps) {
  const [markdown] = createResource(() => "bryxosmmm", fetchReadme);

  return (
    <>
      <div class={`h-[calc(100%-16px)] transition-transform duration-500 ease-in-out ${visible() ? 'opacity-100 translate-x-0' : '-translate-x-full pointer-events-none'} }`}>
        <Show when={markdown()} fallback={Preload()}><div class="readme" innerHTML={markdown()} />
        </Show>
      </div>
    </>
  )
}

export default Readme
