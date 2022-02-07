# Ruby on Rails, Typescript React template

Internal project template for ExploratorLabs.

## This template is built with the following features, tools, and frameworks

- [Node 16.13.0](https://nodejs.org/en/about/)
- [Ruby 2.7.2](https://www.ruby-lang.org/en/)
- [Ruby on Rails 6.1.4](https://rubyonrails.org/)
- [React 17.0.2](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [MobX](https://mobx.js.org/README.html)
- Remove [Turbolinks](https://github.com/turbolinks/turbolinks)

## How to start with this template?

- If you want to start a new repo from this template, click on the **Use this template** button [How?](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository)
- If you want to contribute to this template, continue to the next step

---

1. Clone the repo down to your machine [How?](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone)
1. Install and switch your Ruby version to align with `.ruby-version`
1. Install and switch your Node version to align with `.nvmrc`
1. Run `yarn` and `bundle` to install all packages and gems
1. Regenerate master key and new credentials file with the following steps

   - Remove `config/credentials.yml.env` file
   - Run `EDITOR=nano rails credentials:edit` to regenerate a new credentials file and `master.key`

1. Change application's name in the following files

   - `app/views/layouts/application.html.erb`
   - `package.json`
   - `config/database.yml` - development, production and test database name

1. Setup database with `bundle exec rails db:setup`

## How to setup development environment

1. Install and switch your Ruby version to align with `.ruby-version`
1. Install and switch your Node version to align with `.nvmrc`
1. Run `yarn` and `bundle` to install all packages and gems
1. Setup database with `bundle exec rails db:setup`
1. Spin up your environment with `foreman start -f Procfile.dev`
1. Now you can access the app via `http://localhost:3000`

## Useful guides

- How to set environment variables? [Here](https://medium.com/cedarcode/rails-5-2-credentials-9b3324851336)

## References:

- [Henry's Typescript React Template](https://github.com/exploratortech/Template-with-React-StyledComponents-Typescript)
- https://dev.to/ngduc/how-to-create-an-ui-app-using-rails-react-typescript-jest-4hm0
