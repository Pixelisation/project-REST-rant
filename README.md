# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Method | Path | Purpose |
|--------|:------:|---------:|
| GET | / | Home page |
| GET | /places | Places index page |
| POST | /places | Create new places |
| GET | /Places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place|
| POST | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantid | Delete a rant (comment) about a particular place  |
| GET | * | 404 page(matches any route not defined above)|