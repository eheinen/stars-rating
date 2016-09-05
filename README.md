# Stars Rating Plugin

That is a simple plugin to use in HTML files to get a rating by stars.

## How to use
  - First of all, download the zip or get the repository;
  - In your html add this code to include the stars automatically:
  ```
  <div class="stars-rating-container" data-starsfull="1" data-starsempty="4"></div>
  ```
  In the dataset data-starsfull you will fill how many yellow stars you want and in the data-starsempty you will informe how many empty stars you want.
  
  - If you prefer to get the HTML but use of another way, just call the function:
  ```
  getStars(1, 4)
  ```
  1 is the yellow stars and 4 is the empty stars
