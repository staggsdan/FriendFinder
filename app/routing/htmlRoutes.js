3. Your `htmlRoutes.js` file should include two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.
   * 

// Routes
// ===========================================================
app.get("/", function(req, res) {
    res.send("Welcome to the Star Wars Page!");
  });
  
  app.get("/survey", function(req, res) {
    res.json(yoda);
  });