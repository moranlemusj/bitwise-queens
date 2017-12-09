![codewars badge](https://www.codewars.com/users/vidocco/badges/large)

## N Queens Problem

The N queens problem is a mathematical/logical/algorithmic problem that involves placing N chess queens on an NxN chessboard so that no quens threaten each other. It is a more complicated version of the eight queens puzzle (since it has to be fully scallable) and a simplified version of the millenium problem [P v NP](http://www.claymath.org/millennium-problems/p-vs-np-problem) (that also assumes M queens are already positioned in the board before starting the algorithm).

![queens-gif](https://github.com/vidocco/bitwise-queens/blob/master/queens.gif)

The queens problem is incredibly interesting to start getting into algorithm design and logic problem solving in programming, so if you are interested in attempting it: **please don't read this repo**. 



## Why Bitwise?

Since the main concern of this problem is **not** finding a solution but finding a solution **fast**, I attempted to solve this problem Bitwise to improve the efficiency and performance of the code. This is the same reason for not using any predefined prototype methods (since it has been proven to reduce efficiency a lot) and also the reason for including time measurement in the console.log that displays the final result.



## Getting Started

You will need to have node installed in your local machine before running queens.

- Clone this repo `git clone https://github.com/vidocco/bitwise-queens`
- Move into the new folder `cd bitwise-queens`
- Install all dependencies`npm install`
- To start the the algorithm from the console run `npm test [boardSize]`. This command initializes the script from node but, take into account that this process is slower than directly accessing the script and hard-coding a value for the function (instructions are specified within the script). In other words: to check the true speed of the algorithm please modify the code.



## Collaborating

If you want to let me know your solution or any suggestion/optimization please leave an issue in this repo and I will gladly review it :).
