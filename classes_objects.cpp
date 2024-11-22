#include <iostream>
using namespace std;

class recitation {
    public:
        int students;
        float grade1, grade2;
    recitation(){
        students = 46;
        grade1 = 100;
        grade2 = 100;
    }
    void withdraw() {
        students = students--;
    }
    void badMidterm() {
        cout << "How bad was the midterm?"<<endl;
        int input;
        cin>>input;
        if (input == 1){
            grade1 = grade1-=20;
        }
        else if (input == 2){
            grade1 = grade1-=40;
        }
    }
};

int main() {
    recitation RF;
    char maininput = ' ';
    while(maininput != 'x'){
        cout<<"1 - Someone withdres from the class"<<endl;
        cout<<"2 - There is a bad midterm"<<endl;
        cout<<"type x to quit"<<endl;
        if(maininput == '1'){
            RF.withdraw();
        }
        else if(maininput == '2'){
            RF.badMidterm();
        }
        else if(maininput == 'x'){
            cout<<"Goodbye"<<endl;
            exit(1);
        }
        else{
            cout<<"Input not recognized"<<endl;
        }
    }

    return 0;
}