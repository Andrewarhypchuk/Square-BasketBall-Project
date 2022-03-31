# Square-BasketBall-Project
This is a table with selectable cells and rows. The table consists of 3 columns with 3 rows. Every cell by default has a white background color. Every cell has the text “Cell” inside. The table has one special cell with the text inside “Special cell”. The table follows the next functionality:
- If you click on some cell, the background color on this cell should toggle to yellow.
- If you click on a cell in the first column the row of the selected cell should toggle background color to blue. Note: if in this row you select some other cell with the color yellow, the color of this row should not be changed.
- If you click on a special cell, the background color on the whole table and cells, that were not selected should toggle to yellow.
- Priority of colors:
1. Yellow
2. Blue
3. Green


2. This is a basketball court with a moving ball and scoreboard. The court size is 600x330px.
The size of the ball is 40x40px. By default, the ball position is at the center of the court. Below the
basketball court  is a scoreboard with the current score of team A and team B. If you click
somewhere on the court the ball goes to that position. There is a basketball backboard with the
hoop on each side of the court. A scoring zone is (15x15px). If you click on
that zone,a custom event dispatches, that handled by notification. The scoreboard
shows a notification message, with the team, that scores that goal and change the current
score. After the 3 seconds, notifications  fades away.
