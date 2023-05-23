import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Button,Text,Snackbar , Divider , Surface, Card, Avatar} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

function FeedScreen({navigation}){
  return(
    <SafeAreaView>
    <ScrollView fadingEdgeLength={4} >
    <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
    <Card.Content>
      <Text>Card content</Text>
    </Card.Content>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button onPress={()=>navigation.navigate('Main')}>Ok</Button>
    </Card.Actions>
    <Divider/>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
    <Card.Content>
      <Text>Card content</Text>
    </Card.Content>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
    <Divider/>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
    <Card.Content>
      <Text>Card content</Text>
    </Card.Content>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
    <Divider/>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
    <Card.Content>
      <Text>Card content</Text>
    </Card.Content>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
    <Divider/>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
    <Card.Content>
      <Text>Card content</Text>
    </Card.Content>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
    </Card>
    </ScrollView>
    </SafeAreaView>
  );
}

export default FeedScreen;