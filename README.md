# React App - Travlr

## Project Pitch:
The aim of our web application is to alleviate the struggle of planning trips with large groups of people. This application will allow users to create an account and log in to see all vacations they are participating in. Users can create new vacation plans and select other users that are able to participate in planning that specific vacation. Within those vacations, they can see other users that are also participating. Each user will be able to add options for potential lodging, food places and activities the group can decide to include in their trip. Each user may vote on their favorite options. The estimated cost for the highest voted options will be compared to the estimated budget for the entire trip -- This information will be displayed for all users within the vacation to see.

### Framework/Mockup (backend):
![backend](https://i.ibb.co/d05Dt9f/Backend-Mockup.png)

### Framework/Mockup (frontend):
![frontend1](https://i.ibb.co/zVFVjHH/Travlr-1.png)
![frontend2](https://i.ibb.co/0XR0MFV/Travlr-2.png)
![frontend3](https://i.ibb.co/zRkHM07/Travlr-3.png)
![frontend4](https://i.ibb.co/zn9Xgbt/Travlr-4.png)
![frontend5](https://i.ibb.co/2jqMTf9/Travlr-5.png)
![frontend6](https://i.ibb.co/nrqHfXh/Travlr-6.png)
![frontend7](https://i.ibb.co/HCKBbWw/Travlr-7.png)

## User Stories:
As a user, I should be able to:
- Create a new account (CREATE)
- Log in to & Log out of an account
- View all vacation plans user is part of (READ)
- Create new vacation plans (CREATE)
- Delete any vacation plan user itself created (DELETE)
- See all people who are in each vacation planning group (READ)
- Add user to already existing vacation planning groups (CREATE)
- Remove user (itself, not other users) from a vacation it is a part of (DELETE)
- See all Lodging, Food and Activity options my group is considering (READ)
- Add new Lodging, Food and Activity options to a vacation that user is part of (CREATE)
- Edit info for any option (Lodging, Food, Activity) user created previously (UPDATE)
- Delete any option user created previously (DELETE)
- Vote for the options user would like to have happen during the trip (UPDATE)
- See what options other users within the vacation planning group have voted on (READ)
- Change user’s votes for options (UPDATE)
- See options that have the highest votes show at the top of each list (a list each for Lodging, Food and Activities)
- See the estimated budget for the vacation compared to the estimated cost of the options with the highest votes


## Project Requirements:
For this project, you must:

    ☑ Use a Rails API backend with a React frontend.
    ☑ Have at least two models with a one-to-many relationship on the backend, with full CRUD actions for at least one resource. (More than two related models is also fine — if you need three models and a many-to-many relationship, go for it!).
      Relationships:
        - One-to-many: Vacation ⇒ Lodging Options
        - One-to-many: Vacation ⇒ Food Options
        - One-to-many: Vacation ⇒ Activity Options
        - Many-to-many: Vacations ⇒ Users
      CRUD Actions:
        - Vacations: CREATE, READ, UPDATE, DESTROY
        - Lodgings: CREATE, READ, UPDATE, DESTROY
        - Foods: CREATE, READ, UPDATE, DESTROY
        - Activities: CREATE, READ, UPDATE, DESTROY
        - Users: CREATE, UPDATE
        - Vacation_Users (join table): CREATE
    ☑ Have at least two different client-side routes using React Router
        - See frontend mockup
    ☑ Build a separate React frontend application that interacts with the API to perform CRUD actions.
    ☑ Use good OO design patterns. You should have separate classes for each of your models, and create instance - and class methods as necessary.


## Bonus Deliverables:
As a user, it would be nice to be able to:
- Reset my password if it has been forgotten
- Select which options (Lodging, Food, Activity) have been decided on for the vacation (UPDATE)
- See calendar render on page with time blocks for each selected option (i.e. check in/check out for lodging, planned time for specific food/activity, etc.) (READ)
- See itinerary of planned options (Lodging, Food and Activities) (READ)
- See countdown leading up to Vacation
- Have criteria for users to be added to an existing vacation (i.e. another user needs to approve their request to join, email is sent inviting a new user, password required for a new user to join the existing vacation, etc.)
- llow users to opt in  or out of certain options when it does not plan to participate in that option
- Have estimated cost of vacation divided by attendees so each knows how much it might cost
- Have the estimated cost be adjusted based on which users will be participating in each option











-----

# Project Template: React/Rails API

## Description

This project is scaffolded so that you can build a React frontend and Rails
backend together, and easily deploy them to Heroku.

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql

See Environment Setup below for instructions on installing these tools if you
don't already have them.

## Setup

Start by **cloning** (not forking) the project template repository and removing
the remote:

```console
$ git clone git@github.com:learn-co-curriculum/project-template-react-rails-api.git your-project-name
$ cd your-project-name
$ git remote rm origin
```

Then, [create a new remote repository][create repo] on GitHub. Head to
[github.com](https://github.com) and click the **+** icon in the top-right
corner and follow the steps to create a new repository. **Important**: don't
check any of the options such as 'Add a README file', 'Add a .gitignore file',
etc — since you're importing an existing repository, creating any of those files
on GitHub will cause issues.

[create repo]: https://docs.github.com/en/github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line#adding-a-project-to-github-without-github-cli

If you're working with a partner,
[add them as a collaborator][add collaborator] on GitHub. From your repo on
GitHub, go to Settings > Manage Access > Invite a collaborator and enter your
partner's username. Once your partner has access, they should git **clone** (not
fork) the repository.

[add collaborator]: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository

Finally, connect the GitHub remote repository to your local repository and push
up your code:

```console
$ git remote add origin git@github.com:your-username/your-project-name.git
$ git push -u origin main
```

When you're ready to start building your project, run:

```sh
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

Make sure to also update this README to include documentation about
your project. Here's a list of some [awesome readmes][] for inspiration.

[awesome readmes]: https://github.com/matiassingers/awesome-readme

## Deploying

This application has all the starter code needed to help you deploy your
application to Heroku. It's recommended to deploy your project early and push up
changes often to ensure that your code works equally well in production and
development environments.

If you've already set up your environment to deploy to Heroku, you can run the
commands below to deploy your application. If not, make sure to check out the
Environment Setup section below.

To deploy, first log in to your Heroku account using the Heroku CLI:

```sh
heroku login
```

Create the new Heroku app:

```sh
heroku create my-app-name
```

Add the buildpacks for Heroku to build the React app on Node and run the Rails
app on Ruby:

```sh
heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/ruby --index 2
```

To deploy, commit your code and push the changes to Heroku:

```sh
git add .
git commit -m 'Commit message'
git push heroku main
```

> Note: depending on your Git configuration, your default branch might be named
> `master` or `main`. You can verify which by running
> `git branch --show-current`. If it's `master`, you'll need to run
> `git push heroku master` instead.

Any time you have changes to deploy, just make sure your changes are committed
on the main branch of your repo, and push those changes to Heroku to deploy
them.

You can view your deployed app with:

```sh
heroku open
```

## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```sh
ruby -v
```

Make sure that the Ruby version you're running is listed in the [supported
runtimes][] by Heroku. At the time of writing, supported versions are 2.6.8,
2.7.4, or 3.0.2. Our recommendation is 2.7.4, but make sure to check the site
for the latest supported versions.

If it's not, you can use `rvm` to install a newer version of Ruby:

```sh
rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```sh
gem install bundler
gem install rails
```

[supported runtimes]: https://devcenter.heroku.com/articles/ruby-support#supported-runtimes

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```

### Sign Up for a [Heroku Account][heroku signup]

You can sign up at for a free account at
[https://signup.heroku.com/devcenter][heroku signup].

### Download the [Heroku CLI][heroku cli] Application

Download the Heroku CLI. For OSX users, you can use Homebrew:

```sh
brew tap heroku/brew && brew install heroku
```

For WSL users, run this command in the Ubuntu terminal:

```sh
curl https://cli-assets.heroku.com/install.sh | sh
```

If you run into issues installing, check out the [Heroku CLI][heroku cli]
downloads page for more options.

After downloading, you can login via the CLI in the terminal:

```sh
heroku login
```

This will open a browser window to log you into your Heroku account. After
logging in, close the browser window and return to the terminal. You can run
`heroku whoami` in the terminal to verify that you have logged in successfully.

[heroku signup]: https://signup.heroku.com/devcenter
[heroku cli]: https://devcenter.heroku.com/articles/heroku-cli#download-and-install

### Install Postgresql

Heroku requires that you use PostgreSQL for your database instead of SQLite.
PostgreSQL (or just Postgres for short) is an advanced database management
system with more features than SQLite. If you don't already have it installed,
you'll need to set it up.

#### PostgreSQL Installation for WSL

To install Postgres for WSL, run the following commands from your Ubuntu terminal:

```sh
sudo apt update
sudo apt install postgresql postgresql-contrib libpq-dev
```

Then confirm that Postgres was installed successfully:

```sh
psql --version
```

Run this command to start the Postgres service:

```sh
sudo service postgresql start
```

Finally, you'll also need to create a database user so that you are able to
connect to the database from Rails. First, check what your operating system
username is:

```sh
whoami
```

If your username is "ian", for example, you'd need to create a Postgres user
with that same name. To do so, run this command to open the Postgres CLI:

```sh
sudo -u postgres -i
```

From the Postgres CLI, run this command (replacing "ian" with your username):

```sh
createuser -sr ian
```

Then enter `control + d` or type `logout` to exit.

[This guide][postgresql wsl] has more info on setting up Postgres on WSL if you
get stuck.

[postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql

#### Postgresql Installation for OSX

To install Postgres for OSX, you can use Homebrew:

```sh
brew install postgresql
```

Once Postgres has been installed, run this command to start the Postgres
service:

```sh
brew services start postgresql
```

## Troubleshooting

If you ran into any errors along the way, here are some things you can try to
troubleshoot:

- If you're on a Mac and got a server connection error when you tried to run
  `rails db:create`, one option for solving this problem for Mac users is to
  install the Postgres app. To do this, first uninstall `postgresql` by running
  `brew remove postgresql`. Next, download the app from the
  [Postgres downloads page][postgres downloads page] and install it. Launch the
  app and click "Initialize" to create a new server. You should now be able to
  run `rails db:create`.

- If you're using WSL and got the following error running `rails db:create`:

  ```txt
  PG::ConnectionBad: FATAL:  role "yourusername" does not exist
  ```

  The issue is that you did not create a role in Postgres for the default user
  account. Check [this video](https://www.youtube.com/watch?v=bQC5izDzOgE) for
  one possible fix.

- If your app failed to deploy at the build stage, make sure your local
  environment is set up correctly by following the steps at the beginning of
  this lesson. Check that you have the latest versions of Ruby and Bundler, and
  ensure that Postgresql was installed successfully.

- If you deployed successfully, but you ran into issues when you visited the
  site, make sure you migrated and seeded the database. Also, make sure that
  your application works locally and try to debug any issues on your local
  machine before re-deploying. You can also check the logs on the server by
  running `heroku logs`.

For additional support, check out these guides on Heroku:

- [Deploying a Rails 6 App to Heroku][heroku rails deploying guide]
- [Rails Troubleshooting on Heroku][troubleshooting guide on heroku]

[postgres downloads page]: https://postgresapp.com/downloads.html
[heroku rails deploying guide]: https://devcenter.heroku.com/articles/getting-started-with-rails6
[troubleshooting guide on heroku]: https://devcenter.heroku.com/articles/getting-started-with-rails6#troubleshooting
