import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

import Logo from '../../../assets/logo.png';

export default function Home(){
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <Text style={styles.title}>GA APP</Text> 
    </View>
  );
}