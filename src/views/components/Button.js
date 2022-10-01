import React from 'react'
import {Text,TouchableOpacity} from 'react-native'
import COLORS from '../../consts/colors'

const Button = ({title,onPress =()=>{}})=>{
  return (
<TouchableOpacity style={{ 
    activeOpacity:0.7,
    height:55,
    width:'100%',
    backgroundColor:COLORS.blue,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20
 }}>
<Text 
style={{ 
    fontSize:18,
    color:COLORS.light,
    fontWeight:'bold' }}>{title}</Text>
</TouchableOpacity>
  )
}

export default Button