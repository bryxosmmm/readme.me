import { createResource, Show } from "solid-js";
import Repo from "./Repo";
import Stars from "./Stars";

type InfoProps = {
  toggle: () => void,
}

type AvatarUrl = {
  avatar_url: string,
}

const getImage = async (username: string) => {
  const data = await fetch(`https://api.github.com/users/${username}`, { headers: { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` } });
  const user: AvatarUrl = await data.json();
  return user.avatar_url
}

const Image = () => {
  const [image] = createResource(() => import.meta.env.VITE_GITHUB_USERNAME, getImage);
  return (
    <div class="user-image">
      <Show when={image()} fallback={<p>Loading...</p>}>
        <img src={image()} />
      </Show>
    </div>
  );
}

const Aboutme = async () => {
  return await fetch("/readme.me/aboutme.md").then((r) => r.text())
}

const TopSection = () => {
  return (
    <div class="flex items-end space-x-5 h-20 overflow-hidden">
      <Image />
      <h3 class="truncate">{import.meta.env.VITE_GITHUB_USERNAME}</h3>
    </div>
  );
}

export const Bottom = () => {
  return (
    <>
      <a href={`https://github.com/${import.meta.env.VITE_GITHUB_USERNAME}`} class="bottom-bar-link" target="_blank">
        <span>Github</span>
      </a>
      <a href="https://www.youtube.com/watch?v=FsKivfDn7GI" class="bottom-bar-link" target="_blank">
        <span>RickRoll</span>
      </a>
    </>
  )

}

const Info = ({ toggle }: InfoProps) => {
  const [markdown] = createResource(() => "", Aboutme);
  return (
    <div class="info overflow-auto">
      <TopSection />
      <hr class="decorative-line" />
      <a>{markdown() ?? ""}</a>
      <hr class="decorative-line" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis.</p>
      <hr class="decorative-line" />
      <div class="badge-container">
        <Repo onclick={toggle} />
        <Stars username={import.meta.env.VITE_GITHUB_USERNAME} />
      </div>
    </div>
  );
}

export default Info
