# Git Doc

| Code                                     | Output / Example               | Description                               |
| :--------------------------------------- | :----------------------------- | :---------------------------------------- |
| `git -v`                                 | `git version 2.51.0.windows.1` | Check if Git is installed.                |
| `git config --global --list`             | `user.name=Bishakha Tuladhar`  | Show username, email, and default branch. |
| `git config --global user.name "Name"`   | —                              | Set your global username.                 |
| `git config --global user.email "Email"` | —                              | Set your global email.                    |
| `git init`                               | —                              | Initialize an empty local repository.     |

---

## 2. Frequently Used Commands

This section covers the daily workflow of adding, committing, and checking status.

| Code                      | Description                               |
| :------------------------ | :---------------------------------------- |
| `git add .`               | Adds all files to the staging area.       |
| `git commit -m "message"` | Saves the staged snapshot to history.     |
| `git status`              | Check which files are modified or staged. |
| `git branch`              | List all branch names.                    |
| `git checkout -b <name>`  | Create and switch to a new branch.        |

---

## 3. Merging & Conflict Handling

How to combine work from different branches.

### Local Merge Example

When transferring files from a feature branch (e.g., `bishakha`) to `main`:

1. `git checkout main`
2. `git merge bishakha`

> **Note on Conflicts:** If the same line is changed in both branches, Git will throw an error. You must manually resolve the code, then add and commit.

---

## 4. GitHub Remote Integration

Connecting your local project to the cloud.

| Code                          | Description                                     |
| :---------------------------- | :---------------------------------------------- |
| `git remote add origin <url>` | Connect local repo to GitHub.                   |
| `git push -u origin main`     | Push local commits to the remote `main` branch. |
| `git pull origin main`        | Fetch and merge changes from remote to local.   |
| `git fetch origin`            | Download remote changes without merging yet.    |

---

## 5. Advanced History Tools

| Tool            | Code                   | Description                                        |
| :-------------- | :--------------------- | :------------------------------------------------- |
| **Cherry-Pick** | `git cherry-pick <id>` | Apply a specific commit from another branch.       |
| **Rebase**      | `git rebase main`      | Rewrite history to put your work on top of `main`. |
| **Log**         | `git log --oneline`    | View a condensed version of commit history.        |

---
