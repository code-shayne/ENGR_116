// Made By Shayne Lada
// 11/12/24
// I pledge my honor that I have abided by the Stevens Honor System

#include <iostream>
#include <fstream>
using namespace std;

string first, last, phone, email;
void Write(){
    ofstream write; //creates a class called write
    //ofstream = output fstream
    write.open("contactbook.txt", ios::app); //opens file named contact book
    //ios::app adds info to the end instead of overriding
    write<<first<<" "<<last<<" "<<phone<<" "<<email<<endl; //writes info in file
    write.close(); //closes file
}

string line;
void Display(){
    ifstream read; //makes a new read function
    //ifstream = input fstream
    read.open("contactbook.txt"); //opens contactbook file
    while(getline(read,line)){ //gets each line from the file one by one
        cout<<line<<endl; //outputs each line to terminal
    }
}

void Find(){
    ifstream read;
    string search, substring;
    bool found = false;
    cout<<"Type anything to search: "<<endl;
    cin>>search;
    read.open("contactbook.txt");
    if(read.is_open()){
        while (getline(read,line)){
            substring = line.substr(0,line.find(" "));
            if (substring == search){
                cout<<"Found: "<<line<<endl;
                found = true;
                break;
            }
        }
        if(!found){
            cout<<"Could not find contact"<<endl;
        }
    }
    else {
        cout<<"File not found"<<endl;
    }
    read.close();
}

int main() {
    cout<<"What is your first name?"<<endl;
    cin>>first;
    cout<<"What is your last name?"<<endl;
    cin>>last;
    cout<<"What is your phone number?"<<endl;
    cin>>phone;
    cout<<"What is your email address?"<<endl;
    cin>>email;
    Write();
    Display();
    Find();
    return 0;
}