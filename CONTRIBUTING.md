# Contributing

:+1::tada: Thanks for taking the time to contribute! :tada::+1:

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

### Table Of Contents
[I don't want to read this whole thing, I just have a question!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)

- [Get started](#get-started)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Pull Requests]()


## I don't want to read this whole thing I just have a question!!!

> **Note:** [Please don't file an issue to ask a question.](https://rebilly.github.io/framepay-docs/) You'll get faster results by using the Intercom on the resource below.

### Get Started

Please install dependencies
```
yarn install
```
Run development mode 
```
yarn docs:dev 
```
Run production build
```
yarn docs:build 
```

Update environment values
```
touch .env.local
# update the env file 
```


### Reporting Bugs
Please use the [FramePay docs](https://rebilly.github.io/framepay-docs/) website to send the critical bugs or help by the Intercom messenger.  
Please use the [issues](https://github.com/Rebilly/framepay-docs/issues) for non critical cases.  

### Suggesting Enhancements
Please use the [issues](https://github.com/Rebilly/framepay-docs/issues) for the enhancement requests. 

### Pull Requests
Good pull requests - patches, improvements, new features - are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Follow this process if you'd like your work considered for inclusion in the project:

1. [Fork](https://help.github.com/en/articles/fork-a-repo) the project, clone your fork, and configure the remotes:
    ```
    # Clone your fork of the repo into the current directory
    git clone https://github.com/<your-username>/framepay-docs
    # Navigate to the newly cloned directory
    cd framepay-docs
    # Assign the original repo to a remote called "upstream"
    git remote add upstream https://github.com/Rebilly/framepay-docs 
    ```
2. If you cloned a while ago, get the latest changes from upstream:
    ```
    git checkout master
    git pull upstream master
    ```
3. Install/update dependencies:

   ```bash
   yarn install
   ```

4. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

5. Commit your changes in logical chunks.
   Please adhere to these [git commit message guidelines](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
   or your code is unlikely be merged into the main project.
   Use Git's [interactive rebase](https://help.github.com/articles/interactive-rebase)
   feature to tidy up your commits before making them public.

6. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream master
   ```

7. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

8. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
    with a clear title and description.

**IMPORTANT**: By submitting a patch, you agree to allow the project owner to license your work under the same license as that used by this project (MIT).
