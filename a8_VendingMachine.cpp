// Made By Shayne Lada
// 11/19/24
// I pledge my honor that I have abided by the Stevens Honor System

#include <iostream>
#include <string>
using namespace std;

class VendingMachine{
    public:
        int spriteStock, waterStock, pepsiStock, oreoStock;
        float spritePrice, waterPrice, pepsiPrice, oreoPrice;
    VendingMachine(){
        spriteStock = 30;
        waterStock = 40;
        pepsiStock = 25;
        oreoStock = 20;
        spritePrice = 1.25;
        waterPrice = 1.00;
        pepsiPrice = 1.25;
        oreoPrice = 1.75;
    }
    void Sprite() {
        float money;
        cout<<"Insert cash $5, $10, or $20: "<<endl;
        cin>>money;
        if (spriteStock > 0){
            float change = money - spritePrice;
            cout<<"Sucess! Your change is $"<<change<<endl;
            spriteStock--;
        }
        else {
            cout<<"Item is sold out $"<<money<<" refunded"<<endl;
        }
        
    }
        void Oreo() {
        float money;
        cout<<"Insert cash $5, $10, or $20: "<<endl;
        cin>>money;
        if (oreoStock > 0){
            float change = money - spritePrice;
            cout<<"Sucess! Your change is $"<<change<<endl;
            oreoStock--;
        }
        else {
            cout<<"Item is sold out $"<<money<<" refunded"<<endl;
        }
        
    }
        void Water() {
        float money;
        cout<<"Insert cash $5, $10, or $20: "<<endl;
        cin>>money;
        if (waterStock > 0){
            float change = money - spritePrice;
            cout<<"Sucess! Your change is $"<<change<<endl;
            waterStock--;
        }
        else {
            cout<<"Item is sold out $"<<money<<" refunded"<<endl;
        }
        
    }
        void Pepsi() {
        float money;
        cout<<"Insert cash $5, $10, or $20: "<<endl;
        cin>>money;
        if (pepsiStock > 0){
            float change = money - spritePrice;
            cout<<"Sucess! Your change is $"<<change<<endl;
            pepsiStock--;
        }
        else {
            cout<<"Item is sold out $"<<money<<" refunded"<<endl;
        }
        
    }
};

int main() {
    VendingMachine VM;
    char input = ' ';
    while(input != '0'){
        cout<<"Welcome to the vending machine!"<<endl;
        cout<<"Press: \n 1 for Sprite \n 2 for water \n 3 for Pepsi \n 4 for Oreos \n 0 to cancel"<<endl;
        cin>>input;
        if (input == '1'){
            VM.Sprite();
        }
        else if (input == '2'){
            VM.Water();
        }
        else if (input == '3'){
            VM.Pepsi();
        }
        else if (input == '4'){
            VM.Oreo();
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
