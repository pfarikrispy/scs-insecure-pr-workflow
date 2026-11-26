# Insecure Fork Pull Request Workflow

This lab demonstrates the risk of exposing repository secrets to code controlled
by an untrusted fork pull request.

## Vulnerability

The workflow uses `pull_request_target`, which runs from the trusted default
branch and can access `API_KEY`. It then explicitly checks out the fork's head
commit and executes pull request-controlled behavior through both `npm ci`
lifecycle scripts and `npm test`.

## Setup

1. Create a repository secret named `API_KEY`.
2. Make the repository public, or otherwise allow students to fork it.
3. Do not grant students write access to the upstream repository.
4. Use only a disposable lab credential and rotate it between cohorts.

## Exercise

Fork the repository and inspect which pull request-controlled application files
the trusted workflow executes. Open a pull request that demonstrates the impact
of exposing `API_KEY` to untrusted code and recover the lab credential.

## Defenses

- Do not expose secrets to workflows that execute pull request code.
- Move privileged operations into a trusted workflow that never checks out the
  pull request head.
- Review package lifecycle scripts before executing them.
- Use environment approvals when a job genuinely needs production credentials.
