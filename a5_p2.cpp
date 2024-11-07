// Made By Shayne Lada
// 10/1/24
// I pledge my honor that I have abided by the Stevens Honor System

#include <iostream>
using namespace std;

int main() {
    int a[2][2];
    int b[2][2];
    int c[2][2];
    int num = 0;
    //asks the user for 4 numbers in total and adds them to the arrays collumn by collumn
    for(int i = 0; i< 2; i++){
        for(int j = 0; j < 2; j++) {
            cout<<"Enter a number for array a: "<<endl;
            cin>>num;
            a[i][j] = num;
        }
    }
    //repeats the proccess for array b
    for(int i = 0; i< 2; i++){
        for(int j = 0; j < 2; j++) {
            cout<<"Enter a number for array b: "<<endl;
            cin>>num;
            b[i][j] = num;
        }
    }
    //adds the number in the same spots in arrays a and b and assigns the sum to that spot in c
    for(int i = 0; i< 2; i++){
        for(int j = 0; j < 2; j++) {
            c[i][j] = a[i][j] + b[i][j];
        }
    }
    //prints out the numbers in array c for the user
    cout<<"The four numbers in array c are "<<c[0][0]<<c[0][1]<<c[1][0]<<c[1][1]<<endl;

    return 0;

}