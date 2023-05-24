const blogData =[];


  export const blogReducer=(state=blogData,action)=>{

  switch (action.type) {
    case "create_blog":
      return [...state,action.myblog]

      case "update_blog":
        return "updated blog"
        
        case "delete_blog":
        return "deleted_blog"
      
        


  
    default:
     return state;
  }

}