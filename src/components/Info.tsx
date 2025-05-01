import { createResource, Show } from "solid-js";
import Repo from "./Repo";
import Stars from "./Stars";

type InfoProps = {
  toggle: () => void,
  stars: number,
  repo: string,
}

type AvatarUrl = {
  avatar_url: string,
}

const getImage = async (username: string) => {
  const data = await fetch(`https://api.github.com/users/${username}`)
  const user: AvatarUrl = await data.json();
  return user.avatar_url
}

const Image = () => {
  const [image] = createResource(() => "bryxosmmm", getImage);
  return (
    <div class="user-image">
      <Show when={image()} fallback={<p>Loading...</p>}>
        <img src={image()} />
      </Show>
    </div>
  );
}

const TopSection = () => {
  return (
    <div class="flex items-end space-x-5 h-20 overflow-hidden">
      <Image />
      <h3 class="truncate">bryxosmmm</h3>
    </div>
  );
}

const Info = ({ toggle }: InfoProps) => {
  return (
    <div class="info overflow-auto">
      <TopSection />
      <hr class="decorative-line" />
      <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis.</a>
      <hr class="decorative-line" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis.</p>
      <hr class="decorative-line" />
      <div class="badge-container">
        <Repo onclick={toggle} username="bryxosmmm" />
        <Stars username="bryxosmmm" />
      </div>
    </div>
  );
}

export default Info
