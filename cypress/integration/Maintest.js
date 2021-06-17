import {MainPage} from '../integration/my_first_test'
import {ManageOrg} from '../integration/ManageOrg'
import { Points_holders } from '../integration/Points_holders'
import { Promotion } from './Promotion'
import { Orginfo } from './Orginfo'
import { Login } from './Login'

const login=new Login()
const mainPage=new MainPage()
const manageorg=new ManageOrg()
const pointsholders=new Points_holders()
const promotion=new Promotion()
const orginfo=new Orginfo()


//login page
it('signin test',function(){
    login.login();
})



// it('login test',function(){
    
//     mainPage.navigate();
//     // mainPage.sidebar();
//     // mainPage.DashboardGrid();
//     // mainPage.routepaths();
// })


// it('test_manageorg',function(){
//         mainPage.navigate();
// //         manageorg.tabs();
//         // manageorg.addsponsor();
//         // manageorg.editorg();
//         // manageorg.addorg();
//         manageorg.promotions();
    
//  })

// it('point_holders',function(){
//     mainPage.navigate();
//     pointsholders.table();
// })


// it('promotion',function(){
//     mainPage.navigate();
//     // promotion.create_promo();
//     promotion.create_merch();
//     // promotion.create_hunt();
// })


// it('orginfo',function(){
//     mainPage.navigate();
//     orginfo.events();
// })