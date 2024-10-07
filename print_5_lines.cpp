// Made by Shayne Lada
// 9/17/24
// Source: https://www.geeksforgeeks.org/how-to-print-colored-text-in-c/
// I pledge my honor that I've abided by the Stevens Honor System

#include <iostream>
#include <stdlib.h>
using namespace std;

int main() {
    //These five lines of code prints five sentences out into the terminal
    //The system lines above each designates a different color for each line
    system("Color B");
    cout <<"My name is Shayne."<< endl;
    system("Color A");
    cout <<"I have a dog named Pepsi. "<< endl;
    system("Color 9");
    cout <<"I am majoring in Software Engineering."<< endl;
    system("Color 4");
    cout <<"I am minoring in Computer Science."<< endl;
    system("Color 3");
    cout <<"I learned Java, Python, R, Machine learning, HTML, and CSS in high school."<< endl;

    return 0;
}
