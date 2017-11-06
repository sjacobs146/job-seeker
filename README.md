
# Job Seeker

This app allows users to track job opportunities. It's an Ember client using
a Ruby-on-Rails server

[Click Here for demo](https://sjacobs146.github.io/job-seeker/)

API URL:  https://job-seeker-api.herokuapp.com

# Technologies Used
- HTML5
- CSS
- JavaScript
- Ember
- Bootstrap
- Handlebars

# My Planning process
I began my planning by reading the project requirements, and creating wireframes.
Then I created some user stories, and an [agile board](https://trello.com/b/7amUjo1E/capstone-project) to represent the tasks that needed to be accomplished. Once I decided to use Ember, I planned out my routes and
components as well.

# User Stories and Wireframes
## User Stories
- As a User, I want to save Company Name and Job Titles that I want to apply for so that I can track my job search progress.
- As a User, I want to save the URL of the job opening, if applicable, so I can see the details and apply.
- As a User, I want to save the date that I applied for a job so I can tell whether I applied or not.
- As a User I want to save the name, phone number, and email address of the Recruiter so that I know whom my contact is at the company.
- As a User I want to know whether an offer was made or not
- As a User I want to know whether I’ve accepted a job offer or not.

## Wire Frames
![Wireframe 1](/docs/JobSeekerWireframes1.jpg)

![Wireframe 2](/docs/JobSeekerWireframe2.jpg)

# Ember Design
## Routes
jobs
jobs-new {path: 'jobs/new'}
job {path: 'jobs/:job_id}
jobs-edit {path: 'jobs/:job_id/edit}

## Components
![Ember Components](/docs/EmberComponents.jpg)

# My Development Process
I started by implementing the List Jobs route, then added Delete. Then I
started Create.  I already planned to have a component to enter Job information
that would be shared between Create and Update, but I did not create that
component when I implemented Create. I wanted to get the basics working, and I
decided to implement the job-input component when I did the Update. After Create
I implemented the Show Job route, then I moved on to Update.

I spent a *lot* of time on Update. I created the job-input component and copied
the form fields from Create into it. While working on Update, I did all the
formatting and the work to make the date and the Status dropdown functional. The
Status dropdown was particularly challenging because Ember does not have a
build in dropdown helper. I did find an addon (emberx-select) that looked
promising, but at I couldn't get it working because I didn't realize that I
needed to restart my ember server every time I installed an addon, so I
just used a plain, old html select element instead. I also installed the
ember-truth-helpers addon so I could determine which item in the dropdown
should be selected on Update.  Once the Update was working (and looking) the
way I wanted it to, I moved on to refactoring create.

Refactoring Create really brought home the power of Components to me. It
took me literally 5 minutes to take out my old form, and drop in the job-input
component. It just worked, and going forward, any changes that I needed to make
to the component immediately applied to Update and Create.  While I was working
on Update, I created another component that I didn't initially plan on. When
I was formatting the text input fields, I started to copy/paste the divs
with the classes I needed on each input field. Right away I realized that I
could create a text-input component which made my job-input template much
simpler and easier to read.

# A Message for my Colleagues
