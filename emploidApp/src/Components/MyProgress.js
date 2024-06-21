import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet,Platform } from "react-native";
import { BarChart } from "react-native-chart-kit";
import CustomHeader from "./CustomHeader"
import { AntDesign } from '@expo/vector-icons';
const { width, height } = Dimensions.get("window");



const MyProgress = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  });

  const [dataCv, setDataCv] = useState({
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  });


  useEffect(() => {
    const fetchData = async () => {
      // Aquí simulamos una llamada a la API
      const simulatedData = [
        { formulario: "Semana 1", contactos: 600 },
        { formulario: "Semana 2", contactos: 1000 },
        { formulario: "Semana 3", contactos: 3500 },
        { formulario: "Semana 4", contactos: 5000 },
      ];

      setTimeout(() => {
        setData({
          labels: simulatedData.map((item) => item.formulario),
          datasets: [
            {
              data: simulatedData.map((item) => item.contactos),
            },
          ],
        });
      }, 1000);
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchDataCv = async () => {
      // Aquí simulamos una llamada a la API
      const simulatedDataCv = [
        { formularioCV: "Semana 1", cvEnviados: 20 },
        { formularioCV: "Semana 2", cvEnviados: 50 },
        { formularioCV: "Semana 3", cvEnviados: 80 },
        { formularioCV: "Semana 4", cvEnviados: 100 },
      ];

      setTimeout(() => {
        setDataCv({
          labels: simulatedDataCv.map((item) => item.formularioCV),
          datasets: [
            {
              data: simulatedDataCv.map((item) => item.cvEnviados),
            },
          ],
        });
      }, 1000);
    };

    fetchDataCv();
  }, []);
  return (
    <>
     <CustomHeader />
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
      <AntDesign name="areachart" size={24} color="black" style={styles.icon} />
      <Text style={styles.title}> Cantidad de contactos en LinkedIn:</Text>
    
      </View>
    
      <BarChart
        data={data}
        width={370}
        height={220}
        
        chartConfig={{
          backgroundColor: "#f8f8f8",
          backgroundGradientFrom: "#f8f8f8",
          backgroundGradientTo: "#f8f8f8",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          fillShadowGradient: '#c30752',
          fillShadowGradientOpacity: 1,
          barPercentage:1.2,
          propsForLabels: {
            fontWeight: 'bold', 
          },
          propsForDots: {
            r: "8",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        style={{
          marginVertical:20,
          marginHorizontal:20,
          borderRadius: 16,
        }}
      />
       <View style={{flexDirection:'row'}}>
      <AntDesign name="areachart" size={24} color="black" style={styles.icon} />
      <Text style={styles.title}> Cantidad de Cv enviados:</Text>
    
      </View>
    
      <BarChart
        data={dataCv}
        width={370}
        height={220}
        
        chartConfig={{
          backgroundColor: "#f8f8f8",
          backgroundGradientFrom: "#f8f8f8",
          backgroundGradientTo: "#f8f8f8",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          fillShadowGradient: '#000000',
          fillShadowGradientOpacity: 1,
          barPercentage:1.2,
          propsForLabels: {
            fontWeight: 'bold',
          },
          propsForDots: {
            r: "8",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        style={{
          marginVertical:20,
          marginHorizontal:20,
          borderRadius: 16,
        }}
      />
    </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        flex: 1,
        backgroundColor: "white",
      },
      android: {
        flex: 1,
        backgroundColor: "white",
      },
      web: {
        height: height > 1024 ? "30%" : width > 768 ? "60%" : "80%",
        width: width > 1024 ? "60%" : width > 768 ? "60%" : "70%",
        // height: height >= 600 ? '40%' : width > 768 ? "60%" : "70%",

        marginHorizontal: width > 1024 ? "35%" : width > 768 ? "30%" : "15%",
      },
    }),
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginTop:15,
    marginLeft: 10,
    color: "#8c8c8c",
  },
icon:{
  marginTop:15,
  marginLeft:20
}})
export default MyProgress;
