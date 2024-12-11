
#include <iostream>
#include <string>
using namespace std;

class SnackMachine{
    public:
        int spriteStock, waterStock, pepsiStock, oreoStock;
    SnackMachine(){
        spriteStock = 30;
        waterStock = 40;
        pepsiStock = 25;
        oreoStock = 20;
    }
    void Sprite() {
        if (spriteStock > 0){
            cout<<"Sucess! Here is your Sprite!"<<endl;
            spriteStock--;
        }
        else {
            cout<<"Item is sold out"<<endl;
        }
        
    }
        void Oreo() {
        if (oreoStock > 0){
            cout<<"Sucess! Here are your Oreos!"<<endl;
            oreoStock--;
        }
        else {
            cout<<"Item is sold out"<<endl;
        }
        
    }
        void Water() {
        if (waterStock > 0){
            cout<<"Sucess! Here is your water!"<<endl;
            waterStock--;
        }
        else {
            cout<<"Item is sold out"<<endl;
        }
        
    }
        void Pepsi() {
        if (pepsiStock > 0){
            cout<<"Sucess! Here is your Pepsi!"<<endl;
            pepsiStock--;
        }
        else {
            cout<<"Item is sold out"<<endl;
        }
        
    }
};

int main() {
    SnackMachine SM;
    char input = ' ';
    while(input != '0'){
        cout<<"Welcome to the vending machine!"<<endl;
        cout<<"Press: \n 1 for Sprite \n 2 for water \n 3 for Pepsi \n 4 for Oreos \n 0 to cancel"<<endl;
        cin>>input;
        if (input == '1'){
            SM.Sprite();
        }
        else if (input == '2'){
            SM.Water();
        }
        else if (input == '3'){
            SM.Pepsi();
        }
        else if (input == '4'){
            SM.Oreo();
        }
        else if (input == '0'){
            exit(1);
        }
        else {
            cout<<"Input not recognized"<<endl;
        }
    }
    return 0;
}