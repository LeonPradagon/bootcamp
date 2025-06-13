# Campus Club Finder - Documentation

This document provides a comprehensive walkthrough of the Campus Club Finder application, explaining how it works and showcasing its features with screenshots.

## Table of Contents

1. [Initial State](#initial-state)
2. [Home Page](#home-page)
3. [Club List Page](#club-list-page)
   - [Grid View](#grid-view)
   - [List View](#list-view)
   - [Sorting](#sorting)
4. [Club Detail Page](#club-detail-page)
   - [Joining a Club](#joining-a-club)
5. [About Page](#about-page)
6. [404 Not Found Page](#404-not-found-page)
7. [Responsive Design](#responsive-design)
8. [Data Persistence](#data-persistence)

## Initial State

When a user first visits the Campus Club Finder application, they are presented with the Home page. The application starts with 5 default student clubs stored in the `src/data/clubs.js` file. No clubs are joined initially, and this state is stored in localStorage.

## Home Page

The Home page (`/`) serves as the landing page for the application. It features:

- A hero section with a welcoming message and a call-to-action button
- A brief description of what the application does
- Three feature cards explaining the core functionality
- A prominent "Browse All Clubs" button

![Home Page](screenshots/home-page.png)

## Club List Page

The Club List page (`/clubs`) displays all available clubs. Users can:

- View clubs in either grid or list view
- Sort clubs by name in ascending (A-Z) or descending (Z-A) order

### Grid View

The default view is Grid View, which displays clubs as cards in a grid layout.

![Club List - Grid View](screenshots/club-list-grid.png)

### List View

Users can switch to List View, which displays clubs in a vertical list.

![Club List - List View](screenshots/club-list-list.png)

### Sorting

Users can sort clubs by name in either ascending (A-Z) or descending (Z-A) order using the dropdown menu.

![Club List - Sorting](screenshots/club-list-sorting.png)

## Club Detail Page

The Club Detail page (`/clubs/:clubId`) provides detailed information about a specific club:

- Club name and image
- Full description
- List of upcoming events
- Option to join the club

![Club Detail Page](screenshots/club-detail.png)

### Joining a Club

When a user clicks the "Join Club" button:

1. The club is added to the user's joined clubs in localStorage
2. The button is replaced with a confirmation message
3. A temporary notification appears confirming the action

![Club Detail - Joined](screenshots/club-detail-joined.png)

## About Page

The About page (`/about`) provides information about the application:

- The mission of Campus Club Finder
- How the application works
- The technology stack used to build it

![About Page](screenshots/about-page.png)

## 404 Not Found Page

If a user navigates to a non-existent route, they are presented with a custom 404 Not Found page.

![404 Page](screenshots/404-page.png)

## Responsive Design

The application is fully responsive and works well on mobile, tablet, and desktop devices.

### Mobile View

![Mobile View](screenshots/mobile-view.png)

### Tablet View

![Tablet View](screenshots/tablet-view.png)

### Desktop View

![Desktop View](screenshots/desktop-view.png)

## Data Persistence

The application uses localStorage to persist the list of clubs that a user has joined. This ensures that:

1. When a user joins a club, this information is saved even if they refresh the page or close the browser
2. When a user returns to a club they've already joined, they see the "You have joined this club!" message instead of the "Join Club" button

The localStorage implementation can be found in the `src/hooks/useLocalStorage.js` custom hook.
