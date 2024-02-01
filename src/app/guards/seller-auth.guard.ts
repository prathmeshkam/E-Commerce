import { CanActivateFn } from '@angular/router';

export const sellerAuthGuard: CanActivateFn = (route, state) => {

  let sellerAccess = localStorage.getItem('isSellerLogedIn');

  if(sellerAccess==='true')
  {
    return true;
  }
  if(localStorage.getItem("seller")){
    return true;
  }
  else{

  return false;
  }
};
