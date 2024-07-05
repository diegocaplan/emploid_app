
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';




const CollapsibleText = () => {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleExpanded = () => {
      setCollapsed(!collapsed);
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleExpanded} style={styles.header}>
          <Text style={styles.headerText}> {collapsed ? 'Ver' : 'Cerrar'} mi Feedback </Text>
        </TouchableOpacity>
        <Collapsible collapsed={collapsed}>
          <View style={styles.content}>
            <Text>jhghghghtttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt</Text>
          </View>
        </Collapsible>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      margin: 20,
    },
    header: {
      padding: 10,
      backgroundColor: '#f9c2ff',
    },
    headerText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    content: {
      padding: 10,
      backgroundColor: '#e0e0e0',
    },
  });
  
  export default CollapsibleText;
  