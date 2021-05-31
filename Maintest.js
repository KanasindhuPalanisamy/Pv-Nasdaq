import {MainPage} from '../integration/my_first_test'
import {ManageOrg} from '../integration/ManageOrg'
import { Points_holders } from '../integration/Points_holders'


const mainPage=new MainPage()
const manageorg=new ManageOrg()
const pointsholders=new Points_holders()



// it('login test',function(){
    mainPage.routepaths();
//     mainPage.navigate();
//     mainPage.sidebar();
//     // mainPage.DashboardGrid();
// })


// it('test_manageorg',function(){
//         dashboard.navigate();
//         manageorg.tabs();
//         manageorg.sponsor()
    
//  })

it('point_holders',function(){
    mainPage.navigate();
    pointsholders.table();
})