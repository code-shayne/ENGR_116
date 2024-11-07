//I pledge my honor that I have abided by the Stevens Honor System - Shayne Lada
#include <iostream>
using namespace std;

int main() {
    int num;
    //accepts a number from the user
    cout<<"Enter a number: "<<endl;
    cin>>num;
    int factorial = 1;
    if (num > 0){ //checks if the number is greater than 0
        for (int i = 1; i <= num; i++){ //calculates the factorial of the number
            factorial*=i;
        }
        cout<<"The factorial of your number is: "<<factorial<<endl; //prints the factorial
    }
    else { //prints if the number is less than or equal to zero
        cout<<"failure"<<endl;
    }
    return 0;
}