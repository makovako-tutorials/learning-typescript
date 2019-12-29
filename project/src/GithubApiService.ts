import * as reqeust from "request";
import { User } from "./User";
import { Repo } from "./Repo";

const OPTIONS: any = {
  headers: {
    "User-Agent": "request"
  },
  json: true
};
export class GithubApiService {
  getUserInfo(userName: string, cb: (user: User) => any) {
    reqeust.get(
      "https://api.github.com/users/" + userName,
      OPTIONS,
      (error: any, response: any, body: any) => {
        // console.log(error);

        // console.log(response);
        // console.log(body);

        let user = new User(body);
        cb(user);
      }
    );
  }

  getRepos(userName: string, cb: (repos: Repo[]) => any) {
    reqeust.get(
      "https://api.github.com/users/" + userName + "/repos",
      OPTIONS,
      (error: any, response: any, body: any) => {
        let repoArray = body;
        cb(repoArray.map((repo: any) => new Repo(repo)));
      }
    );
  }
}
