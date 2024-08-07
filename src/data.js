export const API_KEY = 'AIzaSyCNQVgVM9Tb0vy4HmD8_8VGckCUNSV90I0';

export const value_converter = (value) => {
    if(value >= 1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}