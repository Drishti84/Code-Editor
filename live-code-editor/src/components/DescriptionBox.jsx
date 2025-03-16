import React from 'react';

function DescriptionBox() {
    return ( 
        <>
        <div className="description-box">
            <h3>AI Code Explanation</h3>
            <p>
                I'm creating a Tic Tac Toe game using React. It will have a 3x3 grid where players take turns marking 'X' or 'O'.
                The game checks for a winner or a draw after each move and displays the result. The game can be reset for a new match.
            </p>
        </div>
        </>
     );
}

export default DescriptionBox;