# Git Workflow for `development` and `main` branches

This workflow will help you work with both `development` and `main` branches in Git. It ensures that `main` remains stable while you work on new features in `development`.

## 1. Starting Work (on the `development` branch)
   - Ensure you're on the `development` branch:
     ```bash
     git checkout development
     ```

   - Pull the latest changes to ensure your local branch is up-to-date:
     ```bash
     git pull origin development
     ```

   - Work on your changes (backend or features). When done, add and commit your changes:
     ```bash
     git add .
     git commit -m "Your commit message"
     ```

   - Push your changes to the remote `development` branch:
     ```bash
     git push origin development
     ```

## 2. Sync `development` with `main`
   While you're working on `development`, the `main` branch may have updates (e.g., from other team members). Sync your `development` branch with `main` regularly to avoid conflicts.

   - Switch to `main` and pull the latest changes:
     ```bash
     git checkout main
     git pull origin main
     ```

   - Switch back to `development`:
     ```bash
     git checkout development
     ```

   - Merge the latest `main` changes into `development`:
     ```bash
     git merge main
     ```

   - Resolve any merge conflicts if needed, then commit and push changes:
     ```bash
     git add .
     git commit -m "Resolved merge conflicts"
     git push origin development
     ```

## 3. Merging `development` into `main` (once features are complete)
   After completing your work in `development` and testing it, merge your changes into `main`.

   - Ensure you're on the `main` branch:
     ```bash
     git checkout main
     ```

   - Pull the latest changes from `main`:
     ```bash
     git pull origin main
     ```

   - Merge `development` into `main`:
     ```bash
     git merge development
     ```

   - Push the updated `main` branch to the remote:
     ```bash
     git push origin main
     ```

## 4. Clean Up (Optional)
   Once you’ve merged your `development` branch into `main`, you can delete the local and remote `development` branch (if it's not needed anymore):

   - Delete the local `development` branch:
     ```bash
     git branch -d development
     ```

   - Delete the remote `development` branch (if you don't need it anymore):
     ```bash
     git push origin --delete development
     ```

## Summary of Key Commands:
- Switch to `development`: 
  ```bash
  git checkout development
