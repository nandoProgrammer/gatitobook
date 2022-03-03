export class LocalStorage{

   static getItem(key: any){
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
   }

   static setItem(key: any, data: any){
      const stringify = JSON.stringify(data)
      localStorage.setItem(key, stringify)
   }

   static removeItem(key: any){
      localStorage.removeItem(key)
   }

   static clear(){
      localStorage.clear()
   }

}