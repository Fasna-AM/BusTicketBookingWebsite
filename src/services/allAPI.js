import SERVER_URL from "./serverURl";
import commonAPI from "./commonAPI";

// addBusAPI 
export const addBusAPI = async(value)=>{
    return await commonAPI("POST",`${SERVER_URL}/allBusses`,value)
}

// getAllBusAPI
export const getAllBusAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allBusses`,'')
}

//updateBusdetailsAPI
export const updateBusdetailsAPI = async(busId,updateDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/allBusses/${busId}`,updateDetails)
}

//deleteBusAPI
export const deleteBusAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allBusses/${id}`,{})
}

// addUserDetailsAPI
export const addUserDetailsAPI = async(value)=>{
    return await commonAPI("POST",`${SERVER_URL}/userDetails`,value)
}

// getallusersAPI
export const getallusersAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/userDetails`,'')
}

// getSingleUserAPI
export const getSingleUserAPI= async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/userDetails/${id}`,'')
}

//getBusDetailsAPI
export const getBusDetailsAPI = async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allBusses/${id}`,'')
}

// addTicketAPI
export const addTicketAPI = async(value)=>{
    return await commonAPI("POST",`${SERVER_URL}/tickets`,value)
}

// updateUserDetailAPI
export const updateUserDetailAPI =async(userId,updateDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/userDetails/${userId}`,updateDetails)
}

//cancelTicketAPI
export const cancelUserTicketAPI= async(ticketId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/tickets/${ticketId}`,{})

}
