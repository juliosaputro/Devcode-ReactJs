import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";


const IsMobile = () => {
   return useMediaQuery(useTheme().breakpoints.down('sm'))
} 

const urlListItem = 'https://todo.api.devcode.gethired.id/todo-items/'

export {IsMobile, urlListItem}