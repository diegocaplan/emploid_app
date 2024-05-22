import React from 'react'
import { View,Text,StyleSheet} from 'react-native'
import Picker from '../Components/Picker'
import Formulario from '../Components/Picker'

const FormScreen = () => {
  return (
   <View style={styles.container}>
   <View style={styles.card}>
    <Text style={styles.title}>Analicemos tu estado de búsqueda laboral</Text>
   <View style={{marginTop:'5%', }}>
    <Text style={styles.heading}>¿Por qué completar el formulario?</Text>
    <View style={{ width:'94%'}}> 
       <Text  style={styles.normalText}>  Esta información nos ayuda entender tus objetivos y tu progreso en la
              búsqueda de nuevas oportunidades. Son métricas para
              analizar tus avances y poder realizar un seguimiento.
              </Text>
              </View>
   
<Formulario/>
   </View>
   </View>

    </View> 
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fae3ea',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    title:{
        color:'black',
        fontSize:27,
        textAlign: 'center',
        marginTop:'13%'
        
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:'2%',
        marginHorizontal:5
      },
      normalText: {
        fontStyle: 'italic',
        textAlign: 'justify',
        fontSize:17,
      },
      card:{
        backgroundColor: '#FBF9F9',
        borderRadius: 10,
        padding: 20,
        width: '92%',            
        shadowColor: '#000',     
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.25,     
        shadowRadius: 3.84,    
        elevation: 5,   
      }
})
export default FormScreen