import realm from "./initSchema";

/**
 * Lưu dữ liệu bài kiểm tra vào History
 * 
 * @param {*} data 
 * @returns
 */
export function saveHistory(data) {
    try {
        let objHistory = realm.write(()=>{
            realm.create('History',data,true);
        });
        return {status:true,message:objHistory}
    } catch (error) {
        return{status:false,message:error}
    }
}

/**
 * Lấy thông tin lịch sử thông qua id_user
 * 
 * @param {*} data 
 * @returns
 */
export function getHistory(userId) {
    try {
        // let objHistory = realm.objects('History').filtered(`ID_User = "${userId}"`);
        let objHistory = realm.objects('History').filtered(`ID = "abcd"`);
        return objHistory
        // return JSON.parse(JSON.stringify([...objHistory]));
    } catch (error) {
        return {status:false,message:error}
    }
}