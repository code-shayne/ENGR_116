// Made By Shayne Lada
// 10/1/24
// I pledge my honor that I have abided by the Stevens Honor System

#include <iostream>
using namespace std;

int main() {
    int num = 0;
    int total = 0;
    int min = 0;
    int max = 0;
    //repeatedly asks the user for a number until they input -1
    while (num != -1) {
        total+=num; // adds the number to a running total to calculate sum
        cout<<"Enter an integer: "<<endl;
        cin>>num;
        if (num < min) {
            min = num;
        }
    //checks if the current number is greater than or less than the last to find min and max
        if (num > max) {
            max = num;
        }

    }
    //prints out sum, min, and max to the user 
    cout<<"The sum of your integers is: "<<total<<endl;
    cout<<"The minimum of your integers is: "<<min<<endl;
    cout<<"The maximum of your integers is: "<<max<<endl;

    return 0;
}