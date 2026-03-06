var a = 10; //test pull request

// 16.1	initial code
// Code	                                          Output	                                 Description
// Git -v	                                      git version 2.51.0.windows.1	             Check the git is installed or not
// git config --global --list	                  user.name=Bishakha Tuladhar
// user.email=bishakhatuladhar@gmail.com
// init.defaultbranch=main	                                                                 show the list of username,email,default branch

// git config --global user.name "Bishakha Tuladhar
// git config –global user.email bishakhatuladhar@gmail.com
// git config –global init.defaultbranch “main”		Set username,email, and default branch
// Git init		                                                                              initialize an empty local repo

// 16.2	Frequently use code
// Code	                                            Output	                                   Description
// Git add  1.index.js
// Git  add .		(Note: it add all the file)
// git commit -m "typescript initial commit"	[main (root-commit) dd90f7e] typescript initial commit
//                                            3 files changed, 2 insertions(+)
//                                            create mode 100644 1.index.js
//                                            create mode 100644 1.index.ts
//                                             create mode 100644 ReactTypeScript	Commit the file
// Git status	                               On branch main
//                                            Changes not staged for commit:
//                                           (use "git add <file>..." to update what will be committed)
//                                          (use "git restore <file>..." to discard changes in working directory)
//                                             modified:   1 React js.docx
//                                             modified:   17.Git.js
//                                              modified:   ~$React js.docx

//                                             no changes added to commit (use "git add" and/or "git commit -a")	Check status of the project .
//                                             Check the project is in commit state or not.
// Git branch	                                * main                                                     	Show all the branch name
// Git branch bishakha		                                                                                Create new branch
// Git checkout bishakha
// Or git switch bishakha	                         Switched to branch 'bishakha'	                        Swtich the branch
// (note:create a new file filename.ts)

// Git add .
// Git commit -m “typescript localbishakha test”
// Git checkout main
// (note: in main branch there is no changes in main)
// git merge bishakha	                             Updating dd90f7e..45310a5
//                                               Fast-forward
//                                               testlocalbishakha.ts | 1 +
//                                               1 file changed, 1 insertion(+)
//                                               create mode 100644 testlocalbishakha.ts	                 Merge in local branch only

//                                                                                                          If we want to transfer the file from bishakha to main branch. New changes in bishakha i.e. testlocalbishakha.ts file
// Conflict scenario
// Change var a=10; in bishakha
// Add, commit
// Change var a=20 in main
// Then add, commit
// From main , git merge bishakha
// We will get error

// 16.2.1	Git hub
// Create repository named Bishakha123/TypeScript
// git remote add origin https://github.com/Bishakha123/TypeScript.git	Connection between local and remote
// git push -u origin main	Push the local commit to remote
// Git pull origin <branch_name>
// 	Pull all the code from remote to local branch
// Fetch+merge
// Git fetch origin	                          Merge garna aagadi confirm garnu paryo ki merge garne ho bhannera herna lai so we use fetch
// Git diff main origin/main	              Show the difference of the local and remote branch

// 16.2.2	Pull request
// Git branch bishakha
// Git checkout bishakha	Create new branch name “bishakha”
// Create a new file “testbishakha.js”
// Git add.
// Git commit -m “pullrequest1 3/5/2026 6.00”
// Git push origin bishakha	In remote, a new branch “bishakha” is created and the data is updated.

// Click pull request
// Click “new pull request” button
// Choose branch main and bishakha
// Click “create pull request”	In pull request

// Click “merge pull request”
// (note: updates the main branch in remote only)

// In local
// Git pull origin main	In local it will pull all the code of the remote main then we will get full code.

// 16.2.3	Cherry-pick
// If in branch “main” we want specific commit of branch “bishakha” then we use cherry-pick
// Git cherry-pic <commit-id>
// Git log                                   	To get commit id

// 16.2.4	Rebase

// Rebase	                               Commit
// Rewriting history	                   Create a new commit that joins 2 branches together

// Main: A->B->C
// Bishakha: (branched from B)->  D-> E
// (Note: in bishakha branched C commit is missing)

// Git checkout main
// Git pull origin main
// Git checkout bishakha
// Git rebase main

// After
// Bishakha :A->B->C->D->E
// Main: A->B->B->C
// Bishakha (branched from B)->D->E
// (Note: in bishakha branch C commit is missing)

//                                           Git checkout main
//                                           Git pull origin main
//                                           Git checkout bishakha
//                                            Git merge main

// After

// 16.3	Easy code
// Code              	Output	                                  Description
// Pwd		                                                      Showing the path
// Git log	          commit dd90f7ebbdfc34a8417a8d2157ffa32f4e3c0738 (HEAD -> main)
//                    Author: Bishakha Tuladhar <bishakhatuladhar@gmail.com>
//                    Date:   Mon Mar 2 14:14:33 2026 +0545
//                     typescript initial commit	Shows the commit history
// git checkout -b <branch_name>		Create new branch and switch the branch
// Git log --help
// Git log main..bishakha		        Main ma changes cha but bishakha ma chaina
// Git branch -D bishakha		         Delete the bishakha branch
