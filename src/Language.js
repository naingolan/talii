const Language = (word, selectedLanguage) => {

    if(selectedLanguage=='en'){
        switch(word){
            case 'Login':
                return 'Login';
            case 'Do you have an account?':
                return 'Do you have an account?'    
            case 'dont_have_account':
                return 'Don\'t have an account? ';  
            case 'sajili':
                return 'Register';   
            case 'incomplete':
                return 'Incomplete';  
            case 'incomplete_word':
                return 'Please fill all fields'; 
            case 'retry':
                return 'Retry';   
            case 'phone_number':
                return 'Phone Number';  
            case 'password':
                return 'Password';  
            case 'lugha':
                return 'Change Language'; 
                //Ayee at registration
            case 'firstName':
                return 'First Name';
            case 'lastName':
                return 'Last Name'; 
            case 'confirmPassword':
                return 'Re-Enter Password';  
            case 'nina_akaunti':
                return 'Do you have an account?';   
            case 'transactions':
                    return 'Transactions' ;
            case 'pay_instantly':
                    return 'Pay Instantly';
            case 'school':
                    return 'School';
            case 'hostipal':
                    return 'Hospital';
            case 'church':
                    return 'Church';
            case 'loans':
                    return 'Loans';
            case 'change_password':
                    return 'Change Password';  
            case 'mobile_defult':
                    return 'Default Phone Number';   
            case 'logout':
                    return 'Logout';  
            case 'change_language':
                    return 'Change Language';  
            case 'phone_number':
                    return 'Phone Number'; 
            case 'confirmPassword':
                return 'Re-Enter Password'   
            case 'name':
                return 'Name';
            case 'address':
                return 'Address';
            case 'username':
                return 'Username'; 
            case 'email':
                return 'Email'; 
            case 'companyName':
                return 'Company Name';    
                                                                              
        }

    }else if(selectedLanguage=='sw'){
        switch(word){
            case 'Login':
                return 'Ingia';
            case 'Do you have an account?':
                return 'Je, una akaunti?'
            case 'dont_have_account':
                return 'Sina akaunti? ';  
            case 'sajili':
                return 'Sajili';   
            case 'incomplete':
                return 'Haijakamilika' ; 
            case 'incomplete_word':
                return 'Tafadhali kamilisha kujaza taarifa zako';  
            case 'retry':
                return 'Jaribu tena';
            case 'phone_number':
                return 'Namba ya simu';
            case 'password':
                return  'Neno la siri'; 
            case 'lugha':
                return 'Badili Lugha';  
            case 'firstName':
                return 'Jina la kwanza';
            case 'lastName':
                return 'Jina la ukoo'; 
            case 'confirmPassword':
                return 'Thibitisha Neno la siri'; 
            case 'nina_akaunti':
                return 'Je, una akaunti?'   
            case 'transactions':
                return 'Malipo' ;
            case 'pay_instantly':
                return 'Lipa Haraka';
            case 'school':
                return 'Shule';
            case 'hostipal':
                return 'Hospitali';
            case 'church':
                return 'Kanisa';
            case 'loans':
                return 'Mikopo';
            case 'change_password':
                    return 'Badilie Neno la Siri';  
            case 'mobile_defult':
                    return 'Namba ya Simu';   
            case 'logout':
                    return 'Ondoka';   
            case 'change_language':
                    return 'Badili Lugha';                      

            case 'phone_number':
                    return 'Namba ya simu';
            case 'confirmPassword':
                return 'Thibitisha Neno siri'   
            case 'name':
                return 'Jina';
            case  'address':
                return 'Anuani';
            case 'username':
                return 'Jina';
            case 'email':
                return 'Barua Pepe';  
            case 'companyName':
                return 'Jina la Kampuni';

        }

    }

}

export default Language;