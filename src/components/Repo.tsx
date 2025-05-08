import { Show } from "solid-js";
import { createResource } from "solid-js";
import { Badge } from "./utils";
import { bookOpen } from "solid-heroicons/solid";

type GitHubCommit = {
  sha: string;
  message: string;
  url: string;
};

type Event = {
  type: string;
  actor: {
    login: string;
  };
  repo: {
    name: string;
    url: string;
  };
  payload: {
    commits: GitHubCommit[];
  };
  created_at: string;
};


export const fetchRecentRepo = async (username: string) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/events/public`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  const events: Event[] = await response.json();

  const pushEvent = events.find((event) => event.type === "PushEvent" && !event.repo.name.endsWith("readme.me"));

  if (!pushEvent) {
    throw new Error("No recent commits found");
  }

  const repoName = pushEvent.repo.name;
  console.log(repoName)
  return repoName.split("/")[1];
};

type RepoProps = {
  onclick: () => void,
}

function Repo({ onclick }: RepoProps) {
  const [repo] = createResource(() => import.meta.env.VITE_GITHUB_USERNAME, fetchRecentRepo);

  return (<Show when={repo()} fallback={<Badge icon={bookOpen} text="NULL" />}>{(r) => <Badge onclick={onclick} icon={bookOpen} text={`Latest: ${r()}`} />}</Show>)

}

export default Repo
