import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { IconButton, Box, Typography, useTheme, Button } from '@mui/material'
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from '@mui/icons-material/Remove'
import { shades } from '../theme'
import { addToCart } from '../state'
import { useNavigate } from 'react-router-dom'


const Item = ({item, width}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const [isHover, setIsHover] = useState[false]

    const {
        palette: {neutral}
    } = useTheme()

    const { category, price, name, image } = item.attributes

    const {
        data: {
            attributes: {
                formats: {
                    medium: {url}
                }
            }
        }
    } = image
     


  return (
      <Box width={width}> 
          <Box
              position="relative"
              onMouseOver={() => setIsHover(true)}
              onMouseOut={() => setIsHover(false)}>
              <img
                  src={`http://localhost:1337${url}`}
                  alt={item.name} width="300px"
                  height="400px"
                  style={{
                      cursor:"pointer",
                  }}
                  onClick={()=>navigate(`/item/${item.id}`)}
              />
              <Box
                  display={isHover ? "blocked" : "none"}
                  position="absolute"
                  bottom="10%"
                  width="100%"
                  padding="0 5%"                  
              >
                  <Box display="flex" justifyContent="space-between">
                      <Box
                          display="flex"
                          justifyContent="center"
                          backgroundColor={shades.neutral[100]}
                          borderRadius="3px"> 
                             <IconButton
                      onClick={() => setCount(Math.max(count - 1, 1))}
                    > 
                      <RemoveIcon /> 
                    </IconButton>
                    <Typography>{count}</Typography>
                    <IconButton
                      onClick={() => setCount(count + 1)}
                    >
                      <AddIcon />
                    </IconButton>
                      </Box>                      
                  </Box>
                  
              </Box>
         </Box>
       
    </Box>
  )
}

export default Item
