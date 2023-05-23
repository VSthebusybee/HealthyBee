import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View ,FlatList} from 'react-native';

const exercises = [
  { id: 1, name: 'Push-ups' },
  { id: 2, name: 'Squats' },
  { id: 3, name: 'Lunges' },
  { id: 4, name: 'Plank' },
  { id: 5, name: 'Jumping jacks' },
  { id: 6, name: 'Burpees' },
  { id: 7, name: 'Sit-ups' },
  { id: 8, name: 'Mountain climbers' },
  { id: 9, name: 'Crunches' },
  { id: 10, name: 'High knees' },
];

const StartWorkout = () => {
  const handlePress = (exercise) => {
    // do something when an exercise is pressed, such as navigate to a new screen or update state
    console.log(`Pressed ${exercise.name}`);
  };

  const renderExercise = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose an exercise:</Text>
      <FlatList
        data={exercises}
        renderItem={renderExercise}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#EEEEEE',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
  },
});

export default StartWorkout;
