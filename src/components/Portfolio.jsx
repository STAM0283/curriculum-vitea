import React from 'react';
import net_movie from "../images/net_movie.png";
import calculator from "../images/calculator.png";
import list_game from "../images/list_game.png";
import Quiz from "../images/Quiz.png";
import big_quiz from "../images/big_quiz.png";
import right_price from "../images/right_price.png";
import site_vitrine from "../images/site_vitrine.png";
import citations from "../images/citations.png";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolio1">
                <img src={net_movie} alt="picture_portfolio" />
                <br />
                <a href="https://play-list-movies.netlify.app" target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-primary">Net Movie
                    </button></a>
            </div>

            <div><img src={list_game} alt="picture_portfolio" /><br />
                <a href="https://games-list.netlify.app" target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-primary">Game List
            </button></a>
            </div>
            <div><img src={Quiz} alt="picture_portfolio" /><br />
                <a href="https://wildcodeschool.github.io/Lyon-js-202005-project-quizz/" target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-primary">Quiz Game
            </button>
                </a>
            </div>
            <div><img src={big_quiz} alt="picture_portfolio" /><br />
            <a href="https://the-big-quiz.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-primary">The Big Quiz
            </button>
                </a>
            </div>
            <div><img src={right_price} alt="picture_portfolio" /><br />
                <a href="https://le-juste-prix-game.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-primary">Right Price Game</button>
                </a>
            </div>
            <div><img src={calculator} alt="picture_portfolio" /><br />
                <a href="https://calculator-math.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-primary">Calculator
            </button>
                </a></div>
            <div><img src={site_vitrine} alt="picture_portfolio" /><br />
                <a href="https://travel-agency69.netlify.app/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-primary">showcase site
            </button></a></div>
            <div><img src={citations} alt="picture_portfolio" /><br />
                <a href="https://the-best-quotes.netlify.app" target="_blank" rel="noopener noreferrer" >
                    <button type="button" className="btn btn-primary">
quote generator
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Portfolio;

