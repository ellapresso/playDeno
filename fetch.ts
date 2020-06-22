// function fetch(input: Request | URL | string, init?: RequestInit): Promise<Response>;

if (import.meta.main) {
  const response: Response = await fetch("https://api.github.com/users");
  const users: User[] = await response.json();
  console.log(users.map((user) => user.login));
}

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
