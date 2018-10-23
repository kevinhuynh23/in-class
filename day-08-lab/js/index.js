// Functions to draw lines
// An attempt to replicate http://vallandingham.me/sentence_drawings/
'use strict';

// Constants / global variables
const height = 500;
const width = 500;

// Get canvas, set width/height/strokeStyle
let canvas = document.getElementById("canvas");
canvas.width = width;
canvas.height = height;
let ctx = canvas.getContext("2d");
ctx.strokeStyle = 2;

// Set event listener (onkeydown)
let input = document.getElementById('textInput');
input.onkeydown = drawLines;

// Function to return an array of lengths from the text
function getLinesFromText() {
    // Get the value of the text input
    let text = document.getElementById('textInput').value;

    // Return an *array* containing the length of each word
}


// Function to draw lines
function drawLines() {
    // Clear rectangle and begin path
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();

    // Set initial position (x, y) in the center of the canvas
    let position = {};

    // Move the pen to the starting position


    // Get the array of lengths from text input using `getLinesFromText()`


    // Iterate through lengths, updating and tracking the pen position
    // Turn 90 degrees each turn

    // -- Compute a direction 

    // -- Add different x or y amount based on direction using switch/case

    // -- Update the `position` by adding x and y


    // -- Move the pen to the new position

    // Draw the canvas using the `stroke` method

}
