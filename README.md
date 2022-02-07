# Ruby on Rails, Typescript React template

Internal project template for ExploratorLabs.
This template is built with the following features, tools, and frameworks

- [Node 16.13.0](https://nodejs.org/en/about/)
- [Ruby 2.7.2](https://www.ruby-lang.org/en/)
- [Ruby on Rails 6.1.4](https://rubyonrails.org/)
- [React 17.0.2](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [MobX](https://mobx.js.org/README.html)
- Remove [Turbolinks](https://github.com/turbolinks/turbolinks)
- [Scss](https://sass-lang.com/documentation/syntax) for styling `erb` files
- [Styled component](https://github.com/styled-components/styled-components) on React components

# Content

- [Start with this template](#how-to-start-with-this-template)
- [Setup development environment](#how-to-setup-development-environment)
- Development related
  - [Create a React component](#how-to-create-a-react-component-best-practices)
  - [Set environment variables](https://medium.com/cedarcode/rails-5-2-credentials-9b3324851336)
- [Reference](#references)

## How to start with this template

- If you want to start a new repo from this template, click on the **Use this template** button [How?](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository)
- If you want to contribute to this template, continue to the next step

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

## How to create a React component (Best practices)

We would like to separate the React components into View (`.tsx`) and Controller(`...UI.ts`) both by file and logically. We want to let the view file to handle as little logic as possible, while controller knows about the view as little as possible. That way we can ensure the maintainability of that component.

### In-page component [Ref](https://github.com/reactjs/react-rails/blob/master/README.md#4-generate-your-first-component)

In-page component is React component that is being mounted inside an `erb` page, as oppose to page component.

Each component must have a MobX store which handle most of the logic of that component (e.g. onClick func, dynamic content, state, etc).

If the number of styled component is more than 15, consider moving them to a separating them to a new file call `UIComponents.tsx`

Sample component: `app/javascript/components/BigRedButton` , `app/views/home/landing.html.erb`

1. Create a new folder `ComponentName` under `app/javascript/components`
1. Create a component file `index.tsx` in that folder
1. Create a MobX store file `ComponentNameUI.tx` in that folder
1. Attach the react component in `erb` file with `<%= react_component("ComponentName", { prop1: "Something", prop2: "Interesting" }) %>`

### Page component [Ref](https://github.com/reactjs/react-rails/blob/master/README.md#controller-actions)

Page component is React component that is intended to be rendered as a page or controller action directly.

## References:

- [Henry's Typescript React Template](https://github.com/exploratortech/Template-with-React-StyledComponents-Typescript)
- https://dev.to/ngduc/how-to-create-an-ui-app-using-rails-react-typescript-jest-4hm0
