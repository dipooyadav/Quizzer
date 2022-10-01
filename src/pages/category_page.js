let categoryPage = `
    <div id="main_card">
        
        <h2 id="form-signin-heading">Select Categories</h2>
        <div id="category_outer_div">
            <div id="body_div">
                <div class="form__group field">
                    <label for="questions_numbers" class="form__label">Number of Questions</label>
                    <input type="text" class="form__field" value="10" id='number_of_questions' min="10" max="50" required>
                    
                </div>
            </div>


            <div>
                <h2>Category Select</h2>
                <select name="trivia_category" value='0' id="category">
                    <option value="0">Random</option>
                    <option value="9">General Knowledge</option><option value="10">Entertainment: Books</option><option value="11">Entertainment: Film</option><option value="12">Entertainment: Music</option><option value="13">Entertainment: Musicals &amp; Theatres</option><option value="14">Entertainment: Television</option><option value="15">Entertainment: Video Games</option><option value="16">Entertainment: Board Games</option><option value="17">Science &amp; Nature</option><option value="18">Science: Computers</option><option value="19">Science: Mathematics</option><option value="20">Mythology</option><option value="21">Sports</option><option value="22">Geography</option><option value="23">History</option><option value="24">Politics</option><option value="25">Art</option><option value="26">Celebrities</option><option value="27">Animals</option><option value="28">Vehicles</option><option value="29">Entertainment: Comics</option><option value="30">Science: Gadgets</option><option value="31">Entertainment: Japanese Anime &amp; Manga</option><option value="32">Entertainment: Cartoon &amp; Animations</option>		
                </select>
            </div>


            <div>
                <h2>Select Difficulty</h2>
                <select name="trivia_difficulty" value="easy" id="difficulty">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
        </div>
        <div id="loading" >
            <p>Loading..</p>
        </div>
        <div id="start_game"><h2 id="start_button">Start Game</h2></div>
    </div>
    
`

export{
    categoryPage
}