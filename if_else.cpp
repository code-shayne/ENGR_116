// Made By Shayne Lada
// 10/1/24
// I pledge my honor that I have abided by the Stevens Honor System

#include <iostream>
using namespace std;

int main () {
    
    int num_hw;
    int num_mt;
    int num_f;
    //asks the user for the number of hws, midterms, and finals should be considered in calculations
    cout << "Enter number of homeworks: "<<endl;
    cin >> num_hw;
    cout << "Enter number of midterms: "<<endl;
    cin >> num_mt;
    cout << "Enter number of finals: "<<endl;
    cin >> num_f;

    float weight_hw;
    float weight_mt;
    float weight_f;
    //asks the user for the weighting of each section
    cout << "Enter weight of homework as a decimal: "<<endl;
    cin >> weight_hw;
    cout << "Enter weight of midterms as a decimal: "<<endl;
    cin >> weight_mt;
    cout << "Enter weight of final as a decimal: "<<endl;
    cin >> weight_f;

    //asks the user for however many hw grades they specified
    int count_hw = 0;
    float hw = 0;
    float hw_grade = 0;
    while (count_hw < num_hw){
        cout << "Enter a homework grade out of 100: "<<endl;
        cin >> hw;
        hw_grade+=hw;
        count_hw++;
    }
    //calculates the weighted avg of all the hw grades
    float hw_weighted = (hw_grade / num_hw)*weight_hw;

    //asks the user for however many midterm grades they specified
    int count_mt = 0;
    float mt = 0;
    float mt_grade = 0;
    while (count_mt < num_mt){
        cout << "Enter a midterm grade out of 100: "<<endl;
        cin >> mt;
        mt_grade+=mt;
        count_mt++;
    }
    //calculates weighted avg of midterm grades
    float mt_weighted = (mt_grade / num_mt)*weight_mt;

    //asks the user for however many final exam grades they specified
    int count_f = 0;
    float f = 0;
    float f_grade = 0;
    while (count_f < num_f){
        cout << "Enter a final exam grade out of 100: "<<endl;
        cin >> f;
        f_grade+=f;
        count_f++;
    }
    //calculates weighted avg of final exam grades
    float f_weighted = (f_grade / num_f)*weight_f;

    //calculates total final grade by adding each of the weighted ones
    float grade = f_weighted + mt_weighted + hw_weighted;
    cout<<grade<<endl; //checks if calculated grade is correct

    //checks which letter grade the final grade would be assigned to
    if (grade > 90){
        cout<<"Your final grade is A"<<endl;
    }
    else if(grade > 80) {
        cout<<"Your final grade is B"<<endl;
    }
    else if(grade > 70) {
        cout<<"Your final grade is C"<<endl;
    }
    else {
        cout<<"Your final grade is D"<<endl;
    }

    return 0;
}