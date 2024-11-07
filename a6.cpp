// Made By Shayne Lada
// 10/1/24
// I pledge my honor that I have abided by the Stevens Honor System

#include <iostream>
using namespace std;

void printGreeting() { //function that prints out a greeting when called
    cout<<"Hi! Hope you're having a good day"<<endl;
}

void divideNumbers(float x, float y) { //function that divides two numbers inputted by the user
    if (y==0){
        cout<<"Cannot perform division"<<endl; //returns an error if the denominator is 0
    }
    else{
        cout<<x/y<<endl; //returns the numbers divided
    }
}

int factorial(int num) { //function that returns the factorial of a number the user inputs
    if (num < 0){
        return 0;
    }
    
    else if (num == 0){
        return 1;
    }

    int fact = 1;
    for (int i = 1; i <= num; i++){ //calculates the factorial of the number
          fact*=i;
     }
    return fact;
}

void fibonacci(int N){ //function that returns the first N numbers of the fibonacci sequence
    if (N<=0){
        cout<<"Enter a positive number"<<endl; //error if user enters a negative
    }
    else if (N == 1) {
        cout<<"0"<<endl;
    }

    int frst = 0;
    int scnd = 1;

    for (int i=1; i <= N; i++) { //calculates the first N numbers of sequence
        cout<<frst<<"\t";
        int next = frst + scnd;
        frst = scnd;
        scnd = next;
    }
}

int main() { //prints out all functions and related messages
    printGreeting();
    int x, y;
    cout<<"Enter a number: "<<endl;
    cin>>x;
    cout<<"Enter a number: "<<endl;
    cin>>y;
    divideNumbers(x,y); //calls the function to divide the two user inputted numbers
    int num;
    cout<<"Enter a number: "<<endl;
    cin>>num;
    float fact = factorial(num); //calls and prints out result of factorial function
    cout<<fact<<endl;
    int N;
    cout<<"Enter a positive number: "<<endl;
    cin>>N;
    cout<<"The first "<<N<<" terms of the fibonacci sequence are: "<<endl;
    fibonacci(N); //calls the fibonacci function on the user inputed N
    return 0;
}