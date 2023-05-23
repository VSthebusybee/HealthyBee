
import * as React from 'react';
import { Animated, SafeAreaView, StyleSheet,View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import{Surface,Text,Avatar,Divider,DataTable, IconButton} from 'react-native-paper';



function ProfileScreen(){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <Surface style={styles.surface} elevation={5} mode="elevated">
                    <Avatar.Icon size={64}  style={styles.avatar} icon="bee"/>

                    <Text style={[{fontWeight:'bold',padding:10},styles.text]} variant="titleLarge">Profile </Text>
                     
                    <Divider  horizontalInset/>
                    <Text style={[{padding:10},styles.text]} variant="titleMedium">Vishal</Text>
                    <Text style={[{padding:10},styles.text]} variant="titleMedium">email@example.com</Text>
                    <Text style={[{padding:10},styles.text]} variant="titleMedium">+91768723424</Text>
                    <Text style={[{padding:10},styles.text]} variant="titleMedium">Male</Text>
                        
                    <Text variant="headlineSmall" style={[{padding:10},styles.text]}>Health Statitcs</Text>
                    
                    <Divider/>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Catogories</DataTable.Title>
                            <DataTable.Title numeric>Present</DataTable.Title>
                            <DataTable.Title numeric>Past</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row>
                            <DataTable.Cell>Weight (kg)</DataTable.Cell>
                            <DataTable.Cell numeric>50</DataTable.Cell>
                            <DataTable.Cell numeric>60</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>No. of Steps </DataTable.Cell>
                            <DataTable.Cell numeric>237</DataTable.Cell>
                            <DataTable.Cell numeric>0</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Total Calories You Burned </DataTable.Cell>
                            <DataTable.Cell numeric>12321</DataTable.Cell>
                            <DataTable.Cell numeric>120</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>XYZ </DataTable.Cell>
                            <DataTable.Cell numeric>121</DataTable.Cell>
                            <DataTable.Cell numeric>12780</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>ABC </DataTable.Cell>
                            <DataTable.Cell numeric>12321</DataTable.Cell>
                            <DataTable.Cell numeric>120</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Bla blaa blaa </DataTable.Cell>
                            <DataTable.Cell numeric>12321</DataTable.Cell>
                            <DataTable.Cell numeric>120</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </Surface>
           </ScrollView>
        </SafeAreaView>
      
    );
}
    
    
  


  const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#fff',
    },
    surface: {
        marginTop: 75,
        padding: 10,        
        height:'auto',
        width: 'auto',
        
      },
    avatar: {
        marginTop: -50,
        alignSelf:'center',
      
      
    },
    text:{
        alignSelf:'center',
    },
  });
  

  export default ProfileScreen;

