import React from 'react'
import './index.css';

function Cards() {
    return (
        <>
        <div class = "outer">
            <div class = "post">
                <img src="https://i0.wp.com/pilebythebed.com/wp-content/uploads/2020/12/The-Queens-Gambit-Poster.jpg?resize=426%2C597" alt="Series1" />
            </div>

            <div class = "name">
                <h3>The Queen's Gambit</h3>
            </div>

            <div class = "watch">
                <a href="https://www.netflix.com/in/title/80234304">
                    <button class="btn">Watch Now</button>
                </a>
            </div>
        </div>

            {/* Card 2 */}
        <div class = "outer">
            <div class = "post">
                <img src="https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" alt="Series1" />
            </div>

            <div class = "name">
                <h3>The Breaking Bad</h3>
            </div>
            
            <div class = "watch">
                <a href="https://www.netflix.com/in/title/70143836">
                    <button class="btn">Watch Now</button>
                </a>
            </div>
        </div>

{/* Card 3 */}
        <div class = "outer">
            <div class = "post">
                <img src="https://m.media-amazon.com/images/M/MV5BOTk4ZDRhYzEtZWExNy00MjIyLTgyYmMtN2Y2MzA4YzZhZTZmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg" alt="Series1" />
            </div>

            <div class = "name">
                <h3>Sweet Tooth</h3>
            </div>
            
            <div class = "watch">
                <a href="https://www.netflix.com/in/title/81221380">
                    <button class="btn">Watch Now</button>
                </a>
            </div>
        </div>

            
        </>
    )
}

export default Cards;
