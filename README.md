# Git
- Creating a new Branch: 
> git branch [new branch]

- Show where the branch pointers are pointing
> git log --oneline --decorate

- Switching Branches : This moves HEAD to point to the new branch.
> git checkout [new branch]

- Creating a new branch and switching to it at the same time
> - git checkout -b [new branch] && git commit -a -m 'New Message'

- Merge the new branch back into your master branch to deploy to production.
> git merge [new branch] <-- This one goes after making: git checkout master

- Delete branch
> git branch -d [new branch]

- Get a simple listing of your current branches // --merged & --no-merged
> git branch

- Rename the branch locally
> git branch --move bad-branch-name corrected-branch-name

- To let others see the corrected branch on the remote, push it
> git push --set-upstream origin corrected-branch-name

- Delete branch on the remote
> git push origin --delete bad-branch-name

- To synchronize your work with a given remote
> git fetch < remote >   <-- in this case origin

- If you have a branch named serverfix that you want to work on with others, you can push it up the same way you pushed your first branch.
> git push < remote > < branch >

- Deleting Remote Branches
> git push origin --delete < branch >


- From Git version 2.23 onwards you can use git switch instead of git checkout to:
> git switch [new branch]
> git switch -c [new branch] // -c flag stands for --create
> git switch - // return to your previously checked out branch

- 



