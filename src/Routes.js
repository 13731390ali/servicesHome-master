import Adminpanel from "./components/Adminpanel/Adminpanel"
import User2 from "./components/Adminpanel/User/User2"
import User3 from "./components/Adminpanel/User/User3"
import User4 from "./components/Adminpanel/User/User4"
import ListUsers from "./components/Screens/ListUsers"
import Lists from "./components/Screens/Lists"
import Main from "./components/Screens/Main"
import SignIn from "./components/Screens/SignIn"
import SignUp from "./components/Screens/SignUp"
import UserPanel from "./components/Screens/UserPanel"

const routes = [
    {
        component: <Main />,
        url: "/"
    },
    {
        component: <Lists />,
        url: "/list"
    },
    {
        component: <SignUp />,
        url: "/signUp"
    },
    {
        component: <SignIn />,
        url: "/signIn"
    },
    {
        component: <UserPanel />,
        url: "/userPanel"
    },
    {
        component: <ListUsers />,
        url: "/listUsers"
    },  
    {
        component: <Adminpanel/>,
        url: "/Adminpanel"
    },
    {
        component:<User2/> ,
        url: "/User2"
    },
    {
        component:<User3/> ,
        url: "/User3"
    },
    {
        component:<User4/> ,
        url: "/User4"
    }

]
export default routes