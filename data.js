export const API_KEY = 'AIzaSyB7PiE1e-Y-U6ObGvQlXBq6FUatkcUT9sg';


 export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor (value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}