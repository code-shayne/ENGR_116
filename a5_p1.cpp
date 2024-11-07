// Made By Shayne Lada
// 10/1/24
// I pledge my honor that I have abided by the Stevens Honor System

#include <iostream>
using namespace std;

int main () {
    int num = 0;
    int nums[10];
    int total=0;
    //fills an array with ten numbers that the user inputs
    for(int i = 0; i < 10; i++) {
        cout <<"Enter an integer: "<<endl;
        cin >> num;
        nums[i] = num;
        total+=nums[i]; //adds the current number inputted to a running tally of all the numbers to find the sum
    }

    int min = nums[0]; //min and max variables set to the first number of the array
    int max = nums[0];
    //runs through the array and compares each number to the last to find the min and max
    for(int i=0; i<10; i++){
        if (nums[i] < min) {
            min = nums[i];
        }

        if (nums[i] > max) {
            max = nums[i];
        }
    }
    //prints out the sum, min, and max to the user
    cout<<"The sum of your 10 integers is: "<<total<<endl;
    cout<<"The max of your integers is: "<<max<<endl;
    cout<<"The minimum of your integers is: "<<min<<endl;
    return 0;
}