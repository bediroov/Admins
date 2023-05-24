import {v4 as uuid} from 'uuid'

export const addblog=({photo,title,desc})=>({
    type:"create_blog",
    myblog:{
        id:uuid(),
        photo,
        title,
        desc,
        
    }
})