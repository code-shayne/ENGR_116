// char - single character, 1 byte
// int - whole number, 4 bytes
// float - decimal number, 4 bytes
// string - string of chars

//include at top of all code
#include <iostream> //preprocessor directive for standard input-output stream - reading and writing to/from standard system
#include<windows.h> //.h means header file that contains access to declarations for functions in the windows API
#include<string.h> 
using namespace std; //uses a standard library

// >> is extraction operator - extracts data from the input stream

int variables (){ //location source code begins execution
    //declaring
    int a=5;
    int b(2);
    int result;

    //processing
    a=a+3;
    result = a-b;

    //print
    cout << result;
    //terminate program
    return 0; //ends the function and returns control to the calling function
}

int main (){  //location source code begins execution
    int InputNumber;
    bool b1 = true;
    cout << "Enter an Integer: ";
    cin >> InputNumber;
    return 0;  //ends the function and returns control to the calling function
}

int Integer;
char acharacter;
char string [20];
unsigned int NumberOfSons; //takes up less memory than integer
