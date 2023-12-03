import { commonStructure } from "./CommonStructure";
import BASE_URL from "./BaseUrl"

//admin register api
export const adminRegisterApi=async(body)=>{
    return await commonStructure("POST",`${BASE_URL}/admin/admin-signup`,body)
}
//admin login
export const adminLoginApi=async(body)=>{
    return await commonStructure("POST",`${BASE_URL}/admin/admin-signin`,body)
}
//api for travel booking
export const userBooking=async(body)=>{
    return await commonStructure("POST",`${BASE_URL}/admin/travel-booking`,body)
}
//api for get all booking details
export const bookingdetails=async()=>{
    return await commonStructure("GET",`${BASE_URL}/admin/get-bookingdetails`,{})
}
//api for add packages
export const addPackage=async(body,header)=>{
    return await commonStructure('POST',`${BASE_URL}/admin/add-package`,body,header)
}
//api for get all packages
export const tourPackages=async()=>{
    return await commonStructure("GET",`${BASE_URL}/admin/get-packages`,{})
}
//api for get single package
export const getSinglepackage=async(id)=>{
    return await commonStructure("GET",`${BASE_URL}/admin/get-singlepackage/${id}`,{})
}