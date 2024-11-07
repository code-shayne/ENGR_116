// I pledge my honor that I have abided by the Stevens Honor System

#include <iostream>
using namespace std;

int main () {
    int a[3][3];
    int b[3][3];
    int c[3][3];
    int num = 0;
    //asks the user for 9 numbers in total and adds them to the arrays collumn by collumn
    for(int i = 0; i< 3; i++){
        for(int j = 0; j < 3; j++) {
            cout<<"Enter a number for array a: "<<endl;
            cin>>num;
            a[i][j] = num;
        }
    }
    //repeats the proccess for array b
    for(int i = 0; i< 3; i++){
        for(int j = 0; j < 3; j++) {
            cout<<"Enter a number for array b: "<<endl;
            cin>>num;
            b[i][j] = num;
        }
    }
    //adds the number in the same spots in arrays a and b and assigns the sum to that spot in c
    for(int i = 0; i< 3; i++){
        for(int j = 0; j < 3; j++) {
            c[i][j] = a[i][j] + b[i][j];
        }
    }
    //prints out the numbers in array c for the user
    cout<<"|"<<c[0][0]<<c[0][1]<<c[0][2]<<"|\n"<<"|"<<c[1][0]<<c[1][1]<<c[1][2]<<"|\n"<<"|"<<c[2][0]<<c[2][1]<<c[2][2]<<"|"<<endl;

    return 0;
}