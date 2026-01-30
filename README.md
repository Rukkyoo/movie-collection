# GenreBoxxd - Movie Collection App

A responsive web application for exploring and filtering movies by genre. GenreBoxxd provides an intuitive interface to browse a curated collection of movies with details including title, year, genre, and plot information.

---

## Table of Contents

- [Project Setup Instructions](#project-setup-instructions)
- [Available CLI Commands](#available-cli-commands)
- [Git Workflow Steps](#git-workflow-steps)
- [Some Workflow Challenges Faced, Solutions and Lessons Learnt](#Some-Workflow-Challenges-Faced-Solutions-and-Lessons-Learnt)
- [Feature List and Implementation Details](#feature-list-and-implementation-details)
- [Team Member Contributions](#team-member-contributions)
- [Lessons Learnt from Collaboration](#lessons-learnt-from-collaboration)

---

## Project Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- Git
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone <https://github.com/Rukkyoo/movie-collection.git>
   cd movie-collection
   ```

2. **Run the Application**
   - **Option 1: Using a Local Server**

     ```bash
     npx http-server
     ```

     Then open `http://localhost:8080` in your browser

   - **Option 2: Using Live Server**
     Install and use Live Server by clicking on the `Go Live` button that the extension provides on the bottom of the screen.

3. **Project Structure**
   ```
   movie-collection/
   ├── index.html           # Main HTML file with genre buttons and movie container
   ├── css/
   │   └── styles.css       # Styling for layout, cards, and components
   ├── js/
   │   ├── app.js          # Main application logic and event handlers
   │   └── data/
   │       └── movies.json # Movie database with details
   └── images/
       ├── screenshots/
       │          └── *.png     # Screenshots of Terminal Commands used
       └── *.png           # Movie poster images
   ```

---

## Available CLI Commands

### Git Commands Used in Project

| Command                   | Usage                             |
| ------------------------- | --------------------------------- |
| `git clone`               | Clone the repository              |
| `git checkout -b`         | Swirch between branches           |
| `git add`                 | Stage changes for commit          |
| `git commit -m "message"` | Commit staged changes             |
| `git push`                | Push commits to remote repository |
| `git pull`                | Fetch and merge remote changes    |
| `git merge`               | Merge branches locally            |

---

## Git Workflow Steps

### Standard Development Workflow Used for this Assignment

1. **Create a Feature Branch**

   ```bash/powershell/wsl
   git checkout -b feature/feature-name
   ```

2. **Make Changes**
   - Edit files as needed
   - Test changes locally

3. **Stage and Commit Changes**

   ```bash/powershell/wsl
   git add .
   git commit -m "descriptive commit message"
   ```

4. **Push to Remote**

   ```bash/powershell/wsl
   git push origin feature/feature-name
   ```

5. **Create Pull Request**
   - Navigate to the repository on GitHub
   - Create a pull request from the feature branch to `development`
   - Request code review from team member (Genevieve/Michael)

6. **Merge to Development**
   - Once approved and tests pass
   - Merge PR to `development` branch
   - Delete feature branch after merge

7. **Merge to Main**
   - When release is ready, merge `development` to `main`
   - Tag the release with version number

### Branch Structure

- **main**: Production-ready code
- **development**: Integration branch for features
- **feature/\***: Individual feature branches

---

## Some Workflow Challenges Faced, Solutions and Lessons Learnt

### Challenge 1: **Coordinating Work on Different Features**

- **Challenge**: Multiple collaborators working on different features (data, UI, styling) simultaneously caused potential for merge conflicts
- **Solution**: Adopted a strict feature branching strategy with clear naming conventions and frequent communication via PR reviews
- **Lesson**: Regular syncing and early PRs prevent large merge conflicts from accumulating

### Challenge 2: **Image and Asset Management**

- **Challenge**: Coordinating poster images and ensuring proper paths in JSON data file across team members' environments
- **Solution**: Centralized image folder structure and relative paths in JSON, with clear file naming conventions
- **Lesson**: Asset management strategy is as important as code management

### Challenge 3: **Communication and Attention to Detail**

- **Challenge**: Small details (typos, missing properties, incorrect paths) could break the application silently
- **Solution**: Thorough testing before pushing, detailed commit messages, and peer review before merge
- **Lesson**: Communication and carefulness are critical; tiny details matter

### Challenge 4: **Understanding Feature Requirements**

- **Challenge**: Initial unclear requirements for filtering logic and card rendering led to rework
- **Solution**: Clear discussions early on, written specifications for each feature, and iterative feedback through PRs
- **Lesson**: Invest time upfront in requirements and communicate expectations clearly

### Key Takeaways

✓ Communication is key - explicit and frequent communication prevents misunderstandings  
✓ Collaboration is a learning experience - each team member brought different skills and perspectives  
✓ Small details have big impact - attention to detail in code and workflow prevents major issues  
✓ Process matters - structured workflow (branching, PRs, testing) scales better than ad-hoc collaboration

---

## Feature List and Implementation Details

### 1. **Movie Data Management**

- **File**: `js/data/movies.json`
- **Details**:
  - Comprehensive movie database with 10+ movies
  - Each movie includes: Title, Year, Genre, Plot, Director, Cast, Rating, and poster image path
  - JSON format for easy parsing and expansion
- **Implementation**: Data imported using ES6 module syntax with JSON assertion

### 2. **Genre-Based Filtering**

- **File**: `js/app.js`
- **Features**:
  - Filter movies by 11 different genres
  - "All genres" button displays the complete movie collection
  - Case-sensitive genre matching with include() method
  - Empty state message when no movies match selected genre
- **Implementation**:
  ```javascript
  - filterMovieGenre() function handles filter logic
  - Event listeners attached to genre buttons
  - Movies.filter() method for genre matching
  ```

### 3. **Movie Card Rendering**

- **File**: `js/app.js`
- **Features**:
  - Dynamic card generation from JSON data
  - Displays movie poster, title, year, genre, and plot
  - Responsive card layout with CSS Grid
  - Poster images with alt text for accessibility
- **Implementation**:
  ```javascript
  - renderMovies() function creates HTML cards
  - Array.map() to transform movie objects into DOM elements
  - Template literals for clean HTML generation
  ```

### 4. **Responsive User Interface**

- **File**: `css/styles.css`
- **Features**:
  - Modern, clean design with light color scheme (#fafafc background)
  - Genre button tabs with hover states
  - Flexible layout using Flexbox
  - Mobile-responsive design
  - Custom styling for movie cards with shadows and borders
- **Color Scheme**:
  - Primary Background: #fafafc
  - Button Borders: #f0f0f2
  - Interactive Elements: White buttons with border highlights

### 5. **Header and Footer**

- Static branding with GenreBoxxd title
- Copyright footer with year indicator
- Professional layout structure

### Available Genres

- All genres
- Action
- Adventure
- Fantasy
- Horror
- Romance
- Sci-Fi
- Drama
- Thriller
- Comedy
- History

---

## Team Member Contributions

### Team Members

1. **Michael Rukevwe Omonedo** (Rukky Omonedo)
   - **Role**: Repository Owner
   - **Contributions**:
     - Initial project structure setup
     - HTML structure implementation
     - Genre selector and basic styling
     - Movie data JSON file creation
     - Bug fixes and feature refinements
   - **Key Commits**:
     - Initial project structure
     - Add basic styling for genre selector
     - Setup movies.json with movie data

2. **Genevieve Agugua** (genevieveagugua)
   - **Role**: Collaborating Developer
   - **Contributions**:
     - Image management and poster implementation
     - HTML structure improvements
     - CSS styling refinements
     - Movie card rendering and filtering logic
     - Code review and collaboration support
     - Pull request review and approval
   - **Key Commits**:
     - Add images to image folder and movie posters
     - Implement movie card rendering and genre filter
     - Improve html structure and css styling for movie card rendering

## General Lessons Learnt from Collaboration

### 1. **Branching Strategy is Essential**

- **Lesson**: Using feature branches for each new feature prevented conflicts and made code reviews easier
- **Implementation**: Adopted a clear naming convention (feature/feature-name) that made it easy to identify the purpose of each branch
- **Benefit**: Team members could work on different features simultaneously without stepping on each other's toes

### 2. **Pull Requests Enable Better Code Quality**

- **Lesson**: Requiring pull request reviews before merging to development ensured code consistency and caught issues early
- **Implementation**: Set up PR workflow with mandatory approvals
- **Benefit**: Reduced bugs in production and shared knowledge across the team

### 3. **Commit Messages Matter**

- **Lesson**: Clear, descriptive commit messages make it easier to track project history and understand changes
- **Example**: "Implement movie card rendering and genre filter" is more helpful than "update js"
- **Benefit**: Easier debugging and understanding code evolution through git history

### 4. **JSON Data Structure Flexibility**

- **Lesson**: Choosing the right data structure (JSON) made adding new movies and fields straightforward
- **Implementation**: Maintained consistent movie object properties across the dataset
- **Benefit**: Simplified feature additions and future expansion of the movie database

### 5. **CSS Organization**

- **Lesson**: Organizing CSS with clear class naming conventions (BEM-like naming) and comments improves maintainability
- **Implementation**: Used descriptive class names like `.movie-genre-btn`, `.movie-card`, `.movie-poster`
- **Benefit**: Collaborators could quickly understand styling without extensive documentation

### 6. **Testing Throughout Development**

- **Lesson**: Regular testing across browsers and devices during development prevented last-minute bugs
- **Implementation**: Each feature was tested locally before pushing to remote
- **Benefit**: Fewer bugs reaching the development branch

### 7. **Documentation and Accessibility**

- **Lesson**: Adding alt text to images and using semantic HTML improved both accessibility and SEO
- **Implementation**: All images include descriptive alt attributes
- **Benefit**: Better user experience for all users, including those using screen readers

### 8. **Merge Conflicts and Conflict Resolution**

- **Lesson**: Frequent pulls from development branch and early merges reduced merge conflicts
- **Implementation**: Team members pulled latest changes frequently and reviewed changes before merging
- **Benefit**: Smoother integration and fewer time-consuming conflict resolutions

### 9. **Division of Work**

- **Lesson**: Clear task assignment and parallel development accelerated project completion
- **Implementation**: One team member worked on data while another handled UI/styling
- **Benefit**: Reduced bottlenecks and faster overall delivery

## Collaborator Specific Lessons Learnt from Collaboration

### **Genevieve**

- Stop panicking
- Be very cautious because tiny details can ruin the work in progress
- Have very strong internet connectivity

### **Michael**

- Communication is key. Using the famous Nigerian pidgin phrase, "no take am play"
- Collaboration of any scale or kind is always a learning experience for all parties involved
