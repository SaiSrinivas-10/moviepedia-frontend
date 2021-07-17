import {Route} from 'react-router-dom';
import Test from '../Components/Home/Test';
import Home from '../Components/Home/Home';
import NavigationBar from '../Components/GlobalComponents/NavigationBar';
import UploadMovie from '../Components/Movies/UploadMovie';

export default function Routes(){
    return(
        <div>  
            <NavigationBar/>         
            <Route
            exact path ="/"
            component = {Home}
            
            />

            <Route
            exact path ="/upload"
            component = {UploadMovie}
            />
            
            <Route
                path = "/test"
                component = {Test}
            />

        </div>
    );
}