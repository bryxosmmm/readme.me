import { star } from "solid-heroicons/solid";
import { createResource, Show } from "solid-js";
import { Badge } from "./utils";

type Repo = {
  stargazers_count: number;
};

const fetchStars = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!response.ok) throw new Error("Failed to fetch GitHub repos");

  const repos: Repo[] = await response.json();
  return repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
};

type StarProps = {
  username: string,
}
function Stars({ username }: StarProps) {
  const [stars] = createResource(() => username, fetchStars);

  return (<Show when={stars()} fallback={<Badge icon={star} text="NULL" />}>{(r) => <Badge icon={star} text={`Stars: ${r()}`} />}</Show>)
}


export default Stars
