---
{"publish":true,"permalink":"tech-tutorial-github_login","title":"Login to GitHub via Terminal","description":"Quick Login guide for GitHub","comments":true,"created":"2025-09-07","modified":"2025-09-07T13:23:51.712+08:00","published":"2025-09-07","tags":["Technology","Tutorial"],"cssclasses":null,"draft":false,"date":"2025-09-07","date_created":"2025-09-07","aliases":null}
---

There are multiple ways to login to GitHub in our devices - via Dedicated Applications and Clients (GitHub Desktop, GitHub Mobile), via Web Browser, via Terminal. 

In this guide I will help you login via the Terminal.

# Pre-requisites
1. GitHub Account (Please [create GitHub account](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github) if you still don't have one.)
2. Terminal Application (Termux, Terminal, Tabby)

## Install GitHub
Copy and paste the command below in your terminal. This installs GitHub CLI.
```
sudo apt update
sudo apt install gh
```

> Note: If you are using other distro's / package managers, please refer to the official documentation [here](https://github.com/cli/cli/blob/trunk/docs/install_linux.md#debian).
# 🍰 Easy Mode - Browser Method
1. In the Terminal, type `gh auth login`. 
2. You will be having the following prompts below. Just choose the options highlighted after the prompt. ![[Attachments/login_gh_1.png]]
3. Remember the 8-character code provided and click enter to open GitHub in the browser. 
4. Enter the number and authenticate via your preferred method. 
5. Once done you will get the following response response. ![[Attachments/login_gh_2.png]]
6. ***👍 You are now Logged In!*** 


# 🪨 Hard Mode - SSH & Personal Access Token (P.A.T.) Method 
1. In the terminal, type `gh auth login`
2. You will have the following prompt, in the second question choose SSH. ![[Attachments/login_gh_3.png]]
3. You will be asked to generate your SSH Public Key to your GitHub Account. Enter a passphrase and it should be generated automatically once you hit enter. 
4. When asked how you would like to authenticate use `Paste an authentication token` ![[Attachments/login_gh_4.png]]
## Generate a Classic Token
1. Go to this link: https://github.com/settings/tokens ![[Attachments/login_gh_5.png]]
2. Choose between 'Fine-Grained Token' or 'Classic Token' (for this tutorial I will use Classic) ![[Attachments/login_gh_6.png]]
3. Add Note (*Note:* be descriptive on where this would be used for easier management) ![[Attachments/login_gh_7.png]]
4. Set Expiration Date
	- It is highly-recommended to set an expiration date specially when using on devices you do not own to prevent unwanted access. ![[Attachments/login_gh_8.png]]
5. Select all options containing `repo`, `repo:org`, and `admin:public_key`
6. Click Generate Token ![[Attachments/login_gh_9.png]]
7. Copy the Key and paste it in the terminal. ![[Attachments/login_gh_10.png]]
8. ***👍 You are now Logged In!*** 
# 🆎Differences

Weigh in the methods according to your needs and risks associated. See the table below for a quick overview.

|                 | **[[Technology/Guides/Login to GitHub#🍰 Easy Mode - Browser Method]]**   | **[[Technology/Guides/Login to GitHub#🪨 Hard Mode - SSH & Personal Access Token (P.A.T.) Method\|🪨 Hard Mode - SSH & P.A.T.]]** |
| --------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Feature**     | Web Browser Authentication               | Personal Access Token (PAT) Authentication                                                       |
| **Method**      | Interactive browser-based login          | Manual token generation, then use in place of password                                           |
| **Use Case**    | Interactive use on local machines        | Automation, headless environments, CI/CD                                                         |
| **Convenience** | User-friendly for initial setup          | Requires manual PAT generation and management                                                    |
| **Security**    | Token handled by system credential store | Requires careful handling and secure storage of the PAT                                          |
| **Control**     | Broad access based on user permissions   | Granular control over permissions via token scopes                                               |

# 📜 References

[1]: _Managing your personal access tokens_. (n.d.). GitHub Docs. Retrieved September 7, 2025, from [https://docs-internal.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens](https://docs-internal.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

*Please feel free to comment down below for any issues and suggestions.* 