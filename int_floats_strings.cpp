// Made by Shayne Lada
// 9/24/24
// Source: https://www.includehelp.com/cpp-tutorial/trigonometric-functions.aspx
// I pledge my honor that I've abided by the Stevens Honor System

#include <iostream>
#include <String.h>
#include <cmath> //math library for the cos and tan functions
using namespace std;

int main() {
    
    //program that recieves two ints from the user, multiplies them, and takes the cosine of the product
    int integer_one;
    int integer_two;
    cout << "Enter an integer: "<<endl;
    cin >> integer_one;
    cout << "Enter a second integer: "<<endl;
    cin >> integer_two;
    int integer_product = integer_one * integer_two;
    cout << "The product of your two integers is " <<integer_product<<endl;
    cout << "The sum of your two integers is " <<integer_one + integer_two<<endl;
    cout << "The difference of your two integers is " <<integer_one - integer_two<<endl;
    cout << "The quotient of your integers is " <<integer_one / integer_two<<endl;
    cout << "The cosine of the product is " <<cos(integer_product)<<endl;
    cout << "The sin of the sum is " <<sin(integer_one + integer_two)<<endl;

    //program that recieves two floats from the user, adds them, and takes the tangent of the sum
    float float_one;
    float float_two;
    cout << "Enter a decimal number: "<<endl;
    cin >> float_one;
    cout << "Enter a second decimal number: "<<endl;
    cin >> float_two;
    float float_sum = float_one + float_two;
    cout << "The sum of your two numbers is "<<float_sum<<endl;
    cout << "The difference of your two numbers is "<<float_one - float_two<<endl;
    cout << "The product or your two numbers is "<<float_one * float_two<<endl;
    cout<< "The quotient of your two numbers is "<<float_one / float_two<<endl;
    cout << "The tangent of the sum is "<<tan(float_sum)<<endl;
    cout<< "The product to the power of the difference is "<< pow(float_one*float_two,float_one-float_two)<<endl;

    //program that recieves the user's first and last name then prints their full name
    string first_name;
    string last_name;
    cout << "Enter your first name: "<<endl;
    cin >> first_name;
    cout << "Enter your last name: "<<endl;
    cin >> last_name;
    cout << "Your full name is "<<first_name<<" "<<last_name<<endl;
    return 0;
}