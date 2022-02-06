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

## How to use this template?

- Folk this repo
- Clone the repo down to your machine [How?](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone)
- Install and switch your Ruby version to align with `.ruby-version`
- Install and switch your Node version to align with `.nvmrc`
- Run `yarn` and `bundle` to install all packages and gems
- Regenerate master key and new credentials file with the following steps
  - Remove `config/credentials.yml.env` file
  - Run `EDITOR=nano rails credentials:edit` to regenerate a new credentials file and `master.key`
- Change application's name in the following files
  - `app/views/layouts/application.html.erb`
  - `package.json`
  - `config/database.yml` - development, production and test database name
- Setup database with `bundle exec rails db:setup`

## Useful guides

- How to set environment variables? [Here](https://medium.com/cedarcode/rails-5-2-credentials-9b3324851336)

## References:

- [Henry's Typescript React Template](https://github.com/exploratortech/Template-with-React-StyledComponents-Typescript)
- https://dev.to/ngduc/how-to-create-an-ui-app-using-rails-react-typescript-jest-4hm0
