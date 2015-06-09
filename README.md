# excel-js

A 4 hour interview exercise with the following brief:

We'd like you to do a small coding exercise in javascript and HTML. The goal is to create
a mini spreadsheet that looks and works like Excel. What we'd like you to do is work
through the following steps and do as much as possible in around 4 hours (take longer if
you want, but we don't expect you to). We don't expect you to finish, but we would like to
see how you approach the problem, how you went about learning new things, how you
would solve the problem if you had time and we want to see as much working code as
possible!

	1. Create index.html in your favourite text editor. It should load and use the jquery
	javascript library which you should make use of in your code. Your javascript can either
	be in a separate .js file, or it can be contained in the index.html page
	2. When loading index.html into chrome or firefox, it should draw a 100x100 grid of cells,
	with columns labelled A­Z, AA, AB, AC, etc and rows numbered 1 to 100
	3. When you click in a cell and enter a number, it should store the number in a javascript
	object (note: this would be lost when you refresh the page)
	4. Have a refresh button that redraws the grid (without refreshing the page) and inserts
	data into cells where you've saved it
	5. Add support for some basic formulas. For example if you enter "=A1+A2" into A3 it
	should calculate the sum of these two cells and display the result in A3. Updating A1
	would update A3.
	6. Add support for some basic functions. For example if you enter "=sum(A1:A10)" into
	A11, then it should calculate the sum of all cells in the range and display the result in
	A11. Updating any value in the range would recalculate A11
	7. Add support for formatting, for example bold, italics and underline

As I said, you won't get all of this done and that's ok. We're interested in your approach
and planning as well as seeing some working code which we would like you to walk us
through.